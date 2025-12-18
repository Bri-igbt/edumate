import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Users,
  Star,
  ShieldCheck,
  Clock,
  Globe,
  Search,
  MessageCircle,
  Award,
  Calendar,
  Laptop,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import Title from "@/components/Title.tsx";

const features = [
  {
    title: "Verified Tutors",
    desc: "Every tutor is identity-checked and skills-vetted so you can learn with confidence.",
    icon: ShieldCheck,
  },
  {
    title: "1:1 Personalized Plans",
    desc: "Structured learning paths tailored to your goals, pace, and schedule.",
    icon: BookOpen,
  },
  {
    title: "Top-rated Pros",
    desc: "Browse detailed profiles with reviews, ratings, specialties, and availability.",
    icon: Star,
  },
  {
    title: "Flexible & On‑Demand",
    desc: "Book, reschedule, or cancel sessions with just a few taps—learn anywhere.",
    icon: Clock,
  },
  {
    title: "Safe Messaging",
    desc: "Keep conversations secure and organized in one place with our in‑app chat.",
    icon: MessageCircle,
  },
  {
    title: "Online or In‑Person",
    desc: "Find local experts or learn online with interactive tools and resources.",
    icon: Globe,
  },
];

const subjects = [
  { name: "Mathematics", icon: GraduationCap },
  { name: "English", icon: BookOpen },
  { name: "Science", icon: Laptop },
  { name: "Coding", icon: Sparkles },
  { name: "Languages", icon: Globe },
  { name: "Test Prep", icon: Award },
];

const faqs = [
  {
    q: "How do I find the right tutor?",
    a: "Use filters for subject, level, budget, and schedule. Compare profiles, reviews, and ratings to pick the best match.",
  },
  {
    q: "Are tutors background checked?",
    a: "Yes. We verify identity and conduct checks where applicable. Verified profiles are clearly labeled.",
  },
  {
    q: "Can I learn online?",
    a: "Absolutely. Many tutors offer online sessions with interactive tools and shared resources.",
  },
  {
    q: "What’s the pricing?",
    a: "Tutors set their own rates. You’ll see transparent pricing on each profile before you book.",
  },
];

const Dashboard = () => {
  return (
    <div className="text-gray-900 mt-20">
      {/* Hero */}
        {/* Hero */}
        <section className="bg-gradient-to-br from-indigo-200 to-blue-600">
            <div className="flex flex-col lg:flex-row min-h-[600px]">
                <div className="lg:w-1/2 flex items-center">
                    <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-0 w-full">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-blue-700 border-blue-200 bg-blue-50 mb-4">
                                <Sparkles className="size-4" />
                                Personalized learning that actually fits you
                            </div>
                            <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
                                Find <span className='Prata text-purple-600'>trusted tutors</span> for any subject, level, or goal
                            </h1>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                Edumate connects learners with vetted experts for 1:1 coaching online or in‑person.
                                Build confidence, master skills, and track real progress.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3">
                                <Link to="/tutors">
                                    <Button className="px-5 bg-indigo-200 hover:bg-indigo-500">Browse Tutors</Button>
                                </Link>
                                <Link to="/form">
                                    <Button variant="outline" className="px-5 border-0 bg-purple-500 hover:bg-purple-700">Post a Learning Request</Button>
                                </Link>
                            </div>
                            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-gray-600">
                                <div className="flex items-center gap-2"><ShieldCheck className="size-4 text-green-600" /> Verified profiles</div>
                                <div className="flex items-center gap-2"><Star className="size-4 text-yellow-500" /> 4.7/5 avg. rating</div>
                                <div className="flex items-center gap-2"><Clock className="size-4 text-blue-600" /> Learn on your schedule</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2 relative h-[400px] lg:h-auto">
                    <div className="absolute inset-0">
                        <img
                            src='https://img.freepik.com/premium-photo/mom-helping-son-with-homework-desk_116547-102185.jpg?semt=ais_hybrid&w=740&q=80'
                            alt="Mom helping son with homework"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>

      {/* Features */}
      <section className="bg-gray-50">
            <Title
                title='EVERYTHING YOU NEED TO LEARN BETTER'
                description=''
            />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div key={f.title} className="p-6 bg-white border rounded-lg hover:shadow-sm transition bg-gradient-to-br from-purple-200 to-indigo-300">
                <div className="flex items-center gap-3 mb-3">
                  <div className="rounded-md bg-blue-50 p-2 border border-blue-100">
                    <f.icon className="size-5 text-blue-700" />
                  </div>
                  <h3 className="font-semibold text-black/95">{f.title}</h3>
                </div>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subjects */}
      <section className="bg-white">
          <Title
              title='POPULAR SUBJECTS'
              description=''
          />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((s) => (
              <Link
                key={s.name}
                to="/tutors"
                className="group p-5 border rounded-lg hover:shadow-sm transition bg-white bg-gradient-to-br from-orange-50 to-orange-100"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-gray-50 p-2 border">
                    <s.icon className="size-5 text-gray-700" />
                  </div>
                  <div>
                    <p className="font-semibold group-hover:text-blue-700">{s.name}</p>
                    <p className="text-xs text-gray-600">Explore top‑rated {s.name.toLowerCase()} tutors</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold mb-8">How it works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <StepCard step={1} title="Tell us your goals" desc="Choose your subject, level, and preferences. We’ll surface the best matches for you." icon={Search} />
            <StepCard step={2} title="Pick your tutor" desc="Compare verified profiles by expertise, reviews, rating, and availability." icon={Users} />
            <StepCard step={3} title="Learn & track progress" desc="Book sessions, message safely, and monitor milestones as you improve." icon={Calendar} />
          </div>
        </div>
      </section>

      {/* Safety & Trust */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-green-700 border-green-200 bg-green-50 mb-4">
                <ShieldCheck className="size-4" /> Safety & Trust
              </div>
              <h2 className="text-2xl font-bold mb-3">Learn in a safe, transparent environment</h2>
              <p className="text-gray-600 mb-6">We take your safety seriously with verified profiles, secure messaging, and clear community guidelines.</p>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-center gap-2"><ShieldCheck className="size-4 text-green-600" /> Identity & background checks</li>
                <li className="flex items-center gap-2"><MessageCircle className="size-4 text-blue-600" /> Privacy‑first messaging</li>
                <li className="flex items-center gap-2"><Star className="size-4 text-yellow-500" /> Transparent reviews & ratings</li>
                <li className="flex items-center gap-2"><Award className="size-4 text-purple-600" /> Verified credentials & achievements</li>
              </ul>
            </div>
            <div className="rounded-xl border bg-gray-50 p-6">
              <h3 className="font-semibold mb-2">What learners say</h3>
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
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl font-bold mb-6">Frequently asked questions</h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {faqs.map((f) => (
              <details key={f.q} className="group border rounded-lg bg-white p-4 open:shadow-sm">
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                  <span className="font-medium">{f.q}</span>
                  <span className="ml-auto text-gray-500 group-open:rotate-180 transition">
                    <ChevronIcon />
                  </span>
                </summary>
                <p className="mt-3 text-sm text-gray-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="rounded-xl border p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-blue-50 border-blue-100">
            <div>
              <h3 className="text-xl font-bold mb-2">Ready to start your learning journey?</h3>
              <p className="text-gray-700 text-sm">Browse tutors, post a request, and get personalized help this week.</p>
            </div>
            <div className="flex gap-3">
              <Link to="/tutors"><Button className="px-5">Find a Tutor</Button></Link>
              <Link to="/form"><Button variant="outline" className="px-5">Post a Request</Button></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

function StepCard({ step, title, desc, icon: Icon }: { step: number; title: string; desc: string; icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="p-6 border rounded-lg">
      <div className="flex items-center gap-3 mb-3">
        <div className="rounded-md bg-gray-50 p-2 border">
          <Icon className="size-5 text-gray-700" />
        </div>
        <div className="text-xs font-semibold text-gray-500">Step {step}</div>
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  );
}

function TestimonialCard({ name, quote }: { name: string; quote: string }) {
  return (
    <div className="p-4 rounded-lg border bg-white">
      <div className="text-sm text-gray-700">“{quote}”</div>
      <div className="mt-3 text-xs text-gray-500">— {name}</div>
    </div>
  );
}

function ChevronIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="size-4">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default Dashboard;
