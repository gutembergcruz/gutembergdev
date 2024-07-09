import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300','400','700','900']
})

export const metadata = {
  title: 'Gutemberg Cruz',
  description: 'Olá, eu sou o Gutemberg Cruz. Desenvolvedor Web FullStack.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
