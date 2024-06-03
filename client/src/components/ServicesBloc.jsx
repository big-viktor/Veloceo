import styles from './styles/servicesBloc.module.css';
// import Card from './Card.jsx';
import Titles from './Titles.jsx';
import CardImg from './CardImg.jsx';
import ImgOne from '../assets/Rectangle 18.svg';
import ImgTwo from '../assets/Rectangle 20.svg';
import ImgThre from '../assets/Rectangle 22.svg';

// eslint-disable-next-line react/prop-types
const ServicesBloc = () => {
	const paramCard = {
		routerLink1: {
			name: 'serviceBlocTitleOne',
			infoText: 'serviceBlocTextOne',
			foto: ImgOne,
		},
		routerLink2: {
			name: 'serviceBlocTitleTwo',
			infoText: 'serviceBlocTextTwo',
			foto: ImgTwo,
		},
		routerLink3: {
			name: 'serviceBlocTitleThre',
			infoText: 'serviceBlocTextThre',
			foto: ImgThre,
		},
	};
	return (
		<div className={styles['container']}>
			<Titles title={'serviceBlocTitle'} />
			<div className={styles['content']}>
				{Object.entries(paramCard).map(([key, value]) => (
					<>
						<div className={styles['content_card']}>
							<CardImg
								key={key}
								img={value.foto}
								title={value.name}
								text={value.infoText}
							/>
						</div>
					</>
				))}
			</div>
		</div>
	);
};

export default ServicesBloc;
