import styles from './styles/pictureBackground.module.css';
// import rectangle2 from '../assets/Rectangle2.svg';

const PictureBackground = () => {
	return (
		<>
			<div className={styles['container_blok_back']}>
				<div className={styles['block_image_basc']}>
					<div className={styles['image']}></div>
					{/* <img src={rectangle2} alt='#' className={styles['image']} /> */}
				</div>
			</div>
		</>
	);
};

export default PictureBackground;
