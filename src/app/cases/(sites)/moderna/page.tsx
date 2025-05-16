import { Techs } from "@/Components/Techs";
import { Title } from "@/Components/Title";
import Image from "next/image";

import bergImg from "../../../../assets/cases/full/moderna.jpg";
import Link from "next/link";
import { Associate } from "@/Components/Associate";

export default function Site() {
  return (
    <div className="site">
      <Title text="Moderna Arquitetura" />
      <div className="box-site">
        <div className="about">
          <h4>About project</h4>
          <p>
            Moderna Arquitetura is a company specialized in consulting services
            within the architecture field. Our team of highly qualified and
            experienced architects is committed to offering innovative and
            contemporary solutions for architectural projects. With a focus on
            modern design and current trends, we work closely with our clients
            to turn their visions into reality.
            <br /> <br />
            From residential projects to commercial and corporate developments,
            Moderna Arquitetura stands out for excellence in its work, combining
            aesthetics, functionality, and sustainability. Through a thorough
            analysis of clients’ needs and desires, we develop unique projects,
            optimizing spaces, exploring quality materials, and incorporating
            advanced technologies.
            <br /> <br />
            If you are looking for a reliable and visionary partner for your
            next architectural endeavor, count on Moderna Arquitetura to create
            modern, inspiring environments with exceptional quality.
          </p>
          <p>✅ Briefing</p>
          <p>✅ UI Design</p>
          <p>✅ Front End Developmen</p>
          <p>✅ SEO</p>
          <h4>Technologies Used</h4>
          <Techs html css jquery js git figma />
          <Associate c />
        </div>
        <div className="fullpage">
          <Image src={bergImg} alt="" />
        </div>
      </div>
      <Link
        href="/cases"
        className="go-back bg-red-150 text-white-100 w-[100px] h-[50px] hover:bg-red-50 flex items-center justify-center"
      >
        Go back
      </Link>
    </div>
  );
}
