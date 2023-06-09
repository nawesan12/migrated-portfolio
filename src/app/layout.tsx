import './globals.css'
import LenisController from '@/components/LenisController'

export const metadata = {
  title: 'Nahuel Santillan | Developer',
  description: 'Nahuel Santillan is a fullstack web developer based in Argentina.',
  seobility: '197591bce01f526c8aa24299063d3f92'
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
          Currently building :P
        </LenisController>
      </body>
    </html>
  )
}
