import styles from './styles/callWork.module.css';
// import Card from './Card.jsx';
import Titles from './Titles.jsx';
import { useTranslation } from 'react-i18next';

// eslint-disable-next-line react/prop-types
const CallWork = ({ sendUrl }) => {
	const { t } = useTranslation();
	return (
		<div className={styles['container']}>
			<div className={styles['content']}>
				<div className={styles['title']}>
					<Titles title={'callTitle'} />
				</div>
				<div className={styles['text']}>{t('callText')}</div>
				<div>
					<a
						className={styles['btn']}
						href='https://l.facebook.com/l.php?u=https%3A%2F%2Fapi.whatsapp.com%2Fsend%3Fphone%3D420775493329%26text%3DOdkaz%253A%250Ahttps%253A%252F%252Ffb.me%252F16I1C4EXk%250A%250AVid%25C4%259Bl(a)%2520jsem%2520to%2520na%2520Facebooku...%26app%3Dfacebook%26fbclid%3DIwZXh0bgNhZW0CMTAAAR3xxv2MvO8IMYKMgK_wNfJzmnjfoPUSzhYMGPDOfs4xWbxhubv4AOuDmao_aem_AXTbikhqKH_KbjaT5KcgjdHxnsXv0aPsJ-eh7mOgoH0iKEVvqH0XkuMrGTcgw6rlwqMRiwO7guzfH3kqr7rC9uV2&h=AT1HcCpSu5Q6Fk4q1SffwifX-VLI9BC4KCt6MVX6CKjX1WSQOHLu6gr1J-rvIzeuOO3AtuUAXiydSFERmnajLD5QixbMxl9ATTqfbLRyubclbuz8-cTuhShzbl59SDEbxf3c3Q&__tn__=-UK-R&c[0]=AT3jwLuwr5inX9DV_2AIKaXcBVG3XhHr_HpnPbtypGZl5I3P5oRVtNjb7LZQcnK1-uOIoByMcBn3CLPJSBmtB1GfzE2hSX-qNlQKYDuM_pFtAs30g12SS9Bigqv2zbQyTjBYGDTBmYJ310lu6jy-I1UeNtcbTxvlczbsoROjUD-fKgjpe_WhWwR4heTOez-fRctraoC6PyVsdhthVdc0yec7Pcgr60z64Bjx'
					>
						{t('callNumber')}
					</a>
				</div>
			</div>
			<div
				style={{ backgroundImage: `url(${sendUrl})` }}
				className={styles['img']}
			></div>
		</div>
	);
};

export default CallWork;
