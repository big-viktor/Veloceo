import { Link } from 'react-router-dom';
import '../i18next';
import { useTranslation } from 'react-i18next';
import logo from '../assets/Frame.svg';
import styles from './styles/layout.module.css';
import '../../src/index.css';
import MenuLang from './MenuLang';
import { useState } from 'react';

const Layout = () => {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className={styles.content_mod}>
				<div className={styles.container_layout}>
					<img src={logo} alt='#' className={styles.loggo} />
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
						</ul>
						<div className={styles.container_line} onClick={() => setIsOpen(!isOpen)}>
							<div className={isOpen ? styles.closed : styles.line}></div>
							<div className={isOpen ? styles.closed : styles.line2}></div>
							<div className={isOpen ? styles.closed : styles.line3}></div>
							<div className={isOpen ? styles.line_closed : styles.closed}></div>
							<div className={isOpen ? styles.line_closed_two : styles.closed}></div>
							<div></div>
						</div>
						<div className={isOpen ? styles.active_open : styles.active_closed}>
							<ul className={styles.container_link1}>
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
							</ul>
						</div>
						<MenuLang />
					</div>
				</div>
			</div>
		</>
	);
};

export default Layout;
