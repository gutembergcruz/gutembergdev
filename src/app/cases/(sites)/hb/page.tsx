import { Techs } from "@/Components/Techs";
import { Title } from "@/Components/Title";
import Image from "next/image";

import bergImg from "../../../../assets/cases/full/hb.jpg";
import Link from "next/link";
import { Associate } from "@/Components/Associate";

export default function Site() {
  return (
    <div className="site">
      <Title text="HB Empresarial" />
      <div className="box-site">
        <div className="about">
          <h4>About project</h4>
          <p>
            HB Empresarial is a company specialized in business consulting, offering strategic and personalized solutions for companies of all sizes and sectors. With an experienced and qualified team, HB Empresarial is committed to helping its clients achieve success and maximize their growth potential. Through in-depth analyses, precise diagnostics, and strategic action plans, the company works in partnership with its clients to identify opportunities, overcome challenges, and implement best management practices. With HB Empresarial, companies can count on high-level expertise to boost performance, optimize processes, increase operational efficiency, and achieve solid and sustainable results in today’s competitive market.
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
