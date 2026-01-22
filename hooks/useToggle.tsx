'use client';

import { atom, useAtom } from 'jotai';
import { useEffect, useLayoutEffect } from 'react';
import Cookies from 'js-cookie';

const themeAtom = atom<'light' | 'dark'>('dark');

export default function useToggle() {
  const [theme, setTheme] = useAtom(themeAtom);

  useEffect(() => {
    const cookieTheme = Cookies.get('theme');
    if (cookieTheme === 'dark' || cookieTheme === 'light') {
      setTheme(cookieTheme);
    }
  }, [theme, setTheme]);

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
