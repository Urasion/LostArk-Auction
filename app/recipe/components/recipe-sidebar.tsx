import { getRecipeList } from '@/api/recipe';
import RecipeTable from './recipe-table';

export default async function RecipeSidebar() {
  const recipes = await getRecipeList({
    ItemGrade: '유물',
    ItemName: '',
  });
  return (
    <>
      <RecipeTable data={recipes} />
    </>
  );
}
