// import { useState } from "react";
import ContentPlay from "./components/ContentPlay";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <main
        className="w-full h-screen p-8 text-white font-barlow overflow-x-hidden"
        style={{
          background:
            "linear-gradient(to bottom, hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
        }}>
        <ContentPlay />
        <Modal />
      </main>
    </>
  );
}

export default App;
