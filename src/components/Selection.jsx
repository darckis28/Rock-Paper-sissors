import { Containner } from "./Containner";
import { Circle } from "./Circle";
import Triangle from "/images/bg-triangle.svg";

const Selection = () => {
  return (
    <Containner>
      <section className="[grid-area:main] relative w-80 mx-auto ">
        <img
          src={Triangle}
          alt="triangle"
          className="absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto w-52 "
        />
        <div className="absolute left-0 z-10 top-8 lg:-left-12 ">
          <Circle pick={"paper"} />
        </div>
        <div className="absolute right-0 z-10 top-8  lg:-right-12">
          <Circle pick={"sicssor"} />
        </div>
        <div className="absolute bottom-8 left-24 z-10  lg:left-20  ">
          <Circle pick={"rock"} />
        </div>
      </section>
    </Containner>
  );
};
export default Selection;
