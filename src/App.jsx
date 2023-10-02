import { ThemeProvider } from './app/contexts/ThemeContext';
import Home from './view/pages/Home';

export default function App() {
  return <ThemeProvider>
    <Home />
  </ThemeProvider>
}
