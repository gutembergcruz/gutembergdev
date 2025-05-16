import { Techs } from "@/Components/Techs";
import { Title } from "@/Components/Title";
import Image from "next/image";

import bergImg from "../../../../assets/cases/full/souza.jpg";
import Link from "next/link";
import { Associate } from "@/Components/Associate";

export default function Site() {
  return (
    <div className="site">
      <Title text="Despachante Souza" />
      <div className="box-site">
        <div className="about">
          <h4>About project</h4>
          <p>
            Despachante Souza is a website specializing in vehicle documentation
            services, providing fast and efficient assistance to help clients
            with their automotive paperwork needs. With an experienced team
            knowledgeable about legal procedures, the site streamlines processes
            such as transfers, registrations, licensing, and other related
            services.
            <br /> <br />
            Additionally, Despachante Souza provides up-to-date information on
            traffic legislation, offering personalized and transparent service
            to make the vehicle regularization process more convenient and
            secure. Trust Despachante Souza to handle your vehicle documentation
            reliably and hassle-free.
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
