function shuffle() {
	const assets = [
		// { image: '/src/assets/angular.png' },
		{ image: '/src/assets/javascript.png' },
		{ image: '/src/assets/nextjs.png' },
		{ image: '/src/assets/node.png' },
		{ image: '/src/assets/react.png' },
		{ image: '/src/assets/typescript.png' },
		{ image: '/src/assets/vite.png' },
		{ image: '/src/assets/vue.png' },
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
