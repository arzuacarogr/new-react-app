export interface Category {
  id: number;
  name: string;
  code: string;
}

export interface Bank {
  id: number;
  logoPath: string;
  smallLogoPath: string | null;
  name: string;
  code: string;
  financeType: number;
  notes: string | null;
  displayOrder: number;
  soeUrl: string | null;
  bankType: number | null;
  categories: Category[];
} 