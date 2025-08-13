import { useState, useEffect } from "react";

export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("dark-mode") === "true" ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches &&
       localStorage.getItem("dark-mode") === null);
  });

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
    localStorage.setItem("dark-mode", isDark);
  }, [isDark]);

  const toggle = () => setIsDark(prev => !prev);

  return { isDark, toggle };
}
