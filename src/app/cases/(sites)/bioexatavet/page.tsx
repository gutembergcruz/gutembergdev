import { Techs } from "@/Components/Techs"
import { Title } from "@/Components/Title"
import Image from "next/image"

import bergImg from '../../../../assets/cases/full/bioexatavet.jpeg'
import Link from "next/link"
import { Associate } from "@/Components/Associate"

export default function Site() {

  return (
    <div className="site">
      <Title text="BioexataVet" />
      <div className="box-site">
        <div className="about">
          <h4>About project</h4>
          <p>BioexataVet is a renowned compounding pharmacy specializing in medications for pets. Through their website, you can find a wide variety of natural products aimed at enhancing your beloved companion’s health. In addition, if you need a specific and customized medication, you can contact them directly. With BioexataVet, you have access to personalized, high-quality solutions to care for your pet’s well-being.</p>
          <p>Moreover, the BioexataVet website features an open blog system, where veterinarians of all experience levels have the opportunity to register and share their tips and general information about the veterinary world. This platform is a welcoming and inclusive space, where both beginner and seasoned professionals can contribute their knowledge and experience. We believe that every veterinarian has valuable insights to offer, regardless of how long they’ve been practicing. By registering on our blog system, you’ll have the chance to share your perspectives and help enrich collective knowledge about pet care. Our goal is to provide a collaborative environment where all veterinarians feel encouraged to share what they know and have learned, creating a diverse and inclusive space for professional growth.</p>
          <p>✅ Briefing</p>                                                                                                      
          <p>✅ UI Design</p>
          <p>✅ Front End Development</p>
          <p>✅ SEO</p>
          <h4>Technologies Used</h4>
          <Techs html css jquery js git figma />
          <Associate c />
        </div>
        <div className="fullpage">
          <Image src={bergImg} alt="" />
        </div>
      </div>
      <Link href="/cases" className="go-back bg-red-150 text-white-100 w-[100px] h-[50px] hover:bg-red-50 flex items-center justify-center" >Go back</Link>
    </div>
  )
}