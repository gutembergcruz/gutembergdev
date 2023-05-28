import { Techs } from "@/Components/Techs"
import { Title } from "@/Components/Title"
import Image from "next/image"

import bergImg from '../../../../assets/cases/full/capt.jpg'
import Link from "next/link"
import { Associate } from "@/Components/Associate"

export default function Site() {

  return (
    <div className="site">
      <Title text="Capt Peacock" />
      <div className="box-site">
        <div className="about">
          <h4>Sobre o projeto</h4>
          <p>O site Capt Peacock é uma referência no segmento de pesca esportiva na região amazônica. Com um foco exclusivo na pesca de tucunaré, o site oferece aos entusiastas da pesca uma experiência única e emocionante nas águas da Amazônia.
<br /> <br />
No site do Capt Peacock, os visitantes encontrarão informações detalhadas sobre os pacotes de pesca disponíveis, que incluem hospedagem, alimentação e guias especializados. A empresa se destaca pelo profissionalismo e conhecimento da região, proporcionando aos pescadores uma experiência de pesca de classe mundial.
<br /> <br />
Além disso, o site do Capt Peacock oferece dicas de pesca, relatos de viagens e galerias de fotos que retratam as aventuras vividas pelos pescadores em meio à exuberante natureza amazônica. É uma fonte de inspiração para os amantes da pesca esportiva que desejam explorar as águas da Amazônia e buscar a emoção de capturar um dos mais cobiçados peixes da região.</p>
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