// import path from 'path';

function shuffle() {
	const assets = [
		// { image: '/src/assets/angular.png' },
		{
			image:
				'https://github.com/phone-thet-naing/memory-game/blob/master/src/assets/javascript.png?raw=true',
		},
		{ image: 'https://github.com/phone-thet-naing/memory-game/blob/master/src/assets/nextjs.png?raw=true' },
		{ image: 'https://github.com/phone-thet-naing/memory-game/blob/master/src/assets/node.png?raw=true' },
		{ image: 'https://github.com/phone-thet-naing/memory-game/blob/master/src/assets/react.png?raw=true' },
		{ image: 'https://github.com/phone-thet-naing/memory-game/blob/master/src/assets/typescript.png?raw=true' },
		{ image: 'https://github.com/phone-thet-naing/memory-game/blob/master/src/assets/vite.png?raw=true' },
		{ image: 'https://github.com/phone-thet-naing/memory-game/blob/master/src/assets/vue.png?raw=true' },
		{
			image:
				'https://github.com/phone-thet-naing/memory-game/blob/master/src/assets/angular.png?raw=true',
		},
	];

	return [...assets, ...assets]
		.sort(() => Math.random() - 0.5)
		.map((card) => ({
			...card,
			id: Math.random(),
			isSelected: false,
			alreadySelected: false,
		}));
}

export default shuffle;
