'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import LanguageSwitcher from './LanguageSwitcher'

interface NavLink {
    name: string
    href: string
    dropdown?: NavLink[]
}

const navLinks: NavLink[] = [
    { name: 'ABOUT', href: '/about-us' },
    {
        name: 'SERVICES',
        href: '/services',
        dropdown: [
            { name: 'AI Content Detector', href: '/ai-content-detector' },
            { name: 'Chat GPT Detector', href: '/chat-gpt-detector' }
        ]
    },
    { name: 'PRICING', href: '/pricing' },
    { name: 'BLOG', href: '/blog' },
    { name: 'CONTACT US', href: '/contact-us' },
]

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [hasScrolled, setHasScrolled] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY
            setHasScrolled(scrollPosition > 20)
        }

        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setActiveDropdown(null)
            }
        }

        window.addEventListener('scroll', handleScroll)
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const toggleDropdown = (name: string) => {
        setActiveDropdown(activeDropdown === name ? null : name)
    }

    return (
        <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${hasScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
            <div className="mx-auto max-w-[1340px] px-3.5 sm:px-5 transition-all duration-300">
                <div className={`flex items-center justify-between ${hasScrolled ? 'py-5' : 'py-5 sm:py-8'}`} >
                    {/* Logo */}
                    <Link href="/">
                        <Image src='/assets/logo.svg' alt='logo' width={190} height={36.37} className='sm:w-[190px] sm:h-[36px] w-[170px]' />
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden space-x-[27px] lg:flex" ref={dropdownRef}>
                        {navLinks.map((link) => (
                            <div key={link.name} className="relative">
                                {link.dropdown ? (
                                    <button
                                        onClick={() => toggleDropdown(link.name)}
                                        className="mt-[3px] text-sm font-medium text-secondary flex items-center"
                                    >
                                        {link.name}
                                        <ChevronDown className="ml-1 h-4 w-4" />
                                    </button>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="text-sm font-medium text-secondary"
                                    >
                                        {link.name}
                                    </Link>
                                )}
                                {link.dropdown && activeDropdown === link.name && (
                                    <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                            {link.dropdown.map((subLink) => (
                                                <Link
                                                    key={subLink.name}
                                                    href={subLink.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                    role="menuitem"
                                                >
                                                    {subLink.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Desktop Buttons */}
                    <div className="hidden space-x-4 lg:flex items-center">
                        <LanguageSwitcher />
                        <Link
                            href="/signup"
                            className="rounded-[500px] bg-white px-[22px] py-[15px] text-sm font-semibold text-dark-blue hover:shadow-inner  transition-all duration-300 ease-in-out shadow-lg">
                            SIGN UP
                        </Link>
                        <Link
                            href="/login"
                            className="rounded-[500px] bg-dark-blue px-[25px] py-[15px] text-sm font-semibold text-white shadow-lg transition-all duration-300 ease-in-out hover:shadow-inner border hover:text-dark-blue hover:bg-white">
                            LOGIN
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='lg:hidden flex gap-2 sm:gap-5 items-center'>
                        <LanguageSwitcher />
                        <button onClick={toggleMenu} className='lg:hidden block'>
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`fixed inset-x-0 top-0 transform overflow-hidden bg-white transition-all duration-300 ease-in-out lg:hidden ${isMenuOpen ? 'h-screen opacity-100' : 'h-0 opacity-0'}`}>
                    <div className="space-y-1 px-3.5 pb-3 pt-2">
                        <div className='lg:hidden flex py-3 items-center justify-between w-full'>
                            <Link href="/">
                                <Image src='/assets/logo.svg' alt='logo' width={190} height={36.37} className='sm:w-[190px] sm:h-[36px] w-[170px]' />
                            </Link>
                            <button onClick={toggleMenu} className='lg:hidden block'>
                                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                            </button>
                        </div>

                        {navLinks.map((link, index) => (
                            <div key={link.name}>
                                {link.dropdown ? (
                                    <>
                                        <button
                                            onClick={() => toggleDropdown(link.name)}
                                            className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium text-gray-700 transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                                                }`}
                                            style={{ transitionDelay: `${index * 100}ms` }}
                                        >
                                            {link.name}
                                            <ChevronDown className="ml-1 h-4 w-4" />
                                        </button>
                                        {activeDropdown === link.name && (
                                            <div className="pl-6">
                                                {link.dropdown.map((subLink, subIndex) => (
                                                    <Link
                                                        key={subLink.name}
                                                        href={subLink.href}
                                                        className={`block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                                                            }`}
                                                        style={{ transitionDelay: `${(index * 100) + ((subIndex + 1) * 50)}ms` }}
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        {subLink.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className={`block transform rounded-md px-3 py-2 text-base font-medium text-gray-700 transition-all duration-300 hover:bg-gray-100 hover:text-gray-900 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                                            }`}
                                        style={{ transitionDelay: `${index * 100}ms` }}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <div className="mt-4 space-y-2 px-3">
                            <Link
                                href="/signup"
                                className={`block w-full transform rounded-full border bg-white px-6 py-2 text-center text-sm font-medium text-gray-900 shadow-sm transition-all duration-300 hover:bg-gray-100 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${navLinks.length * 100}ms` }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                SIGN UP
                            </Link>
                            <Link
                                href="/login"
                                className={`block w-full transform rounded-full bg-dark-blue px-6 py-2 text-center text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800 ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${(navLinks.length + 1) * 100}ms` }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                LOGIN
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

