import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Recherche Emploi - Comptabilité & Finance',
  description: 'Trouvez votre prochain poste de responsable en comptabilité et finance',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
