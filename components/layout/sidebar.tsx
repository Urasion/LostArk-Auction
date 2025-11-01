import SettingButton from '@/features/sidebar/setting-button';
import MoblieSidebar from './mobile-sidebar';
import PcSidebar from './pc-sidebar';
import ThemeSwitch from '@/features/sidebar/theme-switch';

export default function Sidebar() {
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
      <PcSidebar
        Footer={
          <>
            <SettingButton />
          </>
        }
      >
        <></>
      </PcSidebar>
    </>
  );
}
