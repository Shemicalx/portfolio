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
  if(tutorial && (device === 'medium' || device === 'large')) return (
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
            <main className={`flex-col ${device}`}>
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
            <footer className="flex-row">© 2021 Noam Shemi. All Rights Reserved.</footer>
            {(device === 'medium' || device === 'large') && <Cursor />}
          </div>
        </CursorProvider>
      </DeviceContext.Provider>
    </Router>
  );
}

export default App;
