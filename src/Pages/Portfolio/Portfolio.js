import React from "react";

const Portfolio = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold font-mono text-center mb-32 mt-16 text-emerald-600">
        My Portfolio
      </h2>
      <div className="card w-96 font-mono mx-auto bg-base-100 shadow-xl">
  <div className="card-body items-center text-center">
    <h2 className="text-xl text-emerald-500"> Name: Mehadi Hasan</h2>
    <p> Email: Mehadihasan.phy@gmail.com</p>
    <p> Educational Background: <span className="text-blue-600">Bsc in physics</span> From NUB</p>
  </div>
</div>
      <h2 className="text-lg text-center font-semibold mt-8 font-mono">
        Known Technologies: <br/>
        <ul className="steps steps-vertical">
        <li className="step step-primary">HTML</li>
        <li className="step step-secondary">CSS</li>
        <li className="step step-neutral">Javascript</li>
        <li className="step">React Js</li>
        <li className="step">Bootstrap 5</li>
        <li className="step">Tailwind CSS</li>
        <li className="step">Node Js</li>
        <li className="step">MongoDB</li>
        <li className="step">Express Js</li>
        <li className="step">Firebase Authentication System</li>
        <li className="step">Git</li>
        <li className="step">Github</li>
      </ul>
      </h2>
      <br/>
      <h2 className="text-xl text-center mt-10">My 3 Project's Live site link:</h2>
      <p className="text-xl text-center mt-8 mb-8"><span className="font-bold font-mono text-blue-600">Car Dealer</span> : https://car-dealer-d2379.web.app/</p>
      <p className="text-xl text-center mt-8 mb-8"><span className="font-bold font-mono text-blue-600">Creative Studio Photography</span>: https://creative-studio-photography.web.app/</p>
      <p className="text-xl text-center mt-8 mb-10"><span className="font-bold font-mono text-blue-600">Gadget Store BD</span>: https://gadget-store-bd.netlify.app/</p>
    </div>
  );
};

export default Portfolio;
