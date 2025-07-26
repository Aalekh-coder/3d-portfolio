import { useForm } from "react-hook-form";
import * as Z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";

const ContactForm = () => {
  const initialValue = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const contactFormSchema = Z.object({
    name: Z.string().nonempty("Name is Required"),
    email: Z.string().email("Invalid email").nonempty("Email is Required"),
    subject: Z.string().nonempty("subject is Required"),
    message: Z.string().nonempty("message is Required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialValue,
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <div className="flex-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full text-[#a7a7a7] flex-col flex gap-7"
      >
        <div className="">
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            placeholder="Sia"
            className="input"
          />
          {errors?.name && (
            <span className="text-red-500">{errors?.name?.message}</span>
          )}
        </div>
        <div className="">
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            {...register("email")}
            type="email"
            id="email"
            placeholder="Sia@gmail.com"
            className="input"
          />
          {errors?.email && (
            <span className="text-red-500">{errors?.email?.message}</span>
          )}
        </div>

        <div className="">
          <label htmlFor="subject" className="label">
            Subject
          </label>
          <input
            {...register("subject")}
            type="text"
            id="subject"
            placeholder="what can i help you"
            className="input"
          />
          {errors?.subject && (
            <span className="text-red-500">{errors?.subject?.message}</span>
          )}
        </div>
        <div className="">
          <label htmlFor="message" className="label">
            Message
          </label>
          <textarea
            {...register("message")}
            type="text"
            id="message"
            rows={"5"}
            placeholder="Sia"
            className="input"
          />
          {errors?.message && (
            <span className="text-red-500">{errors?.message?.message}</span>
          )}
        </div>
        <button
          type="submit"
          className="w-full py-4 bg-blue-50 text-white-50 font-semibold rounded-md hover:bg-blue-600 transition-all duration-300 cursor-pointer"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
