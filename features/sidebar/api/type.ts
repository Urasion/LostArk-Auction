export interface SubCategory {
  Code: number;
  CodeName: string;
}

export interface Category {
  Subs: SubCategory[];
  Code: number;
  CodeName: string;
}

export interface MarketOptions {
  Categories: Category[];
  ItemGrades: string[];
  ItemTiers: number[]; // JSON이 잘렸지만, 보이는 패턴( 2, )으로 number[]로 추정
}
