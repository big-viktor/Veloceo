import styles from './styles/cardBloc.module.css';
import Titles from './Titles.jsx';
import Card from './Card.jsx';
import ImgOne from '../assets/Frame 75.svg';
import ImgTwo from '../assets/Frame 76.svg';
import ImgThre from '../assets/Frame 77.svg';

const CardBlock = () => {
	const paramCard = {
		routerLink1: {
			name: 'cardTitleOne',
			infoText: 'cardTextOne',
			foto: ImgOne,
		},
		routerLink2: {
			name: 'cardTitleTwo',
			infoText: 'cardTextTwo',
			foto: ImgTwo,
		},
		routerLink3: {
			name: 'cardTitleThre',
			infoText: 'cardTextThre',
			foto: ImgThre,
		},
	};
	return (
		<div className={styles['container_content2']}>
			<div className={styles['container']}>
				<div className={styles['container_title']}>
					<Titles title={'cardBlockTitle'} />
				</div>
				<div className={styles['container_content']}>
					<div className={styles['container_title_n1']}>
						<Titles title={'cardBlockTitle'} />
					</div>
					{Object.entries(paramCard).map(([key, value]) => (
						<>
							<Card
								key={key}
								img={value.foto}
								title={value.name}
								text={value.infoText}
							/>
						</>
					))}
				</div>
			</div>
		</div>
	);
};

export default CardBlock;
