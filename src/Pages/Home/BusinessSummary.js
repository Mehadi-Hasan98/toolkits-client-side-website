import React from "react";
import {MdReviews} from 'react-icons/md';
import {GoTools} from 'react-icons/go';

const BusinessSummary = () => {
  return (
    <>
    <h2 className="text-3xl font-mono text-blue-700 font-bold text-center mt-32">Business Summary</h2>
        <div class="stats shadow w-9/12 ml-32 mt-16 mb-28 font-mono">
      <div class="stat">
        <div class="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-8 h-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div class="stat-title">We Served</div>
        <div class="stat-value text-primary">100+</div>
        <div class="stat-desc">Customers</div>
      </div>

      <div class="stat">
        <div class="stat-figure text-secondary">
        </div>
        <div class="stat-title">Annual revenue</div>
        <div class="stat-value text-secondary">$2.6M</div>
        <div class="stat-desc">21% more than last year</div>
      </div>
      <div class="stat">
        <div class="stat-figure text-secondary">
          <MdReviews></MdReviews>
        </div>
        <div class="stat-title">Reviews</div>
        <div class="stat-value text-success">33k+</div>
        <div class="stat-desc">27% more than last month</div>
      </div>

      <div class="stat">
        <div class="stat-figure text-secondary">
          <GoTools></GoTools>
        </div>
        <div class="stat-title">We use</div>
        <div class="stat-value">50+</div>
        <div class="stat-title">Tools </div>
      </div>
    </div>
    </>
  );
};

export default BusinessSummary;
