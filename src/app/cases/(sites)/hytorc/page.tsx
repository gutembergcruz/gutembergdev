import { Techs } from "@/Components/Techs";
import { Title } from "@/Components/Title";
import Image from "next/image";

import bergImg from "../../../../assets/cases/full/hytorc.jpg";
import Link from "next/link";
import { Associate } from "@/Components/Associate";

export default function Site() {
  return (
    <div className="site">
      <Title text="Hytorc AM" />
      <div className="box-site">
        <div className="about">
          <h4>About project</h4>
          <p>
            Hytorcam is a website specialized in providing comprehensive
            information and resources about hydraulic and pneumatic tools and
            equipment. If you’re looking for efficient solutions for your
            tightening, fastening, and motion control needs, Hytorcam is the
            ideal place to find everything you need. With an extensive catalog
            of products from renowned, high-quality brands, the site offers a
            wide variety of options to meet industrial and commercial demands.
            <br />
            <br />
            Additionally, Hytorcam also provides informative articles, guides,
            and tutorials, enabling website visitors to enhance their knowledge
            about these types of tools and their specific uses. With an
            intuitive and easy-to-navigate interface, Hytorcam makes the process
            of researching and selecting tools more efficient and
            straightforward. Whether you are an industry professional or a tool
            enthusiast, Hytorcam is here to help you find the best hydraulic and
            pneumatic solutions for your needs.
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
