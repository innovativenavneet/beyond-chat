import React from "react";
import Confetti from "react-confetti";

const Success = ({ clientName }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-50">
      <Confetti />
      <h1 className="text-3xl font-bold text-green-700">Integration Successful! 🎉</h1>
      <p className="text-center text-gray-600 mb-4">Congratulations, {clientName}!</p>
      <button className="mt-4 bg-blue-500 text-white p-3 rounded-lg">Explore Admin Panel</button>
      <button className="mt-2 bg-gray-500 text-white p-3 rounded-lg">Start Talking to Chatbot</button>
    </div>
  );
};

export default Success;