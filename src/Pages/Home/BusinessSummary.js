import React from "react";
import {MdReviews} from 'react-icons/md';
import {GoTools} from 'react-icons/go';

const BusinessSummary = () => {
  return (
    <>
    <h2 className="text-3xl font-mono text-blue-700 font-bold text-center mt-32">Business Summary</h2>
        <div className="stats shadow w-9/12 md:ml-32 ml-10 mt-16 mb-28 font-mono">
      <div className="stat">
        <div className="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">We Served</div>
        <div className="stat-value text-primary">100+</div>
        <div className="stat-desc">Customers</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
        </div>
        <div className="stat-title">Annual revenue</div>
        <div className="stat-value text-secondary">$2.6M</div>
        <div className="stat-desc">21% more than last year</div>
      </div>
      <div className="stat">
        <div className="stat-figure text-secondary">
          <MdReviews></MdReviews>
        </div>
        <div className="stat-title">Reviews</div>
        <div className="stat-value text-success">33k+</div>
        <div className="stat-desc">27% more than last month</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <GoTools></GoTools>
        </div>
        <div className="stat-title">We use</div>
        <div className="stat-value">50+</div>
        <div className="stat-title">Tools </div>
      </div>
    </div>
    </>
  );
};

export default BusinessSummary;
