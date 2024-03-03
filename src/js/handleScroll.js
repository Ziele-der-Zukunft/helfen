const handleScroll = (callback) => {
    const scrollHandler = () => {
      const isScrolled = window.scrollY > 50;
      callback(isScrolled);
    };
  
    window.addEventListener('scroll', scrollHandler);
  
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  };
  
  export default handleScroll;
  