import styles from './styles/card.module.css';
import '../i18next';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line react/prop-types
const Card = ({ img, title, text }) => {
	const { t } = useTranslation();

	return (
		<div className={styles['container']}>
			<div className={styles['content']}>
				<img src={img} alt='#' className={styles['card_img']} />
				<div className={styles['card_title']}>{t([title])}</div>
			</div>
			<div className={styles['card_text']}>{t([text])}</div>
		</div>
	);
};

export default Card;
