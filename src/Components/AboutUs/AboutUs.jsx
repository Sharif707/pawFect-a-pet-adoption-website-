import React from "react";
import smile1 from "../../assets/smile-1.webp";
import smile2 from "../../assets/smile-2.webp";
import smile3 from "../../assets/smile-3.webp";
import smile4 from "../../assets/smile-4.webp";

const AboutUsSection = () => {
  return (
    <section>
      <div className="bg-black min-h-[350px]"></div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-lime-200 mb-4">
            About Us And
          </h1>
          <h1 className="text-4xl font-bold text-purple-900 mb-4">
            Everything for pets & pet parents in one place.
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            Wherever you are in your pet parenting journey: from choosing and
            finding a pet to already loving & caring for pets, we're here to
            support you every step of the way.
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Find sound advice, trusted providers, and essential services here -
            all in one place. Because every pet deserves to be well cared for by
            companions who return their love and dedication.
          </p>
        </div>

        {/* Journey Cards Section */}
        <h2 className="text-3xl font-bold text-purple-900 mb-8">
          A Pet Parent's Journey
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Choose a Pet Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-6">
                <h3 className="text-2xl font-semibold mb-4">Choose a pet</h3>
                <p className="text-gray-600">
                  Planning for a new family member is exciting, but it requires
                  lots of research. Start your matchmaking adventure with our
                  expert guidance and resources.
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src={smile2}
                  alt="Person with dog"
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Adopt a Pet Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-6">
                <h3 className="text-2xl font-semibold mb-4">Adopt a pet</h3>
                <p className="text-gray-600">
                  When you adopt, you transform an animal's life with your love.
                  Find your loyal companion through our adoption resources and
                  guidance.
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src={smile1}
                  alt="Person with adopted pet"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-6">
                <h3 className="text-2xl font-semibold mb-4">
                  Health & well-being
                </h3>
                <p className="text-gray-600">
                  Planning for a new family member is exciting, but it requires
                  lots of research. Start your matchmaking adventure with our
                  expert guidance and resources.
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src={smile3}
                  alt="Person with adopted pet"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-6">
                <h3 className="text-2xl font-semibold mb-4">
                  Bring your pet home
                </h3>
                <p className="text-gray-600">
                  What’s that bump? Is my cat sad? Does my pet need a friend?
                  Keeping your companions healthy & happy starts here.
                </p>
              </div>
              <div className="md:w-1/2">
                <img
                  src={smile4}
                  alt="Person with adopted pet"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
