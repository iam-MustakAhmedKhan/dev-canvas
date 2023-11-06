import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/providers/theme-provider';

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
            {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
