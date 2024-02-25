import css from "./Contacts.module.css";

const Contacts = () => {
  return (
    <div className={css.contactsWrap}>
      <ul className={css.contacts}>
        <li className={css.contact}>Land: Deutschland</li>
        <li className={css.contact}>PLZ: 99084</li>
        <li className={css.contact}>Stadt: Erfurt</li>
        <li className={css.contact}>Adresse: Kronenburggasse 7</li>
        <li className={css.contact}>
          E-Mail:
          <a className={css.emailLinks} href="mailto:office@zielederzukunft.de">
            office@zielederzukunft.de
          </a>
        </li>
        <li className={css.contact}>
          Telefon:
          <a className={css.phoneLinks} href="tel:+4917662721299">
            +49 176 62721299
          </a>
        </li>
        <li className={css.contact}>Gerichtsstand: Amtsgericht Erfurt</li>
        <li className={css.contact}>Registerzeichen: VR 163184</li>
        <li className={css.contact}>Bank: Sparkasse Mittelthüringen</li>
        <li className={css.contact}>IBAN: DE 1282 0510 0001 6315 1105</li>
        <li className={css.contact}>BIC: HELADEF1WEM</li>
      </ul>
    </div>
  );
};

export default Contacts;
