import { Techs } from "@/Components/Techs"
import { Title } from "@/Components/Title"
import Image from "next/image"

import bergImg from '../../../../assets/cases/full/nyata.jpg'
import Link from "next/link"
import { Associate } from "@/Components/Associate"

export default function Site() {

  return (
    <div className="site">
      <Title text="Grupo Nyata" />
      <div className="box-site">
        <div className="about">
          <h4>Sobre o projeto</h4>
          <p>A Nyata é uma empresa amazonense de soluções financeiras, especializada em fomento mercantil e devidamente registrada na ANFAC (Agência Regulamentadora de Factoring) e no Banco Central. Conta com assessoria jurídica especializada, em diversos ramos e especialidades essenciais ao desenvolvimento e fomento de sua empresa. Conta também, Com diversas soluções Financeiras e em Meios de Pagamentos.
<br /><br />
No mercado desde 2015, com o objetivo de desenvolver soluções flexíveis e customizadas às necessidades de cada segmento de atuação, com serviços que facilitam o dia a dia, otimizam tempo e trazem mais economia e controle para o negócio de seus clientes.</p>
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