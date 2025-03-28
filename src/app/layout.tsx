import type { Metadata } from 'next';
import '@/styles/globals.css';
import { ThemeProvider } from '@/components/layout/ThemeProvider';

export const metadata: Metadata = {
  title: 'John Doe | Software Engineer',
  description: 'Personal website and portfolio of John Doe, a Software Engineer with 3 years of experience in web development and software engineering.',
  keywords: ['software engineer', 'web developer', 'portfolio', 'React', 'JavaScript', 'TypeScript'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
} 