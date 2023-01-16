import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
// import About from './component/About';

function App() {
  return (
    <>
    <Navbar title= "TextUtils" aboutText="About"/>
    <div className="container my-5">
    <Textform heading= "Enter The text to analyze" />
    {/* <About/> */}
    </div>
    </>
  );
}

export default App;
 