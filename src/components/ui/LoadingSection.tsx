import React from "react";
import { FiMapPin, FiPhone } from "react-icons/fi";

function LocationSection() {
  return (
    <section id="location" className="bg-gradient-to-b from-yellow-50 via-orange-50 to-white py-24 text-center px-6">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Visit Space Chicken</h2>
      <div className="w-20 h-1 bg-yellow-400 mx-auto mb-10 rounded-full" />

      <p className="text-lg text-gray-700 mb-14 max-w-2xl mx-auto">
        Whether you’re dining in or picking up, our location is easy to find and full of flavor.
      </p>

      <div className="w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl ring-1 ring-yellow-100 mb-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2604.5330311094317!2d-123.07202998736854!3d49.24734207126815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548677af0dc8ddd7%3A0xabe4b54227475445!2sSPACE%20CHICKEN!5e0!3m2!1sen!2sca!4v1745984461166!5m2!1sen!2sca"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="text-gray-800 space-y-2 text-lg">
        <p className="flex items-center justify-center gap-2">
          <FiMapPin className="text-yellow-500" />
          1707 Kingsway, Vancouver, BC V5N 2S4
        </p>
        <p className="flex items-center justify-center gap-2">
          <FiPhone className="text-yellow-500" />
          (604) 786-9900
        </p>
        <p>Open Daily: 11:00 AM – 11:00 PM</p>
      </div>
    </section>
  );
}

export default LocationSection;