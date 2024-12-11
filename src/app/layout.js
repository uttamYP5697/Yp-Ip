import { AuthProvider } from './utils/auth';

export const metadata = {
  title: 'My App',
  description: 'Sample application using Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body suppressHydrationWarning>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
