import { createRoot } from 'react-dom/client';

import { App } from './app/app';
import './fonts.css';
import './normalize.css';

const root = document.getElementById('root');

if (!root) {
  throw new Error('root not found');
}

const container = createRoot(root);

container.render(<App />);
