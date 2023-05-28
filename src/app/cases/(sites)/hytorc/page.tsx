import { Techs } from "@/Components/Techs"
import { Title } from "@/Components/Title"
import Image from "next/image"

import bergImg from '../../../../assets/cases/full/hytorc.jpg'
import Link from "next/link"
import { Associate } from "@/Components/Associate"

export default function Site() {

  return (
    <div className="site">
      <Title text="Hytorc AM" />
      <div className="box-site">
        <div className="about">
          <h4>Sobre o projeto</h4>
          <p>O Hytorcam é um site especializado em fornecer informações e recursos completos sobre ferramentas e equipamentos hidráulicos e pneumáticos. Se você está em busca de soluções eficientes para suas necessidades de aperto, fixação e controle de movimento, o Hytorcam é o lugar ideal para encontrar tudo o que precisa. Com um extenso catálogo de produtos de marcas renomadas e de alta qualidade, o site oferece uma ampla variedade de opções para atender às demandas industriais e comerciais.
          <br /><br />
            Além disso, o Hytorcam também fornece artigos, guias e tutoriais informativos, permitindo que os visitantes do site aprimorem seus conhecimentos sobre esses tipos de ferramentas e seus usos específicos. Com uma interface intuitiva e de fácil navegação, o Hytorcam torna o processo de pesquisa e seleção de ferramentas mais eficiente e simplificado. Seja você um profissional da indústria ou um entusiasta de ferramentas, o Hytorcam está aqui para ajudá-lo a encontrar as melhores soluções hidráulicas e pneumáticas para suas necessidades.</p>
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