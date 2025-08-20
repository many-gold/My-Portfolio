import React from "react";
import { 
  FaJava, FaReact, FaVuejs, FaDocker, FaGitAlt 
} from "react-icons/fa";
import { 
  SiSharp, SiSpringboot, SiAngular, SiJira, SiMysql, SiPostgresql, SiMongodb 
} from "react-icons/si";

export default function About() {
  return (
    <main className="w-full min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      
      {/* Hero Section */}
      <section className="w-full py-24 px-6 flex flex-col items-center text-center bg-gray-100 dark:bg-gray-800">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Me</h1>
        <p className="max-w-xl text-gray-700 dark:text-gray-300 text-lg md:text-xl">
          I am a Full-Stack Engineer with 8+ years building scalable enterprise applications, HRMS, Payroll, and Banking software.
        </p>
      </section>

      {/* Profile + Expertise Section */}
      <section className="w-full py-20 px-6 flex flex-col md:flex-row gap-12 max-w-6xl mx-auto">
        {/* Profile */}
        <div className="flex-1 space-y-6">
          <h2 className="text-2xl font-semibold">Profile</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I specialize in designing and developing high-performance enterprise systems. 
            My focus is on scalable, secure, and maintainable applications with seamless user experience.
          </p>

          <h3 className="text-xl font-semibold mt-4">Core Expertise</h3>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
            <li>ERP Architecture & Development</li>
            <li>High-Volume System Optimization</li>
            <li>Cross-Functional Team Leadership</li>
            <li>CI/CD Pipeline Implementation</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-4">
          <SkillCard icon={<FaJava className="text-red-500 text-2xl" />} title="Java" exp="8+ yrs"/>
          <SkillCard icon={<SiSharp className="text-purple-500 text-2xl" />} title="C#" exp="5 yrs"/>
          <SkillCard icon={<FaReact className="text-blue-400 text-2xl" />} title="React" exp="3 yrs"/>
          <SkillCard icon={<FaVuejs className="text-green-500 text-2xl" />} title="Vue.js" exp="2 yrs"/>
          <SkillCard icon={<SiSpringboot className="text-green-400 text-2xl" />} title="Spring Boot" exp="4 yrs"/>
          <SkillCard icon={<SiAngular className="text-red-500 text-2xl" />} title="Angular" exp="2 yrs"/>
          <SkillCard icon={<FaDocker className="text-blue-300 text-2xl" />} title="Docker" exp="3 yrs"/>
          <SkillCard icon={<SiJira className="text-orange-600 text-2xl" />} title="Jira" exp="2 yrs"/>
          <SkillCard icon={<FaGitAlt className="text-purple-600 text-2xl" />} title="Git" exp="8+ yrs"/>
          <SkillCard icon={<SiMysql className="text-blue-500 text-2xl" />} title="MySQL" exp="5 yrs"/>
          <SkillCard icon={<SiPostgresql className="text-blue-700 text-2xl" />} title="PostgreSQL" exp="4 yrs"/>
          <SkillCard icon={<SiMongodb className="text-green-700 text-2xl" />} title="MongoDB" exp="2 yrs"/>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="w-full py-16 px-6 flex justify-center bg-gray-100 dark:bg-gray-800">
        <a 
          href="/contact" 
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-transform transform hover:-translate-y-1"
        >
          Let's Build Something Great
        </a>
      </section>
    </main>
  );
}

// SkillCard Component
function SkillCard({ icon, title, exp }) {
  return (
    <div className="flex items-center gap-3 p-4 bg-white dark:bg-gray-700 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
      <div>{icon}</div>
      <div>
        <h4 className="font-semibold text-sm">{title}</h4>
        <p className="text-gray-600 dark:text-gray-300 text-xs">{exp}</p>
      </div>
    </div>
  );
}
