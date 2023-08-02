import { useSelector } from 'react-redux';
import css from './ProjectBooksText.module.css';

const ProjectBooksText = () => {
  const language = useSelector(state => state.language);
  return (
    <p className={css.booksText}>
      {language === 'de' ? (   
              `Die Wohltätigkeitsorganisation „Ziele der Zukunft e.V.“ 
              hat gemeinsam mit der ukrainischen 
              Organisation CHOOGOLOM „Den“ 
              [Regionale Organisation Cherkassy „Öffentliche 
              Organisation von Menschen mit Behinderungen“] 
              eine Spendenaktion gestartet, um den Druck 
              von 1200 Fachbüchern in Braille-Schrift für 
              sehbehinderte und blinde Kinder zu finanzieren.`
      ) : language === 'ua' ? (
              `Благодійна організація "Ziele der Zukunft e.V" 
              разом з Українською організацією ЧООГОЛОМ "День" 
              ініціювали збір коштів для фінансування друку 1200 
              спеціалізованих підручників шрифтом Брайля 
              для слабозорих та незрячих дітей.`
      ) : (
              `The charity organisation "Ziele der Zukunft e.V" 
              together with the Ukrainian organisation 
              Cherkasy Regional Organisation Public Organisation 
              of People with Disabilities "Den (Day)" has 
              initiated fundraising to finance the printing 
              of 1,200 specialised Braille textbooks for 
              children who are visually impaired and blind.`
    )} </p>
  )
}
export default ProjectBooksText;
