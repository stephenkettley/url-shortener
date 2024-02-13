import { useState } from "react";

const InputForm = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  function submitForm(event) {
    event.preventDefault();
    setInput("");
    onSubmit(input);
  }
  return (
    <form
      className="relative flex flex-col w-full p-10 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3"
      onSubmit={submitForm}
    >
      <input
        type="text"
        className="flex-1 p-3 border-2 rounded-lg placeholder-yellow-500 focus:outline-none"
        placeholder="Shorten a link here"
        id="link-input"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button
        className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight focus:outline-none md:py-2"
        type="submit"
      >
        Shorten It!
      </button>
      <div className="absolute left-7 bottom-3 text-red text-sm italic"></div>
    </form>
  );
};

export default InputForm;
