import { useEffect } from 'react';

const useOverflowDetection = (ref, setFreeSpace, language) => {
  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        // Ширина видимої області контейнера (елемента, на який вказує `ref = headerRef`)
        const availableWidth = ref.current.clientWidth;

        // Масив дочірніх елементів контейнера
        const children = Array.from(ref.current.children);

        // Використана ширина всіма дочірніми елементами + gap + padding (припустимо 100 пікселів)
        const usedWidth = children.reduce((acc, child) => acc + child.getBoundingClientRect().width, 100);

        // Вільне місце в контейнері (не може бути від'ємним)
        const freeSpace = Math.max(availableWidth - usedWidth, 0);

        // Оновлення станів
        setFreeSpace(freeSpace);

        // Логування розмірів кожного дочірнього елемента
        const childrenSizes = children.map(child => child.getBoundingClientRect().width);
        console.log('%cuseOverflowDetection | Element sizes:', 'color: blue; font-weight: bold;', childrenSizes);

        // Логування вільного місця
        console.log('%cuseOverflowDetection | Free Space:', 'color: green; font-weight: bold;', freeSpace);

        // Логування розміру самого хедера
        console.log('%cuseOverflowDetection | Header size:', 'color: purple; font-weight: bold;', ref.current.getBoundingClientRect().width);
      }
    };

    window.addEventListener('resize', handleResize); // Додавання обробника події `resize`

    handleResize(); // Виклик обробника для початкового визначення розмірів
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };  // Видалення обробника події `resize` під час демонтування компонента
  }, [ref, setFreeSpace, language]);
};

export default useOverflowDetection;



//-------------------варіант без кількості px переповнення


// import { useEffect } from 'react';

// const useOverflowDetection = (ref, setIsOverflowing) => {
//   useEffect(() => {
//     const handleResize = () => {
//       if (ref.current) {
//         const isOverflowing = ref.current.scrollWidth > ref.current.clientWidth;
//         setIsOverflowing(isOverflowing);
//         if (isOverflowing) {
//           console.log("переповнення");
//         }
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     handleResize();

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [ref, setIsOverflowing]);
// };

// export default useOverflowDetection;