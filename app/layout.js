import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/providers/theme-provider';
import AppLayout from '@/components/layout/AppLayout';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dev Canvas',
  description: 'Find the resource that you need',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="devCanvasTheme"
        >
          <AppLayout>
            {children}
          </AppLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}
