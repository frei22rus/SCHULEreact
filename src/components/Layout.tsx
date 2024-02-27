import { NavLink, Link, Outlet } from 'react-router-dom';
import '../App.css';

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/post">Блог</NavLink>
        <NavLink to="/about">О нас</NavLink>
        <NavLink to="/login">Логин</NavLink>
      </header>
      <main className="container">
        <Outlet />
      </main>
      <footer className="container">
        <Link to="/">frei22rus - 2024</Link>
      </footer>
    </>
  );
};

export { Layout };
