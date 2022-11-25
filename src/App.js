import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Route/Route';

function App() {
  return (
    <div className= "w-full bg-gradient-to-b from-black to-gray-800">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>

  );
}

export default App;
