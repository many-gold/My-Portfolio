import { 
  FaReact, FaJava, FaFolderOpen, FaDownload, FaGithub, FaLinkedin, FaTwitter, FaEnvelope
} from "react-icons/fa";

import { 
  SiSpringboot, SiDotnet, SiPostgresql, SiAngular, SiDocker, 
  SiJira, SiGit, SiMysql, SiMongodb, SiVuedotjs 
} from "react-icons/si";
export default function Contact() {
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
    <section className="max-w-xl mx-auto space-y-4">
      <h2 className="text-3xl font-bold">Contact</h2>
      <p className="opacity-90">Feel free to reach out for collaborations or just a friendly hello 👋</p>
      <form onSubmit={(e) => e.preventDefault()} className="card space-y-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2" placeholder="Your name" />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input type="email" className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2" placeholder="you@example.com" />
        </div>
        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea className="w-full rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 h-28" placeholder="How can I help?" />
        </div>
        <button className="btn-primary">Send</button>
      </form>
      <div className="opacity-80">
        Or email me directly: <a className="link" href="mailto:you@example.com">you@example.com</a>
      </div>
    </section>
    </div>
  )
}
