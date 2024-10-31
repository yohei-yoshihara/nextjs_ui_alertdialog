"use client";

import { ReactNode, useState } from "react";
import AlertDialog from "@/app/ui/alert-dialog";

const closeButton: ReactNode = (
  <div className="text-white bg-red-500 hover:bg-red-600 rounded-md py-1 px-2 mt-2">
    Close
  </div>
);

const buttons: ReactNode[] = [
  <div
    key="A"
    className="text-white bg-blue-500 hover:bg-blue-600 rounded-md py-1 px-2 mt-2 mr-2"
  >
    Choose A
  </div>,
  <div
    key="B"
    className="text-white bg-blue-500 hover:bg-blue-600 rounded-md py-1 px-2 mt-2 mr-2"
  >
    Choose B
  </div>,
];

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="m-5">
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-500 text-white font-bold rounded-lg p-2"
        >
          Open Alert Dialog
        </button>

        <AlertDialog
          className="bg-zinc-600 p-5 rounded-lg"
          isOpen={isOpen}
          onClose={() => {
            console.log(`Close button is pushed`);
            setIsOpen(false);
          }}
          closeButton={closeButton}
          buttons={buttons}
          onCloseWithButton={(key) => {
            console.log(`Button ${key} is pushed`);
            setIsOpen(false);
          }}
        >
          <div className="text-white max-w-sm">
            <header className="text-2xl font-bold">Title</header>
            <main>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
              harum possimus voluptates est? Ea, qui, incidunt expedita cum
              natus fuga totam reprehenderit distinctio laudantium velit autem
              adipisci? Incidunt, corporis iste!
            </main>
          </div>
        </AlertDialog>
      </div>
    </>
  );
}
