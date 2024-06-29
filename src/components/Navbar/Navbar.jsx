import Logo2 from '../../assets/Logo2.png';
import { IoMdSearch } from 'react-icons/io';
import { BiSolidMoviePlay } from 'react-icons/bi';
import DarkMode from './DarkMode.jsx';
import { Menu, movieGenres } from '../data';
import { RiArrowDropDownLine } from "react-icons/ri";
import Logo from '../../assets/Logo3.png'

const Navbar = () => {
  return (
    <div className='shadow-md bg-white'>
      {/* Upper Navbar */}
      <div className='py-2 dark:bg-[#000000] dark:text-white'>
        <div className='container flex justify-between items-center'>
          <div className='relative'>
            <a className='font-bold text-2xl sm:text-3xl flex gap-2' href="#">
              <img src={Logo} alt="Logo" className='w-20 absolute h-20 top-0 ml-10' />
              <img className="w-40 mr-3 hidden" src={Logo2} alt="Logo" />
              <span className='mt-3 m-0 text-[2rem] font-mono md:block hidden'>Movies</span>
            </a>
          </div>
          {/* search bar and watch Now button */}
          <div>
            <div className='group goo relative hidden sm:block'>
              <input type="text" placeholder='search' className='w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border-2 border-gray-300 px-3 py-1 focus:outline-none focus:border-[#1447ed] text-black dark:bg-black dark:text-gray-100' />
              <IoMdSearch className='absolute top-1/2 text-lg -translate-y-1/2 right-3 group-hover:text-[#f31a06] text-gray-500' />
            </div>
          </div>
          <button onClick={() => alert("loading movies...")} className='bg-red-600 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
            <span className='group-hover:block transition-all duration-200 text-bold font-mono hidden'>
              Watch Now!
            </span>
            <BiSolidMoviePlay className='text-2xl drop-shadow-sm cursor-pointer' />
          </button>
          
          {/* darkmode switch */}
          <DarkMode />
        </div>
      </div>

      {/* Lower Navbar */}
      <div className='flex justify-center dark:bg-[#0f0f0f] relative'>
        <ul className='sm:flex hidden items-center gap-8'>
          {Menu.map((data) => (
            <li key={data.id}>
              <a 
                // eslint-disable-next-line no-undef
                onClick={() => data.name === "For You" ? none : alert(`${data.name} loading...`)}
                className='inline-block px-4 bg-red-300 rounded-full m-4 border-1 hover:bg-white hover:border-red-300 hover:border-1 transition-all duration-150' href={data.link}>{data.name}</a>
            </li>
          ))}
          <li className='group relative'>
            <a href="#" className='px-4 dark:text-white hover:text-red-600 flex items-center'>Genre
              <RiArrowDropDownLine className='text-2xl transition-all duration-200 group-hover:rotate-180' />
            </a>
            <div className='absolute z-50 hidden group-hover:block w-[600px] rounded-md bg-white p-2 text-black shadow-md'>
              <ul className='flex flex-wrap gap-1'>
                {movieGenres.map((data) => (
                  <li key={data.id}>
                    <a 
                      onClick={() => alert(`${data.name} Ethiopian movies on the way...`)}
                      className='inline-block px-4 bg-red-300 rounded-full m-4 border-1 hover:bg-white hover:border-red-300 hover:border-1 transition-all duration-150' href={data.link}>{data.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
