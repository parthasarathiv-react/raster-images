import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import { pageLoaders } from './routes';

/*
 * Every page is code-split except the one you're most likely to land on.
 * Previously all 36 pages were imported statically, so a single 1.7MB bundle
 * carried three.js, gsap and framer-motion to every visitor — ~10s of
 * parse+exec on a throttled phone, even on a text-only policy page. Now each
 * route is its own chunk and Layout prefetches on hover, so splitting costs
 * nothing perceptible on navigation.
 *
 * Home is the exception and is imported eagerly: as a lazy route it suspended
 * on first paint, so the landing page rendered an empty placeholder and then
 * shoved the footer down when the chunk arrived (CLS 0.215). Being in the entry
 * chunk costs little now that SceneStrip no longer drags three.js in with it.
 *
 * Route paths live in ./routes so the prefetcher shares them.
 */
const pages = Object.entries(pageLoaders)
  .filter(([path]) => path !== '')
  .map(([path, load]) => [path, lazy(load)]);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {pages.map(([path, Page]) => (
            <Route path={path} key={path} element={<Page />} />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
