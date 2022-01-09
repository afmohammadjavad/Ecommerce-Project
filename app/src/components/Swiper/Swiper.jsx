import ProductCard from "../../redux/products/ProductCard/ProductCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from "swiper";
// install Swiper modules
// SwiperCore.use([Pagination]);
// SwiperCore.use([Navigation]);
SwiperCore.use([Navigation, Pagination]);

const MySwiper = ({ data }) => {
  const newData = data.slice(0, 10);

  const styles = {
    paddingLeft: 75,
    paddingBottom: 50,
    marginBottom: 20,
    borderBottom: "1px solid #aaa",
  };

  const breakPoints = {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  };
  // const breakPoints = {
  //   640: {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   768: {
  //     slidesPerView: 4,
  //     spaceBetween: 40,
  //   },
  //   1024: {
  //     slidesPerView: 5,
  //     spaceBetween: 50,
  //   },
  // };

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={50}
      pagination={{
        clickable: true,
      }}
      breakpoints={breakPoints}
      style={styles}
      navigation={true}
      // spaceBetween={50}
      // slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {newData.map((item) => (
        <SwiperSlide key={item.id}>
          <ProductCard item={item} swiper />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default MySwiper;
