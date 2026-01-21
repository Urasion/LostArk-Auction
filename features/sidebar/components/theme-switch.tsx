'use client';
import { Switch } from '@/components/ui/switch';
import useToggle from '@/hooks/useToggle';

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useToggle();
  return (
    <div className="w-full flex justify-start items-center text-xl xl:text-sm font-medium xl:font-medium gap-x-2 px-4 py-4 xl:py-2 border-y xl:border-0">
      <p className="grow text-base"> 다크모드</p>
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={() => {
          toggleTheme();
        }}
      />
    </div>
  );
}
