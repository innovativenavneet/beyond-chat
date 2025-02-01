import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FaCheckCircle, FaExclamationCircle } from "react-icons/fa";

const dummyData = [
  { url: "https://example.com/page1", status: "scraped", chunks: ["chunk1", "chunk2"] },
  { url: "https://example.com/page2", status: "pending", chunks: [] },
  { url: "https://example.com/page3", status: "scraped", chunks: ["chunk3", "chunk4"] },
];

const ScrapingStatus = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { company, website, description } = location.state || {};
  const [selectedPage, setSelectedPage] = useState(null);

  const handleViewChunks = (page) => {
    setSelectedPage(page);
    toast.success(`Viewing chunks for ${page.url}`);
  };

  const handleNextStep = () => {
    navigate("/integration", { state: { company, website, description } });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-6">
      <Toaster />
      <h2 className="text-3xl font-bold text-white mb-6">Webpage Scraping Status</h2>
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl bg-opacity-90 backdrop-filter backdrop-blur-lg">
        {company && website && description ? (
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800">Company: {company}</h3>
            <h3 className="text-xl font-bold text-gray-800">Website: {website}</h3>
            <h3 className="text-xl font-bold text-gray-800">Description: {description}</h3>
          </div>
        ) : (
          <p className="text-red-500">No company information available.</p>
        )}
        <ul className="space-y-4">
          {dummyData.map((page, index) => (
            <li key={index} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm transition-transform transform hover:scale-105">
              <span className="font-medium text-gray-800">{page.url}</span>
              <span className={`flex items-center px-2 py-1 rounded ${page.status === "scraped" ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"}`}>
                {page.status === "scraped" ? <FaCheckCircle className="mr-1" /> : <FaExclamationCircle className="mr-1" />}
                {page.status}
              </span>
              <button
                className="ml-4 text-blue-500 underline"
                onClick={() => handleViewChunks(page)}
              >
                View Chunks
              </button>
            </li>
          ))}
        </ul>
        {selectedPage && (
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Data Chunks for {selectedPage.url}</h3>
            <ul className="space-y-2">
              {selectedPage.chunks.map((chunk, index) => (
                <li key={index} className="bg-gray-200 p-2 rounded">
                  {chunk}
                </li>
              ))}
            </ul>
          </div>
        )}
        <button
          className="mt-6 w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-200 font-semibold"
          onClick={handleNextStep}
        >
          Proceed to Integration
        </button>
      </div>
    </div>
  );
};

export default ScrapingStatus;