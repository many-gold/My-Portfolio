import { projects } from '../data/projects.js'
import { 
  FaReact, FaJava, FaFolderOpen, FaDownload, FaGithub, FaLinkedin, FaTwitter, FaEnvelope
} from "react-icons/fa";

import { 
  SiSpringboot, SiDotnet, SiPostgresql, SiAngular, SiDocker, 
  SiJira, SiGit, SiMysql, SiMongodb, SiVuedotjs 
} from "react-icons/si";
function ProjectCard({ p }) {
  return (
    <div className="card">
      <h3 className="font-semibold text-lg">{p.title}</h3>
      <p className="opacity-90 mt-1">{p.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600">{t}</span>
        ))}
      </div>
      {p.link && (
        <a className="link mt-3 inline-block" href={p.link} target="_blank" rel="noreferrer">View</a>
      )}
    </div>
  )
}

export default function Projects() {
  return (
     <div className="relative min-h-screen flex   from-gray-900 via-black to-gray-800 overflow-hidden">
    
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
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => <ProjectCard key={p.title} p={p} />)}
      </div>
    </section>
    </div>
  )
}
