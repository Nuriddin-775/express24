export interface IProps {
  children: React.ReactNode;
}

export interface Ishop {
  branchId: number;
  cover: string;
  id: number;
  isAvailable: boolean;
  isExternal: boolean;
  isOpen: boolean;
  link: string;
  logo: string;
  name: string;
  reviews: { isLow: boolean; average: number; count: number };
  schedule: { start: string; end: string };
  subCategories: { id: number; name: string }[];
}
