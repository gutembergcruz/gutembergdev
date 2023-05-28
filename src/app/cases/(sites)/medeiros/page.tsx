import { Techs } from "@/Components/Techs"
import { Title } from "@/Components/Title"
import Image from "next/image"

import bergImg from '../../../../assets/cases/full/medeiros.jpg'
import Link from "next/link"
import { Associate } from "@/Components/Associate"

export default function Site() {

  return (
    <div className="site">
      <Title text="Medeiros Consultoria" />
      <div className="box-site">
        <div className="about">
          <h4>Sobre o projeto</h4>
          <p>A Medeiros Consultoria é uma empresa especializada em consultoria e engenharia de manutenção preditiva. Com uma equipe experiente e capacitada, a empresa oferece soluções avançadas para prever e evitar falhas em equipamentos e sistemas prediais. Por meio da aplicação de técnicas de análise preditiva, como análise de vibração, termografia e análise de óleo, a Medeiros Consultoria auxilia os clientes a maximizarem a vida útil de seus ativos, reduzir custos com reparos emergenciais e aumentar a eficiência operacional.
<br /> <br />
Com um foco na prevenção de falhas e na otimização dos processos de manutenção, a Medeiros Consultoria desempenha um papel crucial na manutenção preditiva, ajudando as empresas a evitar paradas não programadas, otimizar recursos e garantir a continuidade das operações. Com sua expertise e abordagem personalizada, a Medeiros Consultoria é a parceira ideal para melhorar a confiabilidade e o desempenho dos ativos dos seus clientes.</p>
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