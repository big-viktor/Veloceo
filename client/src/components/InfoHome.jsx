import styles from './styles/infoHome.module.css';
import { useTranslation } from 'react-i18next';
// import Card from './Card.jsx';
// import ImgThre from '../assets/Frame 77.svg';
import BacgCard from './BacgCard.jsx';
import ImgPc from '../assets/Rectangle 40.svg';
import ImgMini from '../assets/Rectangle 43.svg';
import Titles from './Titles.jsx';
import Size from './Size.jsx';
const InfoHome = () => {
	const screenSize = Size();

	const { t } = useTranslation();
	return (
		<div className={styles['container']}>
			{screenSize.width > 744 ? (
				<>
					<div className={styles.container_component}>
						<BacgCard sendUrl={ImgPc} />
					</div>
				</>
			) : (
				<>
					<div className={styles.container_component}>
						<BacgCard sendUrl={ImgMini} />
					</div>
				</>
			)}
			<div className={screenSize === 1400 ? styles.closed : styles.line}></div>

			<div className={styles['container_text']}>
				<div>
					<Titles title={'infoHome'} />
				</div>
				<div className={styles['text']}>{t('infoText')}</div>
			</div>
		</div>
	);
};

export default InfoHome;
