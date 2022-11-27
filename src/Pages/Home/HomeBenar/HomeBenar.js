import React from 'react';
import bgimg from '../../../images/background-img.jpg'

const HomeBenar = () => {
    return (
        <div>
            <div className="hero h-96 mt-5 mx-5 mr-10 " style={{ backgroundImage: `url(${bgimg})` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Wellcome</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button  className="btn   bg-gradient-to-r from-primary to-secondary btn-primary hover:btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default HomeBenar;