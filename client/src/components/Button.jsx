import styles from './styles/button.module.css';
import { useTranslation } from 'react-i18next';
import '../i18next';

// eslint-disable-next-line react/prop-types
const Button = ({ name }) => {
	const { t } = useTranslation();
	return (
		<>
			<div className={styles['container_button']}>{t([name])}</div>
		</>
	);
};

export default Button;
