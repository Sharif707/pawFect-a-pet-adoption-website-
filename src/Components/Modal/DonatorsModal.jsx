 const DonatorsModal = ({ donation, onClose }) => {
    if (!donation) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 max-w-md w-full max-h-[80vh] overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">
              Donators for {`${donation.firstName}'s Pet`}
            </h3>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-xl"
            >
              ×
            </button>
          </div>
          {donation.donators?.length > 0 ? (
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Name</th>
                  <th className="text-right p-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {donation.donators.map((donator, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{donator.name}</td>
                    <td className="p-2 text-right">
                      ${donator.amount.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p className="text-center py-4 text-gray-500">No donators yet</p>
          )}
        </div>
      </div>
    );
  };

  export default DonatorsModal