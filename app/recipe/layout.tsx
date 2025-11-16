import { DataTableDemo } from '@/features/main/auction-table';
import { ReactNode } from 'react';
import getRecipeList from './api/fetch';

type Props = {
  children: ReactNode;
};
export default async function RecipeLayout({ children }: Props) {
  const recipe = await getRecipeList({
    ItemGrade: '유물',
    ItemName: '',
    PageNo: 0,
  });
  console.log(recipe);
  return (
    <div className="flex grow">
      {children}
      <div className="flex px-2 shrink-0">
        <DataTableDemo />
      </div>
    </div>
  );
}
