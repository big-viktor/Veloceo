import styles from './styles/cardContact.module.css';
import { useTranslation } from 'react-i18next';
import '../i18next';

// eslint-disable-next-line react/prop-types
function CarContact({ title, adres, number, maill, map, mapHref }) {
	const { t } = useTranslation();
	return (
		<>
			<div className={styles['container_card_contact']}>
				<div className={styles['card_title']}>{t([title])}</div>
				<div className={styles['card_adres']}>{t([adres])}</div>
				<div className={styles['card_number']}>{t([number])}</div>
				<div className={styles['card_maill']}>{t([maill])}</div>
				<a href={t([mapHref])} className={styles['card_href_adres']}>
					{t([map])}
				</a>
			</div>
		</>
	);
}

export default CarContact;
