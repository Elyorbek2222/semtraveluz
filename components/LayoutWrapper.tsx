'use client';

import { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import BottomNav from './BottomNav';
import AiChat from './AiChat';
import TourvisorInit from './tourvisor/TourvisorInit';

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const [isMiniApp, setIsMiniApp] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const tg = (window as any).Telegram?.WebApp;
    if (tg) {
      setIsMiniApp(true);
      tg.ready?.();
      tg.expand?.();
    }
  }, []);

  if (!mounted) return null;

  return (
    <>
      {!isMiniApp && <Navbar />}
      <main className="pb-16 md:pb-0">{children}</main>
      {!isMiniApp && <Footer />}
      {!isMiniApp && <BottomNav />}
      {!isMiniApp && <AiChat />}
      {!isMiniApp && (
        <div
          className="tv-free-button tv-moduleid-9990312"
          style={{ position: "fixed", bottom: "20px", left: "20px", zIndex: 9999 }}
        />
      )}
      <TourvisorInit />
    </>
  );
}
