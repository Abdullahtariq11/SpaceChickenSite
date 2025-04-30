import React from "react";
import Image from "next/image";

function OrderSection() {
  return (
    <section
      id="order-online"
      className="bg-white py-24 text-center px-6"
    >
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
        Order Now
      </h2>
      <p className="text-lg text-gray-600 mb-14 max-w-2xl mx-auto">
        We’ve partnered with your favorite food delivery apps so you can enjoy Space Chicken wherever you are.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Uber Eats Card */}
        <a
          href="https://www.ubereats.com/ca/store/space-chicken/58sLCTpERNmUrjDev_AXSQ?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjgyMCUyMER1bmNhbiUyMEF2ZSUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmYwZDhiMjk5LTEzNDAtNTczNC04YTcyLTcxMDFiOTM4ZjQ3MiUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDkuMjc3NTI2JTJDJTIybG9uZ2l0dWRlJTIyJTNBLTEyMi45NjIwMjElN0Q%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-gray-100 hover:bg-green-50 rounded-xl p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-green-400"
        >
          <Image
            src="/images/uber-eats.png"
            alt="Order on Uber Eats"
            width={140}
            height={60}
            className="object-contain mb-4 group-hover:scale-105 transition-transform"
          />
          <p className="text-sm font-medium text-gray-700 group-hover:text-green-700">
            Order on Uber Eats
          </p>
        </a>

        {/* DoorDash Card */}
        <a
          href="https://www.doordash.com/store/space-chicken-vancouver-1833097/2253729/?event_type=autocomplete&pickup=false"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-gray-100 hover:bg-red-50 rounded-xl p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 hover:border-red-400"
        >
          <Image
            src="/images/doordash.png"
            alt="Order on DoorDash"
            width={140}
            height={60}
            className="object-contain mb-4 group-hover:scale-105 transition-transform"
          />
          <p className="text-sm font-medium text-gray-700 group-hover:text-red-700">
            Order on DoorDash
          </p>
        </a>
      </div>
    </section>
  );
}

export default OrderSection;