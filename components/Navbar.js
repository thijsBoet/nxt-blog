import Link from 'next/link';
import { UserContext } from '../lib/context';
import { signOut } from 'firebase/auth';
import { useContext } from 'react';

// import { auth } from '@lib/firebase';



const Navbar = () => {

	const { user, username } = useContext(UserContext);

	return (
		<nav className='navbar'>
			<ul>
				<li>
					<Link href='/'>
						<button className='btn-logo'>NXT</button>
					</Link>
				</li>

				{/* user is signed-in and has username */}
				{username && (
					<>
						<li className='push-left'>
							<button onClick={() => signOut(auth)}>Sign Out</button>
						</li>
						<li>
							<Link href='/admin'>
								<button className='btn-blue'>Write Posts</button>
							</Link>
						</li>
						<li>
							<Link href={`/${username}`}>
								<img src={user?.photoURL || '/hacker.png'} />
							</Link>
						</li>
					</>
				)}

				{/* user is not signed OR has not created username */}
				{!username && (
					<li>
						<Link href='/enter'>
							<button className='btn-blue'>Log in</button>
						</Link>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Navbar;