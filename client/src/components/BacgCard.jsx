import styles from './styles/bacgCard.module.css';
// import Card from './Card.jsx';

// eslint-disable-next-line react/prop-types
const BacgCard = ({ sendUrl, direction }) => {
	return (
		<>
			{!direction ? (
				<>
					<div className={styles['container']}>
						<div
							style={{ backgroundImage: `url(${sendUrl})` }}
							className={styles['img']}
						></div>
					</div>
				</>
			) : (
				<>
					<div className={styles['container_direction']}>
						<div
							style={{ backgroundImage: `url(${sendUrl})` }}
							className={styles['img_direction']}
						></div>
					</div>
				</>
			)}
		</>
	);
};

export default BacgCard;
