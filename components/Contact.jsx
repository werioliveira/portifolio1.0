import React from "react";
import { SocialIcon } from "react-social-icons";
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    window.location.href = `mailto:werioliveira@hotmail.com?subject=${formData.subject}
    &body= Hi i'm ${formData.name}. ${formData.message}
    this is my email to contact ${formData.email}`;
  };

  return (
    <div className="min-w-full min-h-screen bg-slate-100 overflow-hidden flex md:text-left md:flex-row  justify-center items-center dark:bg-neutral-800">
      <div className="w-screen md:w-2/3 justify-center items-center">
        <div className="justify-center text-center p-10">
          <h1 className="text-4xl font-Rajdhani font-bold uppercase tracking-[15px]">
            CONTACT
          </h1>
          <div className="flex flex-row justify-evenly mt-10">
            <div>
              <SocialIcon
                className="hover:opacity-80 ease-in-out"
                url="https://www.linkedin.com/in/weri-oliveira-81054a197/"
              />
              <p className="font-Rajdhani text-gray-600 dark:text-white">
                Linkedin
              </p>
            </div>
            <div>
              <SocialIcon
                className="hover:opacity-80 ease-in-ou dark:bg-slate-50 dark:rounded-full"
                url="https://github.com/werioliveira"
              />
              <p className="font-Rajdhani text-gray-600 dark:text-white">
                Github
              </p>
            </div>
          </div>
          <div className="min-w-96 m-10">
            <form onSubmit={handleSubmit(onSubmit)} action="" method="post">
              <div className="flex flex-col gap-2">
                <input
                  {...register("name")}
                  className="contactInputs"
                  placeholder="Name"
                  type="text"
                />
                <input
                  {...register("email")}
                  className="contactInputs"
                  type="email"
                  placeholder="Email"
                />
                <input
                  {...register("subject")}
                  className="contactInputs"
                  type="text"
                  placeholder="Subject"
                />
              </div>
              <div className="flex flex-col gap-4 mt-5">
                <textarea
                  {...register("message")}
                  className="contactInputs"
                  cols="30"
                  rows="10"
                  placeholder="Message"
                ></textarea>
                <button className="bg-gray-800 dark:bg-gray-50 dark:text-gray-800 py-5 px-10 rounded-sm text-white font-bold text-lg btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
