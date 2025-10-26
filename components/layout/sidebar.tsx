import MoblieSidebar from './mobile-sidebar';
import PcSidebar from './pc-sidebar';

export default function Sidebar() {
  return (
    <>
      {/** 모바일에서는 drawer */}
      <MoblieSidebar>
        <button>hi</button>
      </MoblieSidebar>
      {/** pc에서는 sidebar */}
      <PcSidebar>
        <button>hi</button>
      </PcSidebar>
    </>
  );
}
