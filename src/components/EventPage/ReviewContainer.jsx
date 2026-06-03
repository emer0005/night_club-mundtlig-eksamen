import Review from "./Review";
import { Suspense } from "react";
import Image from "next/image";


const ReviewContainer = () => {
  return (
    <section className="max-w-[80rem] mx-auto px-6 py-12 xl:p-0 border border-white mb-[7rem]">
      <div className="p-5">
        <h2>Comments</h2>
        <Suspense
          fallback={
            <div className="flex flex-col items-center py-10">
              <Image src="/assets/loader/madbars.gif" alt="Loading..." width={60} height={60} priority />
              <p className="mt-2 text-sm text-gray-500">Loading comments...</p>
            </div>
          }
        >
          <FetchReview />
        </Suspense>
      </div>
    </section>
  );
};

const FetchReview = async () => {
  "use server";
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comments`);
  const reviews = await response.json();

  return reviews.map((review) => {
    return (
      <div key={review.id}>
        <Review name={review.name} date={review.date} content={review.content} />
      </div>
    );
  });
};

export default ReviewContainer;
