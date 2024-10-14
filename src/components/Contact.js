const Contact = () => {
  return (
    <div className="w-full mx-auto my-10 min-h-[88vh] max-w-[550px] ">
      <form>
        <div className="mb-5">
          <label htmlFor="name" className="mb-3 block text-base  font-medium ">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
            className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium  outline-none focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="mb-3 block text-base  font-medium ">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="abc@gmail.com"
            className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium  outline-none focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="subject"
            className="mb-3 block text-base  font-medium "
          >
            Subject
          </label>
          <input
            type="text"
            name="subect"
            id="subject"
            placeholder="Subject"
            className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium  outline-none focus:shadow-md"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="feedback"
            className="mb-3 block text-base  font-medium "
          >
            Feedback
          </label>
          <input
            type="text"
            name="feedback"
            id="feedback"
            placeholder="Please give your feedback here!"
            className="w-full rounded-md border border-black bg-white py-3 px-6 text-base font-medium  outline-none focus:shadow-md"
          />
        </div>
        <div className="flex items-center justify-center my-10">
          <button className="px-8 py-2 mx-4 w-[400px]  bg-orange-500 text-white  rounded-lg hover:text-black">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
