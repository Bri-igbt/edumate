import { DataProps, FiltersProps, NavProps } from "@/interface";
import {
    Award,
    BookOpen,
    Clock,
    Globe,
    GraduationCap,
    Laptop,
    MessageCircle,
    ShieldCheck,
    Sparkles,
    Star
} from "lucide-react";

export const UniqueID = () => Math.floor(Math.random() * 1000000).toString();

export const navItems: NavProps[] = [
    {
        id: "home",
        name: "Home",
        link: "/",
    },
    {
        id: "about us",
        name: "About us",
        link: "/about-us",
    },
    {
        id: "tutors",
        name: "Tutors",
        link: "/tutors",
    },
    {
        id: "contact",
        name: "Contact",
        link: "/form",
    },
];

export const subjectData = [
    { name: "Mathematics", icon: GraduationCap },
    { name: "English", icon: BookOpen },
    { name: "Science", icon: Laptop },
    { name: "Coding", icon: Sparkles },
    { name: "Languages", icon: Globe },
    { name: "Test Prep", icon: Award },
];

export const features = [
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



export const faqs = [
    {
        id: "item-1",
        q: "How do I find the right tutor?",
        a: "Use filters for subject, level, budget, and schedule. Compare profiles, reviews, and ratings to pick the best match.",
    },
    {
        id: "item-2",
        q: "Are tutors background checked?",
        a: "Yes. We verify identity and conduct checks where applicable. Verified profiles are clearly labeled.",
    },
    {
        id: "item-3",
        q: "Can I learn online?",
        a: "Absolutely. Many tutors offer online sessions with interactive tools and shared resources.",
    },
    {
        id: "item-4",
        q: "What's the pricing?",
        a: "Tutors set their own rates. You'll see transparent pricing on each profile before you book.",
    },
];


export const filtersData: FiltersProps[] = [
    {
        id: "verified",
        name: "Verified",
        isVerified: true,
    },
    {
        id: "male",
        name: "Male",
        gender: "male"
    },
    {
        id: "female",
        name: "Female",
        gender: "female"
    },
    {
        id: "kids expert",
        name: "Kids expert",
        subjects: 'kids expert'
    },
    {
        id: "science",
        name: "Science",
        subjects: "Science",
    },
    {
        id: "art",
        name: "Art",
        subjects: "Art"
    },
    {
        id: "5",
        name: "5",
        isRating: true,
        rating: 5
    },
    {
        id: "maths",
        name: "Maths",
        subjects: "Maths",
    },
    {
        id: "english",
        name: "English",
        subjects: "English",
    },
    {
        id: "physics",
        name: "Physics",
        subjects: "Physics",
    },
    {
        id: "3 years of experience",
        name: "3 Years of experience",
        years: 3,
    },
    {
        id: "2 years of experience",
        name: "2 Years of experience",
        years: 2,
    },
    {
        id: "1 years of experience",
        name: "1 Years of experience",
        years: 1,
    },
];

const baseTutors: DataProps[] = [
    {
        id: UniqueID(),
        name: "Dr. Chinedu Okonkwo",
        bio: "Award-winning Physics teacher with 15+ years experience. Former Head of Science Department at Kings College Lagos. Specializes in WAEC, NECO, and JAMB preparation with 95% distinction rate.",
        isVerified: true,
        gender: "Male",
        rating: "4.9",
        subject: "Physics",
        img: "https://res.cloudinary.com/chuksmbanaso/image/upload/v1727870656/Screenshot_2024-10-02_at_12.57.22_fei4cf.png",
        years: 15,
    },
    {
        id: UniqueID(),
        name: "Mrs. Ngozi Adebayo",
        bio: "Cambridge-certified Mathematics educator with expertise in modern teaching methodologies. Successfully prepared 500+ students for international Olympiads. Currently Senior Mathematics Tutor at Grange School Lagos.",
        isVerified: true,
        gender: "Female",
        rating: "4.8",
        subject: "Maths",
        img: "https://res.cloudinary.com/chuksmbanaso/image/upload/v1727870666/Screenshot_2024-10-02_at_12.58.18_woc28m.png",
        years: 12
    },
    {
        id: UniqueID(),
        name: "Prof. Ibrahim Bello",
        bio: "Distinguished Chemistry professor with specialization in organic chemistry. Authored 3 textbooks used in Nigerian secondary schools. 20 years teaching experience across federal unity colleges.",
        isVerified: true,
        gender: "Male",
        rating: "4.9",
        subject: "Science",
        img: "https://res.cloudinary.com/chuksmbanaso/image/upload/v1727870651/Screenshot_2024-10-02_at_12.56.45_fey4um.png",
        years: 20
    },
    {
        id: UniqueID(),
        name: "Ms. Adesua Williams",
        bio: "British Council-trained English Language specialist. Expert in IELTS, TOEFL, and WASSCE English preparation. Focuses on creative writing and communication skills development.",
        isVerified: true,
        gender: "Female",
        rating: "4.7",
        subject: "English",
        img: "https://res.cloudinary.com/chuksmbanaso/image/upload/v1727870666/Screenshot_2024-10-02_at_12.58.18_woc28m.png",
        years: 8
    },
    {
        id: UniqueID(),
        name: "Mr. Femi Ojo",
        bio: "Montessori-trained early childhood educator with 10 years experience. Specializes in foundational literacy and numeracy for children ages 3-8. Uses play-based learning methodologies.",
        isVerified: true,
        gender: "Male",
        rating: "4.8",
        subject: "Kids Expert",
        img: "https://res.cloudinary.com/chuksmbanaso/image/upload/v1727870656/Screenshot_2024-10-02_at_12.57.22_fei4cf.png",
        years: 10
    },
    {
        id: UniqueID(),
        name: "Mrs. Amina Yusuf",
        bio: "Fine Arts graduate from Ahmadu Bello University with specialization in Nigerian art history. Teaches practical art techniques and theory. Organizes annual student art exhibitions.",
        isVerified: true,
        gender: "Female",
        rating: "4.6",
        subject: "Art",
        img: "https://res.cloudinary.com/chuksmbanaso/image/upload/v1727870666/Screenshot_2024-10-02_at_12.58.18_woc28m.png",
        years: 7
    },
    {
        id: UniqueID(),
        name: "Dr. Olubunmi Martins",
        bio: "PhD in Biology with research background in Nigerian ecosystems. Senior Biology teacher at Queen's College Lagos. Expert in practical biology and specimen identification.",
        isVerified: true,
        gender: "Female",
        rating: "4.9",
        subject: "Science",
        img: "https://res.cloudinary.com/chuksmbanaso/image/upload/v1727870666/Screenshot_2024-10-02_at_12.58.18_woc28m.png",
        years: 18
    },
    {
        id: UniqueID(),
        name: "Mr. Tunde Lawal",
        bio: "Mathematics Olympiad coach with 100+ medalists trained. Specializes in advanced mathematics for gifted students. Former mathematics teacher at Loyola Jesuit College Abuja.",
        isVerified: true,
        gender: "Male",
        rating: "4.9",
        subject: "Maths",
        img: "https://res.cloudinary.com/chuksmbanaso/image/upload/v1727870651/Screenshot_2024-10-02_at_12.56.45_fey4um.png",
        years: 14
    },
    {
        id: UniqueID(),
        name: "Mrs. Grace Okoro",
        bio: "Literature-in-English specialist with focus on African literature. Helps students excel in prose, poetry, and drama analysis. WAEC/NECO chief examiner experience.",
        isVerified: true,
        gender: "Female",
        rating: "4.7",
        subject: "English",
        img: "https://res.cloudinary.com/chuksmbanaso/image/upload/v1727870666/Screenshot_2024-10-02_at_12.58.18_woc28m.png",
        years: 11
    },
    {
        id: UniqueID(),
        name: "Engr. Musa Abdullahi",
        bio: "Engineering graduate turned Physics teacher. Makes physics concepts practical and relatable. Specializes in mechanics and electronics for senior secondary students.",
        isVerified: false,
        gender: "Male",
        rating: "4.5",
        subject: "Physics",
        img: "https://res.cloudinary.com/chuksmbanaso/image/upload/v1727870656/Screenshot_2024-10-02_at_12.57.22_fei4cf.png",
        years: 6
    },
    {
        id: UniqueID(),
        name: "Miss Chioma Nwankwo",
        bio: "Creative arts therapist using art for child development. Specializes in teaching children with learning differences. Certified in special needs education.",
        isVerified: true,
        gender: "Female",
        rating: "4.8",
        subject: "Art",
        img: "https://res.cloudinary.com/chuksmbanaso/image/upload/v1727870666/Screenshot_2024-10-02_at_12.58.18_woc28m.png",
        years: 9
    },
    {
        id: UniqueID(),
        name: "Mrs. Bola Ahmed",
        bio: "Early childhood development specialist with Montessori and Waldorf training. Creates engaging learning environments for preschoolers. Focuses on holistic child development.",
        isVerified: true,
        gender: "Female",
        rating: "4.9",
        subject: "Kids Expert",
        img: "https://res.cloudinary.com/chuksmbanaso/image/upload/v1727870666/Screenshot_2024-10-02_at_12.58.18_woc28m.png",
        years: 13
    },
];

const subjects: Array<DataProps["subject"]> = [
    "Science",
    "Maths",
    "English",
    "Physics",
    "Art",
    "Kids Expert",
];

const avatars = [
    "https://res.cloudinary.com/chuksmbanaso/image/upload/v1727870656/Screenshot_2024-10-02_at_12.57.22_fei4cf.png",
    "https://res.cloudinary.com/chuksmbanaso/image/upload/v1727870666/Screenshot_2024-10-02_at_12.58.18_woc28m.png",
    "https://res.cloudinary.com/chuksmbanaso/image/upload/v1727870651/Screenshot_2024-10-02_at_12.56.45_fey4um.png",
];

// Nigerian teacher names database
const nigerianFirstNames = {
    male: ["Chinedu", "Emeka", "Oluwaseun", "Tunde", "Adebayo", "Femi", "Musa", "Ibrahim", "Sunday", "Godwin", "Samuel", "Peter", "James", "John", "Michael", "Daniel", "Joseph", "David", "Benjamin", "Matthew"],
    female: ["Ngozi", "Chiamaka", "Amina", "Fatima", "Grace", "Blessing", "Peace", "Joy", "Mary", "Esther", "Ruth", "Sarah", "Deborah", "Elizabeth", "Rebecca", "Patience", "Mercy", "Faith", "Victoria", "Glory"]
};

const nigerianLastNames = ["Okonkwo", "Adebayo", "Bello", "Williams", "Ojo", "Yusuf", "Martins", "Lawal", "Okoro", "Abdullahi", "Nwankwo", "Ahmed", "Okafor", "Eze", "Adeyemi", "Suleiman", "Ogunleye", "Balogun", "Umar", "Ibeh"];

const teacherSpecializations = [
    "WAEC/NECO chief examiner with 10+ years experience",
    "Cambridge International certified educator",
    "Special needs education specialist",
    "Olympiad competition coach",
    "JAMB/UTME preparation expert",
    "Montessori-trained early years educator",
    "British Council certified language teacher",
    "STEM education advocate and trainer",
    "Digital literacy integration specialist",
    "Past questions analysis expert"
];

const generatedTutors: DataProps[] = Array.from({ length: 110 }, (_, i) => {
    const gender = i % 2 === 0 ? "Male" : "Female";
    const firstName = nigerianFirstNames[gender.toLowerCase() as keyof typeof nigerianFirstNames][
        Math.floor(Math.random() * nigerianFirstNames[gender.toLowerCase() as keyof typeof nigerianFirstNames].length)
        ];
    const lastName = nigerianLastNames[Math.floor(Math.random() * nigerianLastNames.length)];
    const subject = subjects[i % subjects.length];
    const isVerified = i % 3 !== 0;
    const rating = (Math.round((4.0 + (i % 11) * 0.08) * 10) / 10).toFixed(1);
    const years = (i % 20) + 1;
    const img = avatars[i % avatars.length];
    const specialization = teacherSpecializations[i % teacherSpecializations.length];

    return {
        id: UniqueID(),
        name: `${firstName} ${lastName}`,
        bio: `${gender === "Male" ? "Mr." : "Ms."} ${lastName} is a ${subject} teacher with ${years} years experience. ${specialization}. Based in ${["Lagos", "Abuja", "Port Harcourt", "Ibadan", "Kano", "Enugu", "Benin"][i % 7]}.`,
        isVerified,
        gender,
        rating,
        subject,
        img,
        years,
    } as DataProps;
});

export const tutorsData: DataProps[] = [...baseTutors, ...generatedTutors];