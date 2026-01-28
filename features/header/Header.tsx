import Link from 'next/link';
import MoblieSidebar from '../sidebar/layout/mobile-sidebar';
import RecipeLink from '../sidebar/components/recipe-link';
import UpgradeMaterialsLink from '../sidebar/components/upgrade-materials-link';
import GemLink from '../sidebar/components/gem-link';
import BattleItemLink from '../sidebar/components/battle-item-link';
import ResourceLink from '../sidebar/components/resource-link';
import FavoriteFloatingButton from '../favorite/favorite-floating-button';

export default function Header() {
  return (
    <div className="w-full h-12 flex justify-between items-center xl:hidden text-2xl px-4  relative">
      <Link href="/" className="text-2xl">
        로아시세
      </Link>
      <div className="flex items-center gap-x-4">
        <FavoriteFloatingButton />
        <MoblieSidebar>
          <RecipeLink isMobile={true} />
          <BattleItemLink isMobile={true} />
          <UpgradeMaterialsLink isMobile={true} />
          <GemLink isMobile={true} />
          <ResourceLink isMobile={true} />
        </MoblieSidebar>
      </div>
    </div>
  );
}
