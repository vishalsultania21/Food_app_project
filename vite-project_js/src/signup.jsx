import {  use, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SignUp() 
{
  const [phoneNumber, setPhoneNumber] = useState("");
  const refotpPage = useNavigate(null);
  const ref = useRef(null);
  const handleSubmit = (e) => 
    {
    e.preventDefault();
    console.log("Signing up with:", phoneNumber);// Placeholder for actual sign-up logic
    if(phoneNumber.length ==10 && !isNaN(phoneNumber)){ 
        refotpPage(`/otp?phone=${phoneNumber}`);
    }// Navigate to OTP page with phone number as query param
    else{
        
    }
  };

  return (
    // OPTIONAL: Outer wrapper to center the card on the screen
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      
      {/* CARD CONTAINER: Matches Waiter component style */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl border border-gray-100 p-8">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Sign Up</h2>
          <p className="text-gray-500 text-sm mt-1">
            Please enter your details to log in.
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label 
              htmlFor="phone" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number
            </label>
            <input
             type="tel" 
             value={"+91"}
             readOnly
                className="w-16 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400 transition-all mr-2"
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="e.g. 98765 43210"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400 transition-all"
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95"
          >
            Send OTP
          </button>

        </form>

      </div>
    </div>
  );
}