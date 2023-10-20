import Btns from '../btns/Btns';
import Info from '../info/Info';
import News from '../news/News';
//import Pics from '../pics/Pics';
import Visual from '../visual/Visual';
import Show from '../show/Show';
import './Main.scss';

function Main() {
	return (
		<main className='mainWrap'>
			<Visual />
			<Show />
			<News />
			{/*<Pics />*/}
			<Info />
			<Btns />
		</main>
	);
}

export default Main;
