import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import MyButton from "./myButton";

function ContactForm({ defaultMsg }) {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      message: defaultMsg ?? "",
    },
  });

  async function onSubmit(data) {
    console.log("sending");
    try {
      await emailjs.send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );
      console.log("sent");
    } catch (error) {
      console.log(error);
      setError("root", { message: error });
    }
  }

  return (
    <div className="  p-6 bg-cardC rounded-md h-full ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-4 "
      >
        <div className="formField">
          <label htmlFor="title">Name:</label>
          <input
            type="text"
            id="name"
            placeholder="Your name..."
            {...register("name", {
              required: "Name is required",
              validate: (v) =>
                v.trim().length > 2 || "Name must be at least 2 chars",
            })}
            className="px-4 py-2 rounded-lg bg-formInput placeholder:text-black!"
          />
          {errors.name && (
            <p className="text-red-500"> {errors.name.message} </p>
          )}
        </div>
        <div className="formField">
          <label htmlFor="title">Email:</label>
          <input
            type="text"
            id="email"
            placeholder="Type your mail..."
            {...register("email", {
              required: "Email is required",
              validate: (v) =>
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) ||
                "Please enter a valid email",
            })}
            className="px-4 py-2 rounded-lg bg-formInput placeholder:text-black!"
          />
          {errors.email && (
            <p className="text-red-500"> {errors.email.message} </p>
          )}
        </div>
        <div className="formField">
          <label htmlFor="message">Message:</label>
          <textarea
            rows={4}
            id="message"
            placeholder="Type your message..."
            {...register("message", {
              required: "Please type a message",
              validate: (v) =>
                v.trim().length > 9 || "Message must be at least 10 chars",
            })}
            className="px-4 py-2 rounded-lg bg-formInput placeholder:text-black!"
          ></textarea>
          {errors.message && (
            <p className="text-red-500"> {errors.message.message} </p>
          )}
        </div>
        {errors.root && (
          <p className="text-center text-red-500">{errors.root.message}</p>
        )}
        <div className="w-full flex">
          <MyButton type="submit" text="Send" text2="Sending" isDisabled={isSubmitting} styles={"flex-1"}/>
          
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
