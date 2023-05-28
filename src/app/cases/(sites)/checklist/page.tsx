import { Techs } from "@/Components/Techs"
import { Title } from "@/Components/Title"
import Image from "next/image"

import bergImg from '../../../../assets/cases/full/checklist.jpg'
import Link from "next/link"
import { Associate } from "@/Components/Associate"

export default function Site() {

  return (
    <div className="site">
      <Title text="Checklist Contabilidade" />
      <div className="box-site">
        <div className="about">
          <h4>Sobre o projeto</h4>
          <p>O Checklist Contabilidade é um site dedicado a fornecer serviços de contabilidade de forma prática e eficiente. Com uma abordagem simplificada, o site visa facilitar a vida de empreendedores e profissionais autônomos, oferecendo soluções contábeis completas para atender às suas necessidades.
<br /><br />
No Checklist Contabilidade, os clientes encontrarão uma variedade de serviços contábeis, incluindo registro de empresas, elaboração de balanços e demonstrativos financeiros, cálculo de impostos e obrigações fiscais, entre outros. O site oferece um sistema intuitivo e fácil de usar, onde os usuários podem acessar e enviar documentos, acompanhar o andamento dos serviços e receber orientações personalizadas.</p>
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