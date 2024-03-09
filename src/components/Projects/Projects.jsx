import SlideBooks from 'components/SlideBooks/SlideBooks.jsx';
import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import css from './Projects.module.css';

export const Projects = () => {
  const language = useSelector(state => state.language);

  const title =
    language === 'de'
      ? 'Unsere Projekte'
      : language === 'en'
      ? 'Our Projects'
      : 'Наші проєкти';

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
        slides-per-view="4"
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
          <SlideBooks/>
        </swiper-slide>
        <swiper-slide>
          <SlideBooks/>
        </swiper-slide>
        <swiper-slide>
          <SlideBooks/>
        </swiper-slide>
        <swiper-slide>
          <SlideBooks/>
        </swiper-slide>
        <swiper-slide>
          <SlideBooks/>
        </swiper-slide>
        <swiper-slide>
          <SlideBooks/>
        </swiper-slide>
        {/* <swiper-slide>
          <img
            src="https://res.cloudinary.com/dqmpdikvc/image/upload/v1691345107/cld-sample-3.jpg"
            alt="text3"
          />
        </swiper-slide> */}
        {/* <swiper-slide>
          <img
            src="https://res.cloudinary.com/dqmpdikvc/image/upload/v1691345106/cld-sample-2.jpg"
            alt="text4"
          />
        </swiper-slide> */}
        {/* <swiper-slide>
          <img
            src="https://res.cloudinary.com/dqmpdikvc/image/upload/v1691345106/cld-sample.jpg"
            alt="text5"
          />
        </swiper-slide>
        <swiper-slide>
          <p>« Lorem ipsum dolor sit amet, consectetur adipisci elit, 
            sed eiusmod tempor incidunt ut labore et dolore magna aliqua.»</p>
          <ul>
            <li>
              <img
                src="https://res.cloudinary.com/dqmpdikvc/image/upload/v1691345079/sample.jpg"
                alt="text6"
              />
            </li>
            <li>
              <img
                src="https://res.cloudinary.com/dqmpdikvc/image/upload/v1691345079/sample.jpg"
                alt="text6"
              />
            </li>
          </ul>
        </swiper-slide> */}
      </swiper-container>
    </div>
  );
};
