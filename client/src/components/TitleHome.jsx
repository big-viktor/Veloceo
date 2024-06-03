import styles from './styles/titleHom.module.css';
import { useTranslation } from 'react-i18next';
import Title from './Title';
import PictureBackground from './PictureBackground.jsx';

const TitleHome = () => {
	const { t } = useTranslation();

	return (
		<>
			<div className={styles['container_title_home']}>
				<div className={styles['content_title_home']}>
					<Title
						noneText={false}
						titleHome1={t('titleHom1')}
						titleHome2={t('titleHom2')}
						titleHome3={t('titleHom3')}
					/>
				</div>
				<PictureBackground />
			</div>
		</>
	);
};

export default TitleHome;
