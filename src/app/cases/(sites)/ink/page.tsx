import { Techs } from "@/Components/Techs"
import { Title } from "@/Components/Title"
import Image from "next/image"

import bergImg from '../../../../assets/cases/full/ink.jpg'
import Link from "next/link"
import { Associate } from "@/Components/Associate"

export default function Site() {

  return (
    <div className="site">
      <Title text="Ink Quality" />
      <div className="box-site">
        <div className="about">
          <h4>Sobre o projeto</h4>
          <p>O InkQuality é um site especializado em fornecer informações e análises sobre cartuchos de tinta e toners de impressoras. Com o objetivo de auxiliar os usuários na escolha de produtos de qualidade e compatíveis com suas impressoras, o InkQuality oferece avaliações detalhadas e comparativos entre diferentes marcas e modelos.
<br /><br />
No site, os visitantes encontrarão dicas úteis sobre como escolher os cartuchos de tinta ou toners mais adequados para suas necessidades, além de informações sobre os cuidados e manutenção corretos para garantir uma impressão de alta qualidade. O InkQuality busca ser um recurso confiável para aqueles que desejam tomar decisões informadas sobre a compra de suprimentos para impressoras, oferecendo avaliações imparciais e orientações úteis.</p>
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