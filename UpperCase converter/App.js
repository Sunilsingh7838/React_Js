
import './App.css';
import'../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Navbar';
// import TextForm from './Component/TextForm';
import About from './Component/About';


function App() {
  return (
    <>
<Navbar title="HealthLab"/>
<div className="container my-3">
{/* <TextForm heading = " Enter the Text to Analysis"/> */}
<About/>

</div>
    </>
  );
}

export default App;
