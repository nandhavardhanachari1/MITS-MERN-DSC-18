import Navbar from "./components/Navbar";
import Effect from "./hooks/Effect";
import EffectWithApi from "./hooks/EffectWithApi";
import Form from "./hooks/Form";
import Hooks from "./hooks/Hooks";
import State from "./hooks/State";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import {Routes,Route}  from 'react-router-dom'
import Ref from "./hooks/Ref";
import Reducer from "./hooks/Reducer";
import Memo from "./hooks/Memo";
import Callback from "./hooks/Callback";
import Todo from "./components/Todo";
const App = () => {
  return (
    <>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/service" element={<Services/>}/> {/* Class Component */}
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        {/* Nested Route */}
        <Route path="/hooks" element={<Hooks/>}> 
          <Route path="useState" element={<State/>}></Route>
          <Route path="form" element={<Form/>}/>
          <Route path="useEffect" element={<Effect/>}/>
          <Route path="useEffectApi" element={<EffectWithApi/>}/>
          <Route path="useRef" element={<Ref/>}/>
          <Route path="useReducer" element={<Reducer/>}/>
          <Route path="useMemo" element={<Memo/>}/>
          <Route path="useCallback" element={<Callback/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App