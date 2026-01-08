import { ReactNode } from 'react';
import RecipeTable from './components/RecipeTable';

type Props = {
  children: ReactNode;
};
export default async function RecipeLayout({ children }: Props) {
  return (
    <div className="flex grow">
      {children}
      <div className="flex shrink-0">
        <RecipeTable />
      </div>
    </div>
  );
}
