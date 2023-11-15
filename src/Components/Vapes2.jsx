import React, {useState} from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Mintice from "../images/MintIce.png";
import Mixedberries from "../images/MixedBerries.png";
import Peachice from "../images/PeachIce.png";
import Watermelonice from "../images/WatermelonIce.png";
import Strawberryice from "../images/StrawberryIce.png";
import Mixedcolor from "../images/mixedberriescolor.png";
import Peachcolor from "../images/Peachcolor.png";
import Watermeloncolor from "../images/watermeloncolor.png";
import Greenicon from "../images/greenicon.png";




// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';

export default function Vapesss() {
  const imageAndIconData = [
    { largeImage: Mintice, icon: Greenicon },
    { largeImage: Mixedberries, icon: Mixedcolor },
    { largeImage: Peachice, icon: Peachcolor },
    { largeImage: Watermelonice, icon: Watermeloncolor },
    { largeImage: Strawberryice, icon: Mixedcolor },
  ];
  
  const [selectedImageData, setSelectedImageData] = useState(imageAndIconData[0]);

  const handleClick = (index) => {
    setSelectedImageData(imageAndIconData[index]);
  };
  
  
  return (
    
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          
        <div className="containerVapes">
            <div className="left-contentVapes">
            <p className='Empireoverview' style={{ margin: '0px', padding: '0 700px 30px 0', fontSize:"23px"}}>Empire</p>
            <h1 className='Overviewh2'style={{  margin: '0 0 0px 0', padding: '0px 500px 40px 0', fontSize:"50px"}} >OVERVIEW</h1>

            <table className="details-table" >
            <tr>
            <td><p className="border-bottom2" > Weight </p></td>
            <td><p className='border-bottom3'>50gr <span>/ 0.5pd </span></p></td>
            </tr>
            <tr>
            <td><p className="border-bottom2" > Capacity </p></td>
            <td><p className='border-bottom3'>50gr <span>/ 0.5pd </span></p></td>
            </tr>
            <tr>
            <td><p className="border-bottom2" > Dimension </p></td>
              <td><p className='border-bottom3'>50gr <span>/ 0.5pd </span></p></td>
            </tr>
            <tr>
            <td><p className="border-bottom2" > Type </p></td>
            <td><p className='border-bottom3'>50gr <span>/ 0.5pd </span></p></td>
            </tr>
            <tr>
            <td><p className="border-bottom2" > Availabity </p></td>
            <td><p className='border-bottom3'>50gr <span>/ 0.5pd </span></p></td>
            </tr>
            
          </table>
          </div>
          
          <div className="right-content">
              <div className='Productimages'>
              <img
               src={selectedImageData.largeImage} height="290px" width="300px"  alt="#" />
              </div>
              <div className='Producticons'>
          {imageAndIconData.map((data, i) => (
            <div className='thumbnailVapes' key={i}>
              <img
                className={selectedImageData === data ? 'clicked' : ''}
                src={data.icon}
                onClick={() => handleClick(i)}
                alt="#"
              />
            </div>
             ))}
             </div>
             </div>
             </div>
        </SwiperSlide>
        <SwiperSlide>
          <h1>Slide2</h1></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
      
    </>
  );
}
