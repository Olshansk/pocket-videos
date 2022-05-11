import {Composition} from 'remotion';
import {RainTree} from './RainTree';
import {Logo} from './RainTree/Logo';
import {Subtitle} from './RainTree/Subtitle';
import {Title} from './RainTree/Title';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="RainTree"
				component={RainTree}
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="Logo"
				component={Logo}
				durationInFrames={200}
				fps={30}
				width={1920}
				height={1080}
			/>
			<Composition
				id="Title"
				component={Title}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
				defaultProps={{
					titleText: 'Welcome to Remotion',
					titleColor: 'black',
				}}
			/>
			<Composition
				id="Subtitle"
				component={Subtitle}
				durationInFrames={100}
				fps={30}
				width={1920}
				height={1080}
			/>
		</>
	);
};
