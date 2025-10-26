import { useAtom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

const sidebarAtom = atomWithStorage('sidebar', false);

export default function useSidebar() {
  const [isOpen, setIsOpen] = useAtom(sidebarAtom);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return { isOpen, toggleSidebar };
}
