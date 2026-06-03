"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PrimaryBtn from "../GlobalComponents/PrimaryBtn";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string("Email is required").email("Invalid email address"),
  content: z.string().min(1, "Comment content is required"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const date = new Date().toISOString();
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contact_messages`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        content: data.content,
        date: date,
      }),
    });

    reset();
  };
  return (
    <section className="flex justify-center py-12 px-4">
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 w-full max-w-md">
        <input {...register("name")} type="text" name="name" placeholder="Your name" className="p-5 h-14 border w-full" className={`input ${errors.name ? "input-error" : ""}`} />
        {errors.name && <p className="error-text">{errors.name.message}</p>}

        <input {...register("email")} type="text" name="email" placeholder="Your email" className="p-4 h-14 border w-full" className={`input ${errors.email ? "input-error" : ""}`} />
        {errors.email && <p className="error-text">{errors.email.message}</p>}

        <textarea {...register("content")} name="content" rows={4} placeholder="Your comment" className="p-4 border w-full" className={`textarea ${errors.content ? "input-error" : ""}`} />
        {errors.content && <p className="error-text">{errors.content.message}</p>}

        <div className="flex justify-end">
          <PrimaryBtn disabled={isSubmitting} type="submit" text="Submit">
            {isSubmitting ? "Sender..." : "Send"}
          </PrimaryBtn>
        </div>
      </form>
    </section>
  );
};

export default Contact;
