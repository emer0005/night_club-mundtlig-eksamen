"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import PrimaryBtn from "../GlobalComponents/PrimaryBtn";
import { eventDate } from "@/app/dateConverter";
import { useState } from "react";

const bookTableSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string("Email is required").email("Invalid email address"),
  table: z.coerce.number().min(1, "Table number is required"),
  guests: z.coerce.number().min(1, "Please enter the number of guests"),
  eventNight: z.string().min(1, "Event night is required"),
  phone: z.e164("Please enter a valid phone number").min(8, "Phone number must be at least 8 digits"),
});

const BookTable = ({ events, setTakenTables, tables }) => {
  const [numberOfGuest, setNumberOfGuest] = useState("");
  const [availableTables, setAvailableTables] = useState([]);
  const params = useSearchParams();
  const eventId = params.get("eventId");

  const filteredAvailableTables = availableTables.filter((id) => {
    if (numberOfGuest === "") return true;

    const table = tables.find((t) => t.id === id);
    return table.guest >= Number(numberOfGuest);
  });

  const handleEventChange = async (id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reservations?eventId=${id}`);
    const reservations = await response.json();

    const taken = reservations.map((r) => Number(r.table));
    setTakenTables(taken);

    const allTables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const available = allTables.filter((t) => !taken.includes(t));
    setAvailableTables(available);
  };

  if (eventId && availableTables.length === 0) {
    handleEventChange(eventId);
  }

  const handleGuestChange = async (number) => {
    setNumberOfGuest(number);
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(bookTableSchema),
    mode: "onChange",
    defaultValues: {
      eventNight: eventId ?? "",
    },
  });

  const eventNightValue = watch("eventNight");

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reservations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        table: data.table,
        guests: data.guests,
        date: "2026-05-09T20:00:00+02:00",
        phone: data.phone,
        eventId: 1,
      }),
    });
    await handleEventChange(data.eventNight);

    reset();
  };

  return (
    <section>
      <h2 className="mb-[var(--space-l)] md:px-10">Book a table</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="relative grid gap-6 grid-cols-[repeat(auto-fit,minmax(400px,1fr))] justify-center px-1 md:px-10">
          <div>
            <input {...register("name")} type="text" name="name" placeholder="Your name" className={`input ${errors.name ? "input-error" : ""}`} />
            {errors.name && <p className="error-text">{errors.name.message}</p>}
          </div>

          <div>
            <input {...register("email")} type="text" name="email" placeholder="Your email" className={`input ${errors.email ? "input-error" : ""}`} />
            {errors.email && <p className="error-text">{errors.email.message}</p>}
          </div>

          <div>
            <select {...register("eventNight", { onChange: (e) => handleEventChange(e.target.value) })} name="eventNight" className={`input ${errors.eventNight ? "input-error" : ""}`}>
              <option value="">Select event night</option>
              {events.map((event) => (
                <option key={event.id} value={event.id}>
                  {event.title} - {eventDate(event.date)}
                </option>
              ))}
            </select>
            {errors.eventNight && <p className="error-text">{errors.eventNight.message} </p>}
          </div>

          <div>
            <select {...register("guests", { onChange: (e) => handleGuestChange(e.target.value) })} name="guests" className={`input ${errors.guests ? "input-error" : ""}`}>
              <option value="">Number of guests</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
            {errors.guests && <p className="error-text">{errors.guests.message}</p>}
          </div>

          <div>
            <select {...register("table")} name="table" className={`input ${errors.table ? "input-error" : ""}`}>
              <option value="">Select table</option>
              {filteredAvailableTables.map((table) => (
                <option key={table} value={table}>
                  Table {table}
                </option>
              ))}
            </select>
            {eventNightValue && numberOfGuest && filteredAvailableTables.length === 0 && <p>There are no tables that match your selection</p>}
            {errors.table && <p className="error-text">{errors.table.message}</p>}
          </div>

          <div>
            <input {...register("phone")} type="text" name="phone" placeholder="Your phone number" className={`input ${errors.phone ? "input-error" : ""}`} />
            {errors.phone && <p className="error-text">{errors.phone.message}</p>}
          </div>

          <div className="col-span-full">
            <textarea {...register("content")} type="text" name="content" rows={8} placeholder="Your comment" className={`input ${errors.content ? "input-error" : ""}`} />
          </div>

          <div className="flex justify-self-end md:col-start-2">
            <PrimaryBtn disabled={isSubmitting} type="submit">
              {isSubmitting ? "Reserving..." : "Reserve"}
            </PrimaryBtn>
          </div>

          {isSubmitSuccessful && (
            <dialog open className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black p-6 shadow-xl max-w-md w-full text-center z-50 border border-[var(--color-surface-highlight-primary)]">
              <p className="mb-4">Thanks for your reservation! We look forward to welcoming you.</p>
              <form method="dialog">
                <button className="hero_btn_1"> Close </button>
                <div className="corner-triangle-left" />
                <div className="corner-triangle-right" />
              </form>
            </dialog>
          )}
        </div>
      </form>
    </section>
  );
};

export default BookTable;
