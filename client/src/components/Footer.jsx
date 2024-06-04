import '../i18next';
import { useTranslation } from 'react-i18next';
import styles from './styles/footer.module.css';
import '../../src/index.css';
import { useState } from 'react';
import Navigation from './Navigation.jsx';
import SocialImg from './SocialImg.jsx';
import Logo from './Logo.jsx';
import FB from '../assets/Social Media/fb .svg';
import TL from '../assets/Social Media/Telegram.svg';
import Ins from '../assets/Social Media/instagram.svg';
import Wats from '../assets/Social Media/watcap.svg';
import Viber from '../assets/Social Media/viber.svg';
import yot from '../assets/Social Media/Youtube.svg';

const Footer = () => {
	const { t } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	const paramCard = {
		routerLink1: {
			socialHref: 'socialHref',
			srcSocial: FB,
		},
		routerLink2: {
			socialHref: 'socialHrefTwo',
			srcSocial: TL,
		},
		routerLink3: {
			socialHref: 'socialHrefThre',
			srcSocial: Ins,
		},
		routerLink4: {
			socialHref: 'socialHrefFo',
			srcSocial: Wats,
		},
		routerLink5: {
			socialHref: 'socialHrefFaiv',
			srcSocial: Viber,
		},
		routerLink6: {
			socialHref: 'socialHrefSix',
			srcSocial: yot,
		},
	};
	return (
		<>
			<div className={styles['container_footer']}>
				<div className={styles['content_footer']}>
					<div>
						<Logo />
					</div>
					<div>
						<Navigation />
					</div>
					<div className={styles['bloc_kontakt']}>
						<div className={styles['number_footer']}>(+420) 775 493 329</div>
						<div className={styles['number_footer']}>info@veloceo.cz</div>
					</div>
					<div className={styles['bloc_info']}>
						<div className={styles['inf_footer']}>© 2024 Veloceo®</div>
						<div className={styles['container_img__social']}>
							{Object.entries(paramCard).map(([key, value]) => (
								<>
									<div className={styles['content_card']}>
										<SocialImg
											key={key}
											socialHref={value.socialHref}
											srcSocial={value.srcSocial}
										/>
									</div>
								</>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
