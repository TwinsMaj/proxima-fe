export const DecisionForm = () => {
  return (
    <div className="lg:col-span-2">
      <h2 className="text-sm font-medium">Loan Data</h2>
      <div className="bg-white rounded mt-4 shadow-lg">
        <div className="flex items-center px-8 py-5">
          <h3 className="text-sm font-semibold">
            Please enter customer information
          </h3>
        </div>
        <div className="border-t">
          <div className="flex flex-col gap-4 px-8 pb-8">
            <div className="col-span-2">
              <label className="text-xs font-semibold">Customer ID code</label>
              <input
                className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                type="text"
                placeholder="49002xxxxx"
              />
            </div>
            <div className="col-span-2">
              <label className="text-xs font-semibold">Loan Amount</label>
              <input
                className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                type="text"
                placeholder="3000"
              />
            </div>
            <div className="col-span-2">
              <label className="text-xs font-semibold">Loan Duration</label>
              <input
                className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm"
                type="text"
                placeholder="24"
              />
            </div>

            <button className="flex items-center justify-center bg-blue-600 text-sm font-medium w-full h-10 rounded text-blue-50 hover:bg-blue-700">
              Get Decision
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
