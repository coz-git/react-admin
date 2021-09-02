import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Navbar />
            <Content />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
