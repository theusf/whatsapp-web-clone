import './App.css';
import Sidebar from './Sidebar';
import Chat from './Chat';

function App() {
  return (
    // BEM naming convention
    <div className="app">

      <div className="app__body">
         {/* Siderbar */}
         <Sidebar/>
         <Chat/>
         {/* Chat */}

      </div>
    </div>
  );
}

export default App;
