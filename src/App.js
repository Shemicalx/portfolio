import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import ContactPage from './Components/ContactPage';
import HomePage from './Components/HomePage';
import ProjectsPage from './Components/ProjectsPage';
import Sidebar from './Components/Sidebar';
import TutorialOverlay from './Components/TutorialOverlay';
import { CursorProvider } from './Contexts/CursorContext';

function App() {

  const [ tutorial, setTutorial ] = useState(true);

  //run tutorial on first load
  if(tutorial) return (
    <CursorProvider>
      <TutorialOverlay setTutorial={setTutorial} />
    </CursorProvider>
  ) 

  return (
    <Router>
      {/* need to figure out updates to cursor position */}
      <CursorProvider>
          <div className="app flex-col">
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
          </div>
      </CursorProvider>
    </Router>
  );
}

export default App;
