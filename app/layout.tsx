import type { ReactNode } from 'react';

export const metadata = {
  title: 'Next14 App',
  description: 'Simple Next.js 14 app with API routes.',
};

/**
 * Root layout applied to all pages. Sets up basic HTML structure and
 * provides minimal global styling without relying on external UI libraries.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          minHeight: '100vh',
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
          backgroundColor: '#f9f9f9',
          color: '#222',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children}
      </body>
    </html>
  );
}