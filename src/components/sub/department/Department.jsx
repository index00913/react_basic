import Layout from '../../common/layout/Layout';
import { useEffect, useState } from 'react';
import './Department.scss';
const path = process.env.PUBLIC_URL;

export default function Department() {
	const [Department, setDepartment] = useState([]);

	useEffect(() => {
		fetch(`${path}/DB/department.json`)
			.then((data) => data.json())
			.then((json) => {
				setDepartment(json.members);
			});
	}, []);

	return (
		<Layout title={'Department'}>
			<div className='memberBox'>
				{Department.map((member, idx) => {
					return (
						<article key={idx}>
							<div className='imgBox'>
								<img src={`${path}/img/${member.pic}`} alt={member.name} />
							</div>
							<div className='picBox'>
								<h2>{member.name}</h2>
								<h3>Lorem.</h3>
								<h4>Lorem ipsum dolor sit amet.</h4>
								<p>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque pariatur harum
									dicta consectetur assumenda in, ipsa deleniti non delectus repudiandae cumque quos
									quibusdam sapiente? Sed beatae corrupti totam et perspiciatis. ipsum dolor sit
									amet consectetur adipisicing elit. Recusandae ipsumdolor ea quibusdam nulla
									dolorem cupiditate neque non eligendi eos temporibus dolorum magnam pariatur
									laudantium dolores repellendus reprehenderit totam beatae eum necessitatibus
									officiis, deleniti aperiam. Explicabo ea quia labore nulla nostrum eum nihil
									incidunt itaque dolor accusamus commodi laboriosam blanditiis, adipisci cumque est
									saepe sunt, unde laudantium quaerat animi atque! Placeat provident repudiandae
									laudantium, incidunt sapiente possimus esse sequi, voluptates consequuntur nisi,
									vel perspiciatis et! Rerum, sint totam? Provident sequi vel illo sit architecto
									sed numquam fugiat labore. Eum ipsum incidunt at asperiores molestiae harum omnis
									ea eligendi minus tenetur? Lorem ipsum dolor sit amet consectetur adipisicing
									elit. Quam pariatur obcaecati aliquid aliquam vero, aspernatur distinctio? Ab
									omnis, repellendus nemo perferendis obcaecati quaerat aliquam cupiditate eveniet
									sequi, in, ducimus error.
								</p>
							</div>
						</article>
					);
				})}
			</div>
		</Layout>
	);
}
