import { Images } from '../data';
import Slider from 'react-slick';

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-[#0f0f0f] dark:text-white duration-200'>
        {/* background pattern */}
        <div className='h-[700px] w-[700px] bg-red-500/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'></div>

        {/* hero image */}
        <div className='container pb-8 sm:pb-0'>
            <Slider {... settings}>
                {Images.map((data) => (
                    <div key = {data.id}>
                        <div className='grid grid-cols-1 sm:grid-cols-2'>
                            <div className='flex flex-col justify-center gap-2 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative  z-10'>
                                <h1 className = 'text-5xl sm:text-6xl lg:text-7xl font-bold ml-40'>{data.title} {data.id}</h1>
                                <p className = 'text-sm ml-20'>
                                    {data.description}
                                </p>
                                <div>
                                    <button
                                        className='bg-gradient-to-r from-red-300 to-red-600 hover:scale-105 duration-200 text-white py-2 px-4 rounded-full ml-[100px] '>Watch Now</button>
                                </div>
                            </div>

                        {/* image section */}
                            <div className='order-1 sm:order-2'>
                                <div className='relative z-10'>
                                    <img src={data.img} alt="hero" className='w-[300px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto'/>
                                </div>
                            </div>
                        </div>
                </div>

                ))}
                
            </Slider>
        </div>
    </div>
  )
}

export default Hero