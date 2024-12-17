import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd,onCancel }) {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDate,
    });
  }

  return (
    <>
      <Modal ref={modal} buttonCaption="Okay">
        <h2 className="text-2xl font-bold text-stone-700 my-4">
          Invalid Input
        </h2>
        <p className="text-stone-500 mb-2">Oops! Something went wrong.</p>
        <p className="text-stone-500 mb-4">
          Please fill out all the forms before submitting.
        </p>
      </Modal>

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
            <button className="bg-stone-600 text-stone-50 hover:text-stone-50 hover:bg-stone-950 rounded-md px-6 py-2"
             onClick={onCancel}>
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
    </>
  );
}
