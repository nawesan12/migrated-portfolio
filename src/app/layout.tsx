import './globals.css'
import LenisController from '@/components/LenisController'

export const metadata = {
  title: 'Nahuel Santillan',
  description: 'Nahuel Santillan is a fullstack web developer based in Argentina.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LenisController>
          {children}
        </LenisController>
      </body>
    </html>
  )
}
