import { useSelector } from 'react-redux';
import './Post.scss';

function Post() {
	const { data } = useSelector((store) => store.flickr);
	return (
		<section className='post myScroll'>
			<div className='wrap'>
				{data.map((pic, idx) => {
					if (idx >= 6) return null;
					return (
						<article key={idx}>
							<h2>Post</h2>
							<img
								src={`https://live.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_b.jpg`}
								alt={pic.title}
							/>
						</article>
					);
				})}
			</div>
		</section>
	);
}

export default Post;
