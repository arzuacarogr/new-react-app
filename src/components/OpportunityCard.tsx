import { Opportunity } from '@/types/opportunity';

interface OpportunityCardProps {
  opportunity: Opportunity;
}

export default function OpportunityCard({ opportunity }: OpportunityCardProps) {
  return (
    <div className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-xl font-semibold mb-2">{opportunity.title}</h2>
      <p className="text-gray-600 mb-4">{opportunity.description}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>{opportunity.location}</span>
        <span>{opportunity.salary}</span>
      </div>
    </div>
  );
} 