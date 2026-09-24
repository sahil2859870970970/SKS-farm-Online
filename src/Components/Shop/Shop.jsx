import React from "react";
import Navbar from "../Navbar/Navbar";

import granny from "../../assets/granny.jpg";
import gala from "../../assets/gala.jpg";
import royal from "../../assets/royal.jpg";

function Shop() {
  return (
    <div className="min-h-screen bg-gray-50">

      <Navbar />

      {/* Heading */}
      <section className="text-center py-12">

        <h1 className="text-4xl md:text-6xl font-bold text-red-700">
          Fresh Apples
        </h1>

        <p className="mt-4 text-gray-600">
          Direct from the orchards of Himachal Pradesh
        </p>

      </section>


      {/* Apple varieties */}
      <section className="px-6 md:px-12 pb-16">

        <h2 className="text-3xl font-bold text-center mb-10">
          Apple Varieties
        </h2>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Apple 1 */}
          <div className="bg-white rounded-2xl shadow-md p-5">

            <div className="h-60 bg-red-100 rounded-xl flex items-center justify-center">
              <img
                   src={granny}
                   alt="Granny Smith apples"
                   className="w-full h-full object-contain"
               />
            </div>

            <h3 className="text-2xl font-bold mt-5">
              Granny Smith
            </h3>

            <p className="text-gray-500 mt-2">
              Sweet, juicy and fresh Himachali apples.
            </p>

            <p className="text-xl font-bold mt-4">
              ₹300/ kg
            </p>

             <a
              href="https://wa.me/8580928154?text=Hello%2C%20I%20want%20to%20order%20Granny%20Smith%20apples."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full bg-green-600 text-white py-3 rounded-xl flex items-center justify-center"
            >
              Order on WhatsApp
            </a>

          </div>


          {/* Apple 2 */}
          <div className="bg-white rounded-2xl shadow-md p-5">

            <div className="h-60 bg-red-100 rounded-xl flex items-center justify-center">
              <img
                 src={gala}
                 alt="Gala apples"
                 className="w-full h-full object-contain"
              />
            </div>

            <h3 className="text-2xl font-bold mt-5">
              Gala
            </h3>

            <p className="text-gray-500 mt-2">
              Crisp and naturally sweet apples.
            </p>

            <p className="text-xl font-bold mt-4">
              ₹300/ kg
            </p>

            <a
              href="https://wa.me/8580928154?text=Hello%2C%20I%20want%20to%20order%20Gala%20apples."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full bg-green-600 text-white py-3 rounded-xl flex items-center justify-center"
            >
              Order on WhatsApp
            </a>

          </div>


          {/* Apple 3 */}
          <div className="bg-white rounded-2xl shadow-md p-5">

            <div className="h-60 bg-red-100 rounded-xl flex items-center justify-center">
              <img
                 src={royal}
                 alt="Royal apples"
                 className="w-full h-full object-contain"
              />
            </div>

            <h3 className="text-2xl font-bold mt-5">
              Royal
            </h3>

            <p className="text-gray-500 mt-2">
              Fresh, aromatic and naturally sweet.
            </p>

            <p className="text-xl font-bold mt-4">
              ₹500/ kg
            </p>
            
             <a
              href="https://wa.me/YOUR_NUMBER?text=Hello%2C%20I%20want%20to%20order%20Royal%20apples."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full bg-green-600 text-white py-3 rounded-xl flex items-center justify-center"
            >
              Order on WhatsApp
            </a>


          </div>

        </div>

      </section>

    </div>
  );
}

export default Shop;