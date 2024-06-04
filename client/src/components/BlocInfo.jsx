import { useTranslation } from 'react-i18next';
import '../i18next';
import styles from './styles/blocInfo.module.css';
import CardContact from './CardContact.jsx';

function BlocInfo() {
	const { t } = useTranslation();
	const paramCard = {
		routerLink1: {
			title: 'cardTitleContact',
			adres: 'cardAdresContact',
			number: 'cardNumberContact',
			maill: 'cardMaillContact',
			map: 'cardMapContact',
			mapHref: 'mapHrefPraha',
		},
		routerLink2: {
			title: 'cardTitleContactTwo',
			adres: 'cardAdresContact',
			number: 'cardNumberContact',
			maill: 'cardMaillContact',
			map: 'cardMapContact',
			mapHref: 'mapHrefJihlava',
		},
		routerLink3: {
			title: 'cardTitleContactThre',
			adres: 'cardAdresContact',
			number: 'cardNumberContact',
			maill: 'cardMaillContact',
			map: 'cardMapContact',
			mapHref: 'mapHrefBrod',
		},
	};
	return (
		<>
			<div className={styles['container_card']}>
				{Object.entries(paramCard).map(([key, value]) => (
					<>
						<div className={styles['content_card']}>
							<CardContact
								key={key}
								title={value.title}
								adres={value.adres}
								number={value.number}
								maill={value.maill}
								map={value.map}
								mapHref={value.mapHref}
							/>
						</div>
					</>
				))}
			</div>
		</>
	);
}

export default BlocInfo;
