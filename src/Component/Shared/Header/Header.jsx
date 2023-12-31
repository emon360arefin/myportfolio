import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import debounce from 'lodash.debounce';
import { Link as LinkScroll } from "react-scroll";

const Header = () => {

    let [scroll, setScroll] = useState(false)

    useEffect(() => {
        const handleScroll = debounce(() => {
            setScroll(window.scrollY > 90);
        }, 5);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const items = [
        { id: 1, name: 'Home', path: 'home' },
        { id: 2, name: 'About', path: 'about' },
        { id: 3, name: 'Projects', path: 'projects' },
        { id: 4, name: 'Photography', path: 'photography' }
    ];

    const activeClass = 'select-none  text-[17px] text-left my-2 border-0 md:border-b-[1.5px] border-primary-text  pb-1  text-primary-text font-fahkwang cursor-pointer'

    const inactiveClass = 'select-none ml-0 md:mr-6 text-[17px] text-left my-2  border-0 md:border-b-[1.5px] border-transparent  px-2 pb-1 py-px text-primary-text font-fahkwang cursor-pointer'

    let [open, setOpen] = useState(true)

    return (
        <div className={`${scroll ? 'bg-[#e9f0f8f0] shadow-sm backdrop-blur' : ' bg-transparent shadow-none '}  header z-[15] sticky top-0 `}>
            <div className={`max-w-6xl mx-auto flex transition-all duration-500 ease-in-out ${scroll ? 'h-[60px] md:h-[70px]' : 'h-[75px] md:h-[90px]'}`}>
                <div className='w-full md:w-2/12 bg-[#e9f0f8f0] md:bg-transparent  py-4 flex items-center z-20'>

                    <NavLink className='  px-4 flex items-center ' to='/'> <img className={`w-[20%] transition-all duration-500 ease-in-out ${scroll ? 'md:w-[30%]' : 'md:w-[35%]'}`} src="/Favicon.png" alt="" /></NavLink>

                    <a className={`bg-[#637289] text-white px-4 flex items-center justify-center mr-10 transition-all duration-300 ease-in-out md:hidden ${scroll ? 'h-8' : 'h-[36px]'}`}
                        target="_blank" rel='noreferrer'
                        href="https://drive.google.com/file/d/1qqM_kd6cRlmAxxXgIKTlfE6DpKGZpG6t/view?usp=drive_link">Resume</a>

                    <div onClick={() => setOpen(!open)} className='md:hidden mr-4 text-2xl text-primary-text flex items-center cursor-pointer'>
                        {open ? <RxHamburgerMenu /> : <RxCross2 />}
                    </div>


                </div>
                <ul className={`w-full md:w-10/12 md:backdrop-blur-0  text-right absolute md:static bg-[#e9f0f8f9] shadow-sm md:shadow-none backdrop-blur-2xl  md:bg-transparent  flex md:flex-row flex-col md:items-center justify-end items-start z-10 gap-4 px-4  pb-4 md:py-4 transition-all duration-500 ease-in-out  ${open ? 'top-[-450px]' : 'top-12'} ${scroll ? 'pt-6' : 'pt-10'}`}>
                    {
                        items.map(item =>
                            <NavLink
                                key={item.id}
                            >
                                <LinkScroll
                                    onClick={() => setOpen(!open)}
                                    to={item.path}
                                    spy={true}
                                    smooth={true}
                                    offset={-90}
                                    duration={100}
                                    activeClass={activeClass}
                                    className='px-2 text-[17px] '

                                > {item.name}</LinkScroll>
                            </NavLink>)
                    }

                    <a className='bg-[#637289] text-white px-4 py-1 hidden md:block'
                        target="_blank" rel='noreferrer'
                        href="https://drive.google.com/file/d/1qqM_kd6cRlmAxxXgIKTlfE6DpKGZpG6t/view?usp=drive_link">Resume</a>
                </ul>
            </div>
        </div>
    );
};

export default Header;