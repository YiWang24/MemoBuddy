// app/providers.js (or _app.js / _app.tsx if using the Pages Router)
'use client'; // Ensure this runs as a Client Component

import { Provider } from 'react-redux';
import { store } from '../'; // import your Redux store

export default function AppProviders({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
