import { Swiper as SwiperComponent } from 'swiper/react';
import { useWindowWidth } from '../../../../../app/hooks/useWindowWidth';

export function Swiper({ children }) {
  const windowWidth = useWindowWidth()
  return (
    <SwiperComponent
      spaceBetween={40}
      slidesPerView={windowWidth >= 500 ? 2.1 : 1.2}
    >
      {children}
    </SwiperComponent>
  );
};
