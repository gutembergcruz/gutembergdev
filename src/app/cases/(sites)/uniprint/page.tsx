import { Techs } from "@/Components/Techs"
import { Title } from "@/Components/Title"
import Image from "next/image"

import bergImg from '../../../../assets/cases/full/uniprint.jpg'
import Link from "next/link"
import { Associate } from "@/Components/Associate"

export default function Site() {

  return (
    <div className="site">
      <Title text="Uniprint" />
      <div className="box-site">
        <div className="about">
          <h4>Sobre o projeto</h4>
          <p>
O Uniprint é um site especializado em soluções de impressão personalizadas e de alta qualidade. Com uma variedade de opções, desde cartões de visita até banners, o Uniprint atende às necessidades de impressão comerciais e pessoais. Com ferramentas de design e um processo de pedido simples, o site garante uma experiência de compra conveniente e entrega rápida dos produtos impressos.
<br /><br />
O Uniprint se destaca por seu compromisso com a satisfação do cliente, garantindo que cada projeto seja tratado com cuidado e precisão. Se você procura serviços confiáveis ​​de impressão com resultados excepcionais, o Uniprint é a escolha certa. Desfrute de produtos impressos de qualidade que atendem às suas expectativas com o Uniprint.</p>
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