import {interpolate, useCurrentFrame} from 'remotion';
import {COLOR_1} from './config';
import './css/subtitle.css';

export const Subtitle: React.FC = () => {
	const frame = useCurrentFrame();
	const opacity = interpolate(frame, [0, 30], [0, 1]);
	return (
		<div className="subtitle" style={{opacity}}>
			Edit <code style={{color: COLOR_1}}>src/Video.tsx</code> and save to
			reload.
		</div>
	);
};
