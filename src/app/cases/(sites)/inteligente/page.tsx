import { Techs } from "@/Components/Techs"
import { Title } from "@/Components/Title"
import Image from "next/image"

import bergImg from '../../../../assets/cases/full/inteligente.jpg'
import Link from "next/link"
import { Associate } from "@/Components/Associate"

export default function Site() {

  return (
    <div className="site">
      <Title text="InteliGente" />
      <div className="box-site">
        <div className="about">
          <h4>Sobre o projeto</h4>
          <p>A InteliGente é uma empresa especializada em consultoria de carreira, oferecendo orientação personalizada e estratégias eficientes para ajudar os profissionais a alcançarem seus objetivos profissionais. Com uma abordagem inteligente e experiente, a InteliGente auxilia os clientes na identificação de suas habilidades, interesses e metas, fornecendo um plano de ação para impulsionar suas carreiras.
<br /><br />
Por meio de serviços como análise de perfil profissional, desenvolvimento de currículo, orientação para entrevistas e networking, a InteliGente capacita os indivíduos a se destacarem no mercado de trabalho e aproveitarem as oportunidades que surgem. Com uma equipe de consultores experientes e conhecimento atualizado sobre as tendências do mercado, a InteliGente é uma parceira confiável para aqueles que buscam um direcionamento estratégico e apoio especializado na progressão de suas carreiras.</p>
<br />
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