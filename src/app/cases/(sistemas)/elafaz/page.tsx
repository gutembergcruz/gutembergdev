import { Techs } from "@/Components/Techs"
import { Title } from "@/Components/Title"
import Image from "next/image"

import mockupImg from '../../../../assets/cases/mockups/elafaz.png';
import Link from "next/link"
import { Associate } from "@/Components/Associate";

export default function Sistema() {

  return (
    <div className="site">
      <Title text="Ela Faz" />
      <div className="box-site">
        <div className="about">
          <h4>About project</h4>
          <p>
Foi desenvolvido um sistema inovador com o objetivo de criar uma plataforma exclusiva para mulheres, visando a prestação de serviços em diversas áreas. Esse sistema foi concebido com a missão de promover a igualdade de gênero e fortalecer o empreendedorismo feminino, oferecendo um espaço dedicado para que mulheres talentosas possam oferecer seus serviços de forma ampla e diversificada. Com essa plataforma, profissionais femininas têm a oportunidade de se destacar, construir uma sólida rede de clientes e impulsionar suas carreiras rumo ao sucesso.</p>
          <h4>Minha atuação:</h4>
          <p>Desenvolvedor Front-End</p>
          <h4>Technologies Used</h4>
          <Techs html css react js />
          <Associate x/>
        </div>
        <div className="mockup">
          <Image src={mockupImg} alt="" />
        </div>
      </div>
      <Link href="/cases" className="go-back bg-red-150 text-white-100 w-[100px] h-[50px] hover:bg-red-50 flex items-center justify-center" >Go back</Link>
    </div>
  )
}