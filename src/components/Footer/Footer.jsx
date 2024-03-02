import css from "./Footer.module.css";
import Contacts from "../Contacts/Contacts.jsx";
import SocialMedia from "../SocialMedia/SocialMedia.jsx";

const Footer = ({language}) => {
  return (
    <div className={css.footerWrap}>
      <Contacts language={language}/>
      <SocialMedia />
    </div>
  );
};

export default Footer;
