import { getRecipeList } from '@/services/recipe';
import RecipeTable from './recipe-table';
import DataTableToolbar from '@/features/data-table/layout/data-table-toolbar';
import FavoriteButton from '@/features/favorite/favorite-button';

export default async function RecipeSidebar() {
  const recipes = await getRecipeList({
    ItemGrade: '유물',
    ItemName: '',
  });
  return (
    <>
      <DataTableToolbar>
        <FavoriteButton />
      </DataTableToolbar>
      <RecipeTable data={recipes} />
    </>
  );
}
