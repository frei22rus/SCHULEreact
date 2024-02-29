import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PostPage() {
  const [posts, setPosts] = useState<any[]>([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <>
      <h1>ПОСТЫ</h1>
      <Link to="new">Добавить новый пост</Link>
      <p></p>
      {posts.map((post) => (
        <Link key={post.id} to={`/post/${post.id}`}>
          <li>{post.title}</li>
        </Link>
      ))}
    </>
  );
}

export default PostPage;
