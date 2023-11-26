export const DecisionDetails = () => {
  return (
    <div>
      <h2 className="text-sm font-medium">Decision</h2>
      <div className="bg-white rounded mt-4 shadow-lg py-6">
        <div className="px-8">
          <div className="flex items-end justify-between">
            <span className="text-sm font-semibold">Decision Details</span>
          </div>
        </div>
        <div className="px-8 mt-4 border-t pt-4">
          <div className="flex items-end justify-between">
            <span className="font-semibold">Today you pay (AUD)</span>
            <span className="font-semibold">$0</span>
          </div>
        </div>
      </div>
    </div>
  );
};
