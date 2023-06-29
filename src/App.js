import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
   
    <>
    <Navbar title = "textEdit"/>
    <div className="container">
    <TextForm heading = "Enter your text here."/>
    </div>
    </>
   
  );
}

export default App;
