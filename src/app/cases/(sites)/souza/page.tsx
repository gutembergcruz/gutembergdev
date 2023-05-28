import { Techs } from "@/Components/Techs"
import { Title } from "@/Components/Title"
import Image from "next/image"

import bergImg from '../../../../assets/cases/full/souza.jpg'
import Link from "next/link"
import { Associate } from "@/Components/Associate"

export default function Site() {

  return (
    <div className="site">
      <Title text="Despachante Souza" />
      <div className="box-site">
        <div className="about">
          <h4>Sobre o projeto</h4>
          <p>O Despachante Souza é um site especializado em serviços de despachante veicular, oferecendo atendimento ágil e eficiente para auxiliar os clientes em suas necessidades de documentação automotiva. Com uma equipe experiente e conhecimento dos trâmites legais, o site simplifica o processo de transferências, emplacamentos, licenciamentos e outros serviços relacionados. Além disso, o Despachante Souza fornece informações atualizadas sobre legislação de trânsito, oferecendo um atendimento personalizado e transparente para tornar o processo de regularização de veículos mais conveniente e seguro. Confie no Despachante Souza para lidar com a documentação do seu veículo de forma confiável e descomplicada.</p>
          <p>✅ Briefing</p>
          <p>✅ UI Design</p>
          <p>✅ Desenvolvimento Front</p>
          <p>✅ SEO</p>
          <h4>Tecnologias utilizadas</h4>
          <Techs html css jquery js git figma />
          <Associate c />
        </div>
        <div className="fullpage">
          <Image src={bergImg} alt="" />
        </div>
      </div>
      <Link href="/cases" className="go-back bg-red-150 text-white-100 w-[100px] h-[50px] hover:bg-red-50 flex items-center justify-center" >Voltar</Link>
    </div>
  )
}