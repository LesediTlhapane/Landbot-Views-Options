import React, { createContext, useContext, useState, useRef, useCallback } from 'react';
import {
  LANDBOT_CONFIG_URL,
  loadLandbotSDK,
  LandbotInstance,
} from '../services/landbot';

export type ChatbotLoadStatus = 'idle' | 'loading' | 'loaded' | 'error';

interface WebchatContextValue {
  status: ChatbotLoadStatus;
  errorMessage: string | null;
  isOpen: boolean;
  isInitialized: boolean;
  initWebchat: (autoOpen?: boolean) => Promise<boolean>;
  openWebchat: () => Promise<void>;
  closeWebchat: () => void;
  destroyWebchat: () => void;
  setWebchatVisibility: (visible: boolean) => void;
}

const WebchatContext = createContext<WebchatContextValue | null>(null);

export const WebchatProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [status, setStatus] = useState<ChatbotLoadStatus>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const instanceRef = useRef<LandbotInstance | null>(null);
  const initializingRef = useRef(false);

  const initWebchat = useCallback(
    async (autoOpen = false): Promise<boolean> => {
      // If already initialized
      if (instanceRef.current) {
        if (autoOpen && typeof instanceRef.current.open === 'function') {
          instanceRef.current.open();
          setIsOpen(true);
        }
        return true;
      }

      if (initializingRef.current) {
        return false;
      }

      initializingRef.current = true;
      setStatus('loading');
      setErrorMessage(null);

      try {
        const Landbot = await loadLandbotSDK();
        if (!Landbot.Livechat) {
          throw new Error('Landbot.Livechat class is not available in the SDK module.');
        }

        const instance = new Landbot.Livechat({
          configUrl: LANDBOT_CONFIG_URL,
        });

        // Await remote config load if supported
        if (instance.configLoaded) {
          await instance.configLoaded;
        }

        instanceRef.current = instance;
        setStatus('loaded');
        initializingRef.current = false;

        if (autoOpen && typeof instance.open === 'function') {
          // Slight delay to ensure DOM renderer is attached
          setTimeout(() => {
            instance.open?.();
            setIsOpen(true);
          }, 150);
        }

        return true;
      } catch (err: any) {
        console.error('Failed to initialize Landbot Livechat:', err);
        initializingRef.current = false;
        setStatus('error');
        setErrorMessage(
          err?.message || 'Failed to load Landbot Livechat. Please check connection and retry.'
        );
        return false;
      }
    },
    []
  );

  const openWebchat = useCallback(async () => {
    if (!instanceRef.current) {
      await initWebchat(true);
    } else {
      instanceRef.current.open?.();
      setIsOpen(true);
    }
  }, [initWebchat]);

  const closeWebchat = useCallback(() => {
    if (instanceRef.current) {
      instanceRef.current.close?.();
      setIsOpen(false);
    }
  }, []);

  const destroyWebchat = useCallback(() => {
    if (instanceRef.current) {
      try {
        instanceRef.current.destroy?.();
      } catch (e) {
        console.warn('Error while destroying Landbot Livechat instance:', e);
      }
      instanceRef.current = null;
    }
    setStatus('idle');
    setErrorMessage(null);
    setIsOpen(false);
    initializingRef.current = false;
  }, []);

  const setWebchatVisibility = useCallback((visible: boolean) => {
    if (instanceRef.current?.container) {
      instanceRef.current.container.style.display = visible ? '' : 'none';
    } else {
      // Find landbot livechat containers in body if reference isn't direct
      const livechatContainers = document.querySelectorAll(
        '.LandbotLivechat, [class*="LivechatLauncher"], [class*="LandbotLivechat"]'
      );
      livechatContainers.forEach((el) => {
        (el as HTMLElement).style.display = visible ? '' : 'none';
      });
    }
  }, []);

  return (
    <WebchatContext.Provider
      value={{
        status,
        errorMessage,
        isOpen,
        isInitialized: status === 'loaded',
        initWebchat,
        openWebchat,
        closeWebchat,
        destroyWebchat,
        setWebchatVisibility,
      }}
    >
      {children}
    </WebchatContext.Provider>
  );
};

export function useWebchat(): WebchatContextValue {
  const context = useContext(WebchatContext);
  if (!context) {
    throw new Error('useWebchat must be used within a WebchatProvider');
  }
  return context;
}
