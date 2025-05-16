import { Techs } from "@/Components/Techs";
import { Title } from "@/Components/Title";
import Image from "next/image";

import bergImg from "../../../../assets/cases/full/checklist.jpg";
import Link from "next/link";
import { Associate } from "@/Components/Associate";

export default function Site() {
  return (
    <div className="site">
      <Title text="Checklist Contabilidade" />
      <div className="box-site">
        <div className="about">
          <h4>About project</h4>
          <p>
            Checklist Contabilidade is a website dedicated to providing accounting services in a practical and efficient way. With a simplified approach, the site aims to make life easier for entrepreneurs and self-employed professionals by offering comprehensive accounting solutions tailored to their needs.
            <br />
            <br />
            At Checklist Contabilidade, clients will find a variety of accounting services, including company registration, preparation of balance sheets and financial statements, tax calculations, and compliance with fiscal obligations, among others. The website offers an intuitive and user-friendly system where users can upload and access documents, track the progress of services, and receive personalized guidance.
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
