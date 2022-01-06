// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import ProductCard from '../../redux/products/ProductCard/ProductCard'

const MySwiper =  ({data}) => {

  const newData = data.slice(0, 10);

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {
        newData.map(item => (
          <SwiperSlide>
            <ProductCard item={item} swiper />
          </SwiperSlide>
        ))
      }
    </Swiper>
  );
};

export default MySwiper;