import { Footer } from "./Footer";
import Header from "./Header";

export const Containner = ({ children }) => {
  return (
    <main className="mx-auto containner max-w-3xl ">
      <Header />
      {children}
      <Footer />
    </main>
  );
};
