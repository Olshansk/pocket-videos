import {interpolate, useCurrentFrame} from 'remotion';
import {COLOR_1} from './config';
import './css/graph.css';

export const Edge: React.FC<{
	x1: number;
	y1: number;
	x2: number;
	y2: number;
}> = ({x1, y1, x2, y2}) => {
	// const frame = useCurrentFrame();
	return (
		<div style={{width: '100%', height: '100%'}}>
			<svg style={{width: '100%', height: '100%'}}>
				<polyline
					points={`${x1},${y1} ${x2},${y2}`}
					fill="none"
					stroke="black"
				/>
			</svg>
			;
		</div>
	);
};
