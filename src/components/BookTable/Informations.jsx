"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { eventDate } from "@/app/dateConverter";
import { useState } from "react";
import PrimaryBtn from "@/components/GlobalComponents/PrimaryBtn";
import FormBar from "@/components/BookTable/FormBar";
import { useRouter } from "next/navigation";

const bookTableSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string("Email is required").email("Invalid email address"),
  phone: z.e164("Please enter a valid phone number").min(8, "Phone number must be at least 8 digits"),
});

const Informations = ({ events, setTakenTables, tables }) => {
  const router = useRouter();
  const params = useSearchParams();
  const guests = params.get("guests");
  const event = params.get("event");
  const table = params.get("table");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(bookTableSchema),
    mode: "onChange",
  });


  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reservations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        table: table,
        guests: guests,
        date: "2026-05-09T20:00:00+02:00",
        phone: data.phone,
        eventId: event,
      }),
    });
    router.push(
    `/BookTable/Confirm?guests=${guests}&event=${event}&table=${table}`
  );

    reset();
  };

  return (
    <section className="max-w-[80rem] mx-auto p-7 md:p-0 mt-[7rem] grid grid-cols-1 md:grid-cols-2 gap-[12rem]">
  <Image src="/assets/content-img/thumb1.jpg" alt="Guest" width={450} height={450} />

<div>
  <div className="flex flex-col items-center mb-[1rem]">
    <FormBar />
    <h2>Enter your information</h2>
    <div className="gradient_line h-[5px] w-[200px]"></div>
  </div>

    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-6">
        <div>
          <input {...register("name")} type="text" name="name" placeholder="Your name" className={`input ${errors.name ? "input-error" : ""}`} />
          {errors.name && <p className="error-text">{errors.name.message}</p>}
        </div>

        <div>
          <input {...register("email")} type="text" name="email" placeholder="Your email" className={`input ${errors.email ? "input-error" : ""}`} />
          {errors.email && <p className="error-text">{errors.email.message}</p>}
        </div>

        <div>
          <input {...register("phone")} type="text" name="phone" placeholder="Your phone number" className={`input ${errors.phone ? "input-error" : ""}`} />
          {errors.phone && <p className="error-text">{errors.phone.message}</p>}
        </div>

        <div className="col-span-full">
          <textarea {...register("content")} rows={8} placeholder="Your comment" className={`input ${errors.content ? "input-error" : ""}`} />
        </div>

        <div className="flex justify-self-end md:col-start-2">
          <PrimaryBtn disabled={isSubmitting} type="submit">
            {isSubmitting ? "Reserving..." : "Reserve"}
          </PrimaryBtn>
        </div>
      </div>
    </form>
  </div>
</section>

  );
};

export default Informations;

