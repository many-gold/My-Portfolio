
import { 
  FaReact, FaJava, FaFolderOpen, FaGithub, FaLinkedin, FaTwitter, FaEnvelope 
} from "react-icons/fa";

import { 
  SiSpringboot, SiDotnet, SiPostgresql, SiAngular, SiDocker, 
  SiJira, SiGit, SiMysql, SiMongodb, SiVuedotjs 
} from "react-icons/si";

const projects = [
  {
    title: "Human Resource Management System",
    description:
      "A comprehensive HR system to manage employee records, departments, job titles, and attendance. Designed to streamline HR operations and improve workforce management.",
    icon: <FaFolderOpen />,
    bg: "bg-blue-500",
  },
  {
    title: "Payroll Management System",
    description:
      "Automated payroll system handling salary computation, deductions, benefits, and reports. Ensures accuracy and compliance with organizational payroll policies.",
    icon: <FaFolderOpen />,
    bg: "bg-green-500",
  },
  {
    title: "Inventory Management System",
    description:
      "A system to track stock levels, purchases, and sales. Provides real-time insights and efficient control over warehouse and procurement processes.",
    icon: <FaFolderOpen />,
    bg: "bg-orange-500",
  },
  {
    title: "Procurement Management System",
    description:
      "Simplifies vendor management, purchase requisitions, and approvals. Built to improve transparency and efficiency in procurement workflows.",
    icon: <FaFolderOpen />,
    bg: "bg-purple-500",
  },
  {
    title: "Tsehay Bank – HR & Payroll",
    description:
      "A custom HR and Payroll platform for Tsehay Bank, integrated with performance tracking and compliance reporting to support banking operations.",
    icon: <FaFolderOpen />,
    bg: "bg-indigo-500",
  },
  {
    title: "Tsehay Bank – Information Portal",
    description:
      "An internal portal designed for Tsehay Bank to enhance communication, collaboration, and secure document sharing across departments.",
    icon: <FaFolderOpen />,
    bg: "bg-teal-500",
  },
  {
    title: "Tsehay Bank – Goal Setting & Appraisal System",
    description:
      "Performance management solution with goal setting, employee evaluation, and appraisal features. Tailored for banking performance reviews.",
    icon: <FaFolderOpen />,
    bg: "bg-pink-500",
  },
  {
    title: "Telegram Bookstore",
    description:
      "An online bookstore integrated with Telegram. Allows users to browse, purchase, and download eBooks seamlessly through the chat platform.",
    icon: <FaFolderOpen />,
    bg: "bg-yellow-500",
  },
];

export default function Projects() {
  return (
    <div className="relative min-h-screen flex from-gray-900 via-black to-gray-800 overflow-hidden">
      {/* Background Icons Layer */}
      <div className="absolute inset-0 flex flex-wrap justify-center items-center pointer-events-none opacity-10">
        <FaJava className="text-9xl text-orange-500 m-10 animate-pulse" />
        <SiDotnet className="text-9xl text-blue-500 m-10 animate-pulse" />
        <FaReact className="text-9xl text-cyan-400 m-10 animate-pulse" />
        <SiVuedotjs className="text-9xl text-green-400 m-10 animate-pulse" />
        <SiSpringboot className="text-9xl text-green-600 m-10 animate-pulse" />
        <SiAngular className="text-9xl text-red-500 m-10 animate-pulse" />
        <SiDocker className="text-9xl text-blue-400 m-10 animate-pulse" />
        <SiJira className="text-9xl text-blue-300 m-10 animate-pulse" />
        <SiGit className="text-9xl text-red-400 m-10 animate-pulse" />
        <SiMysql className="text-9xl text-blue-600 m-10 animate-pulse" />
        <SiPostgresql className="text-9xl text-indigo-400 m-10 animate-pulse" />
        <SiMongodb className="text-9xl text-green-500 m-10 animate-pulse" />
      </div>

      {/* Projects Section */}
      <section className="relative z-10 w-full py-16 px-6">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Projects</h2>
          <p className="mt-4 text-black-300 text-lg">
            A showcase of my key projects across HR, Payroll, Banking, and
            eCommerce solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col items-start"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full text-2xl text-white ${project.bg} mb-4`}
              >
                {project.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
