import React from 'react';

const Facilities = () => {
    return (
        <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-3 bg-gradient-to-r from-purple-700 to-blue-500 bg-clip-text text-transparent p-3">
        Facilities That We Provide
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Facility 1 */}
          <div className="p-6 bg-white border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Personalized Consultation
            </h3>
            <p className="text-gray-600">
              Get expert advice to assess your eligibility and choose the right visa type.
            </p>
          </div>

          {/* Facility 2 */}
          <div className="p-6 bg-white border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Document Assistance
            </h3>
            <p className="text-gray-600">
              Assistance in preparing, organizing, and ensuring all documents comply with requirements.
            </p>
          </div>

          {/* Facility 3 */}
          <div className="p-6 bg-white border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Application Preparation
            </h3>
            <p className="text-gray-600">
              Expert help in completing and submitting error-free visa applications.
            </p>
          </div>

          {/* Facility 4 */}
          <div className="p-6 bg-white border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Faster Processing
            </h3>
            <p className="text-gray-600">
              Priority processing options for quicker visa approvals, where available.
            </p>
          </div>

          {/* Facility 5 */}
          <div className="p-6 bg-white border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Interview Coaching
            </h3>
            <p className="text-gray-600">
              Get prepared with mock interviews, tips, and guidance for visa interviews.
            </p>
          </div>

          {/* Facility 6 */}
          <div className="p-6 bg-white border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Legal and Compliance Assistance
            </h3>
            <p className="text-gray-600">
              Ensure your application meets all legal and regulatory requirements.
            </p>
          </div>

          {/* Facility 7 */}
          <div className="p-6 bg-white border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Visa Status Updates
            </h3>
            <p className="text-gray-600">
              Stay informed with real-time updates on your application status.
            </p>
          </div>

          {/* Facility 8 */}
          <div className="p-6 bg-white border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Post-Visa Services
            </h3>
            <p className="text-gray-600">
              Assistance with extensions, renewals, and settlement planning after visa approval.
            </p>
          </div>

          {/* Facility 9 */}
          <div className="p-6 bg-white border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Support for Rejections or Appeals
            </h3>
            <p className="text-gray-600">
              Expert help in analyzing visa rejections and filing successful appeals or reapplications.
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Facilities;