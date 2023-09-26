import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import {BsFillMoonStarsFill, BsFacebook, BsLinkedin, BsGithub, BsWhatsapp, BsTwitter} from 'react-icons/bs'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'

const Navbar = ( {handleDarkToggle} ) => {
const [nav, setNav] = useState()
const [scroll, setScroll] = useState(false)
const [time, setTime]=useState(new Date())

const toggleNav = () => {
    setNav(!nav)
}

// navbar functionality 
useEffect(() => {
    const handleScroll = () => {
        if(window.scrollY > 0) {
            setScroll(true)
        }
        else {
            setScroll(false)
        }
    }
    window.addEventListener('scroll', handleScroll); 
    return () => window.removeEventListener('scroll', handleScroll)
},[])

// clock 
useEffect(() => {
    const interval = setInterval(() => {
        setTime(new Date())
    }, [1000])
    return () => clearInterval(interval)
}, [])

  return (
    
    // Menu for the md, lg, and xl screens
    <div className={`w-full h-32 z-10 fixed ${scroll? 'shadow-md bg-[#f8f9fa] dark:bg-black' : ''}`}>
        <div className='w-full h-full max-w-[1000px] mx-auto flex justify-between px-4 items-center '>
            <h1 className='text-4xl font-bold text-[var(--primary2)] cursor-pointer  hover:text-[var(--secondary2)]'><Link to="home" smooth={true} duration="700">Mark</Link></h1>
            <div className='hidden md:flex'>
                <Link to="home" className='links' smooth={true} duration="700" activeClass='active-link' spy={true}>Home</Link>
                <Link to="contact" className='links' smooth={true} duration="700" activeClass='active-link' spy={true}>Contact</Link>
                <Link to="ourServices" className='links' smooth={true} duration="700" activeClass='active-link' spy={true}>OurServices</Link>
                <Link to="bookASlot" className='links' smooth={true} duration="700" activeClass='active-link' spy={true}>BookASlot</Link>
                <Link to="footer" className='links' smooth={true} duration="700" activeClass='active-link' spy={true}>Footer</Link>
                <button onClick={handleDarkToggle} className='ml-4 dark:text-[--primary1]'><BsFillMoonStarsFill /></button>
            </div>
            <div className='dark:text-[var(--primary1)]'>
                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false })}
            </div>
       
        {/* Mobile menu  */}
            <div className='md:hidden flex'>
                <div className='mr-10 mt-1'>
                    <button onClick={handleDarkToggle} className='dark:text-[--primary1]'><BsFillMoonStarsFill /></button>   
                </div>
                <div onClick={toggleNav} className="z-10">
                    {!nav? <AiOutlineMenu size={25} className="dark:text-[var(--primary1)] hamburger"/> : <AiOutlineClose size={25} className="text-[var(--secondary1)] hamburger"/>}
                </div>
            </div>
            <div className={`flex flex-col absolute left-0 top-0 px-4 py-11 w-full h-screen bg-[var(--secondary2)] transform-translate duration-700 ease-in-out dark:bg-[#000] ${!nav? '-translate-y-full' : 'translate-y-0'}`}>
                <h1 className='text-4xl font-bold mb-2 dark:text-[var(--primary2)] hover:text-[var(--primary1)] cursor-pointer dark:hover:text-[var(--secondary2)]'><Link onClick={toggleNav} to="home" smooth={true} duration="700">Mark</Link></h1>
                <Link onClick={toggleNav} to="home" className='mob-links' smooth={true} duration="700" activeClass='active-link' spy={true}>Home</Link>
                <Link onClick={toggleNav} to="contact" className='mob-links' smooth={true} duration="700" activeClass='active-link' spy={true}>Contact</Link>
                <Link onClick={toggleNav} to="ourServices" className='mob-links' smooth={true} duration="700" activeClass='active-link' spy={true}>OurServices</Link>
                <Link onClick={toggleNav} to="bookASlot" className='mob-links' smooth={true} duration="700" activeClass='active-link' spy={true}>BookASlot</Link>
                <Link onClick={toggleNav} to="footer" className='mob-links' smooth={true} duration="700" activeClass='active-link' spy={true}>Footer</Link>
                <div className='flex justify-evenly mt-6 text-3xl dark:text-[var(--primary1)] max-w-[600px]'>
        
        {/* Social media icons */}
                    <a href="https://www.linkedin.com/in/david-mwai-345a79259/" target="_blank"><BsLinkedin className='icon-mob'/></a>
                    <a href="/"><BsFacebook className='icon-mob'/></a>
                    <a href="/"><BsTwitter className='icon-mob'/></a>
                    <a href="/"><BsWhatsapp className='icon-mob'/></a>
             </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar