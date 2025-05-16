import { Techs } from "@/Components/Techs";
import { Title } from "@/Components/Title";
import Image from "next/image";

import bergImg from "../../../../assets/cases/full/norteshop.jpg";
import Link from "next/link";
import { Associate } from "@/Components/Associate";

export default function Site() {
  return (
    <div className="site">
      <Title text="Norteshop" />
      <div className="box-site">
        <div className="about">
          <h4>About project</h4>
          <p>
            Norteshop is an online shopping website offering a wide variety of products to meet customers’ needs. With a diverse catalog, Norteshop provides a convenient and accessible shopping experience, allowing customers to easily find the products they want.
            <br />
            <br />
            At Norteshop, you can find everything from electronics and appliances to fashion, beauty, sporting goods, and much more. The website is known for its carefully curated selection of quality products from reputable and trusted brands.
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
