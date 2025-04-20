"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import consultantData from "../data/consultants_data.json"

const people = consultantData;

function OurConsultants() {
  return (
    <div className="h-[40rem] relative overflow-hidden flex justify-center items-center">
        <WavyBackground className="w-full h-full max-w-7xl mx-auto flex flex-col justify-center items-center">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-center font-bold mb-8">Meet Our Consultants</h2>
            <p className="text-md mb-10">Discover the talented professionals to guide you through top techs</p>
            <div className="flex flex-row mb-10 justify-center items-center w-full"><AnimatedTooltip items={people} /></div>
        </WavyBackground>
    </div>
  )
}

export default OurConsultants