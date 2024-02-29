import { NavLink, Link, Outlet, useNavigate } from 'react-router-dom';
import '../App.css';

function Layout() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const goForward = () => navigate(1);

  return (
    <>
      <header>
        <button onClick={goBack}>Назад</button>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/post">Посты</NavLink>
        <NavLink to="/about">О нас</NavLink>
        <NavLink to="/login">Логин</NavLink>
        <button onClick={goForward}>Вперед</button>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="container">
        <Link to="/"> &copy; frei22rus 2024</Link>
      </footer>
    </>
  );
}

export default Layout;
