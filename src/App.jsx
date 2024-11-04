import { useState } from "react";
import ContentPlay from "./components/ContentPlay";
import Modal from "./components/Modal";

function App() {
  return (
    <>
      <main
        className="w-full h-screen text-white font-barlow"
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
