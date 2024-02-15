import type { Metadata } from 'next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global/fonts.css';
import './styles/global/globals.css';
import Providers from "./components/Providers";

export const metadata: Metadata = {
  title: 'Projeto Pokemon',
  description: 'Projeto Pokemon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className='overflow-hidden'>
          <Providers>
              {children}
          </Providers>          
        </body>
    </html>
  )
}
