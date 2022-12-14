import { unstable_getServerSession } from 'next-auth';
import '../styles/globals.css';
import Header from './Header'


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html>
      <head />
      
      <body>
        {/* @ts-expect-error Server Component */}
        <Header />
        {children}
      </body>
    </html>
  )
}
