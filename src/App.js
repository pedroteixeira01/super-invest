import './App.css';

import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Users } from './components/Users';

function App() {
  return (
    <div className='App'>
      <Header />
      <Users />
      <Footer />
    </div>
  );
}

export default App;
