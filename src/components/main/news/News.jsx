import './News.scss';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function News() {
	const dummyData = [
		{
			title: 'title4',
			content: 'Here comes content description in detail4.',
			data: new Date(),
		},
		{
			title: 'title3',
			content: 'Here comes content description in detail3.',
			data: new Date(),
		},
		{
			title: 'title2',
			content: 'Here comes content description in detail2.',
			data: new Date(),
		},
		{
			title: 'title1',
			content: 'Here comes content description in detail1.',
			data: new Date(),
		},
	];
	const getLocalData = () => {
		const data = localStorage.getItem('post');
		if (data) return JSON.parse(data);
		else return dummyData;
	};
	const [Post, setPost] = useState(getLocalData());

	useEffect(() => {
		console.log(getLocalData());
		setPost(getLocalData());
	}, []);

	return (
		<section className='news'>
			<h2>News</h2>
			<div className='box1'>
				<>
					<Swiper
						slidesPerView={4}
						spaceBetween={30}
						centeredSlides={true}
						pagination={{
							clickable: true,
						}}
						className='mySwiper'
					>
						<div className='Swipers'>
							<SwiperSlide>
								<img src='/img/code1.jpg' alt='' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='/img/code2.jpg' alt='' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='/img/code3.jpeg' alt='' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='/img/code4.jpeg' alt='' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='/img/code5.jpeg' alt='' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='/img/code6.jpeg' alt='' />
							</SwiperSlide>
							<SwiperSlide>
								<img src='/img/code7.jpeg' alt='' />
							</SwiperSlide>
						</div>
					</Swiper>
				</>
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
