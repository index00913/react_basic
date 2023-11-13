import { Link } from 'react-router-dom';
import { FaYoutube, FaTwitter } from 'react-icons/fa6';
import './Footer.scss';
export default function Footer() {
	return (
		<footer>
			<h1>Footer</h1>

			<table>
				<tr>
					<td>
						<h2>COMMUNITY</h2>
					</td>
					<td>
						<h2>SETTING</h2>
					</td>
					<td>
						<h2>RESOURCE</h2>
					</td>
				</tr>
				<tr>
					<td>About</td>
					<td>Slock</td>
					<td>GitHub</td>
				</tr>
				<tr>
					<td>Submit</td>
					<td>CLear</td>
					<td>Post</td>
				</tr>
				<tr>
					<td>Git</td>
					<td>Unscope</td>
					<td>Virable</td>
				</tr>
				<tr>
					<td>Slock</td>
					<td>Global</td>
					<td>Acc</td>
				</tr>
				<tr>
					<td></td>
					<td>Degsin</td>
					<td>Community</td>
				</tr>
				<tr>
					<td></td>
					<td>Lorem </td>
					<td>ipsum dolor.</td>
				</tr>
			</table>

			<ul>
				<li>
					<Link to='/'>
						<FaYoutube size={20} />
					</Link>
				</li>
				<li>
					<Link to='/'>
						<FaTwitter size={20} />
					</Link>
				</li>
			</ul>
		</footer>
	);
}
