import Link from 'next/link';

export default function PostFeed({ posts, admin }) {
	return posts
		? posts.map(post => <PostItem post={post} key={post.slug} admin={admin} />)
		: null;
}

function PostItem({ posts }) {
	const wordCount = posts?.content.trim().split(/\s+/g).length;
	const minutesToRead = (wordCount / 100 + 1).toFixed(0);

	return (
		<div className='card'>
			<Link href={`/${posts.username}`}>
				<a>
					<strong>By @{posts.username}</strong>
				</a>
			</Link>
			<Link href={`/${posts.username}/${posts.slug}`}>
				<h2>
					<a>{posts.title}</a>
				</h2>
			</Link>
			<footer>
				<span>
					{wordCount} words. {minutesToRead} min read
				</span>
				<span className='push-left'>❤️ {posts.heartCount || 0} Hearts</span>
			</footer>
		</div>
	);
}
