import './App.css';
import { DataProvider } from './context/DataContext';
import { AppRouter } from './routers/AppRouter';

export const App = () => {
  return (
    <DataProvider>
      <AppRouter />
    </DataProvider>
  );
}

export default App;
