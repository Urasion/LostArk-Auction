import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const themeAtom = atomWithStorage('theme', 'light');
export default function useToggle() {
  const [theme, setTheme] = useAtom(themeAtom);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { toggleTheme };
}
