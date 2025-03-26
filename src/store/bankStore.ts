import { create } from 'zustand';

interface BankStore {
  selectedBanks: number[];
  setSelectedBanks: (banks: number[]) => void;
  addBank: (bankId: number) => void;
  removeBank: (bankId: number) => void;
}

export const useBankStore = create<BankStore>((set) => ({
  selectedBanks: [],
  setSelectedBanks: (banks) => set({ selectedBanks: banks }),
  addBank: (bankId: number) =>
    set((state) => ({
      selectedBanks: [...state.selectedBanks, bankId],
    })),
  removeBank: (bankId: number) =>
    set((state) => ({
      selectedBanks: state.selectedBanks.filter((id) => id !== bankId),
    })),
})); 