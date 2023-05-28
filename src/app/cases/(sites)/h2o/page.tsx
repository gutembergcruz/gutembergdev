import { Techs } from "@/Components/Techs"
import { Title } from "@/Components/Title"
import Image from "next/image"

import bergImg from '../../../../assets/cases/full/h2o.jpg'
import Link from "next/link"
import { Associate } from "@/Components/Associate"

export default function Site() {

  return (
    <div className="site">
      <Title text="Quality H2o" />
      <div className="box-site">
        <div className="about">
          <h4>Sobre o projeto</h4>
          <p>O Laboratório QualityH2o foi fundado em 2019 na cidade de Manaus, com o principal objetivo de realizar análises físico-químicas e bacteriológicas. Contamos com equipamentos de última geração e uma equipe de profissionais altamente qualificados, visando superar as expectativas dos nossos clientes. Nosso foco é fornecer um atendimento excepcional tanto para empresas, instituições, condomínios e residências, garantindo qualidade, confiabilidade, agilidade e preços diferenciados.
<br /><br />
Além disso, oferecemos serviços de assessoramento para auxiliar nossos clientes na obtenção de aprovações junto aos órgãos competentes, cumprindo rigorosamente as legislações aplicáveis. Também estamos comprometidos em fornecer soluções ambientais eficientes, buscando promover práticas sustentáveis.
<br /><br />
No Laboratório QualityH2o, nosso compromisso é com a excelência, garantindo resultados precisos e confiáveis em todas as análises realizadas. Estamos empenhados em atender às necessidades individuais de cada cliente, priorizando a satisfação e o sucesso deles em todas as etapas do processo.</p>
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