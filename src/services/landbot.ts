/**
 * Landbot SDK integration service
 * Official SDK: https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs
 * Bot Configuration: https://storage.googleapis.com/landbot.online/v3/H-3534285-FW2T1RCPJ5IH5C3U/index.json
 */

export const LANDBOT_CONFIG_URL =
  'https://storage.googleapis.com/landbot.online/v3/H-3534285-FW2T1RCPJ5IH5C3U/index.json';

// Local patched version prevents cross-origin SecurityError in AutoFocus._onMutation
export const LANDBOT_SDK_URL = '/landbot-3.0.0.mjs';
export const LANDBOT_CDN_SDK_URL =
  'https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs';

export interface LandbotInstance {
  destroy?: () => void;
  open?: () => void;
  close?: () => void;
  showProactive?: (message?: string) => void;
  hideProactive?: () => void;
  configLoaded?: Promise<any>;
  container?: HTMLElement | null;
  core?: any;
  [key: string]: any;
}

export interface LandbotNamespace {
  Livechat: new (options: { configUrl: string; [key: string]: any }) => LandbotInstance;
  Fullpage: new (options: { configUrl: string; [key: string]: any }) => LandbotInstance;
  Container: new (options: {
    container: string | HTMLElement;
    configUrl: string;
    [key: string]: any;
  }) => LandbotInstance;
  [key: string]: any;
}

declare global {
  interface Window {
    Landbot?: LandbotNamespace;
    _landbotSdkLoading?: Promise<LandbotNamespace>;
  }
}

/**
 * Loads the Landbot SDK script as a module only once across the application lifecycle.
 * In iframe environments like AI Studio preview, unhandled cross-origin document access in
 * AutoFocus._onMutation is patched to prevent SecurityError exceptions.
 */
export function loadLandbotSDK(): Promise<LandbotNamespace> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Browser window environment is required.'));
  }

  // Already loaded
  if (window.Landbot) {
    return Promise.resolve(window.Landbot);
  }

  // Existing in-flight promise
  if (window._landbotSdkLoading) {
    return window._landbotSdkLoading;
  }

  window._landbotSdkLoading = new Promise<LandbotNamespace>(async (resolve, reject) => {
    const pollForGlobal = (attempts = 0) => {
      if (window.Landbot) {
        resolve(window.Landbot);
      } else if (attempts < 60) {
        setTimeout(() => pollForGlobal(attempts + 1), 50);
      } else {
        window._landbotSdkLoading = undefined;
        reject(
          new Error(
            'The Landbot SDK module executed but window.Landbot was not registered.'
          )
        );
      }
    };

    // Helper to inject script tag
    const injectScript = (src: string): Promise<void> => {
      return new Promise((res, rej) => {
        const script = document.createElement('script');
        script.type = 'module';
        script.src = src;
        script.crossOrigin = 'anonymous';

        script.onload = () => {
          pollForGlobal();
          res();
        };

        script.onerror = (e) => {
          script.remove();
          rej(e);
        };

        document.head.appendChild(script);
      });
    };

    try {
      // 1. First attempt: Load local patched copy from /landbot-3.0.0.mjs
      await injectScript(LANDBOT_SDK_URL);
    } catch {
      // 2. Fallback: Fetch CDN copy, patch cross-origin bug in-memory, load via Blob URL
      try {
        const response = await fetch(LANDBOT_CDN_SDK_URL);
        if (!response.ok) {
          throw new Error(`CDN returned HTTP ${response.status}`);
        }
        let code = await response.text();

        // Patch cross-origin iframe security issue in Landbot's AutoFocus
        code = code.replaceAll(
          'window.top===this.window||window.top.document.activeElement===this.iframe',
          'window.top===this.window||(()=>{try{return window.top.document.activeElement===this.iframe}catch(e){return true}})()'
        );

        // Map dynamic chunk imports to absolute CDN paths
        code = code.replaceAll(
          'import("./chunks/',
          'import("https://cdn.landbot.io/landbot-3/chunks/'
        );

        const blob = new Blob([code], { type: 'application/javascript' });
        const blobUrl = URL.createObjectURL(blob);
        await injectScript(blobUrl);
      } catch (err: any) {
        window._landbotSdkLoading = undefined;
        reject(
          new Error(
            `Failed to load Landbot SDK: ${err?.message || 'Network error'}`
          )
        );
      }
    }
  });

  return window._landbotSdkLoading;
}

/**
 * Checks connectivity to the official Landbot configuration JSON.
 */
export async function checkBotConfiguration(
  url = LANDBOT_CONFIG_URL
): Promise<{ ok: boolean; title?: string; error?: string }> {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: { Accept: 'application/json' },
    });
    if (!res.ok) {
      return {
        ok: false,
        error: `Server responded with HTTP ${res.status}: ${res.statusText}`,
      };
    }
    const data = await res.json();
    const title = data?.title || 'Essentials for AI';
    return { ok: true, title };
  } catch (err: any) {
    return {
      ok: false,
      error:
        err?.message ||
        'Network error while attempting to reach configuration storage.',
    };
  }
}
