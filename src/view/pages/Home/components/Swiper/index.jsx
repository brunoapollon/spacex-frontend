import { Swiper as SwiperComponent } from 'swiper/react';

export function Swiper({ children }) {

  return (
    <SwiperComponent
      spaceBetween={40}
      slidesPerView={3}
    >
      {children}
    </SwiperComponent>
  );
};
