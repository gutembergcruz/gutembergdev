import { Techs } from "@/Components/Techs"
import { Title } from "@/Components/Title"
import Image from "next/image"

import bergImg from '../../../../assets/cases/full/hb.jpg'
import Link from "next/link"
import { Associate } from "@/Components/Associate"

export default function Site() {

  return (
    <div className="site">
      <Title text="HB Empresarial" />
      <div className="box-site">
        <div className="about">
          <h4>Sobre o projeto</h4>
          <p>A HB Empresarial é uma empresa especializada em consultoria empresarial que oferece soluções estratégicas e personalizadas para empresas de todos os portes e setores. Com uma equipe experiente e qualificada, a HB Empresarial está comprometida em auxiliar seus clientes a alcançarem o sucesso e a maximizarem seu potencial de crescimento. Por meio de análises aprofundadas, diagnósticos precisos e planos de ação estratégicos, a empresa trabalha em parceria com seus clientes, identificando oportunidades, superando desafios e implementando as melhores práticas de gestão. Com a HB Empresarial, as empresas podem contar com expertise de alto nível para impulsionar seu desempenho, otimizar processos, aumentar a eficiência operacional e obter resultados sólidos e sustentáveis no mercado competitivo de hoje.</p>
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