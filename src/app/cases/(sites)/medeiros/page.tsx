import { Techs } from "@/Components/Techs";
import { Title } from "@/Components/Title";
import Image from "next/image";

import bergImg from "../../../../assets/cases/full/medeiros.jpg";
import Link from "next/link";
import { Associate } from "@/Components/Associate";

export default function Site() {
  return (
    <div className="site">
      <Title text="Medeiros Consultoria" />
      <div className="box-site">
        <div className="about">
          <h4>About project</h4>
          <p>
            Medeiros Consultoria is a company specialized in consulting and
            predictive maintenance engineering. With an experienced and skilled
            team, the company offers advanced solutions to predict and prevent
            failures in equipment and building systems. Through the application
            of predictive analysis techniques such as vibration analysis,
            thermography, and oil analysis, Medeiros Consultoria helps clients
            maximize the lifespan of their assets, reduce emergency repair
            costs, and increase operational efficiency.
            <br /> <br />
            With a focus on failure prevention and optimization of maintenance
            processes, Medeiros Consultoria plays a crucial role in predictive
            maintenance by helping companies avoid unplanned downtime, optimize
            resources, and ensure operational continuity. With its expertise and
            personalized approach, Medeiros Consultoria is the ideal partner to
            improve the reliability and performance of its clients assets.
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
