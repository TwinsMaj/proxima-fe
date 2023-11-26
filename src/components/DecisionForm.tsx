import { useDecisionFormHandler } from '@/features/loanCalculator/hooks/useDecisionFormHandler/useDecisionFormHandler';
import classNames from 'classnames';

export const DecisionForm = () => {
  const { handleSubmit, register, errors } = useDecisionFormHandler();
  return (
    <form
      className="lg:col-span-2"
      onSubmit={handleSubmit((data) => console.log(data))}
    >
      <div className="">
        <h2 className="text-sm font-medium">Loan Data</h2>
        <div className="bg-white rounded mt-4 shadow-lg">
          <div className="flex items-center px-8 py-5">
            <h3 className="text-sm font-semibold">
              Please enter customer information
            </h3>
          </div>
          <div className="border-t">
            <div className="flex flex-col gap-4 px-8 pb-8">
              <div className="relative col-span-2">
                <label className="text-xs font-semibold">
                  Customer ID code
                </label>
                <input
                  className={classNames({
                    'flex items-center focus:outline-none h-10 border mt-1 rounded px-4 w-full text-sm':
                      true,
                    ['border-rose-500']: !!errors.id,
                  })}
                  type="text"
                  placeholder="49002xxxxx"
                  {...register('id')}
                />
                {!!errors.id && (
                  <span className="absolute text-xs text-red-500 right-0 top-2">
                    Please enter valid customer id
                  </span>
                )}
              </div>
              <div className="col-span-2">
                <label className="text-xs font-semibold">Loan Amount</label>
                <input
                  className={classNames({
                    'flex items-center focus:outline-none h-10 border mt-1 rounded px-4 w-full text-sm':
                      true,
                    ['border-rose-500']: !!errors.id,
                  })}
                  type="text"
                  placeholder="3000"
                  {...register('loanAmount')}
                />
                {!!errors.id && (
                  <span className="absolute text-xs text-red-500 right-0 top-2">
                    Please enter valid loan amount
                  </span>
                )}
              </div>
              <div className="col-span-2">
                <label className="text-xs font-semibold">Loan Duration</label>
                <input
                  className={classNames({
                    'flex items-center focus:outline-none h-10 border mt-1 rounded px-4 w-full text-sm':
                      true,
                    ['border-rose-500']: !!errors.id,
                  })}
                  type="text"
                  placeholder="24"
                  {...register('period')}
                />
                {!!errors.id && (
                  <span className="absolute text-xs text-red-500 right-0 top-2">
                    Please enter valid duration
                  </span>
                )}
              </div>

              <button className="flex items-center justify-center bg-blue-600 text-sm font-medium w-full h-10 rounded text-blue-50 hover:bg-blue-700">
                Get Decision
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
