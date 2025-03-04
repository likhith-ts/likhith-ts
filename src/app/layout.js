import "./globals.css"
import { Inter } from "next/font/google"
import Link from "next/link"
import { ThemeProvider } from "./components/ThemeProvider"
import ThemeSwitcher from "./components/ThemeSwitcher"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ML Developer Portfolio",
  description: "Showcasing machine learning projects, publications, and blogs",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <ThemeProvider>
          <header className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
            <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
              <ul className="flex space-x-4">
                <li>
                  <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-gray-600 dark:hover:text-gray-300">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/publications" className="hover:text-gray-600 dark:hover:text-gray-300">
                    Publications
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-gray-600 dark:hover:text-gray-300">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-600 dark:hover:text-gray-300">
                    Contact
                  </Link>
                </li>
              </ul>
              <ThemeSwitcher />
            </nav>
          </header>
          <main className="container mx-auto px-6 py-8">{children}</main>
          <footer className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white py-4">
            <div className="container mx-auto px-6 text-center">
              © {new Date().getFullYear()} ML Developer Portfolio. All rights reserved.
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}

