import RecipeLink from '@/features/sidebar/recipe-link';
import MoblieSidebar from './mobile-sidebar';
import PcSidebar from './pc-sidebar';
import { cookies } from 'next/headers';

export default async function Sidebar() {
  const cookieStore = await cookies();
  const pcDefaultOpen = cookieStore.get('pc-sidebar')?.value === 'true';
  return (
    <>
      {/** 모바일에서는 drawer */}
      <MoblieSidebar>
        <RecipeLink isMobile={true} />
      </MoblieSidebar>

      {/** pc에서는 sidebar */}
      <PcSidebar defaultOpen={pcDefaultOpen}>
        <RecipeLink />
      </PcSidebar>
    </>
  );
}
