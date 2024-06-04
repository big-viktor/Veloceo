import styles from './styles/titleText.module.css';
import { useTranslation } from 'react-i18next';
import '../i18next';
// eslint-disable-next-line react/prop-types
const TextTitle = ({ title, blackColor }) => {
	const { t } = useTranslation();
	return (
		<>
			{!blackColor ? (
				<>
					<div className={styles['titles']}>{t([title])}</div>
				</>
			) : (
				<>
					<div className={styles['titles_white']}>{t([title])}</div>
				</>
			)}
		</>
	);
};

export default TextTitle;
