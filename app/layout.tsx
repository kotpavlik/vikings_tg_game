import { Metadata } from 'next'
import '../styles/globals.css'
import { Inter, Murecho } from 'next/font/google'
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'



export const inter = Inter({ subsets: ['cyrillic', 'latin'], style: 'normal' })
export const murecho = Murecho({ subsets: ['cyrillic', 'latin'], style: 'normal' })

export const metadata: Metadata = {
  title: 'Vikings',
  description: 'Main page about telegram game Vikings',

}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en,ru">
      <body className={`${inter.className} `}>
        <div className=''>
          <TheHeader />
          <main>
            {children}
          </main>
          <TheFooter />
        </div>
      </body>

    </html>
  )
}
