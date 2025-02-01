import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft, FaEnvelope, FaCheckCircle } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

const IntegrationInstructions = ({ clientName }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { website } = location.state || {};

  const handleEmailInstructions = () => {
    toast.success("Integration instructions emailed to the developer!");
  };

  const handleTestIntegration = () => {
    const success = true;
    if (success) {
      navigate("/success");
    } else {
      toast.error("Integration test failed.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-6">
      <Toaster />
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl bg-opacity-90 backdrop-filter backdrop-blur-lg">
        <button
          className="py-2 px-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition duration-200 font-semibold flex items-center gap-2 mb-4"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft />
          Go Back
        </button>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Integration Instructions</h2>
        <p className="text-center text-gray-600 mb-4">Welcome, {clientName}!</p>
        <p className="mb-4">To integrate the chatbot, copy and paste the following code within the <code>&lt;head&gt;</code> of your website:</p>
        <pre className="bg-gray-100 p-4 rounded-lg mb-4">
          <code>&lt;script src="{website}/chatbot.js"&gt;&lt;/script&gt;</code>
        </pre>
        <button
          className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 font-semibold flex items-center justify-center gap-2 mb-4"
          onClick={handleEmailInstructions}
        >
          <FaEnvelope />
          Email Instructions to Developer
        </button>
        <button
          className="w-full py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-200 font-semibold flex items-center justify-center gap-2"
          onClick={handleTestIntegration}
        >
          <FaCheckCircle />
          Test Integration
        </button>
      </div>
    </div>
  );
};

export default IntegrationInstructions;