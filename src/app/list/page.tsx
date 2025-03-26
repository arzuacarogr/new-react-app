'use client';

import { useRouter } from 'next/navigation';
import { useBankStore } from '@/store/bankStore';
import { banks } from '@/api/banks';
import { data } from '@/api/data';
import Image from 'next/image';

export default function BankList() {
  const router = useRouter();
  const { selectedBanks, addBank, removeBank } = useBankStore();

  // NativeCard'lardan benzersiz banka ID'lerini al
  const uniqueBankIds = [...new Set(data.nativeCards.map(card => card.bankId))];
  
  // Sadece banks.ts'de olan bankaları filtrele
  const availableBanks = uniqueBankIds
    .map(bankId => banks.find(bank => bank.id === bankId))
    .filter((bank): bank is typeof banks[0] => bank !== undefined);

  const handleBankSelect = (bankId: number) => {
    if (selectedBanks.includes(bankId)) {
      removeBank(bankId);
    } else {
      addBank(bankId);
    }
  };

  const handleNativeCards = () => {
    if (selectedBanks.length > 0) {
      router.push('/native-cards');
    }
  };

  return (
    <main className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Banka Seçimi</h1>
      <div className="max-w-2xl mx-auto">
        <p className="text-gray-600 mb-8 text-center">
          Lütfen çalıştığınız bankaları seçin
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {availableBanks.map(bank => (
            <button
              key={bank.id}
              onClick={() => handleBankSelect(bank.id)}
              className={`flex justify-center flex-col p-4 border rounded-lg transition-colors ${
                selectedBanks.includes(bank.id)
                  ? 'bg-green-500 text-white border-green-600'
                  : 'bg-white hover:bg-gray-50 border-gray-200 text-black'
              }`}
            >
              <Image 
                  src={bank?.logoPath}
                  alt={bank?.name || 'Banka'} 
                  className="h-12 w-auto max-h-8 mb-2.5"
                  width={40}
                  height={20}
                />
              {bank.name}
            </button>
          ))}
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={handleNativeCards}
            disabled={selectedBanks.length === 0}
            className={`px-8 py-3 rounded-lg font-medium transition-colors ${
              selectedBanks.length > 0
                ? 'bg-green-500 text-white hover:bg-green-600'
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            Fırsatları Göster
          </button>
        </div>
      </div>
    </main>
  );
} 