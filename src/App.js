import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import ContactPage from './Components/ContactPage';
import Cursor from './Components/Cursor';
import HomePage from './Components/HomePage';
import ProjectsPage from './Components/ProjectsPage';
import Sidebar from './Components/Sidebar';
import TutorialOverlay from './Components/TutorialOverlay';
import { CursorProvider } from './Contexts/CursorContext';
import { DeviceContext } from './Contexts/DeviceContext';
import useDeviceSize from './Hooks/useDeviceSize';

function App() {

  const [ tutorial, setTutorial ] = useState(true);
  const [ device, setDevice ] = useDeviceSize();

  //run tutorial on first load
  if(tutorial && device !== 'small') return (
    <CursorProvider>
      <TutorialOverlay setTutorial={setTutorial} />
      <Cursor />
    </CursorProvider>
  ) 

  return (
    <Router>
      {/* need to figure out updates to cursor position */}
      <DeviceContext.Provider value={{ device }}>
        <CursorProvider>
          <div className={`app flex-col ${device}`}>
            <Sidebar />
            <main className="flex-col">
              <Switch>
                <Route path="/projects">
                  <ProjectsPage />
                </Route>
                <Route path="/contact">
                  <ContactPage />
                </Route>
                <Route path="/">
                  <HomePage />          
                </Route>
              </Switch>
            </main>
            <footer className="flex-row">Made by Noam Shemi.</footer>
            {device !== 'small' && <Cursor />}
          </div>
        </CursorProvider>
      </DeviceContext.Provider>
    </Router>
  );
}

export default App;
