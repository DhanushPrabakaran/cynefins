import Image from "next/image";
import React from "react";
import Logo from "@/public/logo.png";
const page = () => {
  return (
    <>
      <div className="navbar bg-base-100 text-center items-center flex">
        <a className="btn btn-ghost normal-case text-xl text-center">
          Cynafins
        </a>
      </div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-vector/paper-style-dynamic-lines-background_23-2149008629.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <Image src={Logo} alt="" layout="responsive" />
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold p-2 ">
              Team mates
            </h1>
            {/*  */}
            <div className="flex flex-wrap">
             
              {/*  */}
              <div className="card w-96 bg-base-100 shadow-xl m-1 ">
                <figure className="px-10 pt-10">
                  <Image
                    src="https://img.freepik.com/free-vector/paper-style-dynamic-lines-background_23-2149008629.jpg"
                    alt="Shoes"
                    className="rounded-xl"
                    width={400}
                    height={400}
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Name</h2>
                  <p>desc</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Resume</button>
                  </div>
                </div>
              </div>
              {/*  */}

              
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
