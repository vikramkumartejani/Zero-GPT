import Image from 'next/image'
import React from 'react'

const Sidebar = () => {
    return (
        <div className='h-screen bg-[#E6F2F7] border border-[#E5E7EB] min-w-[60px] sm:min-w-[91px] rounded-r-[12px] py-8 space-y-8'>
            <div className='flex flex-col items-center gap-2 mr-2 hover:underline underline-offset-2 transition-all duration-300'>
                <button className='bg-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center' style={{ boxShadow: "0px 2px 4px -2px #0000001A, 0px 4px 6px -1px #0000001A" }}>
                    <Image src='/assets/plus-icons.svg' alt='plus' width={20} height={20} />
                </button>
                <h2 className='text-dark-ash-gray font-medium text-sm'>New</h2>
            </div>
            <div className='flex flex-col items-center gap-2 mr-2 hover:underline underline-offset-2 transition-all duration-300'>
                <Image src='/assets/dashboard-home-icon.svg' alt='dashboard-home-icon' width={24} height={24} />
                <h2 className='text-dark-ash-gray font-medium text-sm'>Home</h2>
            </div>
        </div>
    )
}

export default Sidebar