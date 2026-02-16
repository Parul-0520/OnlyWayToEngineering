

// "use client";
// import React, { useState } from "react";

// const Guidance = () => {
//   const [role, setRole] = useState("");
//   const [skills, setSkills] = useState("");
//   const [experience, setExperience] = useState("");
//   const [result, setResult] = useState(null);

//   const generateGuidance = () => {
//     setResult({
//       roadmap: [
//         "Strengthen core fundamentals in your domain.",
//         "Build 3-4 real-world projects.",
//         "Practice problem-solving regularly.",
//         "Apply for internships & networking opportunities.",
//       ],
//       recommendedSkills: [
//         "Data Structures & Algorithms",
//         "System Design Basics",
//         "Communication Skills",
//         "Git & Version Control",
//       ],
//       resources: [
//         "LeetCode / CodeStudio",
//         "Official Documentation",
//         "YouTube Technical Channels",
//         "Mock Interviews",
//       ],
//     });
//   };

//   const resetGuidance = () => {
//     setRole("");
//     setSkills("");
//     setExperience("");
//     setResult(null);
//   };

//   return (
//     <div className="min-h-screen bg-black text-white px-6 pt-24 pb-12">
      
//       {/* Header Section */}
//       <div className="text-center mb-16">
//         <h1 className="text-4xl font-bold mb-6">
//           AI-Powered Career Guidance
//         </h1>
//         <p className="text-gray-400 max-w-2xl mx-auto">
//           <i>
//             Get personalized career advice, roadmap suggestions, and skill
//             recommendations tailored to your goals.
//           </i>
//         </p>
//       </div>

//       {/* Input Section */}
//       <div className="max-w-4xl mx-auto bg-white text-black rounded-2xl shadow-lg p-8 mb-16">
//         <h2 className="text-2xl font-semibold mb-6">
//           Tell Us About Yourself
//         </h2>

//         <div className="grid md:grid-cols-2 gap-6">
//           <div>
//             <label className="block mb-2 font-medium">
//               Target Role
//             </label>
//             <input
//               type="text"
//               placeholder="e.g. Frontend Developer"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
//               value={role}
//               onChange={(e) => setRole(e.target.value)}
//             />
//           </div>

//           <div>
//             <label className="block mb-2 font-medium">
//               Current Experience Level
//             </label>
//             <input
//               type="text"
//               placeholder="e.g. Beginner / Intermediate"
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
//               value={experience}
//               onChange={(e) => setExperience(e.target.value)}
//             />
//           </div>

//           <div className="md:col-span-2">
//             <label className="block mb-2 font-medium">
//               Current Skills
//             </label>
//             <textarea
//               placeholder="List your current skills..."
//               className="w-full border border-gray-300 rounded-lg px-4 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-black"
//               value={skills}
//               onChange={(e) => setSkills(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Buttons */}
//         <div className="mt-6 flex gap-4">
//           <button
//             onClick={generateGuidance}
//             className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
//           >
//             Generate Career Roadmap
//           </button>

//           <button
//             onClick={resetGuidance}
//             className="border border-black text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition"
//           >
//             Reset
//           </button>
//         </div>
//       </div>

//       {/* Result Section */}
//       {result && (
//         <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          
//           {/* Roadmap Box */}
//           <div className="border border-white rounded-2xl p-6 hover:bg-white hover:text-black transition">
//             <h3 className="text-xl font-semibold mb-4">
//               Career Roadmap
//             </h3>
//             <ul className="space-y-2">
//               {result.roadmap.map((item, index) => (
//                 <li key={index} className="text-sm">
//                   • {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Skills Box */}
//           <div className="border border-white rounded-2xl p-6 hover:bg-white hover:text-black transition">
//             <h3 className="text-xl font-semibold mb-4">
//               Recommended Skills
//             </h3>
//             <ul className="space-y-2">
//               {result.recommendedSkills.map((item, index) => (
//                 <li key={index} className="text-sm">
//                   • {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Resources Box */}
//           <div className="border border-white rounded-2xl p-6 hover:bg-white hover:text-black transition">
//             <h3 className="text-xl font-semibold mb-4">
//               Learning Resources
//             </h3>
//             <ul className="space-y-2">
//               {result.resources.map((item, index) => (
//                 <li key={index} className="text-sm">
//                   • {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}

//       {/* Extra Info Section */}
//       <div className="max-w-5xl mx-auto mt-20 text-center">
//         <div className="border border-white rounded-2xl p-10">
//           <h2 className="text-2xl font-bold mb-4">
//             Why AI Career Guidance?
//           </h2>
//           <p className="text-gray-400">
//             Traditional career advice is generic. Our AI analyzes your inputs
//             and suggests a personalized roadmap based on industry trends,
//             required skills, and job market demands.
//           </p>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Guidance;

"use client";
import React, { useState } from "react";

const Guidance = () => {
  const [role, setRole] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateGuidance = () => {
    if (!role || !skills || !experience) return;

    setLoading(true);

    setTimeout(() => {
      setResult({
        roadmap: [
          "Strengthen core fundamentals in your domain.",
          "Build 3-4 real-world projects.",
          "Practice problem-solving regularly.",
          "Apply for internships & networking opportunities.",
        ],
        recommendedSkills: [
          "Data Structures & Algorithms",
          "System Design Basics",
          "Communication Skills",
          "Git & Version Control",
        ],
        resources: [
          "LeetCode / CodeStudio",
          "Official Documentation",
          "YouTube Technical Channels",
          "Mock Interviews",
        ],
        matchScore: Math.floor(Math.random() * 15) + 85,
        suggestedRoles: [
          "Frontend Developer",
          "Full Stack Developer",
          "Software Engineer",
        ],
        marketInsights: {
          demand: "High",
          salary: "₹8–18 LPA",
          growth: "22% YoY",
        },
      });

      setLoading(false);
    }, 1200);
  };

  const resetGuidance = () => {
    setRole("");
    setSkills("");
    setExperience("");
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 pt-24 pb-12">
      
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">
          AI-Powered Career Guidance
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          <i>
            Get personalized career advice, roadmap suggestions, and skill
            recommendations tailored to your goals.
          </i>
        </p>
      </div>

      {/* Input Section */}
      <div className="max-w-4xl mx-auto bg-white text-black rounded-2xl shadow-lg p-8 mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          Tell Us About Yourself
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
              Current Experience Level
            </label>
            <input
              type="text"
              placeholder="e.g. Beginner / Intermediate"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-black"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">
              Current Skills
            </label>
            <textarea
              placeholder="List your current skills..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-black"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button
            onClick={generateGuidance}
            disabled={!role || !skills || !experience || loading}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? "Generating..." : "Generate Career Roadmap"}
          </button>

          <button
            onClick={resetGuidance}
            className="border border-black text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Result Section */}
      {result && (
        <>
          {/* Career Match Score */}
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <div className="border border-white rounded-2xl p-8">
              <h2 className="text-2xl font-semibold mb-4">
                Career Match Score
              </h2>
              <div className="text-6xl font-bold">
                {result.matchScore}%
              </div>
              <p className="text-gray-400 mt-2">
                Based on your current profile
              </p>
            </div>
          </div>

          {/* Suggested Roles */}
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <h3 className="text-xl font-semibold mb-4">
              Suggested Roles
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {result.suggestedRoles.map((item, index) => (
                <span
                  key={index}
                  className="border border-white px-4 py-2 rounded-full text-sm hover:bg-white hover:text-black transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Main 3 Boxes */}
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mb-12">
            
            <div className="border border-white rounded-2xl p-6 hover:bg-white hover:text-black transition">
              <h3 className="text-xl font-semibold mb-4">
                Career Roadmap
              </h3>
              <ul className="space-y-2">
                {result.roadmap.map((item, index) => (
                  <li key={index} className="text-sm">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-white rounded-2xl p-6 hover:bg-white hover:text-black transition">
              <h3 className="text-xl font-semibold mb-4">
                Recommended Skills
              </h3>
              <ul className="space-y-2">
                {result.recommendedSkills.map((item, index) => (
                  <li key={index} className="text-sm">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-white rounded-2xl p-6 hover:bg-white hover:text-black transition">
              <h3 className="text-xl font-semibold mb-4">
                Learning Resources
              </h3>
              <ul className="space-y-2">
                {result.resources.map((item, index) => (
                  <li key={index} className="text-sm">
                    • {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Market Insights */}
          <div className="max-w-5xl mx-auto text-center mb-20">
            <div className="border border-white rounded-2xl p-10">
              <h2 className="text-2xl font-bold mb-6">
                Market Insights
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-gray-400">Demand</p>
                  <p className="text-xl font-semibold">
                    {result.marketInsights.demand}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">Average Salary</p>
                  <p className="text-xl font-semibold">
                    {result.marketInsights.salary}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400">Growth Rate</p>
                  <p className="text-xl font-semibold">
                    {result.marketInsights.growth}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Extra Info Section */}
      <div className="max-w-5xl mx-auto mt-20 text-center">
        <div className="border border-white rounded-2xl p-10">
          <h2 className="text-2xl font-bold mb-4">
            Why AI Career Guidance?
          </h2>
          <p className="text-gray-400">
            Traditional career advice is generic. Our AI analyzes your inputs
            and suggests a personalized roadmap based on industry trends,
            required skills, and job market demands.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Guidance;
