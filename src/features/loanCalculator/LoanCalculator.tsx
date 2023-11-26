import { DecisionForm, DecisionDetails } from '@/components';
import { useState } from 'react';
import { DecisionFormData } from './@types';
import { useDecisionSystem } from './hooks/useDecisionFormHandler/useDecisionSystems';

export const LoanCalculator = () => {
  const apiUrl = `${process.env.LOAN_API_SERVER_URL}/api/v1/loan-request`;

  const [isDecisionFormDataReady, setIsDecisionFormDataReady] = useState(false);
  const [decisionFormData, setDecisionFormData] = useState<DecisionFormData>({
    loanAmount: 0,
    period: 0,
    id: '',
  });

  const { data, error } = useDecisionSystem(
    apiUrl,
    decisionFormData,
    isDecisionFormDataReady,
  );
  console.log(error);
  return (
    <div className="flex items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-8">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-full max-w-screen-lg">
        <DecisionForm
          onSubmit={setDecisionFormData}
          onDataReady={setIsDecisionFormDataReady}
        />
        <DecisionDetails decision={data} />
      </div>
    </div>
  );
};
