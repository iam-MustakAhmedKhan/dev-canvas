import { Inter } from 'next/font/google'
import './globals.css'
import ThemeProvider from '@/components/providers/theme-provider';
import NextTopLoader from 'nextjs-toploader';
import Footer from '@/components/Footer';
import { Header } from '@/components/Header';



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
          <NextTopLoader />
          <div className='container mx-auto'>
            <Header/>
            {children}
          </div>
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}
