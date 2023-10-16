import './News.scss';
import { useState } from 'react';

function News() {
	const getLocalData = () => {
		const data = localStorage.getItem('post');

		return JSON.parse(data);
	};
	const [Post] = useState(getLocalData());

	return (
		<section className='news'>
			<h2>News</h2>
			<div className='box1'>
				<img src='/img/code1.jpg' alt='' />
				<img src='/img/code2.jpg' alt='' />
				<img src='/img/code3.jpeg' alt='' />
				<img src='/img/code4.jpeg' alt='' />
				<p className='text1'>1ST FW released</p>
				<p className='text2'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum blanditiis explicabo tempore
					modi magni saepe, tempora iste. Consequuntur explicabo, accusamus, reprehenderit, sequi
					eveniet ab optio iste dolore molestiae aliquam ducimus Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Esse, repudiandae.
				</p>
			</div>
		</section>
	);
}

export default News;
