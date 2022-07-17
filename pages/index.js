import { useState, useEffect } from "react";
const Home = ({}) => {
  const [getter, setter] = useState(0);

  const Decrement = () => {
    setter(getter--);
  };
  const Increment = () => {
    setter(getter++);
  };

  return (
    <>
      <main className="w-full flex justify-center">
        <section className="w-full max-w-2xl min-h-screen mx-5 lg:mx-0 px-5 pt-16">
          <p className="text-5xl">{getter} </p>
          <div className="flex mt-5 gap-4">
            <button onClick={Increment} className="p-3 bg-cyan-400 rounded">
              Increment
            </button>
            <button onClick={Decrement} className="p-3 bg-orange-300 rounded">
              Decrement
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
