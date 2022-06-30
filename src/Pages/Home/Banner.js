import React from 'react';
import tool from '../../assets/images/tool.jpg';

const Banner = () => {
    return (
        <div className="hero min-h-screen text-white">
  <div className="hero-content flex-col lg:flex-row-reverse w-10/12">
    <img src={tool} alt="" className="rounded-lg md:w-6/12 shadow-2xl" />
    <div>
      <h1 className="text-3xl font-mono font-bold">Hand Tools!</h1>
      <p className="py-6 font-mono">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-secondary font-mono">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Banner;