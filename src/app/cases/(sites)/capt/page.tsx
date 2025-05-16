import { Techs } from "@/Components/Techs";
import { Title } from "@/Components/Title";
import Image from "next/image";

import bergImg from "../../../../assets/cases/full/capt.jpg";
import Link from "next/link";
import { Associate } from "@/Components/Associate";

export default function Site() {
  return (
    <div className="site">
      <Title text="Capt Peacock" />
      <div className="box-site">
        <div className="about">
          <h4>About project</h4>
          <p>
            Capt Peacock is a leading reference in the sport fishing segment in the Amazon region. With an exclusive focus on peacock bass fishing, the website offers fishing enthusiasts a unique and thrilling experience in the waters of the Amazon.
            <br /> <br />
            On the Capt Peacock website, visitors will find detailed information about the available fishing packages, which include lodging, meals, and expert guides. The company stands out for its professionalism and deep knowledge of the region, providing anglers with a world-class fishing experience.
            <br /> <br />
            In addition, the Capt Peacock website offers fishing tips, travel stories, and photo galleries that showcase the adventures experienced by anglers amid the lush Amazonian nature. It serves as a source of inspiration for sport fishing enthusiasts who wish to explore the Amazon waters and seek the thrill of catching one of the region’s most coveted fish.
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
