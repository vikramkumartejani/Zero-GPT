"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Header from "@/components/Dashboard/Header";
import ScanTabs from "@/components/Dashboard/ScanTabs";
import Sidebar from "@/components/Dashboard/Sidebar";
import ADS from "@/components/ADS";
import { ScanResultProps } from "@/components/types/scanResult";

const Dashboard = () => {
    const [showScanTabs, setShowScanTabs] = useState(false);
    const [fileName, setFileName] = useState<string | null>(null);
    const [isScanning, setIsScanning] = useState(false);
    const [text, setText] = useState("");
    const [scanResults, setScanResults] = useState<ScanResultProps | null>(null);

    const menuRef = useRef<HTMLDivElement>(null);

    const handleToggleScanTabs = (event: React.MouseEvent) => {
        event.stopPropagation();
        setShowScanTabs((prevState) => !prevState);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setShowScanTabs(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setFileName(file.name);
        }
    };

    const handleButtonClick = () => {
        const inputElement = document.getElementById(
            "file-input"
        ) as HTMLInputElement;
        if (inputElement) {
            inputElement.click();
        }
    };

    const handleScan = async () => {
        if (!text.trim()) return;

        setIsScanning(true);
        // Simulate scanning delay
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setScanResults({
            timestamp: new Date().toLocaleString("en-US", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
            }),
            confidence: "moderately",
            aiProbability: 3,
            classification: "human",
            breakdown: {
                human: 87,
                mixed: 10,
                ai: 3,
            },
        });
        setIsScanning(false);
    };

    return (
        <div className="w-full flex">
            <div className="lg:block hidden">
                <ADS />
            </div>
            <div
                className="w-full flex flex-col"
                style={{
                    backgroundImage: "url('/assets/dashboard-bg.png')",
                    backgroundPosition: "top",
                }}
            >
                <Header />
                <div className="py-6 flex items-start justify-between gap-3.5 sm:gap-5">
                    <Sidebar />
                    <div className="lg:mr-0 mr-0 sm:mr-4 relative pb-20 w-full bg-white border border-[#E5E7EB] rounded-xl">
                        <div
                            className="flex items-center justify-between py-3.5 sm:py-5 px-3.5 sm:px-8 w-full border-b bg-[#FFFFFF01]"
                            style={{ boxShadow: "0px 4px 4px -4px #0000001A" }}
                        >
                            <button
                                onClick={handleButtonClick}
                                className="group hover:shadow-2xl hover:bg-main-clr hover:text-white transition-all duration-300 border border-dark-gray bg-white w-[135px] sm:w-[150px] h-10 sm:h-[46px] rounded-full flex items-center justify-center gap-1.5 text-dark-ash-gray font-semibold text-sm tracking-[0.3px]"
                            >
                                <Image
                                    src="/assets/upload-file-white.svg"
                                    alt="upload-file"
                                    width={16}
                                    height={20}
                                    className="hidden group-hover:block"
                                />
                                <Image
                                    src="/assets/upload-file.svg"
                                    alt="upload-file"
                                    width={16}
                                    height={20}
                                    className="group-hover:hidden block"
                                />
                                Upload file
                            </button>
                            <input
                                id="file-input"
                                type="file"
                                onChange={handleFileChange}
                                className="hidden"
                            />

                            <div
                                className="relative lg:hidden flex gap-2 sm:gap-5 items-center"
                                ref={menuRef}
                            >
                                <button
                                    className="lg:hidden flex"
                                    onClick={handleToggleScanTabs}
                                >
                                    {showScanTabs ? (
                                        <X className="h-6 w-6" />
                                    ) : (
                                        <Menu className="h-6 w-6" />
                                    )}
                                </button>
                                <div className="absolute top-9 -right-2">
                                    {showScanTabs && (
                                        <ScanTabs
                                            onScan={handleScan}
                                            isScanning={isScanning}
                                            textLength={text.length}
                                            scanResults={scanResults}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="px-3.5 sm:px-8 py-4">
                            <textarea
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder="Enter the text you want to scan"
                                className="w-full h-[340px] outline-none resize-none placeholder:text-gray-olive text-sm font-normal leading-[24px] tracking-[0.3px]"
                            />
                        </div>

                        <div className="mt-10 w-full absolute bottom-[15px] sm:bottom-[30px] px-3.5 sm:px-8 flex sm:flex-row flex-col gap-3.5 sm:items-center justify-between">
                            <h3 className="text-dark-ash-gray text-sm font-medium">
                                <span>{text.length}</span>/<span>250</span> character minimum
                            </h3>
                            <button className="border border-gray-olive text-dark-ash-gray py-3 sm:py-2.5 hover:shadow-2xl hover:text-white transition-all duration-300 hover:bg-main-clr px-3.5 rounded-full font-medium text-base sm:text-sm leading-[16px] tracking-[0.3px]">
                                Upgrade Scan
                            </button>
                        </div>
                    </div>
                    <div className="lg:block hidden">
                        <ScanTabs
                            onScan={handleScan}
                            isScanning={isScanning}
                            textLength={text.length}
                            scanResults={scanResults}
                        />
                    </div>
                </div>
            </div>
            <div className="lg:block hidden">
                <ADS />
            </div>
        </div>
    );
};

export default Dashboard;
