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
      question: "What is the 'Do My Homework' service?",
      answer:
        "'Do My Homework' offers expert assistance in completing your homework, including essays, math problems, case studies, and other tasks across various subjects.",
    },
    {
      question: "Why should I use the 'Do My Homework' service?",
      answer:
        "This service helps you achieve the best results on your homework by providing expert guidance, saving you time, and ensuring your work meets academic standards.",
    },
    {
      question: "What types of homework can I get help with?",
      answer:
        "We provide help with a wide range of homework tasks, including essays, math problems, case studies, lab reports, and project-based assignments in various subjects.",
    },
    {
      question: "How does the 'Do My Homework' service work?",
      answer:
        "Simply share your homework details, choose the type of help you need, and let our experts guide you in completing your homework effectively and on time.",
    },
    {
      question: "Who uses the 'Do My Homework' service?",
      answer:
        "Students who need assistance with their homework, whether it's an essay, math problem, or case study, use this service to improve their academic performance.",
    },
    {
      question: "What are the benefits of using the 'Do My Homework' service?",
      answer:
        "Using this service helps you improve your grades, manage your time better, reduce stress, and ensure your homework is completed to the highest academic standards.",
    },
  ];

  const section1 = {
    imageSrc: "/static/images/thing1.svg",
    imageAlt: "Expert Homework Assistance",
    title: "Do My Homework: Expert Guidance for Academic Success",
    description:
      "'Do My Homework' provides expert support to help you complete your homework on time and to the highest standard.",
    items: [
      "Get help with writing essays, solving math problems, and case studies.",
      "Receive personalized assistance for your lab reports, presentations, and other homework tasks.",
    ],
    buttonText: "Get Homework Help Now",
  };

  const section2 = {
    imageSrc: "/static/images/thing2.svg",
    imageAlt: "Verified Homework Experts",
    title: "Expert Homework Help: Achieve Your Academic Goals",
    description:
      "Work with verified homework experts who specialize in various subjects to guide you through assignments and tasks.",
    items: [
      "Benefit from expert strategies for writing essays and solving homework problems.",
      "Get tailored advice to help you meet deadlines and deliver high-quality homework.",
    ],
    buttonText: "Talk to a Homework Expert",
    isReversed: true,
  };

  const pricingFeatures = [
    {
      name: "Full Homework Assistance",
      originalPrice: "149.99",
      discountedPrice: "FREE",
    },
    { name: "Essay Help", originalPrice: "99.99", discountedPrice: "FREE" },
    {
      name: "Math Problem Assistance",
      originalPrice: "129.99",
      discountedPrice: "FREE",
    },
    {
      name: "Case Study Help",
      originalPrice: "109.99",
      discountedPrice: "FREE",
    },
    {
      name: "Lab Report Help",
      originalPrice: "79.99",
      discountedPrice: "FREE",
    },
    { name: "Unlimited Homework Help", originalPrice: "199.99", discountedPrice: "FREE" },
  ];

  const writingToolData = [
    {
      id: 1,
      title: "Homework Analyzer",
      description:
        "Submit your homework for detailed feedback on structure, content, and areas for improvement.",
    },
    {
      id: 2,
      title: "Time Management Tool",
      description:
        "Use our tool to manage your time effectively and ensure all homework tasks are completed on time.",
    },
    {
      id: 3,
      title: "Research Planner",
      description:
        "Plan and organize your research process with our interactive homework tool.",
    },
    {
      id: 4,
      title: "Essay Writing Assistant",
      description:
        "Get expert help with writing essays, reports, and homework using clear and concise language.",
    },
    {
      id: 5,
      title: "Homework Proofreader",
      description:
        "Ensure your homework is error-free and meets academic standards with our proofreading tool.",
    },
    {
      id: 6,
      title: "Case Study Guide",
      description:
        "Receive expert help on writing and analyzing case studies for your homework.",
    },
    {
      id: 7,
      title: "Citation Generator",
      description:
        "Generate proper citations and references for your homework to ensure academic integrity.",
    },
    {
      id: 8,
      title: "Other Tools",
      description:
        "Explore additional tools like grammar checkers, writing tips, and formatting aids to complete your homework.",
    },
  ];

  return (
    <div className="w-full">
      <HeroSectionNew
        changeInH={"Expert Homework Help for Success"}
        changeInP={"Get professional assistance to complete your homework with excellence."}
        isboy={false}
      />
      <AcademicNeeds
        title="We Cover All Your Homework Needs"
        buttons={[
          "Get Homework Help Now",
          "Request Essay Help",
          "Math Problem Assistance",
          "Case Study Help",
          "Lab Report Help",
          "Time Management for Homework",
          "Other Homework Help",
        ]}
      />
      <WhyStudentTrustUs
        sections={[
          {
            title: "No AI",
            description:
              "All homework assistance is provided by verified experts, ensuring genuine, human-driven support.",
            number: "100% ",
          },
          {
            title: "24/7 Support",
            description:
              "Our team is available 24/7 to assist with your homework, no matter the time or stage of the process.",
            number: "24/7",
          },
          {
            title: "On Time",
            description:
              "We guarantee timely homework help and assistance, ensuring you meet all deadlines.",
            number: "98% ",
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
