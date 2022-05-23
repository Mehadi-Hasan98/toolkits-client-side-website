import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <>
      <h2 className="text-3xl font-bold text-center mt-16">
        Customer's Review: {reviews.length}
      </h2>

      <div className="grid sm:grid-cols-1 lg:grid-cols-3 md:px-24">
        {reviews.map((review) => (
          <div key={review.id}>
            <div class="card w-80 bg-base-100 shadow-xl mt-12">
              <figure class="px-10 pt-10">
                <img
                  src={review.img}
                  alt="Review"
                  class="rounded-xl"
                />
              </figure>
              <div class="card-body items-center text-center">
                <h2 class="card-title">Name: {review.name}</h2>
                <p>Review: {review.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Reviews;
