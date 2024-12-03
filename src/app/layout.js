import { AuthProvider } from './utils/auth';

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
        <head />
        <body>{children}</body>
      </html>
    </AuthProvider>
  );
}
