import { BrowserRouter as Router } from 'react-router-dom';
import { RouterConfig } from './routes/AppRouter';

const App = () => (
  <Router>
    <div className="app">
      {/* Тут може бути хедер/футер */}
      <main>
        <RouterConfig />
      </main>
    </div>
  </Router>
);

export default App;

