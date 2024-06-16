import SlideBooks from 'components/Projects/SlideBooks.jsx';
import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import css from './Projects.module.css';
import SlideSozialküche from 'components/Projects/SlideSocialKitchens.jsx';
import SlideHumanitarianАid from 'components/Projects/SlideHumanitarianАid.jsx';

const Projects = () => {
  const language = useSelector(state => state.language);

  const title =
    language === 'de'
      ? 'Unsere PROJEKTE'
      : language === 'en'
      ? 'Our PROJECTS'
      : 'Наші ПРОЄКТИ';

  const swiperElRef = useRef(null);

  useEffect(() => {
    swiperElRef.current.addEventListener('swiperprogress', e => {
      const [
        // swiper,
        progress,
      ] = e.detail;
      console.log(progress);
    });

    swiperElRef.current.addEventListener('swiperslidechange', e => {
      console.log('slide changed');
    });
  }, []);

  return (
    <div className={css.swiperContainer}>
      <h2 className={css.projectsTitle}>{title}</h2>
      <swiper-container
        ref={swiperElRef}
        breakpoints={
          JSON.stringify({
              // 100:{
              //     slidesPerView: 1,
              // },
              640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
              },
              768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
              },
  
              1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
              }
          })
      }
        navigation="true"
        keyboard="true"
        space-between="20"
        scrollbar-hide="true"
        mousewheel-invert="true"
        grab-cursor="true"
      >
        <swiper-slide>
          <SlideBooks/>
        </swiper-slide>
        <swiper-slide>
          <SlideSozialküche/>
        </swiper-slide>
        <swiper-slide>
          <SlideHumanitarianАid/>
        </swiper-slide>
        <swiper-slide>
          <SlideBooks/>
        </swiper-slide>
        <swiper-slide>
          <SlideBooks/>
        </swiper-slide>
      </swiper-container>
    </div>
  );
};

export default Projects