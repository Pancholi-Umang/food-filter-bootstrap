import './App.css';
import {Routes,Route} from 'react-router-dom'
import Allover from './Component/Allover'
import Breakfast from './Component/Breakfast'
import Dinner from './Component/Dinner'
import Evening from './Component/Evening'
import Lunch from './Component/Lunch'
import Navbar from './Component/Navbar';

function App() {
  return (
    <div>
      {/* <Navbar /> */}

    <Routes>
      <Route exac t path='/' element={<Allover />} />
      <Route exac t path='/all' element={<Allover />} />
      <Route exact path='/breakfast' element={<Breakfast />} />
      <Route exact path='/dinner' element={<Dinner />} />
      <Route exact path='/evening' element={<Evening />} />
      <Route exact path='/lunch' element={<Lunch />} />
    </Routes>
    </div>
  );
}

export default App;
