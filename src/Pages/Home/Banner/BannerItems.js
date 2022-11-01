import React from 'react';

const BannerItems = ({slide}) => {
  const {image,id,prev,next} = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
    <div className='img-gradient'>
    <img src={image} className="w-full rounded-xl" />
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
     <h1 className='text-6xl font-bold text-white'>
      Affordable <br />
      Price for Car <br />
      Servicing
     </h1>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 w-2/5 top-1/2">
   <p className='text-white text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nulla rem veritatis. Obcaecati, nobis sint neque architecto dignissimos error ipsa.</p>
    </div>


    <div className="absolute flex justify-start transform -translate-y-1/2 left-24 w-2/5 top-3/4">
    <button className="btn btn-warning mr-5">Warning</button>
    <button className="btn btn-outline btn-warning">Warning</button>
    </div>






    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a> 
      <a href={`#slide${next}`} className="btn btn-circle">❯</a>
    </div>
  </div> 
  );
};

export default BannerItems;