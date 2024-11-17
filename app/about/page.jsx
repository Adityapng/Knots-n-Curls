import React from "react";

const page = () => {
  return (
    <section className="px-6 py-20 about-page md:px-16 lg:px-24">
      <div className="container mx-auto">
        <h1 className="mb-8 text-4xl font-bold text-center">About Us</h1>
        <p className="mb-6 text-lg leading-relaxed">
          Welcome to <strong>Knots & Curls</strong>, where we bring beauty to
          your doorstep. Founded by renowned celebrity hair and makeup artist{" "}
          <strong>Rohit Gupta</strong>, our mission is to transform your style
          and confidence through personalized makeup and hairstyling services.
          Whether it's your wedding day, a special event, or simply a moment to
          feel glamorous, Knots & Curls ensures your experience is both
          luxurious and convenient.
        </p>
        <h2 className="mb-4 text-2xl font-semibold">Our Expertise</h2>
        <p className="mb-6 text-lg leading-relaxed">
          With a rich legacy in the beauty industry, Knots & Curls has catered
          to an exclusive clientele, including contestants from popular reality
          shows like <strong>Big Boss</strong>, <strong>Roadies</strong>, and{" "}
          <strong>Splitsvilla</strong>. We've also collaborated with models from{" "}
          <strong>60+ countries</strong> and contributed to prestigious events
          such as <strong>Miss & Mrs India 2020 and 2021</strong> and{" "}
          <strong>Miss Diva International Delhi & Uttarakhand 2022</strong>.
        </p>
        <h3 className="mb-3 text-2xl font-semibold">Our Specialties</h3>
        <ul className="mb-6 space-y-2 list-disc list-inside">
          <li>
            <strong>Bridal Makeup & Hairstyling:</strong> Creating bespoke,
            timeless looks for your special day.
          </li>
          <li>
            <strong>Event Styling:</strong> Ensuring you stand out at every
            celebration.
          </li>
          <li>
            <strong>Everyday Glam:</strong> Adding elegance to your routine for
            any occasion.
          </li>
        </ul>
        <h2 className="mb-4 text-2xl font-semibold">Our Philosophy</h2>
        <p className="mb-6 text-lg leading-relaxed">
          We believe in making beauty accessible and personal. By blending
          artistry with an understanding of modern trends, our team crafts looks
          that celebrate individuality while meeting your unique preferences.
        </p>
        <h2 className="mb-4 text-2xl font-semibold">Why Choose Us?</h2>
        <ul className="mb-6 space-y-2 list-disc list-inside">
          <li>
            <strong>Convenience:</strong> We deliver professional hair and
            makeup services directly to your preferred location.
          </li>
          <li>
            <strong>Celebrity Expertise:</strong> Led by Rohit Gupta, whose
            portfolio includes work with high-profile clients and events.
          </li>
          <li>
            <strong>Global Perspective:</strong> Experience shaped by
            collaborations with models and beauty professionals worldwide.
          </li>
        </ul>
        <h2 className="mb-4 text-2xl font-semibold">Our Promise</h2>
        <p className="text-lg leading-relaxed">
          At <strong>Knots & Curls</strong>, we prioritize your comfort and
          satisfaction. From the initial consultation to the final reveal, our
          mobile services ensure a seamless and personalized experience. With
          us, beauty is not bound by location—it's wherever you are.
        </p>
        <p className="mt-6 text-lg font-medium text-center">
          <strong>
            Let Knots & Curls bring the luxury of professional styling to you.
          </strong>
        </p>
      </div>
    </section>
  );
};

export default page;
