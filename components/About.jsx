import DevAboutImg from "./DevAboutImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { User2, MailIcon, HomeIcon, PhoneIcon, GraduationCap, Calendar, Briefcase, PhoneCall } from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Kesy Apriansyah",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+62 838 6905 2776",
  },
  {
    icon: <MailIcon size={20} />,
    text: "kesyapriansyah@gmail.com",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "CILACAP, JAWA TENGAH, INDONESIA",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Universitas Muhammadiyah Purwokerto",
        qualification: "Bachelor of Engineering (S1), Informatics Engineering",
        years: "2021 - 2025",
      },
    ],
  },

  {
    title: "experience",
    data: [
      {
        company: "CV.Bangkit Edukasi Indonesia",
        role: "CO-Founder",
        years: "March 2023 - Present ",
      },
      {
        company: "Coba Upgrade Diri",
        role: "UI Engineer",
        years: "March 2023 - January 2024 ",
      },
      {
        company: "Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka",
        role: "Mobile Development Learning ",
        years: "August 2023 - January 2024",
      },
      {
        company: "Universitas Muhammadiyah Purwokerto",
        role: "Member of Research and Technology Information Engineering Student Association",
        years: "February 2023 - December 2023",
      },
      {
        company: "Universitas Muhammadiyah Purwokerto",
        role: "Laboratory Assistant",
        years: "January 2020 - March 2020",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS, Boostrap , Tailwind CSS ",
      },
      {
        name: "UI UX Design,WordPress,Front-end Development, Adroid",
      },
      {
        name: "Javascript, PHP,Kotlin For Android Development, React Js, Next JS",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vs code.png",
      },
      {
        imgPath: "/about/winbox.png",
      },
      {
        imgPath: "/about/android.png",
      },
      {
        imgPath: "/about/ppt.png",
      },
      {
        imgPath: "/about/word.png",
      },
      {
        imgPath: "/about/excel.png",
      },
      {
        imgPath: "/about/figma.png",
      },
      {
        imgPath: "/about/wordpress.png",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  return (
    <section className="xl:h-full pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto"> About me</h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevAboutImg containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[520px] h-[520px] bg-no-repeat relative " imgSrc="/about/kesy.png" />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="qualifications">
                  Qualification
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8 ">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">Front End Developer</h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      experienced in information systems services, skilled at analyzing information systems, conducting business analysis, managing user questions and complaints, designing UI/UX, developing web and mobile applications,
                      interacting with servers via API, and having high learning abilities.
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div key={index} className="flex items-center gap-x-4 mx-auto xl:mx-0">
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>
                {/* qualification */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">My Awesome Journey</h3>
                    {/* experience & education wrapper */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* experience */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">{getData(qualificationData, "experience").title}</h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map((item, index) => {
                            const { company, role, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div
                                    className="w-[11px] h-[11px] rounded-full
                                                                    bg-primary absolute -left-[5px] group-hover:translate-y-[84px]
                                                                    transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">{company}</div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">{role}</div>
                                  <div className="text-base font-medium">{years}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">{getData(qualificationData, "education").title}</h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map((item, index) => {
                            const { university, qualification, years } = item;
                            return (
                              <div className="flex gap-x-8 group" key={index}>
                                <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                  <div
                                    className="w-[11px] h-[11px] rounded-full
                                                                    bg-primary absolute -left-[5px] group-hover:translate-y-[84px]
                                                                    transition-all duration-500"></div>
                                </div>
                                <div>
                                  <div className="font-semibold text-xl leading-none mb-2">{university}</div>
                                  <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                  <div className="text-base font-medium">{years}</div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">What I Use Everyday</h3>
                    {/* skills */}
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skill list */}
                      <div>
                        {getData(skillData, "skills").data.map((item, index) => {
                          const { name } = item;
                          return (
                            <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                              <div className="font-medium">{name}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    {/* tools */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">Tools</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* tool list */}
                      <div className="flex gap-x-8 justify-center xl:justify-start">
                        {getData(skillData, "tools").data.map((item, index) => {
                          const { imgPath } = item;
                          return (
                            <div key={index}>
                              <Image src={imgPath} width={48} height={48} alt="" priority />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
