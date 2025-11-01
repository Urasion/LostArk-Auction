import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { useLayoutEffect } from 'react';

const themeAtom = atomWithStorage('theme', 'light');
export default function useToggle() {
  const [theme, setTheme] = useAtom(themeAtom);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };
  useLayoutEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return { theme, toggleTheme };
}
