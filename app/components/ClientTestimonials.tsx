'use client'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import 'swiper/css'
import 'swiper/css/navigation'

interface Testimonial {
    id: number
    name: string
    role: string
    image: string
    quote: string
    rating: number
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Mark Hanurry",
        role: "Co Founder",
        image: "/assets/client.svg",
        quote: "ZerotGPT has transformed the way I work—quick, accurate, and always insightful!",
        rating: 5,
    },
    {
        id: 2,
        name: "Mark Hanurry",
        role: "Co Founder",
        image: "/assets/client.svg",
        quote: "The AI Feels So Intuitive, It&apos;s Like Having A Personal Assistant Available 24/7.",
        rating: 5,
    },
    {
        id: 3,
        name: "Mark Hanurry",
        role: "Co Founder",
        image: "/assets/client.svg",
        quote: "ZerotGPT Delivers Consistent, High-Quality Results That Have Changed How We Work.",
        rating: 5,
    },
    {
        id: 4,
        name: "Mark Hanurry",
        role: "Co Founder",
        image: "/assets/client.svg",
        quote: "ZerotGPT Delivers Consistent, High-Quality Results That Have Changed How We Work.",
        rating: 5,
    },
    {
        id: 5,
        name: "Mark Hanurry",
        role: "Co Founder",
        image: "/assets/client.svg",
        quote: "ZerotGPT Delivers Consistent, High-Quality Results That Have Changed How We Work.",
        rating: 5,
    }
]

export default function ClientTestimonials() {
    return (
        <div className="pb-12 sm:pb-16 md:pb-20 lg:pb-[90px] relative overflow-x-hidden">
            <div className="mb-6 sm:mb-8 md:mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10">
                <h1 className="text-[#000000] text-2xl sm:text-3xl md:text-[40px] font-extrabold leading-tight sm:leading-[32px] uppercase mb-4 sm:mb-0">
                    CLIENT Testimonials
                </h1>
                <div className="flex gap-2">
                    <button
                        className="prev-button p-2 rounded-full border hover:bg-gray-50 transition-colors"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </button>
                    <button
                        className="next-button p-2 rounded-full border hover:bg-gray-50 transition-colors"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </button>
                </div>
            </div>

            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                    prevEl: '.prev-button',
                    nextEl: '.next-button',
                }}
                spaceBetween={16}
                slidesPerView={1}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 1.2,
                    },
                    768: {
                        slidesPerView: 1.5,
                    },
                    1024: {
                        slidesPerView: 2,
                    },
                    1280: {
                        slidesPerView: 2.5,
                    },
                    1536: {
                        slidesPerView: 2.5,
                    }
                }}
                loop={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                className="testimonial-swiper"
            >
                {testimonials.map((testimonial) => (
                    <SwiperSlide key={testimonial.id} className="px-4 sm:px-6 md:px-8 lg:pl-10 lg:pr-0">
                        <div
                            className="bg-[#E5F4FF8F] rounded-[25px] flex flex-col sm:flex-row items-center w-full gap-4 sm:gap-5 p-6 sm:p-8 md:p-10"
                            style={{ boxShadow: "1px 1px 40px 0px #0000001A" }}
                        >
                            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-[180px] md:h-[180px] flex-shrink-0">
                                <Image
                                    src={testimonial.image}
                                    alt="client"
                                    width={180}
                                    height={180}
                                    className="rounded-full w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-grow">
                                <div className="flex items-center gap-1 sm:gap-1.5">
                                    {[...Array(testimonial.rating)].map((_, index) => (
                                        <Image
                                            key={index}
                                            src="/assets/star.svg"
                                            alt="star"
                                            width={16}
                                            height={16}
                                            className="w-4 h-4 sm:w-5 sm:h-5"
                                        />
                                    ))}
                                </div>
                                <p className="text-[#676868] text-sm sm:text-base font-normal leading-relaxed mt-3 sm:mt-4">
                                    {testimonial.quote}
                                </p>
                                <h3 className="mt-3 sm:mt-3.5 text-black text-sm sm:text-base font-semibold uppercase tracking-[0.08em] leading-tight">
                                    {testimonial.name}
                                </h3>
                                <h3 className="text-[#676868] text-sm sm:text-base font-normal tracking-[0.02em] mt-1 sm:mt-2 capitalize">
                                    {testimonial.role}
                                </h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}
