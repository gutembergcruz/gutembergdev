import { Techs } from "@/Components/Techs"
import { Title } from "@/Components/Title"
import Image from "next/image"

import bergImg from '../../../../assets/cases/full/bioexatavet.jpeg'
import Link from "next/link"
import { Associate } from "@/Components/Associate"

export default function Site() {

  return (
    <div className="site">
      <Title text="BioexataVet" />
      <div className="box-site">
        <div className="about">
          <h4>Sobre o projeto</h4>
          <p>A BioexataVet é uma renomada farmácia de manipulação de medicamentos para animais de estimação. Através do seu site, é possível encontrar uma ampla variedade de produtos naturais que visam aprimorar a saúde do seu querido companheiro. Além disso, caso necessite de uma medicação específica e exclusiva, você pode entrar em contato diretamente com eles. Com a BioexataVet, você tem acesso a soluções personalizadas e de alta qualidade para cuidar da saúde do seu animalzinho de estimação.</p>
          <p>Além disso, o site da BioexataVet oferece um sistema de blog aberto, no qual veterinários de diferentes níveis de experiência têm a oportunidade de se cadastrar e compartilhar suas dicas e informações gerais sobre o mundo veterinário. Essa plataforma é um espaço acolhedor e inclusivo, onde profissionais iniciantes e experientes podem contribuir com seu conhecimento e experiência. Acreditamos que cada veterinário tem insights valiosos a oferecer, independentemente do seu tempo de atuação. Ao se cadastrar no nosso sistema de blog, você terá a chance de compartilhar suas perspectivas e ajudar a enriquecer o conhecimento coletivo sobre cuidados com animais de estimação. Nosso objetivo é fornecer um ambiente colaborativo, onde todos os veterinários se sintam incentivados a compartilhar seu conhecimento e aprendizado, proporcionando um espaço diversificado e inclusivo para o crescimento profissional.</p>
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