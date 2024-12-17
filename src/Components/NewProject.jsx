
import { useRef } from "react";
import Input from "./Input";


export default function NewProject({ onAdd }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = dueDate.current.value;

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDate,
    });
  }

  return (
    <div className="w-[35rem] mt-16 ">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            className="bg-stone-200 hover:bg-stone-400 px-6 py-2 text-stone-700 hover:text-stone-950 rounded-md"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
        <li>
          <button className="bg-stone-600 text-stone-50 hover:text-stone-50 hover:bg-stone-950 rounded-md px-6 py-2">
            Cancel
          </button>
        </li>
      </menu>

      <div>
        <Input ref={title} label="Title" type="text" />
        <Input ref={description} label="Description" textarea />
        <Input ref={dueDate} label="Due Date" type="date" />
      </div>
    </div>
  );
}
