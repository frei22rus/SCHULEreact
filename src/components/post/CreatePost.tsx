import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hook/useAuth';

function CreatePost() {
  const { signout } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <h1>Создать пост</h1>
      <button onClick={() => signout(() => navigate('/', { replace: true }))}>
        Выход
      </button>
    </>
  );
}

export default CreatePost;
