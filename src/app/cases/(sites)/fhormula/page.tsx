import { Techs } from "@/Components/Techs";
import { Title } from "@/Components/Title";
import Image from "next/image";

import bergImg from "../../../../assets/cases/full/fhormula.jpg";
import Link from "next/link";
import { Associate } from "@/Components/Associate";

export default function Site() {
  return (
    <div className="site">
      <Title text="Fhormula" />
      <div className="box-site">
        <div className="about">
          <h4>About project</h4>
          <p>
            Fhormula is a book subscription box website that offers a unique experience for book lovers. Aiming to deliver exciting literary discoveries, Fhormula sends a carefully curated selection of books every month, delivered straight to subscribers’ doors.
            <br />
            <br />
            On the Fhormula website, users can choose from different subscription plans, customizing their experience according to their literary genre preferences. Each box contains surprising books, including recent releases, bestsellers, and critically acclaimed works, ensuring a diverse reading experience for subscribers to explore.
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
