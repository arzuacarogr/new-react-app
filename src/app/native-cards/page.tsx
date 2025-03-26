'use client';

import { useRouter } from 'next/navigation';
import { useBankStore } from '@/store/bankStore';
import { data } from '@/api/data';
import { banks } from '@/api/banks';
import Image from 'next/image';

export default function NativeCards() {
  const router = useRouter();
  const { selectedBanks } = useBankStore();

  const filteredCards = data.nativeCards.filter(card => 
    !selectedBanks.includes(card.bankId)
  );

  const handleBack = () => {
    router.push('/list');
  };

  return (
    <main className="container mx-auto p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Diğer Kartlar</h1>
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-black"
          >
            Geri Dön
          </button>
        </div>

        {filteredCards.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Seçtiğiniz bankalar dışında aktif kart bulunmamaktadır.
            </p>
          </div>
        ) : (
          <div className="grid gap-6">
            {filteredCards.map(card => {
              const bank = banks.find(b => b.id === card.bankId);
              return (
                <div key={card.id} className="border rounded-lg p-6 bg-white shadow-sm text-black">
                  <div className="flex items-center gap-4 mb-4">
                    {card.bankLogoPath && (
                       <Image 
                        src={card.bankLogoPath}
                        alt={card.bankName || bank?.name || 'Banka'} 
                        className="h-12 w-auto max-w-30"
                        width={40}
                        height={20}
                      />
                    )}
                    <h2 className="text-[18px] font-semibold">{card.name}</h2>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {card.rate && (
                      <div>
                        <p className="text-gray-600">Faiz Oranı</p>
                        <p className="font-medium">{card.rate}</p>
                      </div>
                    )}
                    {card.maturity && (
                      <div>
                        <p className="text-gray-600">Vade</p>
                        <p className="font-medium">{card.maturity} Ay</p>
                      </div>
                    )}
                    {card.amount && (
                      <div>
                        <p className="text-gray-600">Tutar</p>
                        <p className="font-medium">{card.amount.toLocaleString('tr-TR')} TL</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
} 