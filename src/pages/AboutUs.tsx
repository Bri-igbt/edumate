import { Link } from "react-router-dom";
import Title from "@/components/Title.tsx";
import StepCard from "@/components/StepCard.tsx";
import TestimonialCard from "@/components/TestimonialCard.tsx";
import { Button } from "@/components/ui/button";
import { Target, UserCheck, GraduationCap } from "lucide-react";

const AboutUs = () => {
  const testimonials = [
    { name: "Aisha, Parent", quote: "Our daughter's confidence soared after just a few sessions!" },
    { name: "David, Student", quote: "The personalized plan helped me ace my exams." },
    { name: "Maria, Professional", quote: "Flexible scheduling made learning fit my work life." },
  ];

  return (
    <div className=" bg-gradient-to-br from-indigo-200 to-blue-600 text-gray-900  mt-20 pb-16">
      {/* Hero Section */}
      <section className="">
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
                <Link to="/tutors">
                  <Button className="px-5 bg-indigo-200 hover:bg-indigo-500">
                    Explore Tutors
                  </Button>
                </Link>
                <Link to="/form">
                  <Button variant="outline" className="px-5 border-0 bg-purple-500 hover:bg-purple-700 text-white">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div className=" bg-gradient-to-br from-purple-200 to-indigo-300 rounded-xl p-8 border border-blue-100">
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
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Title title="Our Mission" />

              <p className="text-gray-700 leading-relaxed mt-3 text-lg">
                We exist to empower learners with tailored, one‑to‑one support bridging the
                gap between curiosity and mastery. From exam prep to foundational skills,
                we design every experience to match the learner’s pace and goals.
              </p>
            </div>

            <div>
              <Title title="Our Vision" />
              <p className="text-gray-700 leading-relaxed mt-3 text-lg">
                A world where anyone can access outstanding tutoring within minutes—safe,
                transparent, and results‑driven.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Title title="How it works" />
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <StepCard
              step={1}
              title="Tell us your goals"
              desc="Choose your subject, level, and preferences. We’ll surface the best matches for you."
              icon={Target}
            />

            <StepCard
              step={2}
              title="Pick your tutor"
              desc="Compare verified profiles by expertise, reviews, rating, and availability."
              icon={UserCheck}
            />

            <StepCard
              step={3}
              title="Learn and track progress"
              desc="Book sessions, message safely, and monitor milestones as you improve."
              icon={GraduationCap}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Title title="What learners say" />

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {testimonials.map((t) => (
              <TestimonialCard
                  key={t.name}
                  name={t.name}
                  quote={t.quote}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Title title="What we value" />

          <div className="grid md:grid-cols-3 gap-8 mt-8 ">
            <div className="p-6 bg-white border rounded-lg  bg-gradient-to-br from-purple-200 to-indigo-300 transition-colors">
              <h3 className="font-semibold mb-2">Quality</h3>
              <p className="text-gray-600 text-sm">
                  We vet tutors for skill, pedagogy, and professionalism.
              </p>
            </div>

            <div className="p-6 bg-white border rounded-lg  bg-gradient-to-br from-purple-200 to-indigo-300 transition-colors">
              <h3 className="font-semibold mb-2">Safety</h3>
              <p className="text-gray-600 text-sm">
                  Privacy‑first messaging, verified profiles, and clear guidelines.
              </p>
            </div>

            <div className="p-6 bg-white border rounded-lg  bg-gradient-to-br from-purple-200 to-indigo-300 transition-colors">
              <h3 className="font-semibold mb-2">Results</h3>
              <p className="text-gray-600 text-sm">
                  Goal‑oriented plans with measurable progress each week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-xl border p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-gradient-to-br from-purple-200 to-indigo-300 transition-colors border-blue-100">
            <div>
              <h3 className="text-xl font-bold mb-2">
                  Ready to find your perfect tutor?
              </h3>

              <p className="text-gray-700 text-sm">
                  Browse profiles, filter by verified status, rating, and more.
              </p>
            </div>

            <Link to="/tutors">
              <Button className="px-5 bg-indigo-200 hover:bg-indigo-500">
                  Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
