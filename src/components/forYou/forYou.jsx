import { useState, useEffect } from 'react';
import { Images } from '../data';
import { MdExpandMore } from "react-icons/md";
import { IoIosStar } from "react-icons/io";


const ForYou = () => {
  const [numImages, setNumImages] = useState(5);
  const [imageList, setImageList] = useState([]);

  useEffect(() => {
    setImageList(Images.slice(0, numImages));
  }, [numImages]);

  const loadMoreImages = () => {
    setNumImages(prevNum => prevNum + 5);
  };

  return (
    <div className='mt-14 mb-12 dark:bg-[#0f0f0f] dark:text-gray-100'>
      <div className='container'>
        <div className='text-center mb-10 max-w-[600]'>
          <p className='text-sm text-red-600'>For You</p>
          <h1 className='text-3xl font-bold'>Movies</h1>
          <p className='text-xs text-gray-400'>
            lorem ipsum dolor sit amet consectetur, adispisicing elit, sit asperiores modu sit asperiores modi
          </p>
        </div>
        <div className='relative'>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5 relative transition-all duration-200'>
            {imageList.map((data) => (
              <div
                key={data.id}
                className='group transition-all duration-200 hover:scale-105 cursor-pointer hover:border-2 hover:border-blue-600 rounded-md mb-5'
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className='h-[300px] w-[200px] object-cover rounded-md group-hover:scale-10 transition-all duration-300'
                />
                <p>{data.title} {data.id}</p>
                <p className='text-justify text-sm'>{data.description.slice(0, 20)}</p>
                <p className='text-sm text-white sm:absolute top-2 bg-black/80 sm:hidden group-hover:block p-2 rounded-md'>
                  Length: 1:30:12 <br /> Year: 2024 <br /> <IoIosStar className='text-yellow-400 inline'/> 4.5
                </p>
              </div>
            ))}
          </div>
          <button onClick={loadMoreImages} className='mt-4 px-2 py-2 bg-red-600/40 hover:bg-red-600/80 hover:scale-150 rounded-full text-white  absolute right-1/2 ' title='Load More'>
            <MdExpandMore className='text-3xl'/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForYou;
