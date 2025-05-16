import { Techs } from "@/Components/Techs"
import { Title } from "@/Components/Title"
import Image from "next/image"

import bergImg from '../../../../assets/cases/mockups/trademap.png'
import Link from "next/link"
import { Associate } from "@/Components/Associate"

export default function Sistema() {

  return (
    <div className="site">
      <Title text="Trademap" />
      <div className="box-site">
        <div className="about">
          <h4>About project</h4>
          <p>A plataforma TradeMap é um hub abrangente de investimentos que oferece uma ampla gama de recursos e informações para investidores. Com uma interface intuitiva e amigável, a plataforma permite acesso a dados em tempo real sobre ações, fundos, renda fixa, criptomoedas e outros ativos financeiros.</p>
          <p>Além disso, o TradeMap fornece ferramentas avançadas de análise, gráficos interativos e notícias atualizadas, permitindo que os usuários tomem decisões informadas e acompanhem o desempenho de seus investimentos. Com a capacidade de personalização, a plataforma se adapta às necessidades e estratégias individuais de cada investidor, proporcionando uma experiência completa e satisfatória no mundo dos investimentos.</p>
          <h4>Minha atuação</h4>
          <p>Desenvolvedor Front End</p>
          <h4>Technologies Used</h4>
          <Techs html css angular js git />
          <Associate v/>
        </div>
        <div className="mockup">
          <Image src={bergImg} alt="" />
        </div>
      </div>
      <Link href="/cases" className="go-back bg-red-150 text-white-100 w-[100px] h-[50px] hover:bg-red-50 flex items-center justify-center" >Go back</Link>
    </div>
  )
}