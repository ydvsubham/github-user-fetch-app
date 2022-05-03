import './App.css';
import Search from './component.js/Search';
import { useState } from 'react';
import Profile from './component.js/Profile';
import Thembtn from './component.js/Thembtn';
function App() {
  const [userdata, setUserdata] = useState(null)
  const [darktheme, setDarktheme] = useState(true)

  const themechange = () => {
    setDarktheme(!darktheme)
  }

  const setuser = (user) => {
    setUserdata(user)
  }
  return (
    <div className={` ${darktheme? 'darkbody':'lightbody'}`}>
      <div className="conatiner">
        <Thembtn themechange={themechange} darktheme={darktheme} />
        <Search setuser={setuser} darktheme={darktheme} />
        <Profile userdata={userdata} darktheme={darktheme} />
      </div>
    </div>
  );
}

export default App;
