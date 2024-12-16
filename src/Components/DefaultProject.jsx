import NoprojectImage from "../assets/no-projects.png"
import Button from "./Button"

export default function DefaultProject ({onStartAddProject}) {

    return (
      <div className="mt-24 text-center  w-2/3">
        <img
          src={NoprojectImage}
          alt="Empty Project"
          className="w-16 h-16 object-contain m-auto"
        />
        <h2 className="text-xl font-bold text-stone-500 my-4">
          No Project Selected
        </h2>
        <p className="text-stone-400 mb-4">Get Started with a new one</p>
        <p className="mt-8">
          <Button onClick={onStartAddProject}>Create New Project</Button>
        </p>
      </div>
    );
}