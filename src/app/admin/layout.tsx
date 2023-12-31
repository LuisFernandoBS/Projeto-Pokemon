import type { Metadata } from 'next'
import Layout from '../components/LayoutInterno';

export const metadata: Metadata = {
  title: 'Admin',
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