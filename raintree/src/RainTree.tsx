import {interpolate, Sequence, useCurrentFrame, useVideoConfig} from 'remotion';
import {Title} from './RainTree/Title';
import {Subtitle} from './RainTree/Subtitle';
import {Node} from './RainTree/Node';
import {Edge} from './RainTree/Edge';
import {RADIUS, WIDTH, HEIGHT} from './RainTree/config';
import {SequenceProps} from 'remotion/dist/sequencing';

export const RainTree: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const opacity = interpolate(
		frame,
		[videoConfig.durationInFrames - 25, videoConfig.durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const transitionStart = 25;

	var y1 = 50;
	var y2 = y1 + RADIUS * 3;
	var y3 = y2 + RADIUS * 3;

	var nodesObj = {
		A: {x: WIDTH / 2, y: y1, r: RADIUS, text: 'A', subtext: 'A B C D E F G H'},
		B: {
			x: WIDTH / 2 - RADIUS * 6,
			y: y2,
			r: RADIUS,
			text: 'B',
			subtext: 'B C D E F G H A',
		},
		C: {
			x: WIDTH / 2 + RADIUS * 6,
			y: y2,
			r: RADIUS,
			text: 'C',
			subtext: 'B C D E F G H A',
		},
		A2: {x: WIDTH / 2, y: y2, r: RADIUS, text: 'A', subtext: 'A B C D E F G H'},
		D: {
			x: WIDTH / 2 - RADIUS * 7.5,
			y: y3,
			r: RADIUS,
			text: 'D',
			subtext: 'B C D E F G H A',
		},
		E: {
			x: WIDTH / 2 - RADIUS * 6,
			y: y3,
			r: RADIUS,
			text: 'E',
			subtext: 'B C D E F G H A',
		},
		F: {
			x: WIDTH / 2 - RADIUS * 4.5,
			y: y3,
			r: RADIUS,
			text: 'F',
			subtext: 'B C D E F G H A',
		},
		G: {
			x: WIDTH / 2,
			y: y3,
			r: RADIUS,
			text: 'G',
			subtext: 'B C D E F G H A',
		},
		H: {
			x: WIDTH / 2,
			y: y3,
			r: RADIUS,
			text: 'H',
			subtext: 'B C D E F G H A',
		},
		H: {
			x: WIDTH / 2,
			y: y3,
			r: RADIUS,
			text: 'I',
			subtext: 'B C D E F G H A',
		},
	};

	var nodesMap = new Map(Object.entries(nodesObj));
	var lines = [
		{n1: 'A', n2: 'B'},
		{n1: 'A', n2: 'C'},
		{n1: 'A', n2: 'A2'},
	];

	let nodeObjects: Array<any> = [];
	nodesMap.forEach(function (n, _) {
		nodeObjects.push(
			<Sequence from={transitionStart}>
				<Node x={n.x - n.r / 2} y={n.y - n.r / 2} r={n.r} text={n.text} />
			</Sequence>
		);
	});

	let lineObjects: Array<any> = [];
	lines.forEach((line) => {
		let n1 = nodesMap.get(line.n1);
		let n2 = nodesMap.get(line.n2);
		if (n1 == null || n2 == null) {
			return;
		}
		console.log('OLSH', n1, n2);
		lineObjects.push(
			<Sequence from={transitionStart}>
				<Edge x1={n1.x} y1={n1.y} x2={n2.x} y2={n2.y} />
			</Sequence>
		);
	});

	console.log(lineObjects);

	return (
		<div style={{flex: 1, backgroundColor: 'white'}}>
			<div style={{opacity}}>
				<Sequence from={transitionStart + 10}>
					<Title titleText={titleText} titleColor={titleColor} />
				</Sequence>
				<Sequence from={transitionStart + 50}>
					<Subtitle />
				</Sequence>
				{lineObjects}
				{nodeObjects}
			</div>
		</div>
	);
};
