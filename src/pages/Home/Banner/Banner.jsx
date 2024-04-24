import im1 from './1.jpg'
import im2 from './2.jpg'
import im3 from './3.jpg'
import im4 from './4.jpg'


const Banner = () => {
    return (
        <div className="carousel w-full h-[600px] rounded-xl">
            
  <div id="slide1" className="carousel-item relative w-full">
    <img src={im4} className="w-full rounded-xl" />
    
    <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
      <div className=' md:space-y-8 space-y-4 md:ps-20 p-10 '>
        <h1 className="md:text-6xl text-3xl font-bold text-white">Affordable <br /> Price For Car <br /> Servicing</h1>
        <p className='text-white'>There are many variations of passages of  available, But <br /> the majority have suffered alteration in some form</p>
        <div className=' flex gap-6'>
          <button className='px-3 py-2 font-semibold bg-[#FF3811] text-white text-center rounded-lg'>Discover More</button>
          <button className='border-2 px-3 text-white border-white'>Latest Project</button>
        </div>
      </div>
      
    </div>
    
    <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 bottom-0 justify-end gap-4">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
      
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={im2} className="w-full" />
    <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
      <div className=' md:space-y-8 space-y-4 md:ps-20 p-10 '>
        <h1 className="md:text-6xl text-3xl font-bold text-white">Affordable <br /> Price For Car <br /> Servicing</h1>
        <p className='text-white'>There are many variations of passages of  available, But <br /> the majority have suffered alteration in some form</p>
        <div className=' flex gap-6'>
          <button className='px-3 py-2 font-semibold bg-[#FF3811] text-white text-center rounded-lg'>Discover More</button>
          <button className='border-2 px-3 text-white border-white'>Latest Project</button>
        </div>
      </div>
      
    </div>
    
    <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 bottom-0 justify-end gap-4">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={im3} className="w-full" />
    <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
      <div className=' md:space-y-8 space-y-4 md:ps-20 p-10 '>
        <h1 className="md:text-6xl text-3xl font-bold text-white">Affordable <br /> Price For Car <br /> Servicing</h1>
        <p className='text-white'>There are many variations of passages of  available, But <br /> the majority have suffered alteration in some form</p>
        <div className=' flex gap-6'>
          <button className='px-3 py-2 font-semibold bg-[#FF3811] text-white text-center rounded-lg'>Discover More</button>
          <button className='border-2 px-3 text-white border-white'>Latest Project</button>
        </div>
      </div>
      
    </div>
    <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 bottom-0 justify-end gap-4">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={im1} className="w-full" />
    <div className="absolute flex items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
      <div className=' md:space-y-8 space-y-4 md:ps-20 p-10 '>
        <h1 className="md:text-6xl text-3xl font-bold text-white">Affordable <br /> Price For Car <br /> Servicing</h1>
        <p className='text-white'>There are many variations of passages of  available, But <br /> the majority have suffered alteration in some form</p>
        <div className=' flex gap-6'>
          <button className='px-3 py-2 font-semibold bg-[#FF3811] text-white text-center rounded-lg'>Discover More</button>
          <button className='border-2 px-3 text-white border-white'>Latest Project</button>
        </div>
      </div>
      
    </div>
    <div className="absolute flex  transform -translate-y-1/2 left-5 right-5 bottom-0 justify-end gap-4">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;