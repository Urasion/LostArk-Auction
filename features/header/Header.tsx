import Link from 'next/link';
import MoblieSidebar from '../sidebar/layout/mobile-sidebar';
import RecipeLink from '../sidebar/components/recipe-link';
import UpgradeMaterialsLink from '../sidebar/components/upgrade-materials-link';
import GemLink from '../sidebar/components/gem-link';

export default function Header() {
  return (
    <div className="w-full h-12 flex items-center xl:hidden text-2xl px-4  relative">
      <Link href="/" className="text-2xl">
        로아 시세
      </Link>
      <MoblieSidebar>
        <RecipeLink isMobile={true} />
        <UpgradeMaterialsLink isMobile={true} />
        <GemLink isMobile={true} />
      </MoblieSidebar>
    </div>
  );
}
