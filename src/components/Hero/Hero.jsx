import css from './Hero.module.css';
import heroImg from '../../images/Hero.jpg';

const Hero = ({ language }) => {
  const title =
    language === 'de'
      ? 'GEMEINNÜTZIGER VEREIN „ZIELE DER ZUKUNFT E.V.“'
      : language === 'en'
      ? 'NON-PROFIT ORGANIZATION „GOALS OF THE FUTURE“'
      : 'ГРОМАДСЬКА ОРГАНІЗАЦІЯ „ЦІЛІ МАЙБУТНЬОГО“';
  const content =
    language === 'de'
      ? 'wurde im Jahr 2022 von Bürgern aus der Ukraine und Deutschland gegründet, nachdem Russland eine umfangreiche militärische Intervention in der Ukraine unternommen hatte. Unser Team hat sich zum Ziel gesetzt, humanitäre Unterstützung in der Ukraine bereitzustellen und die Integration ukrainischer Bürgerinnen und Bürger in Erfurt und Deutschland zu fördern.'
      : language === 'en'
      ? 'was founded in 2022 by citizens from Ukraine and Germany after Russia undertook extensive military intervention in Ukraine. Our team aims to provide humanitarian aid in Ukraine and promote the integration of Ukrainian citizens in Erfurt and Germany.'
      : 'була заснована у 2022 році громадянами з України та Німеччини після того, як Росія провела широкомасштабну військову інтервенцію в Україні. Наша команда має на меті надавати гуманітарну допомогу в Україні та сприяти інтеграції громадян України в Ерфурті та Німеччині.';

  return (
    <div className={css.heroWrap}>
      <div className={css.heroTextWrap}>
        <h1 className={css.heroTitle}>{title}</h1>
        <p className={css.heroText}>{content}</p>
      </div>
      <div className={css.heroImgWrap}>
        <img src={heroImg} alt="Ukrainians with a flag" width="100%" />
      </div>
    </div>
  );
};

export default Hero;

// const Hero = ({language}) => {
//   return (
//     <div className={css.heroWrap}>
//       <div className={css.heroTextWrap}>
//         <h1 className={css.heroTitle}>
//           GEMEINNÜTZIGER VEREIN „ZIELE DER ZUKUNFT E.V.“
//         </h1>
//         <p className={css.heroText}>
//           wurde im Jahr 2022 von Bürgern aus der Ukraine und Deutschland
//           gegründet, nachdem Russland eine umfangreiche militärische
//           Intervention in der Ukraine unternommen hatte. Unser Team hat sich zum
//           Ziel gesetzt, humanitäre Unterstützung in der Ukraine bereitzustellen
//           und die Integration ukrainischer Bürgerinnen und Bürger in Erfurt und
//           Deutschland zu fördern.
//         </p>
//       </div>
//       <div className={css.heroImgWrap}>
//         <img src={heroImg} alt="Ukrainians with a flag" width="100%"/>
//       </div>
//     </div>
//   );
// };

// export default Hero;
