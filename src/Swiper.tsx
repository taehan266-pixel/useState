// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

export default () => {
  const bannerArray = [
    {
      imgurl: "https://fourlab.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/f8d0b47ad379bccc6e217ea6aea8716f.jpg",
      title: "블랙데이 단돈 만원으로",
      button: "시즌이벤트"
    },
    {
      imgurl: "https://fourlab.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/61bf378950639b41f7f9871d4131a744.jpg",
      title: "회원혜택기간",
      button: "혜택보기"
    },
    {
      imgurl: "https://fourlab.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/3f5e3477cd29d858d3b2cd6b6b46a1ca.jpg",
      title: "신상품 세트 출시",
      button: "신상품"
    },
    {
      imgurl: "https://fourlab.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/547b35760374d0039a66a824b61d81d5.jpg",
      title: "포랩 세트 출시",
      button: "포랩"
    },
    {
      imgurl: "https://fourlab.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/f8d0b47ad379bccc6e217ea6aea8716f.jpg",
      title: "블랙데이 단돈 만원으로",
      button: "시즌이벤트"
    },
    {
      imgurl: "https://fourlab.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/61bf378950639b41f7f9871d4131a744.jpg",
      title: "회원혜택기간",
      button: "혜택보기"
    },
    {
      imgurl: "https://fourlab.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/3f5e3477cd29d858d3b2cd6b6b46a1ca.jpg",
      title: "신상품 세트 출시",
      button: "신상품"
    },
    {
      imgurl: "https://fourlab.co.kr/web/upload/appfiles/ZaReJam3QiELznoZeGGkMG/547b35760374d0039a66a824b61d81d5.jpg",
      title: "포랩 세트 출시",
      button: "포랩"
    }
  ];

  return (
    <Swiper
      modules={[Autoplay]} 
      spaceBetween={30}
      slidesPerView={1.5}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      style={{ marginTop: '50px' }}
      breakpoints={{
        0: {
          slidesPerView: 1.2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        1440:{
          slidesPerView: 2.5,
          spaceBetween: 30,
        }
      }}  
    >
      {bannerArray.map((v, i) => (
        <SwiperSlide
          key={i}
          style={{
            height: 'calc(100vh - 100px)',
            backgroundImage: `url(${v.imgurl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '30px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <h2 style={{ fontSize: '60px', color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>
            {v.title}
          </h2>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};