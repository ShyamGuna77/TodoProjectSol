
import Button from "./Button";
export default function ProjectSideBar({ onStartAddProject }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md: text-xl text-stone-200">
        your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+Add projects</Button>
      </div>
    </aside>
  );
}