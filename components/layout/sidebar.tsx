import MoblieSidebar from './mobile-sidebar';
import PcSidebar from './pc-sidebar';
import ThemeSwitch from '@/features/sidebar/theme-switch';
import { cookies } from 'next/headers';

export default async function Sidebar() {
  const cookieStore = await cookies();
  const pcDefaultOpen = cookieStore.get('pc-sidebar')?.value === 'true';
  return (
    <>
      {/** 모바일에서는 drawer */}
      <MoblieSidebar
        Footer={
          <div className="flex flex-col">
            <ThemeSwitch />
          </div>
        }
      >
        <></>
      </MoblieSidebar>
      {/** pc에서는 sidebar */}
      <PcSidebar defaultOpen={pcDefaultOpen}>
        <></>
      </PcSidebar>
    </>
  );
}
