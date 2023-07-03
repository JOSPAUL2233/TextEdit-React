import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
   
    <>
    <Navbar title = "Text Edit"/>
    <div className="container">
    <TextForm heading = "Enter your text here."/>
    </div>
    </>
   
  );
}

export default App;
