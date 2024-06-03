import styles from './styles/bacgCard.module.css';
// import Card from './Card.jsx';


// eslint-disable-next-line react/prop-types
const BacgCard = ({sendUrl}) => {

	return (
		<div className={styles['container']}>
      <div style={{ backgroundImage: `url(${sendUrl})` }} className={styles['img']}></div>
		</div>
	);
};

export default BacgCard;
