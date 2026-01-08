// export default function Waiter() {  
//     return (      
//         <div className="m-5 p-5 bg-white rounded-lg shadow-md">
//         <div className=" grid grid-cols-2 gap-2 justify-items-center "> 
//             <button className="border-2 m-2 p-2 border-solid-black text-white rounded hover:bg-gray-600 col-span-1">attend my table</button>
//             <button className="border-2 m-2 p-2 border-solid-black text-white rounded hover:bg-gray-600 col-span-1">need water</button>
//             <button className="border-2 m-2 p-2 border-solid-black text-white rounded hover:bg-gray-600 col-span-1">pay the bill</button>
//             <button className="border-2 m-2 p-2 border-solid-black text-white rounded hover:bg-gray-600 col-span-1">bring cuttlery</button>
//         </div>    
//         <h1><textarea name="waiter" id="waiter"></textarea></h1>
//             <button>send request</button>
//         </div>     
//     ); 
// }


export default function Waiter() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-xl border border-gray-100">
      
      {/* Header Section */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Need Assistance?</h2>
        <p className="text-gray-500 text-sm">Select an option or type a request below.</p>
      </div>

      {/* Button Grid */}
      <div className="grid grid-cols-2 gap-4">
        <ActionButton label="Attend my table" />
        <ActionButton label="Need water" />
        <ActionButton label="Pay the bill" />
        <ActionButton label="Bring cutlery" />
      </div>

      {/* Textarea Section */}
      <div className="mt-6">
        <label htmlFor="waiter-notes" className="block text-sm font-medium text-gray-700 mb-2">
            Custom Request
        </label>
        <textarea
          name="waiter"
          id="waiter-notes"
          rows="3"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-gray-700 placeholder-gray-400 transition-all"
          placeholder="e.g., Extra napkins please..."
        ></textarea>
      </div>

      {/* Submit Button */}
      <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0">
        Send Request
      </button>
    </div>
  );
}

// A reusable sub-component to keep code clean
function ActionButton({ label, disabled = false }) {
  return (
    <button className="py-4 px-2 bg-gray-50 border border-gray-200 rounded-lg text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors duration-200 shadow-sm">
      {label}
    </button>
  );
}