import { useState } from "react";
import DefaultProject from "./Components/DefaultProject";
import NewProject from "./Components/NewProject";
import ProjectSideBar from "./Components/ProjectSideBar";




function App() {
  const [selectedproject,setSelectedProject] = useState({
    selectedprojectId : undefined,
    projects: []
  })

  function handleclickProject(){
    setSelectedProject(prevstate => {
      return{
        ...prevstate,
        selectedprojectId:null
      }
    })
  }
  let content ;
  if(selectedproject.selectedprojectId === null){
    content = <NewProject />
  }else if(selectedproject.selectedprojectId === undefined){
    content = <DefaultProject onStartAddProject={handleclickProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onStartAddProject={handleclickProject} />
      {content}
    </main>
  );
}

export default App;
