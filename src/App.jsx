import NavBar from "./component/NavBar"
import SideBar from "./component/SideBar"
import Content from "./component/Content"
import { useState } from "react";

const App = () => {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    sidebar ? setSidebar(false) : setSidebar(true);
  };
  return (
    <div className="container">
      <NavBar toggleSidebar={toggleSidebar} />
      <Content />
      <SideBar sidebar={sidebar} toggleSidebar={toggleSidebar}/>
    </div>
  )
}

export default App