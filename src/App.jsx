import { useState } from "react";
import DefaultProject from "./Components/DefaultProject";
import NewProject from "./Components/NewProject";
import ProjectSideBar from "./Components/ProjectSideBar";




function App() {
  const [selectedproject,setSelectedProject] = useState({
    selectedprojectId : undefined,
    projects: []
  })
 //staring project
  function handleclickProject(){
    setSelectedProject(prevstate => {
      return{
        ...prevstate,
        selectedprojectId:null,
      }
    })
  }
  //Adding Project

  function handleAddProject (projectData){
    setSelectedProject(prevState=> {
      const ProjectId = Math.random();
      const newProject = {
          ...projectData,
          id:ProjectId,
      }
      return {
         ...prevState,
         selectedprojectId:undefined,
         projects:[...prevState.projects,newProject]
      }
    })
  }

  function handleCancleAddProject() {
    setSelectedProject((prevstate) => {
      return {
        ...prevstate,
        selectedprojectId: undefined,
      };
    });
  }



  let content ;
  if(selectedproject.selectedprojectId === null){
    content = <NewProject  onAdd ={handleAddProject} onCancel ={handleCancleAddProject}/>
  }else if(selectedproject.selectedprojectId === undefined){
    content = <DefaultProject onStartAddProject={handleclickProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onStartAddProject={handleclickProject} projects = {selectedproject.projects}/>
      {content}
    </main>
  );
}

export default App;
