import { Techs } from "@/Components/Techs"
import { Title } from "@/Components/Title"
import Image from "next/image"

import bergImg from '../../../../assets/cases/full/grandson.jpg'
import Link from "next/link"
import { Associate } from "@/Components/Associate"

export default function Site() {

  return (
    <div className="site">
      <Title text="Grandson Violões" />
      <div className="box-site">
        <div className="about">
          <h4>Sobre o projeto</h4>
          <p>A Violão Grandson é uma empresa especializada na fabricação e venda do inovador Violão Amplifier Portable. Combinando a qualidade sonora de um violão de alta performance com a praticidade de um amplificador integrado, o Violão Amplifier Portable da Violão Grandson oferece uma experiência única aos músicos.
            <br /><br />
            O Violão Amplifier Portable da Violão Grandson é projetado para oferecer um som potente e claro, proporcionando aos músicos a liberdade de tocar em qualquer lugar, sem a necessidade de equipamentos adicionais. Com recursos avançados, como controles de volume e equalização, conexões para fones de ouvido e saídas de áudio, o Violão Amplifier Portable da Violão Grandson é perfeito para performances ao vivo, ensaios e práticas individuais.</p>
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