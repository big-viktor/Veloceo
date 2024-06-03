import styles from './styles/CardImg.module.css';
import '../i18next';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line react/prop-types
const CardImg = ({ img, title, text }) => {
	const { t } = useTranslation();

	return (
		<div className={styles['container']}>
			<img src={img} alt='#' className={styles['card_img']} />
			<div className={styles['container_text']}>
				<div className={styles['card_title']}>{t([title])}</div>
				<div className={styles['card_text']}>{t([text])}</div>
			</div>
		</div>
	);
};

export default CardImg;
