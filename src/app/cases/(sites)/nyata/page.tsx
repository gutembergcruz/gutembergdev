import { Techs } from "@/Components/Techs";
import { Title } from "@/Components/Title";
import Image from "next/image";

import bergImg from "../../../../assets/cases/full/nyata.jpg";
import Link from "next/link";
import { Associate } from "@/Components/Associate";

export default function Site() {
  return (
    <div className="site">
      <Title text="Grupo Nyata" />
      <div className="box-site">
        <div className="about">
          <h4>About project</h4>
          <p>
            Nyata is a financial solutions company based in Amazonas, specializing in factoring and duly registered with ANFAC (Factoring Regulatory Agency) and the Central Bank. It offers specialized legal advisory services across various fields essential for the development and growth of your business. Additionally, Nyata provides a range of financial solutions and payment methods.
            <br />
            <br />
            Operating in the market since 2015, Nyata aims to develop flexible and customized solutions tailored to the needs of each sector. Their services simplify daily operations, optimize time, and bring more savings and control to their clients’ businesses.
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
