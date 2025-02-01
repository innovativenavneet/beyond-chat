import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FaRobot, FaCode, FaCheckCircle } from "react-icons/fa";

const Integration = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { company, website, description } = location.state || {};
  const [showChatbot, setShowChatbot] = useState(false);
  const [messages, setMessages] = useState([]);
  const [showInstructions, setShowInstructions] = useState(false);


  const handleTestChatbot = () => {
    // Simulate opening the client's website with a dummy chatbot integration
    toast.success("Chatbot test initiated!");
    setShowChatbot(true);
  };

  const handleIntegrateOnWebsite = () => {
    // Show integration instructions
    navigate("/IntegrationInstructions", { state: { website } });
  };

  const handleTestIntegration = () => {
    // Simulate integration test
    const success = true; // Replace with actual integration test logic
    if (success) {
      navigate("/success");
    } else {
      toast.error("Integration test failed.");
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const input = e.target.elements.message;
    const newMessage = input.value;
    if (newMessage.trim()) {
      setMessages([...messages, { sender: "user", text: newMessage }]);
      input.value = "";
      // Simulate chatbot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: "This is a simulated response." },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-6">
      <Toaster />
      <h2 className="text-3xl font-bold text-white mb-6">Chatbot Integration & Testing</h2>
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-4xl bg-opacity-90 backdrop-filter backdrop-blur-lg flex">
        <div className="w-1/2 p-4">
          <iframe
            src={website}
            title="Client Website"
            className="w-full h-96 border rounded-lg"
          ></iframe>
        </div>
        <div className="w-1/2 p-4">
          <button
            className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 font-semibold mb-4 flex items-center justify-center gap-2"
            onClick={handleTestChatbot}
          >
            <FaRobot />
            Test Chatbot
          </button>
          <button
            className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-200 font-semibold mb-4 flex items-center justify-center gap-2"
            onClick={handleIntegrateOnWebsite}
          >
            <FaCode />
            Integrate on Your Website
          </button>
          <button
            className="w-full py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-200 font-semibold flex items-center justify-center gap-2"
            onClick={handleTestIntegration}
          >
            <FaCheckCircle />
            Test Integration
          </button>
          {showChatbot && (
            <div className="mt-4 bg-gray-100 p-4 rounded-lg shadow-lg h-96 flex flex-col">
              <div className="flex-1 overflow-y-auto p-2">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-2 p-2 rounded-lg ${
                      message.sender === "user"
                        ? "bg-blue-500 text-white self-end"
                        : "bg-gray-300 text-gray-800 self-start"
                    }`}
                  >
                    {message.text}
                  </div>
                ))}
              </div>
              <form onSubmit={handleSendMessage} className="mt-4 flex">
                <input
                  type="text"
                  name="message"
                  placeholder="Type a message..."
                  className="flex-1 p-2 border border-gray-300 rounded-lg"
                />
                <button
                  type="submit"
                  className="ml-2 p-2 bg-blue-500 text-white rounded-lg"
                >
                  Send
                </button>
              </form>
              <div className="mt-4 text-center">
                <button
                  className="text-blue-500 underline"
                  onClick={() => toast.info("Feedback form opened!")}
                >
                  Chatbot not working? Share feedback
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Integration;