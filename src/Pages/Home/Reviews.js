import React, { useEffect, useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const reverse = [...reviews].reverse();
  useEffect(() => {
    fetch("https://blooming-stream-16978.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <>
      <h2 className="text-3xl font-mono text-blue-700 font-bold text-center mt-32">
        Customer's Review
      </h2>

      <div className="grid sm:grid-cols-1 lg:grid-cols-3 md:px-24">
        {reverse.map((review) => (
          <div key={review.id}>
            <div style={{height: "400px"}} class="card w-80 bg-base-100 shadow-xl mt-12 font-mono">
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
                <p>Rating: {review.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Reviews;
