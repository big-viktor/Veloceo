import '../i18next';
import logo from '../assets/Frame.svg';
import styles from './styles/logo.module.css';
import '../../src/index.css';

const Logo = () => {
	return (
		<>
			<img src={logo} alt='#' className={styles.loggo} />
		</>
	);
};

export default Logo;
