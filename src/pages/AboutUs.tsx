import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="text-gray-900">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4">
                Learn smarter with trusted tutors, anywhere
              </h1>
              <p className="text-gray-600 leading-relaxed mb-6">
                Home-Tutorly connects learners with verified, high‑quality tutors across
                subjects and levels. Our mission is to make personalized learning
                accessible, safe, and truly effective.
              </p>
              <div className="flex gap-3">
                <Link
                  to="/"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md font-medium transition"
                >
                  Explore Tutors
                </Link>
                <Link
                  to="/form"
                  className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-900 px-5 py-3 rounded-md font-medium transition"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
              <ul className="grid grid-cols-2 gap-6">
                <li className="text-center">
                  <p className="text-3xl font-bold text-blue-700">100+</p>
                  <p className="text-gray-600 text-sm">Verified Tutors</p>
                </li>
                <li className="text-center">
                  <p className="text-3xl font-bold text-blue-700">4.7/5</p>
                  <p className="text-gray-600 text-sm">Avg. Tutor Rating</p>
                </li>
                <li className="text-center">
                  <p className="text-3xl font-bold text-blue-700">15k+</p>
                  <p className="text-gray-600 text-sm">Learning Hours</p>
                </li>
                <li className="text-center">
                  <p className="text-3xl font-bold text-blue-700">6</p>
                  <p className="text-gray-600 text-sm">Core Subjects</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
              <p className="text-gray-700 leading-relaxed">
                We exist to empower learners with tailored, one‑to‑one support—bridging the
                gap between curiosity and mastery. From exam prep to foundational skills,
                we design every experience to match the learner’s pace and goals.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3">Our Vision</h2>
              <p className="text-gray-700 leading-relaxed">
                A world where anyone can access outstanding tutoring within minutes—safe,
                transparent, and results‑driven.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold mb-8">How it works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">1. Tell us your goals</h3>
              <p className="text-gray-600 text-sm">
                Choose your subject, level, and preferences. We’ll surface the best
                matches for you.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">2. Pick your tutor</h3>
              <p className="text-gray-600 text-sm">
                Compare verified profiles by expertise, reviews, rating, and availability.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="font-semibold mb-2">3. Learn and track progress</h3>
              <p className="text-gray-600 text-sm">
                Book sessions, message safely, and monitor milestones as you improve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold mb-8">What we value</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white border rounded-lg">
              <h3 className="font-semibold mb-2">Quality</h3>
              <p className="text-gray-600 text-sm">We vet tutors for skill, pedagogy, and professionalism.</p>
            </div>
            <div className="p-6 bg-white border rounded-lg">
              <h3 className="font-semibold mb-2">Safety</h3>
              <p className="text-gray-600 text-sm">Privacy‑first messaging, verified profiles, and clear guidelines.</p>
            </div>
            <div className="p-6 bg-white border rounded-lg">
              <h3 className="font-semibold mb-2">Results</h3>
              <p className="text-gray-600 text-sm">Goal‑oriented plans with measurable progress each week.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-xl border p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-blue-50 border-blue-100">
            <div>
              <h3 className="text-xl font-bold mb-2">Ready to find your perfect tutor?</h3>
              <p className="text-gray-700 text-sm">Browse profiles, filter by verified status, rating, and more.</p>
            </div>
            <Link
              to="/tutors"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md font-medium transition"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
