import { Techs } from "@/Components/Techs"
import { Title } from "@/Components/Title"
import Image from "next/image"

import bergImg from '../../../../assets/cases/mockups/arka.png'
import Link from "next/link"
import { Associate } from "@/Components/Associate"

export default function Sistema() {

  return (
    <div className="site">
      <Title text="Arka Digital" />
      <div className="box-site">
        <div className="about">
          <h4>About project</h4>
          <p>O Portal Educacional é um abrangente sistema de gestão projetado para facilitar a comunicação e a colaboração entre escolas, professores e alunos. Essa plataforma oferece aos professores a possibilidade de criar e organizar planos de aulas de forma eficiente, garantindo um processo de ensino estruturado. Além disso, os alunos podem aproveitar o acesso a uma ampla gama de materiais educativos que complementam e enriquecem seu aprendizado. Essa ferramenta inovadora promove um ambiente virtual interativo, estimulando o engajamento e o desenvolvimento acadêmico de maneira intuitiva e acessível.</p>
          <h4>Minha atuação</h4>
          <p>Desenvolvedor Front End</p>
          <h4>Technologies Used</h4>
          <Techs html css react ts git />
          <Associate d/>
        </div>
        <div className="mockup">
          <Image src={bergImg} alt="" />
        </div>
      </div>
      <Link href="/cases" className="go-back bg-red-150 text-white-100 w-[100px] h-[50px] hover:bg-red-50 flex items-center justify-center" >Go back</Link>
    </div>
  )
}