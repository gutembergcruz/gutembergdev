import { Techs } from "@/Components/Techs";
import { Title } from "@/Components/Title";
import Image from "next/image";

import bergImg from "../../../../assets/cases/full/portalatualizado.jpg";
import Link from "next/link";
import { Associate } from "@/Components/Associate";

export default function Site() {
  return (
    <div className="site">
      <Title text="Portal Atualizado" />
      <div className="box-site">
        <div className="about">
          <h4>About project</h4>
          <p>
            Portal Atualizado is a comprehensive online platform that keeps
            users informed about the latest news, trends, and relevant events
            across various fields. With a dedicated team of writers and experts
            in different areas, Portal Atualizado offers a wide range of
            regularly updated content.
            <br /> <br />
            From international and national news to articles on technology,
            entertainment, health, sports, and much more, users can rely on
            Portal Atualizado as a trustworthy and convenient source of
            information. Additionally, the platform provides interactive
            features such as discussion forums and comment sections, allowing
            users to actively participate and share their opinions.
            <br /> <br />
            With Portal Atualizado, you can explore a world of knowledge and
            always stay up-to-date with the latest news, all in one accessible
            place.
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
