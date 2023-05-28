import { Techs } from "@/Components/Techs"
import { Title } from "@/Components/Title"
import Image from "next/image"

import bergImg from '../../../../assets/cases/full/complemento.jpg'
import Link from "next/link"
import { Associate } from "@/Components/Associate"

export default function Site() {

  return (
    <div className="site">
      <Title text="Complemento Telecom" />
      <div className="box-site">
        <div className="about">
          <h4>Sobre o projeto</h4>
          <p>O Complemento Telecom é um site especializado em soluções de telecomunicações para empresas, com destaque para o serviço de internet fibra. Com a crescente demanda por velocidade e estabilidade de conexão, a internet fibra do Complemento Telecom oferece uma solução de alta qualidade para atender às necessidades de conectividade das empresas.
<br /><br />
No site, os clientes encontrarão informações detalhadas sobre os planos de internet fibra oferecidos pelo Complemento Telecom, com velocidades rápidas e confiáveis. A tecnologia de fibra óptica proporciona uma conexão de alta velocidade e baixa latência, garantindo uma experiência de navegação fluída e eficiente.</p>
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