import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaRegEnvelope } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-500 border-t-2">
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">

        {/* Brand + Description */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          <div className="flex-1 space-y-4">
            <a href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300 dark:border-gray-600">
                <img
                  src="/photo.jpg"
                  alt="Bizuwork Jemaneh"
                  width={48}
                  height={48}
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-semibold">Bizuwork Jemaneh</span>
            </a>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Building digital experiences that make an impact
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-1 space-y-4">
            <h3 className="font-semibold text-lg">Explore</h3>
            <ul className="space-y-2">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/projects">Projects</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex-1 space-y-4">
            <h3 className="font-semibold text-lg">Connect</h3>
            <div className="flex space-x-4">
              <SocialLink href="https://github.com/many-gold/" icon={<FaGithub size={20} />} />
              <SocialLink href="https://linkedin.com/in/bizuwork-jemaneh-5b9604297" icon={<FaLinkedin size={20} />} />
              <SocialLink href="https://twitter.com" icon={<FaTwitter size={20} />} />
              <SocialLink href="mailto:bizuworkjemameneh@gmail.com" icon={<FaRegEnvelope size={20} />} />
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex-1 space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              <p>Addis Ababa, Ethiopia</p>
              <p>bizuworkjemameneh@gmail.com</p>
              <p>+251 9 82 41 25 66</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          © {currentYear} Bizuwork Jemaneh. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// FooterLink Component
function FooterLink({ href, children }) {
  return (
    <li>
      <a
        href={href}
        className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
      >
        {children}
      </a>
    </li>
  );
}

// SocialLink Component
function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
    >
      {icon}
    </a>
  );
}
