import './App.css';
import Sidebar from './Sidebar';
import AppBody from './AppBody';

function viewScreen(screen)
{
   
}

function App() {
  return (
    <div id="viewport">
        <Sidebar />
        
        <div id="content">
          <div class="container-fluid" >
            <div class="content-area">
              <AppBody />
            </div>
          </div>
        </div>
        

      </div>
  );
}

export default App;
