import GemLink from '../components/gem-link';
import RecipeLink from '../components/recipe-link';
import UpgradeMaterialsLink from '../components/upgrade-materials-link';
import MoblieSidebar from './mobile-sidebar';

import PcSidebar from './pc-sidebar';
import { cookies } from 'next/headers';
import BattleItemLink from '../components/battle-item-link';

export default async function Sidebar() {
  const cookieStore = await cookies();
  const pcDefaultOpen = cookieStore.get('pc-sidebar')?.value === 'true';

  return (
    <>
      {/** pc에서는 sidebar */}
      <PcSidebar defaultOpen={pcDefaultOpen}>
        <RecipeLink />
        <BattleItemLink />
        <UpgradeMaterialsLink />
        <GemLink />
      </PcSidebar>
    </>
  );
}
