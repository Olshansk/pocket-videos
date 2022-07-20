import {Composition} from 'remotion';
import {RainTree} from './RainTree';
import {WIDTH, HEIGHT} from './RainTree/config';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="RainTree"
				component={RainTree}
				durationInFrames={150}
				fps={30}
				width={WIDTH}
				height={HEIGHT}
				defaultProps={{
					titleText: 'RainTree',
					titleColor: 'black',
				}}
			/>
		</>
	);
};
