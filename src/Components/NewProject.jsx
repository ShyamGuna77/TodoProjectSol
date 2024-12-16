
import Input from "./Input"

export default function NewProject() {
    return <div className="w-[35rem] mt-16 ">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="bg-stone-200 hover:bg-stone-400 px-6 py-2 text-stone-700 hover:text-stone-950 rounded-md">Save</button>
          </li>
          <li>
          <button className="bg-stone-600 text-stone-50 hover:text-stone-50 hover:bg-stone-950 rounded-md px-6 py-2 ">Cancel</button>
        </li>
      </menu>

    <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input label="Due Date" />
    </div>
    </div>
}