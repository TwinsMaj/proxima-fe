import { DecisionForm, DecisionDetails } from '@/components';

export const LoanCalculator = () => {
  return (
    <div className="flex items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-8">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-full max-w-screen-lg">
        <DecisionForm />
        <DecisionDetails />
      </div>
    </div>
  );
};
