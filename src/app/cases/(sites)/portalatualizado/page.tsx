import { Techs } from "@/Components/Techs"
import { Title } from "@/Components/Title"
import Image from "next/image"

import bergImg from '../../../../assets/cases/full/portalatualizado.jpg'
import Link from "next/link"
import { Associate } from "@/Components/Associate"

export default function Site() {

  return (
    <div className="site">
      <Title text="Portal Atualizado" />
      <div className="box-site">
        <div className="about">
          <h4>Sobre o projeto</h4>
          <p>O Portal Atualizado é uma plataforma online abrangente que mantém os usuários informados sobre as últimas notícias, tendências e acontecimentos relevantes em diversas áreas. Com uma equipe dedicada de redatores e especialistas em diferentes campos, o Portal Atualizado oferece uma ampla gama de conteúdo atualizado regularmente. Desde notícias internacionais e nacionais até artigos sobre tecnologia, entretenimento, saúde, esportes e muito mais, os usuários podem contar com o Portal Atualizado como uma fonte confiável e conveniente de informações. Além disso, a plataforma também disponibiliza recursos interativos, como fóruns de discussão e seções de comentários, permitindo que os usuários participem ativamente e compartilhem suas opiniões. Com o Portal Atualizado, você pode explorar um mundo de conhecimento e estar sempre atualizado com as últimas novidades, tudo em um único lugar acessível.</p>
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