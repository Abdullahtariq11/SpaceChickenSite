"use client";
import React from "react";

const reviews = [
  {
    name: "Harsimran Kaur",
    rating: 5,
    text: "Delicious food, great portion sizes, and a warm, welcoming vibe. The staff was attentive and everything came out quickly. Highly recommend for a casual yet satisfying meal! 🤘🏻",
  },
  {
    name: "Abdullah Tariq",
    rating: 5,
    text: "Chicken Space isn’t just another burger joint — it’s a spot that turns a simple meal into an experience. Juicy burgers, perfect fries, and unmatched flavor. Highly recommended.",
  },
  {
    name: "Ronak Arora",
    rating: 5,
    text: "Visited with my friend today! They’re creating a beautiful environment and the food was too 😋 yummy! Love it!",
  },
  {
    name: "Jerry Wernicke",
    rating: 5,
    text: "Tried it at 1am and was amazed! Fresh food, friendly staff, and a cozy space vibe. Burger and nuggets were absolutely delicious. Will definitely be back. Yum yum yum!!",
  },
  {
    name: "Humair Ahmed",
    rating: 5,
    text: "Exceptional service and atmosphere. The grilled chicken was tender, perfectly seasoned, and rich with flavor.",
  },
  {
    name: "Samson ED",
    rating: 5,
    text: "The Juicy Nashville Chicken Burger is a flavor-packed masterpiece. Heat, crunch, and juicy perfection—simply unforgettable.",
  },
  {
    name: "Kiran Purewal",
    rating: 5,
    text: "Absolutely amazed with the quality of food they are serving! Amazing experience.",
  },
];

function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="bg-gradient-to-b from-yellow-50 via-orange-50 to-white py-24 text-center px-6"
    >
      <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
        What Our Customers Say
      </h2>
      <div className="w-20 h-1 bg-yellow-400 mx-auto mb-10 rounded-full" />

      <p className="text-lg text-gray-700 mb-14 max-w-2xl mx-auto">
        Real reviews from happy customers who’ve taken a bite out of the galaxy.
      </p>

      <div className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2 pb-2">
        {reviews.map((review, idx) => (
          <div
            key={idx}
            className="snap-start min-w-[320px] max-w-[320px] bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-left flex-shrink-0 border border-yellow-100"
          >
            <div className="text-yellow-400 mb-2 text-xl">
              {"⭐".repeat(review.rating)}
            </div>
            <p className="text-gray-800 italic mb-4 leading-relaxed">“{review.text}”</p>
            <p className="text-sm font-semibold text-gray-600">— {review.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ReviewsSection;