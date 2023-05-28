import { Techs } from "@/Components/Techs"
import { Title } from "@/Components/Title"
import Image from "next/image"

import bergImg from '../../../../assets/cases/full/norteshop.jpg'
import Link from "next/link"
import { Associate } from "@/Components/Associate"

export default function Site() {

  return (
    <div className="site">
      <Title text="Norteshop" />
      <div className="box-site">
        <div className="about">
          <h4>Sobre o projeto</h4>
          <p>O Norteshop é um site de compras online que oferece uma ampla variedade de produtos para atender às necessidades dos clientes. Com um catálogo diversificado, o Norteshop proporciona uma experiência de compra conveniente e acessível, permitindo que os clientes encontrem facilmente os produtos desejados.
<br /><br />
No Norteshop, você pode encontrar desde eletrônicos e eletrodomésticos até moda, beleza, artigos esportivos e muito mais. O site é conhecido por sua seleção cuidadosa de produtos de qualidade, provenientes de marcas renomadas e confiáveis.</p>
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