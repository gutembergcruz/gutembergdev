import { Techs } from "@/Components/Techs"
import { Title } from "@/Components/Title"
import Image from "next/image"

import bergImg from '../../../../assets/cases/full/moderna.jpg'
import Link from "next/link"
import { Associate } from "@/Components/Associate"

export default function Site() {

  return (
    <div className="site">
      <Title text="Moderna Arquitetura" />
      <div className="box-site">
        <div className="about">
          <h4>Sobre o projeto</h4>
          <p>A Moderna Arquitetura é uma empresa especializada em serviços de consultoria no ramo da arquitetura. Nossa equipe de arquitetos altamente qualificados e experientes está comprometida em oferecer soluções inovadoras e contemporâneas para projetos arquitetônicos. Com uma abordagem focada no design moderno e nas tendências atuais, trabalhamos em estreita colaboração com nossos clientes para transformar suas visões em realidade. Desde projetos residenciais até empreendimentos comerciais e corporativos, a Moderna Arquitetura se destaca pela excelência em seu trabalho, combinando estética, funcionalidade e sustentabilidade. Com uma análise aprofundada das necessidades e desejos dos clientes, desenvolvemos projetos únicos, otimizando espaços, explorando materiais de qualidade e incorporando tecnologias avançadas. Se você está em busca de um parceiro confiável e visionário para sua próxima empreitada arquitetônica, conte com a Moderna Arquitetura para criar ambientes modernos, inspiradores e de qualidade excepcional.</p>
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