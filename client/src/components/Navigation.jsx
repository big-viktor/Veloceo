import { Link } from 'react-router-dom';
import '../i18next';
import { useTranslation } from 'react-i18next';
import logo from '../assets/Frame.svg';
import styles from './styles/navigation.module.css';
import '../../src/index.css';
import MenuLang from './MenuLang';
import { useState } from 'react';

const Navigation = () => {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className={styles.container_switch}>
				<ul className={styles.container_link}>
					<li className={styles.link_name}>
						<Link to='/'>{t('link')}</Link>
					</li>
					<li className={styles.link_name}>
						<Link to='/protected'>{t('link2')}</Link>
					</li>
					<li className={styles.link_name}>
						<Link to='/protected'>{t('link3')}</Link>
					</li>
					<li className={styles.link_name}>
						<Link to='/protected'>{t('link4')}</Link>
					</li>
					<li className={styles.link_name}>
						<Link to='/protected'>{t('link5')}</Link>
					</li>
					<li className={styles.link_name}>
						<Link to='/protected'>{t('link6')}</Link>
					</li>
				</ul>
			</div>
		</>
	);
};

export default Navigation;
