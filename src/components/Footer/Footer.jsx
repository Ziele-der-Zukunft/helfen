import css from "./Footer.module.css";
import Contacts from "../Contacts/Contacts.jsx";
import SocialMedia from "../SocialMedia/SocialMedia.jsx";

const Footer = () => {
  return (
    <div className={css.footerWrap}>
      <Contacts />
      <SocialMedia />
    </div>
  );
};

export default Footer;
