import { Techs } from "@/Components/Techs";
import { Title } from "@/Components/Title";
import Image from "next/image";

import bergImg from "../../../../assets/cases/full/h2o.jpg";
import Link from "next/link";
import { Associate } from "@/Components/Associate";

export default function Site() {
  return (
    <div className="site">
      <Title text="Quality H2o" />
      <div className="box-site">
        <div className="about">
          <h4>About project</h4>
          <p>
            QualityH2o Laboratory was founded in 2019 in the city of Manaus,
            with the primary goal of performing physicochemical and
            bacteriological analyses. We have state-of-the-art equipment and a
            team of highly qualified professionals, aiming to exceed our
            clients’ expectations. Our focus is to provide exceptional service
            to companies, institutions, condominiums, and residences, ensuring
            quality, reliability, agility, and competitive pricing.
            <br />
            <br />
            Additionally, we offer advisory services to assist our clients in
            obtaining approvals from the relevant authorities, strictly
            complying with applicable regulations. We are also committed to
            providing efficient environmental solutions, aiming to promote
            sustainable practices.
            <br />
            <br />
            At QualityH2o Laboratory, our commitment is to excellence, ensuring
            precise and reliable results in all analyses performed. We are
            dedicated to meeting the individual needs of each client,
            prioritizing their satisfaction and success at every stage of the
            process.
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
