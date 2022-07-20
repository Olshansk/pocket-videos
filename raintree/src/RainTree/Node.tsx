import {interpolate, useCurrentFrame} from 'remotion';
import {COLOR_1} from './config';
import './css/graph.css';

export const Node: React.FC<{
	x: number;
	y: number;
	r: number;
	text: string;
}> = ({x, y, r, text}) => {
	// const frame = useCurrentFrame();
	// const opacity = 1; //linterpolate(frame, [0, 30], [0, 1]);
	console.log(r);
	return (
		<div
			className="node"
			style={{left: x, top: y, width: r, height: r, lineHeight: r + 'px'}}
		>
			{text}
		</div>
	);
};

// import {interpolate, useCurrentFrame} from 'remotion';

// export const Node: React.FC = () => {
// 	const frame = useCurrentFrame();
// 	const;

// 	return (
// 		<div height="110" width="500">
// 			<circle
// 				cx="50"
// 				cy="55"
// 				r="45"
// 				fill="none"
// 				stroke="#F0CE01"
// 				strokeWidth="4"
// 			/>
// 		</div>
// 	);
// };
