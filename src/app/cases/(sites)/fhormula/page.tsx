import { Techs } from "@/Components/Techs"
import { Title } from "@/Components/Title"
import Image from "next/image"

import bergImg from '../../../../assets/cases/full/fhormula.jpg'
import Link from "next/link"
import { Associate } from "@/Components/Associate"

export default function Site() {

  return (
    <div className="site">
      <Title text="Fhormula" />
      <div className="box-site">
        <div className="about">
          <h4>Sobre o projeto</h4>
          <p>O Fhormula é um site de assinatura de box de livros que oferece uma experiência única para os amantes da leitura. Com o objetivo de proporcionar descobertas literárias emocionantes, o Fhormula envia todos os meses uma seleção cuidadosamente escolhida de livros diretamente para a porta dos assinantes.
            <br /><br />
            No site do Fhormula, os usuários podem escolher entre diferentes planos de assinatura, personalizando sua experiência de acordo com suas preferências de gênero literário. Cada box contém livros surpreendentes, incluindo títulos recentes, best-sellers e obras aclamadas pela crítica, garantindo uma diversidade de leituras para os assinantes explorarem.</p>
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