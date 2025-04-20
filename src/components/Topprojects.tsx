'use client'
import { HoverEffect } from "./ui/card-hover-effect";

function Topprojects() {

    const projects = [
        {
          "title": "SmartHire - AI Recruitment Platform",
          "description": "An intelligent hiring platform that uses AI to match candidates with job roles, streamlining the recruitment process for HR teams.",
          "link": "https://smarthire.example.com"
        },
        {
          "title": "ShopEase - E-commerce Solution",
          "description": "A fast and responsive e-commerce web application built for scale, featuring real-time inventory updates, secure payments, and seamless UX.",
          "link": "https://shopease.example.com"
        },
        {
          "title": "RankBoost - SEO Analytics Dashboard",
          "description": "A comprehensive SEO dashboard with keyword tracking, competitor analysis, and custom reporting tools for digital marketers.",
          "link": "https://rankboost.example.com"
        },
        {
          "title": "WellTrack - Health Monitoring App",
          "description": "A cross-platform mobile app that enables users to track wellness goals, log daily vitals, and get personalized fitness recommendations.",
          "link": "https://welltrack.example.com"
        },
        {
          "title": "EduFlex - Online Learning Management System",
          "description": "A modular LMS platform for schools and coaching centers offering course creation, student tracking, and live class integrations.",
          "link": "https://eduflex.example.com"
        },
        {
          "title": "CodeCrate - Developer Portfolio Builder",
          "description": "A portfolio generation tool for developers with GitHub integration, dynamic project showcase, and customizable themes.",
          "link": "https://codecrate.example.com"
        }
      ]      

  return (
    <div className="p-12 bg-black">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="text-center"><h2 className="text-3xl font-bold mb-10 mt-5">Top Projects</h2></div>
            <HoverEffect items={projects} />
        </div>
    </div>
  )
}

export default Topprojects