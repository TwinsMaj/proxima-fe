export type DecisionFormData = {
  id: string;
  loanAmount: number;
  period: number;
};

export type DecisionResponse = {
  id: string;
  period: number;
  loanAmount: number;
  approvedPeriod: number;
  approvedLoanAmount: string;
  decision: string;
};
