import css from "./LanguageSwitcher.module.css"
import sprite from '../../images/icons.svg'


const LanguageSwitcher = ({language, setLanguage}) => {

  return (
      <ul className={css.languageList}>
        <li className={`${css.languageListItem} ${language === "en" ? css.activeFlag : ""}`} onClick={() => setLanguage("en")}>
            <svg width="44" height="30">
              <use href={`${sprite}#usaflag`}></use>
            </svg>
        </li>
        <li className={`${css.languageListItem} ${language === "ua" ? css.activeFlag : ""}`} onClick={() => setLanguage("ua")}>
            <svg width="44" height="30">
              <use href={`${sprite}#ukrflag`}></use>
            </svg>
        </li>
        <li className={`${css.languageListItem} ${language === "de" ? css.activeFlag : ""}`} onClick={() => setLanguage("de")}>
            <svg width="44" height="30">
              <use href={`${sprite}#deflag`}></use>
            </svg>
        </li>
      </ul>
  )}

export default LanguageSwitcher;






//  ---- ----- ----- ------ -------- резерв оригінала -----------------------

// import css from "./SocialMedia.module.css"
// import sprite from '../../../images/icons.svg'
// import { useSelector } from "react-redux"

// const SocialMedia = () => {
//   const language = useSelector(state => state.language);
//   return (
//     <div className={css.socialMedia}>
//       <span className={css.socialMediaProposal}>{language === 'de'
//               ? `engagieren sie sich`
//               : language === 'ua'
//               ? `приєднуйтесь`
//               : `join us`}</span>
//       <ul className={css.socialList}>
//         <li className={css.socialListItem}>
//           <a
//             href="https://www.instagram.com/ziele_der_zukunft/?igshid=YmMyMTA2M2Y%3D"
//             target="_blank"
//             rel="noopener noreferrer nofollow"
//             className={css.socialListLink}
//           >
//             <svg width="20" height="20">
//               <use href={`${sprite}#instagram`}></use>
//             </svg>
//           </a>
//         </li>
//         <li className={css.socialListItem}>
//           <a
//             href="https://www.facebook.com/people/Charitable-organization-Ziele-der-Zukunft-eV/100087879377551/"
//             target="_blank"
//             rel="noopener noreferrer nofollow"
//             className={css.socialListLink}
//           >
//             <svg width="20" height="20">
//               <use href={`${sprite}#facebook`}></use>
//             </svg>
//           </a>
//         </li>
//       </ul>
//     </div>
//   )}

// export default SocialMedia;