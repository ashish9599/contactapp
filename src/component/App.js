import { Header ,Home,Page404} from "../pages";
import {ContactDetails,ContactForm ,ContactUpdateForm } from './index';
import { BrowserRouter, Routes,Route} from "react-router-dom";
function App() {
  return (<>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/form' element={<ContactForm/>}/>
    <Route exact path='update/:id' element={<ContactUpdateForm/>}/>
    <Route exact path='user/:id' element={<ContactDetails/>}/>
    <Route exact path='*' element={<Page404/>}/>
  </Routes>
  </BrowserRouter>
  </>
    
  );
}

export default App;
