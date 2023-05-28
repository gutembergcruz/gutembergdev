import { Techs } from "@/Components/Techs"
import { Title } from "@/Components/Title"
import Image from "next/image"

import bergImg from '../../../../assets/cases/full/intraempreenda.jpg'
import Link from "next/link"
import { Associate } from "@/Components/Associate"

export default function Site() {

  return (
    <div className="site">
      <Title text="Intraempreenda Sem Fronteiras" />
      <div className="box-site">
        <div className="about">
          <h4>Sobre o projeto</h4>
          <p>O site Intraempreenda sem Fronteiras é uma plataforma online que busca incentivar e apoiar a cultura do intraempreendedorismo. Com foco em conectar profissionais e empresas interessados em promover a inovação e o empreendedorismo interno, o site oferece uma variedade de recursos e ferramentas para impulsionar o intraempreendedorismo.
<br /><br />
No Intraempreenda sem Fronteiras, os visitantes encontrarão artigos, cases de sucesso, dicas e informações relevantes sobre o tema. O site promove a troca de experiências e conhecimentos entre intraempreendedores, além de disponibilizar materiais que auxiliam no desenvolvimento de habilidades empreendedoras.</p>
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