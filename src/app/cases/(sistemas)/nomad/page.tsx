import { Techs } from "@/Components/Techs"
import { Title } from "@/Components/Title"
import Image from "next/image"

import bergImg from '../../../../assets/cases/mockups/nomad.png'
import Link from "next/link"
import { Associate } from "@/Components/Associate"

export default function Sistema() {

  return (
    <div className="site">
      <Title text="Nomad" />
      <div className="box-site">
        <div className="about">
          <h4>Sobre o projeto</h4>
          <p>Desenvolvemos um projeto inovador para rastreabilidade de café, com o objetivo de gerenciar de forma eficiente todo o fluxo, desde a colheita até a entrega final. Nossa plataforma oferece uma solução abrangente, proporcionando transparência e controle em cada etapa do processo.</p>
          <p>Através desse projeto, os produtores de café podem registrar e acompanhar informações cruciais, como data e local da colheita, métodos de cultivo e quaisquer tratamentos aplicados. Esses dados permitem uma rastreabilidade precisa, garantindo a qualidade e a procedência do café.</p>
          <h4>Minha atuação</h4>
          <p>Front End</p>
          <p>Devops</p>
          <h4>Tecnologias utilizadas</h4>
          <Techs html css js git />
          <Associate b/>
        </div>
        <div className="mockup">
          <Image src={bergImg} alt="" />
        </div>
      </div>
      <Link href="/cases" className="go-back bg-red-150 text-white-100 w-[100px] h-[50px] hover:bg-red-50 flex items-center justify-center" >Voltar</Link>
    </div>
  )
}