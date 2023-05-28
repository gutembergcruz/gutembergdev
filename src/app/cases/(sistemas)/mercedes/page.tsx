import { Techs } from "@/Components/Techs"
import { Title } from "@/Components/Title"
import Image from "next/image"

import mockupImg from '../../../../assets/cases/mockups/mercedes.png';
import Link from "next/link"
import { Associate } from "@/Components/Associate";

export default function Sistema() {

  return (
    <div className="site">
      <Title text="Mercedes Benz" />
      <div className="box-site">
        <div className="about">
          <h4>Sobre o projeto</h4>
          <p>Foi desenvolvido um sistema com o objetivo de coletar dados sobre a condução dos caminhões da frota da Mercedes Benz, visando mapear e identificar as melhores rodovias e trechos para percorrer, a fim de reduzir significativamente os acidentes e problemas mecânicos decorrentes das condições das estradas.</p>
          <h4>Minha atuação:</h4>
          <p>Desenvolvedor Front-End</p>
          <p>Desenvolvedor Mobile</p>
          <h4>Tecnologias utilizadas</h4>
          <Techs html css react rn flutter />
          <Associate d/>
        </div>
        <div className="mockup">
          <Image src={mockupImg} alt="" />
        </div>
      </div>
      <Link href="/cases" className="go-back bg-red-150 text-white-100 w-[100px] h-[50px] hover:bg-red-50 flex items-center justify-center" >Voltar</Link>
    </div>
  )
}