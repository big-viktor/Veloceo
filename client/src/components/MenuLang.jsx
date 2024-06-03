import '../i18next';
import { useTranslation } from 'react-i18next';
import stroke from '../assets/Stroke.svg';
import '../../src/index.css';
import { useState } from 'react';
import styles from './styles/menuLang.module.css';
const MenuLang = () => {
	const { t, i18n } = useTranslation();
	const [isOpen, setIsOpen] = useState(true);
	const changeLanguage = language => {
		i18n.changeLanguage(language);
	};
	return (
		<>
			<div className={styles.container_down}>
				<div className={styles.content_down}>
					<div className={styles.name_switch} onClick={() => changeLanguage('cz')}>
						{t('selecteLang')}
					</div>
					<img
						src={stroke}
						alt='#'
						className={isOpen ? styles.stroke : styles.stroke_op}
						onClick={() => setIsOpen(!isOpen)}
					/>
				</div>

				<div className={isOpen ? styles.active_dropdown : styles.dropdown}>
					<div className={styles.name_switch} onClick={() => changeLanguage('cz')}>
						CZ
					</div>
					<div className={styles.name_switch} onClick={() => changeLanguage('en')}>
						EN
					</div>
				</div>
			</div>
		</>
	);
};

export default MenuLang;
