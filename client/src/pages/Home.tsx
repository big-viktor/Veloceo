import React from 'react';

import { Outlet } from 'react-router-dom';
import Header from '../components/Layout1';
import TitleHome from '../components/TitleHome.jsx';
import Signboard from '../components/Signboard.jsx';
import CardBlock from '../components/BlokCard.jsx';
import InfoHome from '../components/InfoHome.jsx';
import CallWork from '../components/CallWork.jsx';
import ImgWork from '../assets/Rectangle14.svg';
import ServicesBloc from '../components/ServicesBloc.jsx';
import { useTranslation } from 'react-i18next';
import '../i18next';
import BlackBlok from '../components/BlackBlok.jsx';
import BlocFormHom from '../components/BlocFormHom.jsx';

function Home() {
	const { t } = useTranslation();

	return (
		<>
			<Header />
			<TitleHome />
			<Signboard />
			<CardBlock />
			<InfoHome />
			<CallWork sendUrl={ImgWork} />
			<ServicesBloc />
			<BlackBlok
				text={'blackText'}
				title={'blackTitle'}
				btnName={'btnName'}
				showBtn={true}
			/>
			<BlocFormHom />
		</>
	);
}
export default Home;
