"use client";

import React, { useState } from "react";
import { jsPDF } from "jspdf";

export default function SmartResume() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [summary, setSummary] = useState("");
  const [skills, setSkills] = useState("");
  const [projects, setProjects] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [achievements, setAchievements] = useState("");
  const [certifications, setCertifications] = useState("");
  const [result, setResult] = useState(null);

  const generateResume = () => {
    setResult({
      name,
      email,
      summary,
      skills,
      projects,
      education,
      experience,
      achievements,
      certifications,
    });
  };

  const resetResume = () => {
    setName("");
    setEmail("");
    setSummary("");
    setSkills("");
    setProjects("");
    setEducation("");
    setExperience("");
    setAchievements("");
    setCertifications("");
    setResult(null);
  };

  const downloadResume = () => {
    if (!result) return;

    const doc = new jsPDF();
    let y = 20;

    // Name and Email at top center
    doc.setFontSize(20);
    doc.text(result.name, 105, y, { align: "center" });
    y += 10;
    doc.setFontSize(12);
    doc.text(result.email, 105, y, { align: "center" });
    y += 15;

    const sections = [
      { title: "Summary", content: result.summary },
      { title: "Skills", content: result.skills },
      { title: "Projects", content: result.projects },
      { title: "Education", content: result.education },
      { title: "Experience", content: result.experience },
      { title: "Achievements", content: result.achievements },
      { title: "Certifications", content: result.certifications },
    ];

    sections.forEach((sec) => {
      doc.setFontSize(16);
      doc.text(sec.title, 10, y);
      y += 7;
      doc.setFontSize(12);
      const lines = doc.splitTextToSize(sec.content, 190);
      doc.text(lines, 10, y);
      y += lines.length * 7 + 10;
    });

    doc.save(`${result.name.replaceAll(" ", "_")}_Resume.pdf`);
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Smart Resume Creation</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Generate ATS-optimized resumes with AI assistance.
        </p>
      </div>

      {/* Input Section */}
      <div className="max-w-4xl mx-auto bg-white text-black rounded-2xl shadow-lg p-8 mb-16">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Summary</label>
            <textarea
              placeholder="Write a brief summary about yourself..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-20"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Skills</label>
            <textarea
              placeholder="List your skills..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-20"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Projects</label>
            <textarea
              placeholder="Describe your projects..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-20"
              value={projects}
              onChange={(e) => setProjects(e.target.value)}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Education</label>
            <textarea
              placeholder="Enter your educational qualifications..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-20"
              value={education}
              onChange={(e) => setEducation(e.target.value)}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Experience</label>
            <textarea
              placeholder="Describe your professional experience..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-20"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Achievements</label>
            <textarea
              placeholder="List your achievements..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-20"
              value={achievements}
              onChange={(e) => setAchievements(e.target.value)}
            />
          </div>

          <div className="md:col-span-2">
            <label className="block mb-2 font-medium">Certifications</label>
            <textarea
              placeholder="List your certifications..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 h-20"
              value={certifications}
              onChange={(e) => setCertifications(e.target.value)}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button
            onClick={generateResume}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Generate Resume
          </button>
          <button
            onClick={resetResume}
            className="border border-black text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            Reset
          </button>
          {result && (
            <button
              onClick={downloadResume}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
            >
              Download Resume
            </button>
          )}
        </div>
      </div>

      {/* Resume Output */}
      {result && (
        <div className="max-w-3xl mx-auto bg-white text-black rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-2">{result.name}</h2>
          <p className="text-center mb-4">{result.email}</p>

          <div className="mb-4">
            <h3 className="font-semibold mb-1">Summary</h3>
            <p>{result.summary}</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-1">Skills</h3>
            <p>{result.skills}</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-1">Projects</h3>
            <p>{result.projects}</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-1">Education</h3>
            <p>{result.education}</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-1">Experience</h3>
            <p>{result.experience}</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-1">Achievements</h3>
            <p>{result.achievements}</p>
          </div>

          <div className="mb-4">
            <h3 className="font-semibold mb-1">Certifications</h3>
            <p>{result.certifications}</p>
          </div>
        </div>
      )}
    </div>
  );
}
