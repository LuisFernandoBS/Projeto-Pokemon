import Layout from '../components/LayoutInterno';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Perfil',
  description: 'Projeto Pokemon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Layout>
      {children}
    </Layout> 
  )
}