import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hook/useAuth';

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { signin } = useAuth();

  const fromPage = location.state?.from?.pathname || '/';

  const hadleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const user = form.username.value;
    signin(user, () => navigate(fromPage, { replace: true }));
  };

  return (
    <div>
      <h1>Страница авторизации</h1>
      <form onSubmit={hadleSubmit}>
        <label>
          Name: <input name="username" />
        </label>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}

export default LoginPage;
