import { useEffect, useState } from 'react';

export function useTelegramApp() {
  const [isMiniApp, setIsMiniApp] = useState(false);

  useEffect(() => {
    const tg = (window as any).Telegram?.WebApp;
    if (tg) {
      setIsMiniApp(true);
      tg.ready();
      tg.expand();
    }
  }, []);

  return { isMiniApp };
}
