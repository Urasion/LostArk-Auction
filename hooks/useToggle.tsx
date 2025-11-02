'use client';

import { atom, useAtom } from 'jotai';
import { useLayoutEffect } from 'react';
import Cookies from 'js-cookie';

const themeAtom = atom(Cookies.get('theme') ?? 'light');

export default function useToggle() {
  const [theme, setTheme] = useAtom(themeAtom);
  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      Cookies.set('theme', newTheme);
      return newTheme;
    });
  };
  useLayoutEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return { theme, toggleTheme };
}
