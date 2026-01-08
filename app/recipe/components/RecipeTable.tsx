import { DataTable } from '@/components/common/DataTable';
import { recipe_columns } from './RecipeColumns';
import { getRecipeList } from '@/api/recipe';

export default async function RecipeTable() {
  const recipe = await getRecipeList({
    ItemGrade: '유물',
    ItemName: '',
    PageNo: 4,
  });

  return <DataTable data={recipe.Items} columns={recipe_columns} />;
}
