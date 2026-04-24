'use client';

import { TelegramAppProvider } from '@telegram-apps/sdk-react';
import { ReactNode } from 'react';

export default function TelegramProvider({ children }: { children: ReactNode }) {
  return (
    <TelegramAppProvider>
      {children}
    </TelegramAppProvider>
  );
}
