import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { DecisionFormData } from '../../@types';
import { decisionFormDefaults, decisionSchema } from './formValidation';

export const useDecisionFormHandler = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DecisionFormData>({
    mode: 'onSubmit',
    resolver: yupResolver(decisionSchema),
    defaultValues: decisionFormDefaults,
  });

  return {
    register,
    handleSubmit,
    errors,
  };
};
