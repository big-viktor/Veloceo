import styles from './styles/blokForma.module.css';
import { useTranslation } from 'react-i18next';
import '../i18next';
import Titles from './Titles';
import TextTitle from './TextTitle';
import FormHome from '../clientForm/formHome';
import BacgCard from './BacgCard';
import ImgB from '../assets/Rectangle 24.svg';
// eslint-disable-next-line react/prop-types
const BlocFormHom = () => {
	const { t } = useTranslation();
	return (
		<>
			<div className={styles['container_form']}>
				<div className={styles['content_title']}>
					<Titles title={'formTitleHom'} />
					<div className={styles['content_text']}>
						<TextTitle title={'formTextHome'} />
					</div>
				</div>
				<div className={styles['content_bloc']}>
					<div className={styles['bloc_form']}>
						<FormHome />
					</div>
					<div className={styles['content_img']}>
						<BacgCard sendUrl={ImgB} direction={true} />
					</div>
				</div>
			</div>
		</>
	);
};

export default BlocFormHom;
