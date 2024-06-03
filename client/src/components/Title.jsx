import styles from './styles/title.module.css';

// eslint-disable-next-line react/prop-types
const Title = ({ titleHome1, titleHome2, titleHome3, noneText }) => {
	return (
		<div className={styles['container_title']}>
			<div className={styles['']}>
				<p className={styles['content_title']}>
					<span className={styles['title_text']}>{titleHome1}</span>
					<span className={styles['title_span']}>{titleHome2}</span>
				</p>
			</div>
			{!noneText ? (
				<>
					<div className={styles['title_text2']}>{titleHome3}</div>
				</>
			) : (
				<>{undefined}</>
			)}
		</div>
	);
};

export default Title;
