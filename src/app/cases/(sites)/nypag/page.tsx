import { Techs } from "@/Components/Techs";
import { Title } from "@/Components/Title";
import Image from "next/image";

import bergImg from "../../../../assets/cases/full/nypag.jpg";
import Link from "next/link";
import { Associate } from "@/Components/Associate";

export default function Site() {
  return (
    <div className="site">
      <Title text="Nypag" />
      <div className="box-site">
        <div className="about">
          <h4>About project</h4>
          <p>
            Nypag is a website specializing in accounting and financial advisory
            services for businesses. With a team of experienced and qualified
            professionals, Nypag offers personalized and efficient solutions to
            assist clients with their accounting needs. Whether for general
            accounting services, financial planning, or tax consulting, Nypag is
            prepared to provide expert guidance.
            <br /> <br />
            Additionally, Nypag’s website offers valuable resources such as
            articles and informative guides that allow visitors to enhance their
            knowledge of finance and accounting. With a dedicated approach and
            commitment to excellence, Nypag strives to provide quality service,
            helping businesses effectively achieve their financial goals.
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
