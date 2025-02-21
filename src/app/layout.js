import './globals.css'
import ThemeRegistry from './registry'
import NavBar from '../components/NavBar'

export const metadata = {
  title: 'Tips para Alquilar',
  description: 'Checklist para visitar departamentos en alquiler',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ThemeRegistry>
          <NavBar />
          {children}
        </ThemeRegistry>
      </body>
    </html>
  )
}
