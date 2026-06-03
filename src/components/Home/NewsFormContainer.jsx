"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import PrimaryBtn from "../GlobalComponents/PrimaryBtn";

const NewsletterSchema = z.object({
  email: z
    .string("Email is required")
    .email("Invalid email address")
    .refine(
      async (email) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/newsletters?email=${email}`, { cache: "no-store" });
        const dataEmail = await response.json();
        return dataEmail.length === 0;
      },
      { message: "This email is already subscribed" }
    ),
});

const NewsFormContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(NewsletterSchema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const date = new Date().toISOString();
    console.log(data);
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/newsletters`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
      }),
    });

    reset();
  };
  return (
    <section className="flex flex-col items-center mt-[7rem]">
      <h2>want the latest night club news</h2>
      <p className="mb-[var(--space-xl)]">
        Subscribe to our newsletter and never miss an <span className="highlight">Event</span>
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-row flex-wrap items-start gap-4 w-full max-w-[500px]">
        <div className="flex flex-row gap-6 justify-center w-full">
          <input {...register("email")} type="text" name="email" placeholder="Enter Your Email" className={`input ${errors.email ? "input-error" : ""} order--1 news_input`} />

          <PrimaryBtn text="Subscribe" disabled={isSubmitting} type="submit">
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </PrimaryBtn>
        </div>

        {errors.email && <p className="error-text order-3 w-full">{errors.email.message}</p>}
      </form>
    </section>
  );
};

export default NewsFormContainer;
