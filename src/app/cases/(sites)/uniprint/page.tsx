import { Techs } from "@/Components/Techs";
import { Title } from "@/Components/Title";
import Image from "next/image";

import bergImg from "../../../../assets/cases/full/uniprint.jpg";
import Link from "next/link";
import { Associate } from "@/Components/Associate";

export default function Site() {
  return (
    <div className="site">
      <Title text="Uniprint" />
      <div className="box-site">
        <div className="about">
          <h4>About project</h4>
          <p>
            Uniprint is a website specializing in personalized, high-quality
            printing solutions. Offering a variety of options, from business
            cards to banners, Uniprint meets both commercial and personal
            printing needs. With design tools and a simple ordering process, the
            site ensures a convenient shopping experience and fast delivery of
            printed products.
            <br />
            <br />
            Uniprint stands out for its commitment to customer satisfaction,
            ensuring that every project is handled with care and precision. If
            you are looking for reliable printing services with exceptional
            results, Uniprint is the right choice. Enjoy high-quality printed
            products that meet your expectations with Uniprint.
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
