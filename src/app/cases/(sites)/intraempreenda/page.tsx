import { Techs } from "@/Components/Techs";
import { Title } from "@/Components/Title";
import Image from "next/image";

import bergImg from "../../../../assets/cases/full/intraempreenda.jpg";
import Link from "next/link";
import { Associate } from "@/Components/Associate";

export default function Site() {
  return (
    <div className="site">
      <Title text="Intraempreenda Sem Fronteiras" />
      <div className="box-site">
        <div className="about">
          <h4>About project</h4>
          <p>
            Intraempreenda sem Fronteiras is an online platform that aims to encourage and support the culture of intrapreneurship. Focusing on connecting professionals and companies interested in promoting innovation and internal entrepreneurship, the website offers a variety of resources and tools to boost intrapreneurship.
            <br />
            <br />
            On Intraempreenda sem Fronteiras, visitors will find articles, success stories, tips, and relevant information on the topic. The website promotes the exchange of experiences and knowledge among intrapreneurs, as well as providing materials that help develop entrepreneurial skills.
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
