import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

function SinglePage() {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <>
      {post && (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Link to={`/post/${id}/edit`}>Редактировать пост</Link>
        </>
      )}
    </>
  );
}

export default SinglePage;
