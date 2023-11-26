import { number, object, string } from 'yup';

export const decisionSchema = object().shape({
  id: string().required(''),
  loanAmount: number().required().max(10000).min(2000),
  period: number().required().max(60),
});

export const decisionFormDefaults: {
  [key: string]: string | undefined | number;
} = {
  id: '',
  loanAmount: '',
  period: '',
};
