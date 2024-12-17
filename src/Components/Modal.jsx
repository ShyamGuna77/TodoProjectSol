import { createPortal } from "react-dom";
import { forwardRef, useImperativeHandle } from "react";
import { useRef } from "react";

const Modal = forwardRef(function Modal({ children,buttonCaption }, ref) {
    const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
       
      dialog.current.showModal();
      },
    };
  });


  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/50 fixed inset-0 m-auto w-[500px] max-w-lg p-8 rounded-lg shadow-lg bg-white"
    >
      {children}
      <form method="dialog" className="mt-4 flex justify-end">
        <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-200">
          {buttonCaption}
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
