import { Opportunity } from '@/types/opportunity';

export const opportunities: Opportunity[] = [
  {
    id: '1',
    bankId: 'ziraat',
    title: 'Kıdemli Yazılım Geliştirici',
    description: 'Ziraat Bankası bünyesinde çalışacak, modern teknolojilerle uygulama geliştirecek yazılım geliştirici arıyoruz.',
    salary: '25.000 - 35.000 TL',
    location: 'İstanbul',
    requirements: ['5+ yıl deneyim', 'TypeScript bilgisi', 'React/Next.js deneyimi'],
    benefits: ['Özel sağlık sigortası', 'Yemek kartı', 'Uzaktan çalışma imkanı']
  },
  {
    id: '2',
    bankId: 'garanti',
    title: 'Frontend Developer',
    description: 'Garanti BBVA\'da React ve Next.js ile modern web uygulamaları geliştirecek frontend developer arıyoruz.',
    salary: '30.000 - 40.000 TL',
    location: 'İstanbul',
    requirements: ['3+ yıl deneyim', 'React bilgisi', 'Next.js deneyimi'],
    benefits: ['Özel sağlık sigortası', 'Yemek kartı', 'Uzaktan çalışma imkanı']
  },
  {
    id: '3',
    bankId: 'akbank',
    title: 'Backend Developer',
    description: 'Akbank\'ta Node.js ve TypeScript ile mikroservis mimarisi üzerinde çalışacak backend developer arıyoruz.',
    salary: '28.000 - 38.000 TL',
    location: 'İzmir',
    requirements: ['4+ yıl deneyim', 'Node.js bilgisi', 'TypeScript deneyimi'],
    benefits: ['Özel sağlık sigortası', 'Yemek kartı', 'Uzaktan çalışma imkanı']
  },
  {
    id: '4',
    bankId: 'isbank',
    title: 'DevOps Engineer',
    description: 'İş Bankası\'nda AWS ve Kubernetes ile cloud altyapısını yönetecek DevOps mühendisi arıyoruz.',
    salary: '35.000 - 45.000 TL',
    location: 'Ankara',
    requirements: ['5+ yıl deneyim', 'AWS bilgisi', 'Kubernetes deneyimi'],
    benefits: ['Özel sağlık sigortası', 'Yemek kartı', 'Uzaktan çalışma imkanı']
  }
]; 