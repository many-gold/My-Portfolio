import { 
  FaReact, FaJava, FaFolderOpen, FaDownload, FaGithub, FaLinkedin, FaTwitter, FaEnvelope
} from "react-icons/fa";

import { 
  SiSpringboot, SiDotnet, SiPostgresql, SiAngular, SiDocker, 
  SiJira, SiGit, SiMysql, SiMongodb, SiVuedotjs 
} from "react-icons/si";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center  from-gray-900 via-black to-gray-800 overflow-hidden">

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

      {/* Foreground Content */}
      <section className="relative z-10 flex flex-col lg:flex-row items-center justify-center px-6 lg:px-16 py-16 w-full">
        
        {/* Left Content: Profile Image + Tech Icons Around */}
        <div className="relative flex-1 flex items-center justify-center mb-12 lg:mb-0">
          <div className="relative w-80 h-80 sm:w-96 sm:h-96">
            <img
              src="/photo.jpg"
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-4 border-white shadow-xl opacity-90"
               loading="lazy"
            />

            
          </div>
        </div>

        {/* Right Content: Text + Buttons + Social */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Full-Stack Software Engineer
          </h1>

          <p className="text-lg text-black-200 max-w-xl mx-auto lg:mx-0">
            I’m an ERP and Banking Software Engineer with over 8 years of experience in designing and developing scalable, enterprise-grade systems. My expertise spans Java, C#, React, Vue.js, and modern cloud-first architectures. I specialize in delivering robust solutions for ERP modules including payroll, HR, inventory, and banking systems that drive efficiency and innovation..
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/projects"
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              <FaFolderOpen /> Explore Projects
            </a>
            <a
              href="/Bizuwork J.pdf"
              download
              className="flex items-center gap-2 border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              <FaDownload /> Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start gap-6 mt-6 text-gray-200">
            <a href="https://github.com/many-gold/" target="_blank"><FaGithub size={24} className="hover:text-indigo-400" /></a>
            <a href="https://linkedin.com/in/bizuwork-jemaneh-5b9604297" target="_blank"><FaLinkedin size={24} className="hover:text-indigo-400" /></a>
            <a href="https://twitter.com/yourusername" target="_blank"><FaTwitter size={24} className="hover:text-indigo-400" /></a>
            <a href="mailto:bizuworkjemameneh@gmail.com"><FaEnvelope size={24} className="hover:text-indigo-400" /></a>
          </div>
        </div>
      </section>
    </div>
  );
}
