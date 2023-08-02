import SocialMedia from './SocialMedia/SocialMedia';
import Contacts from './Contacts/Contacts';
import css from './ContactsAndSocialMedia.module.css';

const ContactsAndSocialMedia = () => {
  return (
    <div className={css.wrap}>
      <Contacts />
      <SocialMedia />
    </div>
  );
};

export default ContactsAndSocialMedia;
