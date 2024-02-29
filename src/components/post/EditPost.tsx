import { useParams } from 'react-router-dom';

function EditPost() {
  const { id } = useParams();

  return (
    <>
      <h1>Редактировать пост {id}</h1>
    </>
  );
}

export default EditPost;
