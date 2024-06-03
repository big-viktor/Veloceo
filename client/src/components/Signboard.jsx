import '../i18next';
import { useTranslation } from 'react-i18next';
import '../../src/index.css';
import styles from './styles/signboard.module.css';

const Signboard = () => {
	const { t } = useTranslation();

	return (
		<>
			<div className={styles.container}>
				<div className={styles.container_board}>
					<div className={styles.content_board}>
						<p className={styles.number_board}>15+</p>
						<p className={styles.text_board}>{t('signboardText1')}</p>
					</div>
					<div className={styles.partition}></div>
					<div className={styles.content_board}>
						<p className={styles.number_board}>250+</p>
						<p className={styles.text_board}>{t('signboardText2')}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Signboard;
