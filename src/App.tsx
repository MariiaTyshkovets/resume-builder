import { BrowserRouter as Router } from 'react-router-dom';
import { RouterConfig } from './routes/AppRouter';
import { Navbar } from './components/ui/Navbar';

const App = () => (
  <Router>
    <div className="bg-secondary min-h-screen">
      <Navbar />
      <main>
        <RouterConfig />
      </main>
    </div>
  </Router>
);

export default App;

