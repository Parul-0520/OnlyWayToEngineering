"use client";
import React, { useState } from "react";

const InterviewPrep = () => {
  const [role, setRole] = useState("");
  const [level, setLevel] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateQuestions = () => {
    if (!role || !level) return;

    setLoading(true);

    setTimeout(() => {
      setResult({
        technical: [
          "Explain the difference between let, var, and const.",
          "How does React's virtual DOM work?",
          "What is REST API and how does it function?",
          "Explain time complexity with examples.",
        ],
        behavioral: [
          "Tell me about yourself.",
          "Describe a challenging project you worked on.",
          "How do you handle tight deadlines?",
          "Describe a time you faced failure.",
        ],
        tips: [
          "Revise core fundamentals before interviews.",
          "Practice mock interviews.",
          "Prepare STAR method answers.",
          "Research the company beforehand.",
        ],
        readinessScore: Math.floor(Math.random() * 15) + 80,
        improvementAreas: [
          "System Design Understanding",
          "Communication Clarity",
          "Real-world Project Depth",
        ],
      });

      setLoading(false);
    }, 1200);
  };

  const resetPrep = () => {
    setRole("");
    setLevel("");
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 pt-24 pb-12">

      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">
          AI Interview Preparation
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          <i>
            Practice role-specific interview questions and get structured
            guidance to improve your performance.
          </i>
        </p>
      </div>

      {/* Input Card */}
      <div className="max-w-4xl mx-auto bg-white text-black rounded-2xl shadow-lg p-8 mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          Interview Details
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-medium">
              Target Role
            </label>
            <input
              type="text"
              placeholder="e.g. Frontend Developer"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Experience Level
            </label>
            <input
              type="text"
              placeholder="e.g. Beginner / Intermediate"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button
            onClick={generateQuestions}
            disabled={!role || !level || loading}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? "Generating..." : "Generate Interview Questions"}
          </button>

          <button
            onClick={resetPrep}
            className="border border-black text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Result Section */}
      {result && (
        <>
          {/* Readiness Score */}
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <div className="border border-white rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-4">
                Interview Readiness Score
              </h2>
              <div className="text-6xl font-bold">
                {result.readinessScore}%
              </div>
              <p className="text-gray-400 mt-2">
                Based on role & experience
              </p>
            </div>
          </div>

          {/* 3 Main Boxes */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-12">

            {/* Technical */}
            <div className="border border-white rounded-2xl p-6 hover:bg-white hover:text-black transition">
              <h3 className="text-xl font-semibold mb-4">
                Technical Questions
              </h3>
              <ul className="space-y-2 text-sm">
                {result.technical.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>

            {/* Behavioral */}
            <div className="border border-white rounded-2xl p-6 hover:bg-white hover:text-black transition">
              <h3 className="text-xl font-semibold mb-4">
                Behavioral Questions
              </h3>
              <ul className="space-y-2 text-sm">
                {result.behavioral.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>

            {/* Tips */}
            <div className="border border-white rounded-2xl p-6 hover:bg-white hover:text-black transition">
              <h3 className="text-xl font-semibold mb-4">
                Preparation Tips
              </h3>
              <ul className="space-y-2 text-sm">
                {result.tips.map((item, index) => (
                  <li key={index}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Improvement Areas */}
          <div className="max-w-5xl mx-auto text-center mb-20">
            <div className="border border-white rounded-2xl p-10">
              <h2 className="text-2xl font-bold mb-6">
                Areas to Improve
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {result.improvementAreas.map((item, index) => (
                  <span
                    key={index}
                    className="border border-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </>
      )}

    </div>
  );
};

export default InterviewPrep;
