import { apiClient } from '@/lib/apiClient';
import { RecipeRequest } from '@/store/recipe';

export default function getRecipeList(request: RecipeRequest) {
  return apiClient('/markets/items', {
    method: 'POST',
    body: JSON.stringify({
      ...request,
      Sort: 'GRADE',
      CharacterClass: '',
      ItemTier: null,
      CategoryCode: 40000,
      SortCondition: 'ASC',
    }),
  });
}
