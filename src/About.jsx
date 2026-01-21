import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-[#181A1C] text-white font-serif flex flex-col">
      
      {/* Navbar */}
      <div className="flex justify-between items-center px-4 md:px-8 py-6 text-sm border-b border-gray-700">
        <a href="/" className="text-lg font-semibold tracking-wide hover:text-gray-300 transition duration-200">
          John Miecho Catalan Arnad
        </a>
        <div className="space-x-2 md:space-x-4 text-xs md:text-sm flex flex-wrap">
          <Link to="/project" className="bg-[#1F2123] hover:bg-[#2A2D30] px-4 py-2 rounded transition">
            Projects
          </Link>
          <Link to="/about" className="bg-[#1F2123] hover:bg-[#2A2D30] px-4 py-2 rounded transition">
            About
          </Link>
          <Link to="/certificate" className="bg-[#1F2123] hover:bg-[#2A2D30] px-4 py-2 rounded transition">
            Certificates
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center flex-1 px-4 md:px-12 py-12 gap-12 animate-fade-in">
        <div className="max-w-2xl text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I’m <span className="text-teal-400">Miko</span>.
          </h1>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            I’m a passionate Software Developer and QA based in Cebu City, Philippines, with hands-on experience
            building financial technology (FinTech) applications using{" "}
            <span className="text-teal-300">NestJS</span>,{" "}
            <span className="text-teal-300">ReactJS</span>,{" "}
            <span className="text-teal-300">TypeScript</span>, and{" "}
            <span className="text-teal-300">SQL</span>.  
            I enjoy writing clean, maintainable code and building reliable, user-focused solutions.
          </p>

          <div className="flex justify-start mt-8">
            <a
              href="./Resume -John Miecho Arnad.pdf"
              download
              className="inline-flex items-center px-6 py-2 bg-[#1FC6B4] rounded-full font-semibold shadow hover:shadow-teal-500/40 hover:bg-[#17a99a] transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src="/1000001470.png"
            alt="Miko"
            className="rounded-full h-60 md:h-80 object-cover shadow-2xl border-4 border-teal-400 hover:scale-105 transition"
          />
        </div>
      </div>

      {/* Skills Section */}
      <section className="px-4 md:px-12 pt-24 pb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCard title="Frontend Development" skills={[
            "HTML/CSS", "React.js", "Tailwind CSS", "Responsive Design"
          ]} />

          <SkillCard title="Backend Development" skills={[
            "Node.js", "Express", "NestJS", "PHP", "Authentication"
          ]} />

          <SkillCard title="Databases" skills={[
            "MySQL", "HeidiSQL", "PostgreSQL"
          ]} />

          <SkillCard title="Tools" skills={[
            "Git/GitHub", "VS Code", "Figma", "Postman",
            "Insomnia", "Jira", "Asana", "Slack", "Bitbucket"
          ]} />

          <SkillCard title="Testing Tools" skills={[
            "Functional Testing", "Regression Testing",
            "Smoke Testing", "API Testing", "QA Automation"
          ]} />
        </div>
      </section>

      {/* Work Experience Section */}
      <section className="px-4 md:px-12 pb-24 pt-30">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Work Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          <ExperienceCard
            company="DepED"
            role="Computer Department Assistant Intern"
            date="November – December 2019"
            responsibilities={[
              "Handled DepED email requests and reports",
              "Assisted in network troubleshooting and IT support"
            ]}
          />

          <ExperienceCard
            company="Apteum Corporation"
            role="Land Checker | Data Engineer Intern"
            date="March 7 – June 12, 2024"
            responsibilities={[
              "Conducted QA analysis and documented bugs",
              "Tracked issues using Jira and Confluence",
              "Debugged data scrapers for raw data processing",
              "Wrote SQL queries for data validation"
            ]}
          />

          <ExperienceCard
            company="Wealth Development Bank"
            role="Software Developer / QA"
            date="July 15, 2025 – Present"
            responsibilities={[
              "Performed system QA to ensure security and stability",
              "Developed systems using NestJS, React, TypeScript, and SQL",
              "Collaborated with project owners on requirements",
              "Led legacy system migration to modern tech stack"
            ]}
          />

        </div>
      </section>
    </div>
  );
};

/* Reusable Skill Card */
const SkillCard = ({ title, skills }) => (
  <div className="bg-[#1F2123] rounded-2xl p-6 shadow hover:shadow-lg transition">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2 text-sm">
      {skills.map(skill => (
        <span key={skill} className="bg-[#2A2D30] px-3 py-1 rounded-full">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

/* Reusable Experience Card */
const ExperienceCard = ({ company, role, date, responsibilities }) => (
  <div className="bg-[#1F2123] rounded-2xl p-6 shadow hover:shadow-lg transition">
    <h3 className="text-lg font-semibold">{company}</h3>
    <p className="text-sm text-teal-400 mt-1">{role}</p>
    <p className="text-xs text-gray-400 mb-4">{date}</p>

    <div className="flex flex-wrap gap-2 text-sm">
      {responsibilities.map(item => (
        <span key={item} className="bg-[#2A2D30] px-3 py-1 rounded-full">
          {item}
        </span>
      ))}
    </div>
  </div>
);

export default About;
