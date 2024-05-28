import React from 'react';

const AboutGuideSection = ({ guide }) => {
  return (
    <section className="py-8 px-4 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">About the Guide</h2>
      <div className="container mx-auto px-5 py-12 bg-white rounded-lg shadow-lg">
        <div className="flex flex-col lg:flex-row items-center">
        <img src="https://veronikasadventure.com/wp-content/uploads/2024/02/1_rinjani-trekking-three-days-two-night-summit-lake.jpg" alt="Guide" className="w-48 h-48 ml-5 rounded-full object-cover mb-4 md:mb-0 md:mr-8" />
          <div className="md:ml-4">
            <h3 className="text-xl font-bold mb-2">{guide.name}</h3>
            <p className="text-sm mb-4">{guide.bio}</p>
            <div className="mb-4">
              <p className="font-bold text-lg">Qualifications:</p>
              <ul className="list-disc list-inside">
                {guide.qualifications.map((qualification, index) => (
                  <li className="text-sm" key={index}>{qualification}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-bold text-lg">Testimonials:</p>
              {guide.testimonials.map((testimonial, index) => (
                <p key={index} className="text-sm mb-2">
                <span className="italic">"{testimonial.quote}"</span> - <span className="not-italic">{testimonial.name}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutGuideSection;
