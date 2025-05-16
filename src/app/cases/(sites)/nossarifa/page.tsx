import { Techs } from "@/Components/Techs";
import { Title } from "@/Components/Title";
import Image from "next/image";

import bergImg from "../../../../assets/cases/full/nossarifa.jpg";
import Link from "next/link";
import { Associate } from "@/Components/Associate";

export default function Site() {
  return (
    <div className="site">
      <Title text="Nossa Rifa" />
      <div className="box-site">
        <div className="about">
          <h4>About project</h4>
          <p>
            Nossa Rifa is a website specialized in hosting online raffles,
            providing a fun and exciting way to participate in drawings and
            compete for amazing prizes. With Nossa Rifa, you can explore a
            variety of available raffles and purchase tickets easily and
            securely.
            <br />
            <br />
            The website offers an intuitive platform where you can find detailed
            information about each raffle, including prize descriptions, number
            of tickets available, and the drawing date. Additionally, Nossa Rifa
            provides secure payment methods and participation options to suit
            your preferences.
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
