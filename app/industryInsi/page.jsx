"use client";

"use client";

import { useState } from "react";

export default function IndustryInsi() {
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [data, setData] = useState(null);

  const handleAnalyze = () => {
    if (!role || !location) return;

    setData({
      averageSalary: "₹12–18 LPA",
      demandLevel: "High Demand",
      growthRate: "18% yearly growth",
      topCompanies: ["Google", "Amazon", "Microsoft", "Flipkart"],
      skills: ["React", "Node.js", "System Design", "Cloud", "DSA"],
      marketTrend:
        "Companies are actively hiring full-stack and AI-skilled engineers with strong problem-solving abilities.",
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-black text-white px-6 py-20">

      {/* Heading */}
      <div className="text-center mb-16 mt-6">
        <h1 className="text-4xl font-bold mb-4 tracking-tight">
          Industry Insights
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Stay ahead with real-time industry trends, salary data, and market analysis.
        </p>
      </div>

      {/* Input Section */}
      <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl shadow-xl">
        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block text-sm mb-2 text-gray-400">
              Job Role
            </label>
            <input
              type="text"
              placeholder="e.g. Software Engineer"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-white text-white"
            />
          </div>

          <div>
            <label className="block text-sm mb-2 text-gray-400">
              Location
            </label>
            <input
              type="text"
              placeholder="e.g. Bangalore"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none focus:border-white text-white"
            />
          </div>
        </div>

        <button
          onClick={handleAnalyze}
          className="mt-8 w-full bg-white text-black py-3 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Get Industry Insights
        </button>
      </div>

      {/* Results Section */}
      <div className="flex-1">
        {data && (
          <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-3 gap-8">

            {/* Salary */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">Average Salary</h3>
              <p className="text-gray-300">{data.averageSalary}</p>
            </div>

            {/* Demand */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">Market Demand</h3>
              <p className="text-gray-300">{data.demandLevel}</p>
            </div>

            {/* Growth */}
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">Growth Rate</h3>
              <p className="text-gray-300">{data.growthRate}</p>
            </div>

            {/* Top Companies */}
            <div className="md:col-span-3 bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Top Hiring Companies</h3>
              <div className="flex flex-wrap gap-3">
                {data.topCompanies.map((company, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-black border border-white/10 rounded-full text-sm"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="md:col-span-3 bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">Trending Skills</h3>
              <div className="flex flex-wrap gap-3">
                {data.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-black border border-white/10 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Market Trend */}
            <div className="md:col-span-3 bg-white/5 border border-white/10 p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">Market Trend Analysis</h3>
              <p className="text-gray-300 leading-relaxed">
                {data.marketTrend}
              </p>
            </div>

          </div>
        )}
      </div>

    </div>
  );
}
