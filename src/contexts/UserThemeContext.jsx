import { createContext, useContext, useEffect, useState } from "react";


const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  });

  useEffect(() => {
    const root = window.document.documentElement
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])


  return (
    <ThemeContext.Provider
      value={{ isDark, setIsDark }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined) throw new Error('useTheme must be used within A ThemeProvider')
  return context
}