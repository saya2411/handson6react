import './App.css';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import Student from './Components/Student';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Home from './Components/Home';
import AddStudent from './Components/AddStudent';
import UpdateStudent from './Components/UpdateStudent';
import { useState } from 'react';
import ContextData from './Components/ContextAPI';


function App() {
  const [data,setData] = useState([
    {name :'Prep1',age:22,course: 'MERN',batch:'Dec'},
    {name :'Prep2',age:21,course: 'MERN',batch:'Mar'},
    {name :'Prep3',age:23,course: 'MERN',batch:'Jan'},
    {name :'Prep4',age:24,course: 'MERN',batch:'Feb'},
  ]);
  
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home/>} />
        {/* <Route path='/student' element= {<Student/>} /> */}
        <Route path='/student' element= {
          <ContextData.Provider value={{entries:data, updateData:setData}}>
            <Student/>
          </ContextData.Provider>
        }/>
        <Route path='/newstudent' element= {
          <ContextData.Provider value={{entries:data, updateData:setData}}>
            <AddStudent />
          </ContextData.Provider>
        }/>
        <Route path='/updateStudent' element= {
          <ContextData.Provider value={{entries:data, updateData:setData}}>
            <UpdateStudent />
          </ContextData.Provider>
       }/>
        <Route path='/contactus' element= {<Contact/>} />
        <Route path='/*' element= {<Error/>} />
      </Routes>
     </BrowserRouter> 
    </div>
  );
}

export default App;
