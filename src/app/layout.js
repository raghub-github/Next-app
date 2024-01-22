import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import { Providers } from './redux/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ecomapp',
  description: 'get your product now',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  )
}