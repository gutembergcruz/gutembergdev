import { Techs } from "@/Components/Techs"
import { Title } from "@/Components/Title"
import Image from "next/image"

import bergImg from '../../../../assets/cases/full/nypag.jpg'
import Link from "next/link"
import { Associate } from "@/Components/Associate"

export default function Site() {

  return (
    <div className="site">
      <Title text="Nypag" />
      <div className="box-site">
        <div className="about">
          <h4>Sobre o projeto</h4>
          <p>A Nypag é um site especializado em serviços de contabilidade e assessoria financeira para empresas. Com uma equipe de profissionais experientes e qualificados, a Nypag oferece soluções personalizadas e eficientes para auxiliar os clientes em suas necessidades contábeis. Seja para serviços de contabilidade geral, planejamento financeiro ou consultoria tributária, a Nypag está preparada para fornecer orientação especializada.
<br /> <br />
Além disso, o site da Nypag oferece recursos valiosos, como artigos e guias informativos, que permitem que os visitantes aprimorem seus conhecimentos em finanças e contabilidade. Com uma abordagem dedicada e comprometida com a excelência, a Nypag busca fornecer um serviço de qualidade, ajudando as empresas a alcançarem seus objetivos financeiros de forma eficaz.</p>
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