
const ContactForm = () => {
  return (
    <div className="flex-center">
      <form className="w-full text-[#a7a7a7] flex-col flex gap-7">
        <div className="">
          <label
            htmlFor="name"
            className="label"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Sia"
            className="input"
          />
        </div>
        <div className="">
          <label
            htmlFor="email"
            className="label"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Sia@gmail.com"
            className="input"
          />
        </div>

        <div className="">
          <label
            htmlFor="subject"
            className="label"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            placeholder="what can i help you"
            className="input"
          />
        </div>
        <div className="">
          <label
            htmlFor="message"
            className="label"
          >
            Message
          </label>
          <textarea
            type="text"
            id="message"
            rows={'5'}

            placeholder="Sia"
            className="input"
          />
        </div>
        <button type="submit" className="w-full py-4 bg-blue-50 text-white-50 font-semibold rounded-md hover:bg-blue-600 transition-all duration-300 cursor-pointer">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
