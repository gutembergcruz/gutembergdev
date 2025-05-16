import { Techs } from "@/Components/Techs"
import { Title } from "@/Components/Title"
import Image from "next/image"

import bergImg from '../../../../assets/cases/mockups/mondelez.png'
import Link from "next/link"
import { Associate } from "@/Components/Associate"

export default function Sistema() {

  return (
    <div className="site">
      <Title text="Mondelez Internacional" />
      <div className="box-site">
        <div className="about">
          <h4>About project</h4>
          <p>Estou trabalhando em um projeto de interface de usuário para uma plataforma de rastreabilidade de cacau. Essa plataforma proporcionará um fluxo eficiente, acompanhando todas as etapas desde a colheita do cacau até a entrega para a empresa que utilizará o produto.</p>
          <p>Através dessa plataforma, os produtores poderão registrar todas as informações relevantes sobre a colheita, como localização geográfica, data, métodos de cultivo e uso de pesticidas ou fertilizantes. Isso permitirá um rastreamento preciso da origem do cacau, garantindo a transparência e a qualidade do produto final.</p>
          <p>Além disso, a plataforma possibilitará o registro de informações durante o transporte e armazenamento do cacau, incluindo datas, locais e condições de armazenamento. Dessa forma, será possível monitorar todo o trajeto do produto, assegurando a integridade e a segurança do cacau até sua chegada à empresa final.</p>
          <h4>Minha atuação</h4>
          <p>UX/UI Designer</p>
          <h4>Technologies Used</h4>
          <Techs figma />
          <Associate b/>
        </div>
        <div className="mockup">
          <Image src={bergImg} alt="" />
        </div>
      </div>
      <Link href="/cases" className="go-back bg-red-150 text-white-100 w-[100px] h-[50px] hover:bg-red-50 flex items-center justify-center" >Go back</Link>
    </div>
  )
}