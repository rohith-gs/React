import React,{useState} from 'react';
import Homepage from './components/Homepage';
//import Greeting from './components/Greeting';
//import Sample from './components/sample';
//import Changethestate from './components/Changethestate';
//import Dept from './components/twocom';
//import Counter from './components/Counter';
//import Togglemessage from './components/Togglemessageclass3';
//import TwoWay from './components/TwoWay';
//import ParentCom from './components/ParentCom';
//import Muidemo from './components/Muidemo';
//import SignIn from './components/Newtry';
//import Newhome from './components/Newhome';
//import BasicPopover from './components/Muipop';
import Signup from './components/Signup';
import Loginpge from './components/Loginpge';
function App() {
    const [currentPage, setCurrentPage] = useState('home');
  
    const navigateTo = (page) => {
      setCurrentPage(page);
    };
  
    const renderPage = () => {
      switch (currentPage) {
        case 'home':
          return <Homepage onNavigate={navigateTo} />;
        case 'login':
          return <Loginpge/>
        case 'signup':
          return <Signup/>;
        default:
          return <Homepage onNavigate={navigateTo} />;
      }
    };
  
    return (
      <div>
        {renderPage()}
      </div>
    );
  }
  
  export default App;