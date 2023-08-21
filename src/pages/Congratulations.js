import React from "react";
import CongratComp from "../components/CongratComp";

export default function Congratulations() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md mb-12">
        <CongratComp />
      </div>
      <div class="newsletter-section bg-gray-900 py-10">
  <div class="container mx-auto px-4">
    <div class="newsletter-content text-center">
      <h1 class="newsletter-heading text-white font-bold text-4xl mb-4">
        Get Our Pro Offers
      </h1>
      <p class="newsletter-description text-gray-300 dark:text-gray-200 font-semibold text-lg mb-6">
        Create a compelling visual identity for your company and build a strong brand presence.
      </p>
    </div>
    <form class="newsletter-form max-w-sm mx-auto">
      <div class="relative">
        <input
          type="email"
          class="newsletter-input block w-full p-4 pl-10 text-sm text-gray-500 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email here"
          required
        />
        <button
          type="submit"
          class="newsletter-button absolute right-2 bottom-2.5 ml-2 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-500 text-white font-medium rounded-lg text-sm px-4 py-2"
        >
          Subscribe
        </button>
      </div>
    </form>
  </div>
</div>
    </div>
  );
}
