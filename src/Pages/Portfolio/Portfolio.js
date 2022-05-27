import React from "react";

const Portfolio = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold font-mono text-center mb-32 mt-16 text-emerald-600">
        My Portfolio
      </h2>
      <div class="card w-96 mx-auto bg-base-100 shadow-xl">
  <div class="card-body items-center text-center">
    <h2 class="card-title"> Name: Mehadi Hasan</h2>
    <p> Email: Mehadihasan.phy@gmail.com</p>
    <p> Educational Background: Bsc in physics From NUB</p>
  </div>
</div>
      <h2 className="text-lg text-center font-semibold mt-8">
        Known Technologies: <br/>
        <ul class="steps steps-vertical">
        <li class="step step-primary">HTML</li>
        <li class="step step-secondary">CSS</li>
        <li class="step step-neutral">Javascript</li>
        <li class="step">React Js</li>
        <li class="step">Bootstrap 5</li>
        <li class="step">Tailwind CSS</li>
        <li class="step">Node Js</li>
        <li class="step">MongoDB</li>
        <li class="step">Express Js</li>
        <li class="step">Firebase Authentication System</li>
        <li class="step">Git</li>
        <li class="step">Github</li>
      </ul>
      </h2>
      <br/>
    </div>
  );
};

export default Portfolio;
