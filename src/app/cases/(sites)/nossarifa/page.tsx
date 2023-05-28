import { Techs } from "@/Components/Techs"
import { Title } from "@/Components/Title"
import Image from "next/image"

import bergImg from '../../../../assets/cases/full/nossarifa.jpg'
import Link from "next/link"
import { Associate } from "@/Components/Associate"

export default function Site() {

  return (
    <div className="site">
      <Title text="Nossa Rifa" />
      <div className="box-site">
        <div className="about">
          <h4>Sobre o projeto</h4>
          <p>O Nossa Rifa é um site especializado em realizar rifas online, proporcionando uma forma divertida e emocionante de participar de sorteios e concorrer a prêmios incríveis. Com o Nossa Rifa, você pode explorar uma variedade de rifas disponíveis e adquirir bilhetes de forma fácil e segura.
<br /><br />
O site oferece uma plataforma intuitiva, onde você pode encontrar informações detalhadas sobre cada rifa, incluindo descrição do prêmio, número de bilhetes disponíveis e data do sorteio. Além disso, o Nossa Rifa disponibiliza meios de pagamento seguros e opções de participação para atender às suas preferências.
</p>
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