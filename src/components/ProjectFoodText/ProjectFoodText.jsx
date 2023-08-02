import { useSelector } from 'react-redux';
import css from './ProjectFoodText.module.css';

const MainPageText = () => {
  const language = useSelector(state => state.language);
  return (
    <p className={css.text}>
      {language === 'de' ? (   
              `Die Wohltätigkeitsorganisation „Ziele der Zukunft e.V." 
              hat auf der Plattform Betterplace eine Spendenaktion 
              gestartet, um warme Mahlzeiten für zehntausende 
              Zivilisten in den Frontstädten und -dörfern 
              der Ukraine zu organisieren.`
      ) : language === 'ua' ? (
              `Благодійною організацією "Ziele der Zukunft e.V" 
              ініційовано збір коштів на платформі Betterplace 
              для надання гарячого харчування
              десяткам тисяч цивільних осіб у містах та селах 
              прифронтової зони на території України.`
      ) : (
              `The charity organisation "Ziele der Zukunft e.V" 
              on the Betterplace platform has initiated fundraising 
              to organise the provision of hot meals to tens of 
              thousands of civilians in frontline towns and 
              villages in Ukraine.`
    )} </p>
  )
}
export default MainPageText;
