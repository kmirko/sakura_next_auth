'use client';

import { SessionProvider } from 'next-auth/react';
import AppBar from './AppBar';

export default function RootLayout({ children, session }) {
  return (
    <html>
      <head>
        <title>NextAuth</title>
      </head>
      <body>
        <SessionProvider session={session}>
          <AppBar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
