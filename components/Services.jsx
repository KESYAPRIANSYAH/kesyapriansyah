import { Blocks, TabletSmartphone, Figma, PanelsTopLeft, Target, ShieldPlus } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const servicesData = [
  {
    icon: <Figma size={72} strokeWidth={0.8} />,
    title: "UI/UX Design",
    description:
      "Creative and experienced UI/UX designer with a keen eye for detail and a passion for creating user-centered designs.Proficient in Figma and other design tools to create wireframes, prototypes, and high-fidelity mockups.Ability to translate design ideas into functional and visually appealing user interfaces.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description: "can build responsive and user-friendly websites using React JS, HTML, CSS, Javascript, PHP, Next JS, Bootstrap, and Tailwind CSS.Passionate about delivering high-quality web solutions that meet client needs",
  },
  {
    icon: <TabletSmartphone size={72} strokeWidth={0.8} />,
    title: "Mobile Development",
    description:
      "Proficient in Kotlin for Android development, with hands-on experience building native Android apps. Expertise in UI/UX design and user interaction principles to ensure intuitive and engaging mobile experiences.Skilled in integrating APIs and utilizing cloud services to enhance app functionality.",
  },
  {
    icon: <PanelsTopLeft size={72} strokeWidth={0.8} />,
    title: "WordPress Development",
    description:
      "WordPress Theme Creation: I can build custom WordPress themes that match your vision, ensuring your website has the look and feel you desire. Third-Party Integrations: Need to connect your WordPress website to other services like signup forms, payment gateways, or social media platforms? I can handle those third-party integrations.Website Optimization: I can optimize your WordPress website for speed and search engine performance (SEO) to ensure a smooth user experience and good search engine rankings.WordPress Security: Security is essential. I can help you keep your WordPress website secure by implementing security best practices and regularly maintaining your website.Experience in creating e-commerce sites, landing pages, and custom web applications.",
  },
  {
    icon: <Target size={72} strokeWidth={0.8} />,
    title: "Project Management",
    description:
      "Proven ability to lead and manage cross-functional teams to deliver projects on time and within budget.Expertise in planning, organizing, and executing project tasks while ensuring effective communication and collaboration.Strong problem-solving and decision-making skills to navigate challenges and achieve project goals.",
  },
  {
    icon: <ShieldPlus size={72} strokeWidth={0.8} />,
    title: "Additional Skills",
    description:
      "Communication, Teamwork, Leadership, Problem solving , Critical thinking, Adaptability. Strong understanding of information systems and business processes.Ability to learn new technologies quickly and adapt to changing requirements.",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36 h-full ">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item, index) => (
            <Card
              key={index}
              //   className="w-full max-w-[424px] flex flex-col shadow-md rounded-lg overflow-hidden" // Added responsive styles
              className=" w-full max-w-[424px]  flex flex-col shadow-md rounded-lg 
                             items-center relative ">
              <CardHeader className="text-primary absolute -top-[60px] p-4">
                <div className="w-[140px] h-auto bg-white dark:bg-background flex justify-center items-center ">{item.icon} </div>
              </CardHeader>
              <CardContent className="text-center p-8">
                <CardTitle className="mb-4">{item.title}</CardTitle>
                <CardDescription className="text-lg">{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
