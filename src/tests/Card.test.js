import renderer from 'react-test-renderer';
import Card from '../components/Card';

/*global 
it
expect
 */
it('case 1', () => {
	const cardComponent = renderer.create(
		<Card image={'./src/assets/back.svg'} selected={true} />
	);

	let tree = cardComponent.toJSON();
	expect(tree).toMatchSnapshot();

	// manually trigger the callback
	// renderer.act(() => {
	// 	tree.props.onClick();
	// });
	// // re-rendering
	// tree = cardComponent.toJSON();
	// console.log(tree);
	// expect(tree).toMatchSnapshot();
});
