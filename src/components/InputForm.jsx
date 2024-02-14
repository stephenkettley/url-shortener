import { useState } from "react";
import { useForm } from "react-hook-form";

const InputForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();
  const [input, setInput] = useState("");

  function submitForm(data) {
    onSubmit(data.link);
    reset();
  }
  return (
    <div>
      <form
        className="relative flex flex-col w-full p-10 py-12 -mt-20 space-y-4 bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3"
        onSubmit={handleSubmit(submitForm)}
      >
        <input
          {...register("link", {
            required: "Link is required!",
          })}
          type="url"
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
        <div className="absolute left-10 bottom-3 text-red text-md md:left-7">
          {errors.link && <p>{`*${errors.link.message}`}</p>}
        </div>
      </form>
    </div>
  );
};

export default InputForm;
