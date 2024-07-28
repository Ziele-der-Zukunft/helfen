import css from './Donations.module.css';
import { useState } from 'react';
import text from './text.js';
import DonationItem from './DonationItem.jsx';


const Donations = () => {

  const [activeIndexes, setActiveIndexes] = useState(Array(text.length).fill(false));

  const toggleTextVisibility = i => {
    setActiveIndexes(prevIndexes => {
      const newIndexes = [...prevIndexes];
      newIndexes[i] = !newIndexes[i];
      return newIndexes;
    });
  };

  return (
    <div className={css.donationsWrap}>
      <ul className={css.donationsList}>
      {text.map((t, i) => (
          <DonationItem
            key={i}
            text={t}
            isActive={activeIndexes[i]}
            toggleTextVisibility={() => toggleTextVisibility(i)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Donations;




// import { useSelector } from 'react-redux';
// import css from './Donations.module.css';
// import photo1 from '../../images/ambulance_car_300x192.jpg';
// import photo2 from '../../images/food_for_the_social_kitchen_300x225.jpg';
// import photo3 from '../../images/equipment_for_a_rehabilitation_center_300x189.jpg';
// import sprite from '../../images/icons.svg';
// import { useState } from 'react';
// // import DonationItem from './DonationItem.jsx'

// const Donations = () => {
//   const language = useSelector(state => state.language);
//   const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
//   const toggleDescriptionVisibility = () => {
//     setIsDescriptionVisible(!isDescriptionVisible);
//   };

//   const wheels =
//     language === 'de'
//       ? 'Räder für Krankenwagen in der Ukraine'
//       : language === 'en'
//       ? 'Wheels for ambulances in Ukraine'
//       : 'Колеса для автомобілів швидкої допомоги в Україні';
//   const food =
//     language === 'de'
//       ? 'Lebensmittel für Sozialküchen'
//       : language === 'en'
//       ? 'Food for social kitchens'
//       : 'Продукти для соціальних кухонь';
//   const equipment =
//     language === 'de'
//       ? 'Geräte für ein Rehabilitationszentrum'
//       : language === 'en'
//       ? 'Equipment for a rehabilitation centre'
//       : 'Обладнання для реабілітаційного центру';
//   const donate =
//     language === 'de'
//       ? 'Jetzt spenden'
//       : language === 'en'
//       ? 'Donate now'
//       : 'Пожертвувати зараз';

//   return (
//     <div className={css.donationsWrap}>
//       <ul className={css.donationsList}>
//         <li className={css.donationsListItem}>
//           <div className={css.donationPhotoWrap}>
//             <img src={photo1} alt={wheels} className={css.donationPhoto} />
//           </div>
//           <div className={css.donationText}>
//             <h3 className={css.donationTitle}>{wheels}</h3>
//             <svg
//               className={css.iconDown}
//               width="20"
//               height="20"
//               onClick={toggleDescriptionVisibility}
//             >
//               <use href={`${sprite}#icon-chevrons-down`}></use>
//             </svg>
//           </div>
//           {isDescriptionVisible && (
//             <p className={css.donationDiscription}>
//               Da die Stadt Charkiw nahe der Grenze zur russischen Föderation
//               liegt und die anhaltende Aggressionzu einer Beschädigung der
//               Straßen und der Infrastruktur führt, müssen ständig die Räder der
//               Fahrzeuge erneuert werden für den Transport von Kranken und
//               Verwundeten. Auf der Grundlage der aus der Ukraine eingegangenen
//               Anfragen hat das Team der Wohltätigkeitsorganisation Ziele der
//               Zukunft eine Spendensammlung für den Kauf von Winterreifen für
//               Krankenwagen und Intensivpflegefahrzeuge initiiert, die an
//               medizinische Einrichtungen in der Stadt und Region Charkiw in der
//               Ukraine geliefert werden.
//             </p>
//           )}
//           <a
//             href="https://www.betterplace.org/de/projects/130144?utm_campaign=user_share&utm_medium=ppp_sticky&utm_source=Link"
//             target="_blank"
//             rel="noopener noreferrer nofollow"
//             className={css.donationLink}
//           >
//             {donate}
//           </a>
//         </li>
//         <li className={css.donationsListItem}>
//           <div className={css.donationPhotoWrap}>
//             <img src={photo2} alt={food} className={css.donationPhoto} />
//           </div>
//           <div className={css.donationText}>
//             <h3 className={css.donationTitle}>{food}</h3>
//             <svg
//               className={css.iconDown}
//               width="20"
//               height="20"
//               onClick={toggleDescriptionVisibility}
//             >
//               <use href={`${sprite}#icon-chevrons-down`}></use>
//             </svg>
//           </div>
//           {isDescriptionVisible && (
//             <p className={css.donationDiscription}>
//               Aufgrund der militärischen Aggression auf dem Gebiet der Ukraine
//               sind Tausende Zivilisten von einem friedlichen Leben abgeschnitten
//               geblieben. Der Verein „Ziele der Zukunft e.V.“ hat über die
//               Plattform Betterplace.org die Geldsammlung initiiert, um
//               Lebensmittel an die Kharkiv Peaceful Sky Charitable Foundation in
//               Kharkiv, Ukraine, zu spenden. Diese Spenden werden die
//               Sozialküchen und Hilfsprogramme in Grenzstädten und Dörfern der
//               Ukraine, insbesondere in Charkiw und in der Nähe der Frontlinie
//               unterstützen. Die Kharkiv Peaceful Sky Charitable Foundation
//               betreibt bereits 4 Sozialküchen, 2 Bäckereien und mehr als 10 Hubs
//               für Bedürftige in der Region. Die Spenden tragen dazu bei, die
//               Grundbedürfnisse der Bevölkerung zu erfüllen und die wichtige
//               Arbeit der ehrenamtlichen Helferinnen und Helfer zu unterstützen.
//             </p>
//           )}
//           <a
//             href="https://www.betterplace.org/de/projects/117908?utm_campaign=email-notifications&utm_medium=betterplace-org--p117908&utm_source=project_manager_notifier-project_activated_message"
//             target="_blank"
//             rel="noopener noreferrer nofollow"
//             className={css.donationLink}
//           >
//             {donate}
//           </a>
//         </li>
//         <li className={css.donationsListItem}>
//           <div className={css.donationPhotoWrap}>
//             <img src={photo3} alt={equipment} className={css.donationPhoto} />
//           </div>
//           <div className={css.donationText}>
//             <h3 className={css.donationTitle}>{equipment}</h3>
//             <svg
//               className={css.iconDown}
//               width="20"
//               height="20"
//               onClick={toggleDescriptionVisibility}
//             >
//               <use href={`${sprite}#icon-chevrons-down`}></use>
//             </svg>
//           </div>
//           {isDescriptionVisible && (
//             <p className={css.donationDiscription}>
//               Auf Anfrage von Partnern in der Ukraine hat der Verein „Ziele der
//               Zukunft e.V“ eine Spendenaktion ins Leben gerufen, um Mittel für
//               den Kauf notwendiger medizinischer Geräte für das
//               Rehabilitationszentrum „Tvoy Doktor“ in Charkiw zu sammeln.
//             </p>
//           )}
//           <a
//             href="https://secure.betterplace.org/de/donate/platform/projects/131089"
//             target="_blank"
//             rel="noopener noreferrer nofollow"
//             className={css.donationLink}
//           >
//             {donate}
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Donations;

// import { useSelector } from 'react-redux';
// import sprite from '../../images/icons.svg';