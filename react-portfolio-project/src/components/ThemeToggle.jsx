import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const[ isDarkMode, setIsDarkMode ] = useState(false);

  // Check local storage for background theme
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  }

  return ( 
    <button 
      onClick={toggleTheme}
      className="fixed max-sm-hidden hidden md:block top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 focus:outline-hidden"
      aria-label="Toggle Theme"
    >{ 
      isDarkMode ? (
        <Sun className='h-6 w-6 text-yellow-300' />
      ) : (
        <Moon className='h-6 w-6 text-slate-600' />
      )
    }</button>
  )
}