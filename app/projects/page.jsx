"use client";

import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/web kelas public speaking batch 4.png",
    category: "html,css,js",
    name: "Webinar Public Speaking Upsacademy Batch 4",
    description: "website landng page kelas public speaking yang digunakan untuk promosi pelatihan Upsacademy .",
    link: "https://kelas-public-speaking-batch-3.vercel.app/",
    github: "/",
  },
  {
    image: "/work/web kelas public speaking.png",
    category: "html,css,js",
    name: "Kelas Public Speaing Dynamite",
    description: "website landng page kelas public speaking yang digunakan untuk promosi pelatihan Upsacademy .",
    link: "https://kelas-public-speaking-dynamic.vercel.app/",
    github: "/",
  },
  {
    image: "/work/UI UX Aplikasi Isnaeni Bakery.png",
    category: "UI UX Design",
    name: "Isnaeni Bakery Apps UI",
    description: "Desain Aplikasi mobile Isnaeni Bakery.",
    link: "https://www.figma.com/design/GFzmJ68F8KYTlZomQZLTJh/Isnaeni-Bakery?t=2yZkl5AuUG9DuZ7L-1",
    github: "/",
  },
  {
    image: "/work/UIUX jajan Jalan.png",
    category: "UI UX Design",
    name: "Jajan Jalan Apps UI",
    description: "Desain Perancangan Aplikasi Jajan Jalan.",
    link: "https://www.figma.com/design/uPquux9TUYVN9zXg48LeTt/JajanJalan?t=2yZkl5AuUG9DuZ7L-1",
    github: "/",
  },
  {
    image: "/work/web kyt.png",
    category: "react js",
    name: "Kyt Website",
    description: "website kyt clone dibuat dengan react dan tailwinds untuk tujuan belajar.",
    link: "https://cloningkythelmetweb.vercel.app/",
    github: "https://github.com/KESYAPRIANSYAH/KYTWEBSITE.git",
  },
  {
    image: "/work/web booking lapangan futsal.png",
    category: "fullstack",
    name: "Booking Lapangan Futsal merpati",
    description: "website Booking Lapangan Futsal yang dibuat dengan menggunakan PHP.",
    link: "/",
    github: "https://github.com/KESYAPRIANSYAH/Merpati-Futsall.git",
  },
  {
    image: "/work/web admin.png",
    category: "fullstack",
    name: "Admin Booking Lapangan Futsal merpati ",
    description: "website Booking Lapangan Futsal yang dibuat dengan menggunakan PHP.",
    link: "/",
    github: "https://github.com/KESYAPRIANSYAH/Merpati-Futsall.git",
  },
  {
    image: "/work/web freefire.png",
    category: "react js",
    name: "Garena Free fire cloning  ",
    description: "website Garena Free fire clone dibuat dengan react dan tailwinds untuk tujuan belajar.. ",
    link: "https://ff-cloningweb.vercel.app/",
    github: "https://github.com/KESYAPRIANSYAH/Garena-Freefire-Website.git",
  },
  {
    image: "/work/Klik Jadii web.png",
    category: "wordpress",
    name: "Klik Jadi Webs ",
    description: "Klik Jadi Web merupakan agency jasa pembuatan website murah, cepat dan berkualitas dengan mengutamakan kepuasan client dari Klik Jadi Web. Dengan memanfaatkan media online ini, diharapkan dapat berkontribusi menjadikan perekonomian di Indonesia berkembang Pesat dan mewujudkan Indonesia Emas 2045. ",
    link: "https://klikjadiweb.com/",
    github: "/",
  },
  {
    image: "/work/coba upgrade diri.png",
    category: "wordpress",
    name: "E - Learning Coba Upgrade Diri ",
    description:
      "Cobaupgradediri adalah platform teknologi pendidikan dengan sistem pembelajaran online yang bertujuan untuk meningkatkan skill anak muda dengan berbagai skill yang ingin diasah salah satunya adalah UPSAcademy (Upgrade Public Speaking Academy). ",
    link: "https://cobaupgradediri.com/",
    github: "/",
  },
  {
    image: "/work/Aplikasi Notes.png",
    category: "android",
    name: "Notes Apps ",
    description: " Aplikasi catatan digital, atau sering disebut aplikasi catatan atau notepad, adalah perangkat lunak yang dirancang untuk membuat dan mengelola catatan. berupa teks",
    link: "/",
    github: "/",
  },
  {
    image: "/work/Aplikasi Story.png",
    category: "android",
    name: "Story Apps ",
    description:
      " Aplikasi ini menampilkan daftar cerita dari teman-teman yang sedang belajar dan lulus dari Dicoding. atau sedang belajar membuat aplikasi android , aplikasi story apps juga bisa membaca lokasi mengetahui lokasi user yang mengunggah story  ",
    link: "/",
    github: "/",
  },
  {
    image: "/work/Aplikasi Jajan Jalan.png",
    category: "android",
    name: "JajanJalan: Empowering Street Vendors",
    description:
      "JajanJalan adalah aplikasi yang dirancang untuk pedagang kaki lima, menawarkan fitur-fitur canggih seperti pelacakan lokasi real-time dan sistem rekomendasi. Tujuan kami adalah memperluas jangkauan pasar dan meningkatkan penjualan para penjual ini. JajanJalan sejalan dengan inisiatif pemerintah “UMKM Go Digital” yang berkontribusi terhadap digitalisasi usaha mikro, kecil, dan menengah. dikembangkan sebagai Bangkit 2023 Capstone Product-based tim (CH2-PS116)  yang terdiri dari : Muhammad Naufal Alfarisi, Muhammad Zaki Mubarak Hariyadi ,Galih Satrio Jat sebagai Machine Learning , dan Moh. Azzam Priyanto, Kesy Apriansyah	, sebagai Mobile Developer, Asya'ri	, Syifa` Indriharni Putri sebagai cloud computing / Backend Developer	 ",

    link: "/",
    github: "https://github.com/JajanJalan-Bangkit2023/JajanJalan-App.git",
  },
];

const uniqueCategories = ["all projects", ...new Set(projectData.map((item) => item.category))];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects" ? project : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Projects</h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList
            className="w-full grid h-full md:grid-cols-7 lg:max-w-[740px]
          mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger onClick={() => setCategory(category)} value={category} key={index} className="capitalize w-[162px] md:w-auto">
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
