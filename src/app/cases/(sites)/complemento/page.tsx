import { Techs } from "@/Components/Techs";
import { Title } from "@/Components/Title";
import Image from "next/image";

import bergImg from "../../../../assets/cases/full/complemento.jpg";
import Link from "next/link";
import { Associate } from "@/Components/Associate";

export default function Site() {
  return (
    <div className="site">
      <Title text="Complemento Telecom" />
      <div className="box-site">
        <div className="about">
          <h4>About project</h4>
          <p>
            Complemento Telecom is a website specialized in telecommunications solutions for businesses, with a strong focus on fiber internet services. With the growing demand for speed and connection stability, Complemento Telecom’s fiber internet offers a high-quality solution to meet the connectivity needs of companies.
            <br />
            <br />
            On the website, clients will find detailed information about the fiber internet plans offered by Complemento Telecom, featuring fast and reliable speeds. Fiber optic technology provides a high-speed, low-latency connection, ensuring a smooth and efficient browsing experience.
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
