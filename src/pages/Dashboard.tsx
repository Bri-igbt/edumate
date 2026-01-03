import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Users,
  Star,
  ShieldCheck,
  Clock,
  Search,
  MessageCircle,
  Award,
  Calendar,
  Sparkles,
} from "lucide-react";
import Title from "@/components/Title.tsx";
import TestimonialCard from "@/components/TestimonialCard.tsx";
import StepCard from "@/components/StepCard.tsx";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {faqs, features, subjectData} from "@/utils/data.ts";

const Dashboard = () => {

    return (
    <div className="text-gray-900 mt-20 pb-16">
      {/* Hero */}
        <section className="bg-gradient-to-br from-indigo-200 to-blue-600">
            <div className="flex flex-col md:flex-row min-h-[620px]">

                {/* LEFT CONTENT */}
                <div className="flex w-full md:w-1/2 items-center justify-center px-4 sm:px-6 lg:px-12 py-12 md:py-0">
                    <div className="max-w-2xl w-full text-center md:text-left">

                        <div className="inline-flex mx-auto md:mx-0 items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-blue-700 border-blue-200 bg-blue-50 mb-4">
                            <Sparkles className="size-4" />
                            Personalized learning that actually fits you
                        </div>

                        <h1 className="text-black text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-tight mb-4">
                            Find{" "}
                            <span className="text-purple-600">trusted tutors</span>{" "}
                            for any subject, level, or goal
                        </h1>

                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                            Edumate connects learners with vetted experts for 1:1 coaching online or in-person.
                            Build confidence, master skills, and track real progress.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3">
                            <Link to="/tutors">
                                <Button className="w-full sm:w-auto px-5 bg-indigo-200 hover:bg-indigo-500">
                                    Browse Tutors
                                </Button>
                            </Link>

                            <Link to="/form">
                                <Button
                                    variant="outline"
                                    className="w-full sm:w-auto px-5 border-0 bg-purple-500 hover:bg-purple-700"
                                >
                                    Post a Learning Request
                                </Button>
                            </Link>
                        </div>

                        <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <ShieldCheck className="size-4 text-green-600" />
                                Verified profiles
                            </div>

                            <div className="flex items-center gap-2">
                                <Star className="size-4 text-yellow-500" />
                                4.7/5 avg. rating
                            </div>

                            <div className="flex items-center gap-2">
                                <Clock className="size-4 text-blue-600" />
                                Learn on your schedule
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative w-full md:w-1/2 h-[360px] sm:h-[440px] md:h-auto">
                    <img
                        src="https://img.freepik.com/premium-photo/mom-helping-son-with-homework-desk_116547-102185.jpg?semt=ais_hybrid&w=740&q=80"
                        alt="Mom helping son with homework"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </div>

            </div>
        </section>



        {/* Features */}
      <section className="bg-gray-50 pb-16">
            <Title
                title='EVERYTHING YOU NEED TO LEARN BETTER'
            />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 bg-white border rounded-lg hover:shadow-sm transition bg-gradient-to-br from-purple-200 to-indigo-300">
                <div className="flex items-center gap-3 mb-3 ">
                  <div className="rounded-md bg-blue-50 p-2 border border-blue-100">
                    <f.icon className="size-5 text-blue-700" />
                  </div>
                  <h3 className="font-semibold text-black/95 ">{f.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section  className="bg-gradient-to-br from-indigo-200 to-blue-600 pb-16">
          <Title
              title='POPULAR SUBJECTS'
          />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjectData.map((s) => (
              <Link
                key={s.name}
                to="/tutors"
                className="group p-5 border rounded-lg hover:shadow-sm transition bg-gradient-to-br from-purple-200 to-indigo-300"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-gray-50 p-2 border">
                    <s.icon className="size-5 text-gray-700" />
                  </div>

                  <div>
                    <p className="font-semibold group-hover:text-blue-700">{s.name}</p>
                    <p className="text-sm text-gray-600">Explore top‑rated {s.name.toLowerCase()} tutors</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className='bg-gray-50 pb-16'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Title title='HOW IT WORKS' />

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <StepCard
                step={1}
                title="Tell us your goals"
                desc="Choose your subject, level, and preferences. We’ll surface the best matches for you."
                icon={Search}
            />

            <StepCard
                step={2}
                title="Pick your tutor"
                desc="Compare verified profiles by expertise, reviews, rating, and availability."
                icon={Users}
            />

            <StepCard
                step={3}
                title="Learn & track progress"
                desc="Book sessions, message safely, and monitor milestones as you improve."
                icon={Calendar}
            />
          </div>
        </div>
      </section>

      {/* Safety & Trust */}
      <section className="bg-gradient-to-br from-indigo-200 to-blue-600 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-green-700 border-green-200 bg-green-50 mb-4">
                <ShieldCheck className="size-4" />
                  Safety & Trust
              </div>

              <h2 className="text-3xl text-slate-800 font-bold mb-3">
                  Learn in a safe, transparent environment
              </h2>

              <p className="text-gray-600 text-lg mb-6">
                  We take your safety seriously with verified profiles, secure messaging, and clear community guidelines.
              </p>

              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                    <ShieldCheck className="size-4 text-green-600" />
                    Identity & background checks
                </li>

                <li className="flex items-center gap-2">
                    <MessageCircle className="size-4 text-blue-600" />
                    Privacy‑first messaging
                </li>

                <li className="flex items-center gap-2">
                    <Star className="size-4 text-yellow-500" />
                    Transparent reviews & ratings
                </li>

                <li className="flex items-center gap-2">
                    <Award className="size-4 text-purple-600" />
                    Verified credentials & achievements
                </li>
              </ul>
            </div>

            <div className="rounded-lg border bg-slate-200 p-6">
              <h3 className="font-semibold text-slate-800 text-lg mb-2">
                  What learners say
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <TestimonialCard
                  name="Maya I."
                  quote="Found an amazing math tutor in days. My grades and confidence shot up!"
                />
                <TestimonialCard
                  name="Daniel K."
                  quote="Flexible online lessons made it easy to balance my schedule."
                />
                <TestimonialCard
                  name="Sophia R."
                  quote="Love the verified profiles—felt safe from day one."
                />
                <TestimonialCard
                  name="Arjun P."
                  quote="Clear progress tracking kept me motivated each week."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
        <section className="pb-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Title title='FREQUENTLY ASKED QUESTIONS' />

                <div className="pt-10 flex justify-center">
                    <div className="w-full max-w-3xl">
                        <Accordion type="single" collapsible className="space-y-4 ">
                            {faqs.map((faq) => (
                                <AccordionItem
                                    key={faq.id}
                                    value={faq.id}
                                    className="border rounded-lg bg-white px-6 bg-gradient-to-br from-purple-200 to-indigo-300 transition-colors"
                                >
                                    <AccordionTrigger className="text-left py-4 hover:no-underline">
                                        <span className="font-medium text-lg">{faq.q}</span>
                                    </AccordionTrigger>

                                    <AccordionContent className="pb-4 text-sm text-gray-600">
                                        {faq.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-indigo-200 to-blue-600 pb-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-xl border p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-gradient-to-br from-purple-200 to-indigo-300 transition-colors border-blue-100">
            <div>
              <h3 className="text-xl font-bold mb-2">Ready to start your learning journey?</h3>
              <p className="text-gray-700 text-sm">Browse tutors, post a request, and get personalized help this week.</p>
            </div>
            <div className="flex gap-3">
              <Link to="/tutors">
                  <Button className="px-5 bg-indigo-200 hover:bg-indigo-500">
                      Find a Tutor
                  </Button>
              </Link>
              <Link to="/form">
                  <Button variant="outline" className="px-5 border-0 bg-purple-500 hover:bg-purple-700">
                      Post a Request
                  </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
