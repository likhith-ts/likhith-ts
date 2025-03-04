"use client"

import { useTheme } from "./ThemeProvider"

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
      className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 rounded px-2 py-1"
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="system">System</option>
    </select>
  )
}

