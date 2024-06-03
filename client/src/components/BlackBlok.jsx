import styles from './styles/blackBloc.module.css';
import Titles from './Titles.jsx';
import { useTranslation } from 'react-i18next';
// import Card from './Card.jsx';
// import ImgThre from '../assets/Frame 77.svg';

// eslint-disable-next-line react/prop-types
const BlackBlok = ({ text, title, btnName, showBtn }) => {
	const { t } = useTranslation();
	return (
		<div className={styles['container_blac']}>
			<div className={styles['container_titles']}>
				<Titles title={title} blackColor={true} />
			</div>
			<div className={styles['content']}>
				<div className={styles['black_text']}>{t([text])}</div>
				{showBtn ? (
					<>
						<div className={styles['content_btn']}>{t([btnName])}</div>
					</>
				) : (
					<>{undefined}</>
				)}
			</div>
		</div>
	);
};

export default BlackBlok;
