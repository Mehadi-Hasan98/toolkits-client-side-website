import React from 'react';
import tool from '../../assets/images/tool.jpg';

const Banner = () => {
    return (
        <div class="hero min-h-screen px-12">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={tool} alt="" class="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-3xl font-mono font-bold">Hand Tools!</h1>
      <p class="py-6 font-mono">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary font-mono">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Banner;