import Image from 'next/image'
import React from 'react'

const AIDetectorsVSPlagiarismCheckers = () => {
    return (
        <div className='py-12 md:py-20 max-w-[1324px] mx-auto px-3.5 sm:px-5'>
            <h1 className='text-center text-[#202F66] text-[24px] sm:text-[30px] md:text-[40px] font-extrabold uppercase'>AI Detectors vs. Plagiarism Checkers</h1>
            <p className='mt-2 max-w-[710px] mx-auto text-center text-[#333333] text-sm sm:text-[16px] font-normal leading-[24px] sm:leading-[28px]'> AI detectors and plagiarism checkers  are both used to verify the originality and authenticity of a text, but they differ in terms of how they work and what they’re looking for.</p>
            <div className='mt-6 md:mt-8 flex items-start gap-6 md:flex-row flex-col justify-between'>
                <div className='md:w-1/2'>
                    <Image src='/assets/ai-detector.png' alt='ai-detector' width={645} height={387} />
                    <h2 className='mt-6 text-[#1B2B68] text-[20px] sm:text-[24px] font-bold leading-[24px]'>AI Detector or ChatGPT Detector</h2>
                    <p className='mt-3 text-[#0D405F] text-[14px] sm:text-[16px] font-normal leading-[24px] sm:leading-[28.8px]'>AI detectors try to find text that looks like it was generated by an AI writing tool, like ChatGPT. They do this by measuring specific characteristics of the text like sentence structure and length, word choice, and predictability — not by comparing it to a database of content.</p>
                </div>
                <div className='md:w-1/2'>
                    <Image src='/assets/plagiarism-checker.png' alt='plagiarism-checker' width={645} height={387} />
                    <h2 className='mt-6 text-[#1B2B68] text-[20px] sm:text-[24px] font-bold leading-[24px]'>Plagiarism Checker</h2>
                    <p className='mt-3 text-[#0D405F] text-[14px] sm:text-[16px] font-normal leading-[24px] sm:leading-[28.8px]'>Plagiarism checkers try to find text that is copied from a different source. They do this by comparing the text to a large database of web pages, news articles, journals, and so on, and detecting similarities — not by measuring specific characteristics of the text.</p>
                </div>
            </div>
        </div>
    )
}

export default AIDetectorsVSPlagiarismCheckers