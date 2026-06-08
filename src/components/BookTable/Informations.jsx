"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import FormBar from "@/components/BookTable/FormBar";
import PrimaryBtn from "@/components/GlobalComponents/PrimaryBtn";

const bookTableSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string("Email is required").email("Invalid email address"),
  phone: z.e164("Please enter a valid phone number").min(8, "Phone number must be at least 8 digits"),
});

const Informations = () => {
  const router = useRouter();
  const params = useSearchParams();
  const guests = params.get("guests");
  const event = params.get("event");
  const table = params.get("table");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
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

    router.push(`/BookTable/Confirm?guests=${guests}&event=${event}&table=${table}&information=true`);
    reset();
  };

  return (
    <section className="p-7 md:p-0 grid grid-cols-1 lg:grid-cols-2 gap-15 min-h-[calc(100vh-80px)] place-content-center items-start mx-auto max-w-[1200px]">
      {/* LEFT IMAGE */}
      <div className="hidden lg:flex justify-center">
        <Image src="/assets/content-img/thumb1.jpg" alt="Guest" width={450} height={450} />
      </div>

      {/* RIGHT CONTENT */}
      <div className="flex flex-col w-[500px]">
        <div className="mx-auto">
          <FormBar />
        </div>

        <div className="mb-5 text-center">
          <h3>Enter your information</h3>
          <div className="gradient_line h-[5px] w-[200px] mx-auto mb-[var(--space-m)]"></div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <input {...register("name")} placeholder="Your name" className={`input ${errors.name ? "input-error" : ""}`} />
              {errors.name && <p className="error-text">{errors.name.message}</p>}
            </div>

            <div>
              <input {...register("email")} placeholder="Your email" className={`input ${errors.email ? "input-error" : ""}`} />
              {errors.email && <p className="error-text">{errors.email.message}</p>}
            </div>

            <div>
              <input {...register("phone")} placeholder="Your phone number" className={`input ${errors.phone ? "input-error" : ""}`} />
              {errors.phone && <p className="error-text">{errors.phone.message}</p>}
            </div>

            <div>
              <textarea {...register("content")} rows={4} placeholder="Your comment" className="input" />
            </div>

            <div className="flex justify-end">
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
