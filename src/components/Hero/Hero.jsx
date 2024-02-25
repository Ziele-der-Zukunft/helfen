import css from "./Hero.module.css";
import heroImg from "../../images/Hero.jpg"

const Hero = () => {
  return (
    <div className={css.heroWrap}>
      <div className={css.heroTextWrap}>
        <h1 className={css.heroTitle}>
          GEMEINNÜTZIGER VEREIN „ZIELE DER ZUKUNFT E.V.“
        </h1>
        <p className={css.heroText}>
          wurde im Jahr 2022 von Bürgern aus der Ukraine und Deutschland
          gegründet, nachdem Russland eine umfangreiche militärische
          Intervention in der Ukraine unternommen hatte. Unser Team hat sich zum
          Ziel gesetzt, humanitäre Unterstützung in der Ukraine bereitzustellen
          und die Integration ukrainischer Bürgerinnen und Bürger in Erfurt und
          Deutschland zu fördern.
        </p>
      </div>
      <div className={css.heroImgWrap}>
        <img src={heroImg} alt="Ukrainians with a flag" width="100%"/>
      </div>
    </div>
  );
};

export default Hero;
