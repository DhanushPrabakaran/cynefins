import Image from "next/image";
import React from "react";
import Logo from "@/public/logo.png";
import sam from '@/public/samira.jpg'
import pri from '@/public/priya.jpg'
import dhan from '@/public/dhanu.png'
import inb from '@/public/inban.jpg'
import siv from '@/public/siva.jpg'
import yuva from '@/public/yuvarani.jpg'
import ragu from '@/public/ragu.jpg'
import jose from '@/public/josee.jpg'



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
          <div className="max-full">
            <h1
            className=" text-8xl font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Cynefin</h1>
            <Image src={Logo} alt="" layout="responsive" />
            <p className="mb-5 w-full">
            A team synonymous with collaborative brilliance, epitomizes the power of unity and shared vision. Each member embodies a unique set of skills and perspectives, seamlessly blending their expertise to create a synergy that propels the team forward. Together, they navigate challenges, unlock innovative solutions, and foster an environment where every idea is valued. Cynafins understands that collaboration is not just a strategy; it is the heart of their success, fueling their journey towards collective triumph and making them a force to be reckoned with in the business realm
            </p>
            <a className="btn btn-primary" href={"https://instagram.com/cynefins_kit?igshid=OGQ5ZDc2ODk2ZA=="}>Insta</a>
          </div>
        </div>
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="">
            <h1 className="text-5xl font-bold p-2 ">Team mates</h1>
            {/*  */}
            <div className="flex flex-wrap">
              {/*  */}
              <div className="card w-96 bg-base-100 shadow-xl m-1 ">
                <figure className="px-10 pt-10">
                  <Image
                    src={sam}
                    alt="q"
                    className="rounded-xl"
                    width={400}
                    height={400}
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Samira</h2>
                  <p>Captain</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Resume</button>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="card w-96 bg-base-100 shadow-xl m-1 ">
                <figure className="px-10 pt-10">
                  <Image
                    src={dhan}
                    alt="Shoes"
                    className="rounded-xl"
                    width={400}
                    height={400}
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Dhanush</h2>
                  <p>Vice Captain</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Resume</button>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="card w-96 bg-base-100 shadow-xl m-1 ">
                <figure className="px-10 pt-10">
                  <Image
                    src={inb}
                    alt="Shoes"
                    className="rounded-xl"
                    width={400}
                    height={400}
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Inban</h2>
                  <p>Web Desiger</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Resume</button>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="card w-96 bg-base-100 shadow-xl m-1 ">
                <figure className="px-10 pt-10">
                  <Image
                    src={ragu}
                    alt="Shoes"
                    className="rounded-xl"
                    width={400}
                    height={400}
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Ragunath</h2>
                  <p>Poster Design</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Resume</button>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="card w-96 bg-base-100 shadow-xl m-1 ">
                <figure className="px-10 pt-10">
                  <Image
                    src={siv}
                    alt="Shoes"
                    className="rounded-xl"
                    width={400}
                    height={400}
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">SivaBalan</h2>
                  <p>Team content creator</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Resume</button>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="card w-96 bg-base-100 shadow-xl m-1 ">
                <figure className="px-10 pt-10">
                  <Image
                    src={pri}
                    alt="Shoes"
                    className="rounded-xl"
                    width={400}
                    height={400}
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Priyadharshini</h2>
                  <p>Team content creator</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Resume</button>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="card w-96 bg-base-100 shadow-xl m-1 ">
                <figure className="px-10 pt-10">
                  <Image
                    src={jose}
                    alt="Shoes"
                    className="rounded-xl"
                    width={400}
                    height={400}
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Glastan Jose</h2>
                  <p>batch Desiger</p>
                  <div className="card-actions">
                    <button className="btn btn-primary">Resume</button>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="card w-96 bg-base-100 shadow-xl m-1 ">
                <figure className="px-10 pt-10">
                  <Image
                    src={yuva}
                    alt="Shoes"
                    className="rounded-xl"
                    width={400}
                    height={400}
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">Yuvarani</h2>
                  <p>Social Media</p>
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
