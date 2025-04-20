"use client";
import React from "react";
import data from "../data/it_services_data.json";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

interface Service{
    title: string,
    description: string,
    isFeatured: boolean
}

function WhyChooseUs() {

    const content = data.services

  return (
    <div className="w-full py-4">
      <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs