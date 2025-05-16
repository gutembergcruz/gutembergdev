import { Techs } from "@/Components/Techs"
import { Title } from "@/Components/Title"
import Image from "next/image"

import bergImg from '../../../../assets/cases/mockups/inside.png'
import Link from "next/link"
import { Associate } from "@/Components/Associate"

export default function Sistema() {

  return (
    <div className="site">
      <Title text="Inside" />
      <div className="box-site">
        <div className="about">
          <h4>About project</h4>
          <p>Inside é uma plataforma de investimentos abrangente e intuitiva, oferecendo uma ampla gama de opções de investimento, desde ações até criptomoedas. Além disso, a plataforma possui recursos de pesquisa de mercado e análise, bem como a capacidade de interagir com outros investidores por meio do social trading. Com medidas avançadas de segurança e uma interface amigável, a Inside visa tornar o processo de investimento acessível e lucrativo para investidores de todos os níveis de experiência.</p>
          <h4>Minha atuação</h4>
          <p>Desenvolvedor Front End</p>
          <h4>Technologies Used</h4>
          <Techs html css react js />
          <Associate x/>
        </div>
        <div className="mockup">
          <Image src={bergImg} alt="" />
        </div>
      </div>
      <Link href="/cases" className="go-back bg-red-150 text-white-100 w-[100px] h-[50px] hover:bg-red-50 flex items-center justify-center" >Go back</Link>
    </div>
  )
}