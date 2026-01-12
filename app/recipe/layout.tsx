import { ReactNode } from 'react';
import RecipeTable from './components/RecipeTable';
import { getRecipeList } from '@/api/recipe';

type Props = {
  children: ReactNode;
};
export default async function RecipeLayout({ children }: Props) {
  const recipe = await getRecipeList({
    ItemGrade: '유물',
    ItemName: '',
    PageNo: 4,
  });
  return (
    <div className="flex grow gap-x-4">
      {children}
      <div className="flex shrink-0">
        <RecipeTable data={recipe.Items} />
      </div>
    </div>
  );
}
