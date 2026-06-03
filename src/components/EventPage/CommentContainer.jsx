"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import PrimaryBtn from "../GlobalComponents/PrimaryBtn";

const commentSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string("Email is required").email("Invalid email address"),
  content: z.string().min(1, "Comment content is required"),
});

const CommentContainer = () => {
  const params = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(commentSchema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const date = new Date().toISOString();
    console.log(data);
    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventId: params.id,
        name: data.name,
        content: data.content,
        date: date,
      }),
    });

    reset();
  };
  return (
    <section className="max-w-[80rem] mx-auto p-10 xl:p-0">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <div>
            <input {...register("name")} type="text" name="name" placeholder="Your name" className="w-full border" className={`input ${errors.name ? "input-error" : ""}`} />
            {errors.name && <p className="text-red-500 text-sm error-text">{errors.name.message}</p>}
          </div>

          <div>
            <input {...register("email")} type="text" name="email" placeholder="Your email" className="w-full border" className={`input ${errors.email ? "input-error" : ""}`} />
            {errors.email && <p className="text-red-500 text-sm error-text">{errors.email.message}</p>}
          </div>
        </div>

        <div>
          <textarea {...register("content")} name="content" rows={6} placeholder="Your comment" className="w-full border" className={`textarea ${errors.content ? "input-error" : ""}`} />
          {errors.content && <p className="text-red-500 text-sm error-text">{errors.content.message}</p>}
        </div>
        <div className="text-right">
          <PrimaryBtn disabled={isSubmitting} text="Submit" type="submit">
            {isSubmitting ? "Submitting..." : "Submit"}
          </PrimaryBtn>
        </div>
      </form>
    </section>
  );
};

export default CommentContainer;
