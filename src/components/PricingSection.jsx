import React from 'react';

const PricingSection = () => {
    return (
        <div className="py-16 bg-gray-200 px-4">
      <h2 className="text-4xl font-bold text-center mb-3 bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent">
        Choose a Plan Fits to Your Needs
      </h2>
      <p className='text-center font-semibold mb-3 text-gray-500'>The plans will increase your visa processing speed. </p>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Standard Plan */}
        <div className="border rounded-lg shadow-sm bg-white p-6">
          <h3 className="text-lg font-semibold text-gray-800">Standard Plan</h3>
          <p className="mt-4 text-4xl font-bold text-purple-500">20000 Taka</p>
          <p className="text-sm text-gray-500">per service</p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center text-gray-600">
               Guide Book
            </li>
            <li className="flex items-center text-gray-600">
               Immigration Services
            </li>
            <li className="flex items-center text-gray-600">
               Apply Visa Immigration
            </li>
            <li className="flex items-center text-gray-600">
               Coaching & Exam
            </li>
            <li className="flex items-center text-gray-600">
               Official Guarantee
            </li>
          </ul>
          <button className="mt-6 w-full py-2 bg-gradient-to-r from-purple-700 to-blue-500 text-white rounded-lg ">
            Select Plan
          </button>
          
        </div>

        {/* Business Plan */}
        <div className="border rounded-lg shadow-sm bg-blue-900 text-white p-6 relative">
          <span className="absolute top-4 right-4 bg-green-500 text-xs text-white py-1 px-2 rounded">
            Popular
          </span>
          <h3 className="text-lg font-semibold">Business Plan</h3>
          <p className="mt-4 text-4xl font-bold text-purple-500">40000 Taka</p>
          <p className="text-sm">per service</p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center">
               Guide Book
            </li>
            <li className="flex items-center">
               Immigration Services
            </li>
            <li className="flex items-center">
               Apply Visa Immigration
            </li>
            <li className="flex items-center">
               Coaching & Exam
            </li>
            <li className="flex items-center">
               Official Guarantee
            </li>
          </ul>
          <button className="mt-6 w-full py-2 bg-gradient-to-r from-purple-700 to-blue-500 text-white rounded-lg ">
            Select Plan
          </button>
          
        </div>

        {/* Enterprise Plan */}
        <div className="border rounded-lg shadow-sm bg-white p-6">
          <h3 className="text-lg font-semibold text-gray-800">Enterprise Plan</h3>
          <p className="mt-4 text-4xl font-bold text-purple-500">60000 Taka</p>
          <p className="text-sm text-gray-500">per service</p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-center text-gray-600">
               Guide Book
            </li>
            <li className="flex items-center text-gray-600">
               Immigration Services
            </li>
            <li className="flex items-center text-gray-600">
               Apply Visa Immigration
            </li>
            <li className="flex items-center text-gray-600">
               Coaching & Exam
            </li>
            <li className="flex items-center text-gray-600">
               Official Guarantee
            </li>
          </ul>
          <button className="mt-6 w-full py-2 bg-gradient-to-r from-purple-700 to-blue-500 text-white rounded-lg ">
            Select Plan
          </button>
          
        </div>
      </div>
    </div>

    );
};

export default PricingSection;