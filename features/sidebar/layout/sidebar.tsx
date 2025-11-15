import RecipeLink from '../components/recipe-link';
import { getMarketOptions } from '../service/fetchers';
import MoblieSidebar from './mobile-sidebar';
import PcSidebar from './pc-sidebar';
import { cookies } from 'next/headers';

export default async function Sidebar() {
  const cookieStore = await cookies();
  const pcDefaultOpen = cookieStore.get('pc-sidebar')?.value === 'true';
  const option = await getMarketOptions();

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
