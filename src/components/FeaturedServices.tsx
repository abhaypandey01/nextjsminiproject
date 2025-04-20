'use client'
import Link from "next/link"
import serviceData from "../data/it_services_data.json"
import { BackgroundGradient } from "./ui/background-gradient"

interface Service{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    consultant: string,
    isFeatured: boolean
}

function FeaturedServices() {

    const featuredService = serviceData.services.filter((service:Service) => service.isFeatured)

  return (
    <div className="py-10 bg-gray-900">
        <div className="text-center">
            <h2 className="text-base text-blue-700 font-bold tracking-wide">Featured Services</h2>
            <p className="font-extrabold tracking-tight text-white text-3xl md:text-5xl mt-5 leading-8">Work Done By Best</p>
        </div>
        <div className="mt-10 mx-10 sm:mx-4">
            <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                { featuredService.map((service:Service) => (
                    <div key={service.id} className="flex justify-center">
                        <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                                <p className="mb-5 text-neutral-300 text-lg sm:text-xl font-extrabold">{service.title}</p>
                                <p className="mb-5 text-neutral-300">{service.description}</p>
                                <Link href={`/services/${service.slug}`} className="shadow-sm shadow-neutral-400 py-2 px-3 rounded-xl">More Details</Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                )) }
            </div>
        </div>
        <div className="text-center mt-20">
            <Link href={'/services'} className="mt-7 rounded-lg dark:bg-white dark:text-gray-600 bg-black text-gray-300 py-3 px-5 hover:bg-gray-800 hover:text-white">All Services</Link>
        </div>
    </div>
  )
}

export default FeaturedServices