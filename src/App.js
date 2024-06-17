import './App.css';

import Items from './components/Items';
import Navbar from './components/Navbar';

import { CustomeItemContext } from './itemContext';



function App() {

  return (
        <div className='App'>
          <h2>Shopping Cart</h2>
          <CustomeItemContext >
            
   
              <Navbar />
              <Items />
    
          </CustomeItemContext>
        </div>
  );
}
export default App;
