import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import debounce from 'lodash.debounce';

const Header = () => {

    let [scroll, setScroll] = useState(false)

    useEffect(() => {
        const handleScroll = debounce(() => {
            setScroll(window.scrollY > 90);
        }, 50);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const items = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Projects', path: '/projects' },
        { id: 4, name: 'Photography', path: '/photography' }
    ];

    const activeClass = 'select-none ml-0 md:mr-6 text-[17px] text-left my-2 border-0 md:border-b-[1.5px] border-primary-text px-2 pb-1  text-primary-text font-fahkwang'
    const inactiveClass = 'select-none ml-0 md:mr-6 text-[17px] text-left my-2  border-0 md:border-b-[1.5px] border-transparent  px-2 pb-1 py-px text-primary-text font-fahkwang'

    let [open, setOpen] = useState(true)

    return (
        <div className={`${scroll ? 'bg-[#ffffffa9] shadow-sm backdrop-blur-xl' : ' bg-transparent shadow-none '}  header z-[15] sticky top-0 -mb-24`}>
            <div className={`max-w-6xl mx-auto flex transition-all duration-500 ease-in-out ${scroll ? 'h-auto md:h-[70px]' : 'h-auto md:h-[90px]'}`}>
                <div className='w-full md:w-2/12 bg-slate-100 md:bg-transparent  py-4 flex z-20'>
                    <Link className='  px-4 flex items-center ' to='/'> <img className={`w-1/12 transition-all duration-500 ease-in-out ${scroll ? 'md:w-[30%]' : 'md:w-[35%]'}`} src="/logo.png" alt="" /></Link>
                    <div onClick={() => setOpen(!open)} className='md:hidden mr-4 text-2xl text-primary-text flex items-center cursor-pointer'>
                        {open ? <RxHamburgerMenu /> : <RxCross2 />}
                    </div>
                </div>
                <ul className={`w-full md:w-10/12 md:backdrop-blur-0 opacity-[95%]  text-right absolute md:static bg-[#ffffffdd] backdrop-blur-xl  md:bg-transparent  flex md:flex-row flex-col md:items-center justify-end z-10 gap-2 px-4 pt-6 pb-2 transition-all duration-500 ease-in-out ${open ? 'top-[-450px]' : 'top-12'}`}>

                    {
                        items.map(item => <NavLink onClick={() => setOpen(!open)} className={({ isActive }) => isActive ? activeClass : inactiveClass} key={item.id} to={item.path}> {item.name}</NavLink>)
                    }

                </ul>
            </div>



        </div>
    );
};

export default Header;