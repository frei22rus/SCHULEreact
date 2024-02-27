import { Route, Routes } from 'react-router-dom';
import HomePage from './components/home';
import AboutPage from './components/about';
import PostPage from './components/post';
import LoginPage from './components/auth/login';
import ErrorPage from './components/errorpages';
import { Layout } from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="post" element={<PostPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
