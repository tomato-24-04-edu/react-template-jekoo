import { memo } from 'react';
import Box from '@mui/material/Box';

function SplashScreen() {
	return (
		<div id="splash-screen">
			<div className="logo">
				<img
					width="128"
					src="assets/images/src/tomato_icon_1.svg"
					alt="logo"
				/>
			</div>
			<Box
				id="spinner"
				sx={{
					'& > div': {
						backgroundColor: 'palette.secondary.main'
					}
				}}
			>
				<div className="bounce1" />
				<div className="bounce2" />
				<div className="bounce3" />
			</Box>
		</div>
	);
}

export default memo(SplashScreen);
