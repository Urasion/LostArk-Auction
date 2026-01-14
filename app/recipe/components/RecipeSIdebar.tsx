import { getRecipeList } from '@/api/recipe';
import RecipeTable from './RecipeTable';

export default async function RecipeSidebar() {
  const recipes = await getRecipeList({
    ItemGrade: '유물',
    ItemName: '',
  });
  return (
    <div className="flex h-full shrink-0">
      <RecipeTable data={recipes} />
    </div>
  );
}
