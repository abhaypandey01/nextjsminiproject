"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import testimonialData from "../data/testimonials_data.json"


function Testimonials() {

    const testimonials = testimonialData

  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.07] items-center justify-center relative overflow-hidden">
        <p className="text-5xl font-bold mb-10">Tech Talks: Stories of Success</p>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  )
}

export default Testimonials