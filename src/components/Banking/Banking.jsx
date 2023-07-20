import { useSelector } from 'react-redux';
import sprite from '../../images/icons.svg'
import css from './Banking.module.css';

const Banking = () => {
  const language = useSelector(state => state.language);
  if (language === 'en') {
    return (<div className={css.banking}>
        <h2 className={css.visuallyHidden}>Support our foundation</h2>
        <p className={css.bankingIban}>
          Sparkasse Mittelthüringen: (IBAN:{' '}
          <span className={css.bankingIbanAccent}>
            DE 1282 0510 0001 6315 1105
          </span>
          , BIC: HELADEF1WEM)
        </p>
        <div className={css.bankingThumb}>
          <p className={css.donate}>
            Support our foundation through the platform
          </p>
          <a
            href="https://www.betterplace.org/de/projects/117908?utm_campaign=email-notifications&utm_medium=betterplace-org--p117908&utm_source=project_manager_notifier-project_activated_message"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={css.donateLink}
          >
            <svg width="120" height="19" className={css.donateIcon}>
              <use href={`${sprite}#betterplace`}></use>
            </svg>
          </a>
        </div>
    </div>)
    
  } else if (language === 'ua') {
    return (<div className={css.banking}>
        <h2 className={css.visuallyHidden}>Допомога фонду</h2>
        <p className={css.bankingIban}>
          Sparkasse Mittelthüringen: (IBAN:{' '}
          <span className={css.bankingIbanAccent}>
            DE 1282 0510 0001 6315 1105
          </span>
          , BIC: HELADEF1WEM)
        </p>
        <div className={css.bankingThumb}>
          <p className={css.donate}>Підтримати наш фонд через платформу</p>
          <a
            href="https://www.betterplace.org/de/projects/117908?utm_campaign=email-notifications&utm_medium=betterplace-org--p117908&utm_source=project_manager_notifier-project_activated_message"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={css.donateLink}
          >
            <svg width="120" height="19" className={css.donateIcon}>
              <use href={`${sprite}#betterplace`}></use>
            </svg>
          </a>
        </div>
    </div>)
  } else {
    return (
    <div className={css.banking}>
        <h2 className={css.visuallyHidden}>Unterstützen Sie unsere Stiftung</h2>
        <p className={css.bankingIban}>
          Sparkasse Mittelthüringen: (IBAN:{' '}
          <span className={css.bankingIbanAccent}>
            DE 1282 0510 0001 6315 1105
          </span>
          , BIC: HELADEF1WEM)
        </p>
        <div className={css.bankingThumb}>
          <p className={css.donate}>
            Unterstützen Sie unsere Stiftung über die Plattform
          </p>
          <a
            href="https://www.betterplace.org/de/projects/117908?utm_campaign=email-notifications&utm_medium=betterplace-org--p117908&utm_source=project_manager_notifier-project_activated_message"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={css.donateLink}
          >
            <svg width="120" height="19" className={css.donateIcon}>
              <use href={`${sprite}#betterplace`}></use>
            </svg>
          </a>
        </div>
    </div>)
  }
};

export default Banking;
