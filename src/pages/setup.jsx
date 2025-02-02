import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Setup = ({ clientName }) => {
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const fetchMetaDescription = async (website) => {
    try {
      const apiKey = "648945a6-f6c6-4866-9c7e-be7685526884";
      const encodedWebsite = encodeURIComponent(website);
      const url = `https://opengraph.io/api/1.1/site/${encodedWebsite}?app_id=${apiKey}&cache_ok=false&full_render=true`;
      console.log("Fetching URL:", url);

      const response = await axios.get(url);
      const metaDescription = response.data.hybridGraph.description;
      setDescription(metaDescription ? metaDescription : "No description found");
      toast.success("Meta description fetched successfully!");

      navigate("/ScrapingStatus", { state: { company, website, description: metaDescription } });
    } catch (error) {
      toast.error("Failed to fetch meta description.");
      console.error("Failed to fetch meta description.", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 px-4">
      <Toaster />
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Setup Organization
        </h2>
        <p className="text-center text-gray-600 mb-4">Welcome, {clientName}!</p>
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Company Name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={(e) => setCompany(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Website URL"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            onChange={(e) => setWebsite(e.target.value)}
            required
          />
          <button
            type="button"
            className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition duration-200 font-semibold"
            onClick={() => fetchMetaDescription(website)}
          >
            Fetch Meta Description
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Setup;