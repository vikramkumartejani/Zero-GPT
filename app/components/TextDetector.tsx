"use client";

import React, { useState } from "react";
import { ArrowRight, ArrowUpFromLine, Upload } from "lucide-react";
import Image from "next/image";

interface Option {
    id: string;
    label: string;
}

const options: Option[] = [
    { id: "chatgpt", label: "ChatGPT" },
    { id: "claude", label: "Claude" },
    { id: "human", label: "Human" },
    { id: "ai-human", label: "AI + Human" },
];

export default function TextDetector() {
    const [text, setText] = useState<string>("");
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value);
    };

    const handleOptionSelect = (optionId: string) => {
        setSelectedOption(optionId);
    };

    return (
        <div
            className="w-full  bg-white rounded-[20px] px-4 py-6 sm:p-8"
            style={{ boxShadow: " 4px 4px 40px 0px #0000001A" }}
        >
            <h1 className="text-xl sm:text-[22px] leading-[32px] font-bold text-[#151515]">
                Was this text written by AI or a Human?
            </h1>

            <div className="mt-4 sm:mt-6 flex sm:items-center sm:flex-row flex-col gap-2 text-sm">
                <span className="text-[#666666] text-sm font-normal">
                    Try an example:
                </span>
                <div className="flex flex-wrap gap-1.5">
                    {options.map((option) => (
                        <button
                            key={option.id}
                            onClick={() => handleOptionSelect(option.id)}
                            className={`px-2.5 py-2 rounded-[30px] text-sm font-normal text-[#666666] transition-colors
                                ${selectedOption === option.id
                                    ? "border border-[#00000026] bg-[#00000016] text-black"
                                    : "border border-[#00000026] bg-transparent"
                                }`}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>

            <div className="mt-[19px] relative">
                <textarea
                    placeholder="Paste your text"
                    value={text}
                    onChange={handleTextChange}
                    className="w-full bg-transparent resize-none outline-none text-sm h-[200px] placeholder:text-[#666666]/60 text-dark-blue"
                />
            </div>

            <div className="text-sm font-normal text-[#666666]/60">
                {text.length}/5,000 characters
            </div>

            <div className="mt-4 flex justify-between sm:flex-row flex-col sm:items-center gap-4">
                <button className="flex items-center justify-center gap-2.5 px-3.5 py-2 rounded-[30px] text-[#666666] text-sm border border-[#00000026]">
                    <Image
                        src="/assets/upgrade.svg"
                        alt="upgrade"
                        width={15}
                        height={15}
                    />
                    Upgrade
                </button>
                <div className="flex items-center justify-between gap-3 sm:w-fit w-full">
                    <button className="flex items-center gap-2 px-3 py-2 text-base font-normal text-[#222222]/60">
                        <Upload className="w-4 h-4 text-[#000000]" />
                        Upload
                    </button>
                    <button className="px-6 h-[46px] bg-main-clr text-white rounded-[30px] text-sm font-normal flex items-center gap-2.5">
                        Scan for AI
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
