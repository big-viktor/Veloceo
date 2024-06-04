import '../i18next';
import { useTranslation } from 'react-i18next';
import '../../src/index.css';

const SocialImg = ({ socialHref, srcSocial }) => {
	const { t } = useTranslation();

	return (
		<>
			<a href={t([socialHref])}>
				<img src={srcSocial} alt='#' />
			</a>
		</>
	);
};

export default SocialImg;
