import { Navigate, Route, Routes } from 'react-router-dom';

import Layout from './components/Layout';

import ErrorPage from './components/error';
import HomePage from './components/home';
import AboutPage from './components/about';
import PostPage from './components/post';
import SinglePage from './components/post/SinglePage';
import CreatePost from './components/post/CreatePost';
import EditPost from './components/post/EditPost';
import LoginPage from './components/auth/login';

import RequireAuth from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="about-us" element={<Navigate to="/about" replace />} />
          <Route path="post" element={<PostPage />} />
          <Route path="post/:id" element={<SinglePage />} />
          <Route path="post/:id/edit" element={<EditPost />} />
          <Route
            path="post/new"
            element={
              <RequireAuth>
                <CreatePost />
              </RequireAuth>
            }
          />
          <Route path="login" element={<LoginPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
