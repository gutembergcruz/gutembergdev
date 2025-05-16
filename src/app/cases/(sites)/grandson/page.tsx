import { Techs } from "@/Components/Techs";
import { Title } from "@/Components/Title";
import Image from "next/image";

import bergImg from "../../../../assets/cases/full/grandson.jpg";
import Link from "next/link";
import { Associate } from "@/Components/Associate";

export default function Site() {
  return (
    <div className="site">
      <Title text="Grandson Violões" />
      <div className="box-site">
        <div className="about">
          <h4>About project</h4>
          <p>
            Violão Grandson is a company specialized in the manufacturing and
            sale of the innovative Violão Amplifier Portable. Combining the
            sound quality of a high-performance acoustic guitar with the
            convenience of a built-in amplifier, Violão Grandson’s Amplifier
            Portable offers musicians a unique playing experience.
            <br />
            <br />
            The Violão Amplifier Portable from Violão Grandson is designed to
            deliver powerful and clear sound, giving musicians the freedom to
            play anywhere without the need for additional equipment. Featuring
            advanced controls such as volume and equalization, headphone
            connections, and audio outputs, the Violão Amplifier Portable from
            Violão Grandson is perfect for live performances, rehearsals, and
            individual practice.
          </p>
          <br />
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
