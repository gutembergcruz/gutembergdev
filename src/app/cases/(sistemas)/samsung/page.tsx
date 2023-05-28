import { Techs } from "@/Components/Techs"
import { Title } from "@/Components/Title"
import Image from "next/image"

import bergImg from '../../../../assets/cases/mockups/samsung.png'
import Link from "next/link"
import { Associate } from "@/Components/Associate"

export default function Sistema() {

  return (
    <div className="site">
      <Title text="Samsung ESD4" />
      <div className="box-site">
        <div className="about">
          <h4>Sobre o projeto</h4>
          <p>A plataforma ESD4 foi desenvolvida com o propósito de testar uniformes antiestáticos completos, ionizadores e possíveis surtos, entre outras métricas. Seu objetivo é garantir a segurança do ambiente durante o manuseio de componentes, prevenindo curtos-circuitos..</p>
          <h4>Minha atuação</h4>
          <p>Desenvolvedor Front End</p>
          <h4>Tecnologias utilizadas</h4>
          <Techs html css react rn git ts />
          <Associate d/>
        </div>
        <div className="mockup">
          <Image src={bergImg} alt="" />
        </div>
      </div>
      <Link href="/cases" className="go-back bg-red-150 text-white-100 w-[100px] h-[50px] hover:bg-red-50 flex items-center justify-center" >Voltar</Link>
    </div>
  )
}