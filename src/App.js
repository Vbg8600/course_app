//import logo from './logo.svg';
import './App.css';
import {Button} from "reactstrap";
import { ToastContainer, toast } from 'react-toastify';
import Header from "./components/Header";

function App() {
  const notify = () => toast.success("Wow so easy!",{position:'top-center'});

return(
/*   <div>
<h1>Simple Application</h1>
<Button outline color='success' size='lg'>First react Button</Button>
<br/>
<br/>

<Button onClick={notify} color='success'  outline>Notify!</Button>
       
       <ToastContainer /> */
  <Header />
       
 
 // </div>

  );
}

export default App;


/* (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
); */