import WhyStudentTrustUs from "@/components/landing-page/whyStudentTrustUs";
import UnlockExpertHelp from "@/components/landing-page/unlockExpertHelp";
import Footer from "@/components/common/footer";
import AcademicNeeds from "@/components/landing-page/academicneeds";
import ThingAboutUs from "@/components/landing-page/thingaboutus";
import HowItWorks from "@/components/landing-page/howitworks";
import WritingTool from "@/components/landing-page/writingTool";
import FAQS from "@/components/landing-page/faq";
import AffordablePrice from "@/components/landing-page/affordableprice";
import HeroSectionNew from "@/components/landing-page/HeroSectionNew";

export default function Page() {
  const question = [
    {
      question: "What is the 'Academic Writing Assistance' service?",
      answer:
        "'Academic Writing Assistance' offers comprehensive support, connecting students with expert writers who assist in producing high-quality written content, tailored to academic standards and deadlines.",
    },
    {
      question: "Why should I use the 'Academic Writing Assistance' service?",
      answer:
        "This service is essential for students facing challenges with time management, research, or writing quality. By utilizing our assistance, students ensure their academic tasks are completed efficiently, meeting stringent academic standards.",
    },
    {
      question: "What types of academic writing tasks can I get help with?",
      answer:
        "Our service caters to a wide range of academic writing tasks, including essays, research papers, dissertations, literature reviews, and more. We provide assistance across multiple disciplines such as science, business, literature, and social studies.",
    },
    {
      question: "How does the 'Academic Writing Assistance' service work?",
      answer:
        "Simply submit the details of your assignment, including specific guidelines, subject matter, and deadlines. Our experts will handle the task, ensuring the work is delivered to your expectations and within the stipulated time frame.",
    },
    {
      question: "Who can benefit from 'Academic Writing Assistance'?",
      answer:
        "Students at all academic levels, professionals seeking help with research projects, and anyone looking to improve their academic writing skills will benefit from this service.",
    },
    {
      question: "What are the key advantages of using 'Academic Writing Assistance'?",
      answer:
        "The main advantages include high-quality writing tailored to academic standards, timely delivery, and expert guidance on structuring and referencing work to meet specific academic requirements.",
    },
  ];

  const section1 = {
    imageSrc: "/static/images/thing1.svg",
    imageAlt: "Expert Academic Writing Assistance",
    title: "Academic Writing Assistance: Expert Support for Scholarly Success",
    description:
      "Don't let academic writing challenges hold you back. Our team of expert writers ensures your assignments are completed to the highest standards.",
    items: [
      "Receive expert support in academic writing, including research, writing, and formatting.",
      "Ensure high-quality results for essays, reports, dissertations, and other academic tasks.",
    ],
    buttonText: "Request Academic Writing Assistance Now",
  };

  const section2 = {
    imageSrc: "/static/images/thing2.svg",
    imageAlt: "Professional Academic Writers",
    title: "Academic Writing Help: Focus on Your Academic Excellence",
    description:
      "Collaborate with professional academic writers who specialize in crafting well-researched, clearly articulated academic documents.",
    items: [
      "Work with professionals to improve your writing, research, and overall academic performance.",
      "Benefit from expert advice on structuring and referencing academic content.",
    ],
    buttonText: "Get Expert Writing Assistance Now",
    isReversed: true,
  };

  const pricingFeatures = [
    {
      name: "Comprehensive Academic Writing Assistance",
      originalPrice: "199.99",
      discountedPrice: "FREE",
    },
    { name: "Essay Writing Support", originalPrice: "149.99", discountedPrice: "FREE" },
    {
      name: "Research Paper Guidance",
      originalPrice: "179.99",
      discountedPrice: "FREE",
    },
    {
      name: "Dissertation Support",
      originalPrice: "189.99",
      discountedPrice: "FREE",
    },
    {
      name: "Exam Preparation Writing Assistance",
      originalPrice: "129.99",
      discountedPrice: "FREE",
    },
    { name: "Unlimited Academic Writing Help", originalPrice: "249.99", discountedPrice: "FREE" },
  ];

  const writingToolData = [
    {
      id: 1,
      title: "Research Paper Tracker",
      description:
        "Organize and manage your research progress, stay on top of deadlines, and ensure you meet academic writing expectations.",
    },
    {
      id: 2,
      title: "Time Management for Writing",
      description:
        "Master time management skills that help balance multiple assignments and ensure that your work is delivered on time.",
    },
    {
      id: 3,
      title: "Quick Assignment Planner",
      description:
        "Develop a structured approach to academic tasks, optimizing your writing process and improving productivity.",
    },
    {
      id: 4,
      title: "Academic Writing Structure Guide",
      description:
        "Learn the best practices for structuring academic papers, essays, and reports to ensure clarity and coherence.",
    },
    {
      id: 5,
      title: "Citation and Referencing Assistant",
      description:
        "Get expert guidance on properly citing sources and adhering to different citation styles, including APA, MLA, and Chicago.",
    },
    {
      id: 6,
      title: "Academic Feedback Tracker",
      description:
        "Receive detailed feedback on your work, allowing you to make necessary improvements before final submission.",
    },
    {
      id: 7,
      title: "Grade Monitoring System",
      description:
        "Track your academic performance and ensure you are on the right path to achieving top grades in your assignments and exams.",
    },
    {
      id: 8,
      title: "Other Academic Writing Tools",
      description:
        "Explore additional tools and resources to assist with writing, research, and formatting to enhance your academic output.",
    },
  ];

  return (
    <div className="w-full">
      <HeroSectionNew
        changeInH={"Writing Assistance: Expert Support for Success"}
        changeInP={"Receive help with academic writing, to ensure high-quality outcomes."}
        isboy={false}
      />
      <AcademicNeeds
        title="Comprehensive Assistance for Writing Needs "
        buttons={[
          "Request Writing Assistance Now",
          "Submit Essay for Review",
          "Research Paper Help",
          "Dissertation Assistance",
          "Exam Writing Support",
          "Time Management for Academic Tasks", 
        ]}
      />
      <WhyStudentTrustUs
        sections={[
          {
            title: "Experienced Scholars, Not Machines",
            description:
              "Our services are powered by experienced academics, not automated systems, ensuring your work is handled by experts in the field.",
            number: "100%",
          },
          {
            title: "Accessible 24/7",
            description:
              "Our academic experts are available at any time to assist with your writing, offering flexibility and timely support for your needs.",
            number: "24/7",
          },
          {
            title: "On-Time Delivery of Quality Work",
            description:
              "We ensure that all academic assignments are submitted on time without compromising the quality of work.",
            number: "98%",
          },
        ]}
      />
      <ThingAboutUs section1={section1} section2={section2} />
      <HowItWorks />
      <AffordablePrice pricingFeatures={pricingFeatures} />
      <WritingTool writingToolData={writingToolData} />
      <FAQS questions={question} />
      <UnlockExpertHelp />
      <Footer />
    </div>
  );
}
