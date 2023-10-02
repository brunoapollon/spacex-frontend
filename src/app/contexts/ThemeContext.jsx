import { createContext, useCallback, useMemo, useState } from "react";


class ThemeDefinition {
  theme = ""
  handleToggleTheme = () => { }
}

export const ThemeContext = createContext(new ThemeDefinition);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light")

  const handleToggleTheme = useCallback(() => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")
  }, [])

  const value = useMemo(() => new class extends ThemeDefinition {
    theme = theme
    handleToggleTheme = handleToggleTheme
  }, [theme])

  return <ThemeContext.Provider value={value}>
    {children}
  </ThemeContext.Provider>
}
