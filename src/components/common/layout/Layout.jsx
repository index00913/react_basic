import './Layout.scss';

export default function Layout({ title, children }) {
	return (
		<section className={`layout ${title} `}>
			<figure>
				<div className='c1image'>
					<img src='img/img3.jpg' />
				</div>
			</figure>

			<div className='content'>
				<h1>{title}</h1>
				{children}
			</div>
		</section>
	);
}
