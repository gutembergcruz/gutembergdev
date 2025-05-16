import { Techs } from "@/Components/Techs"
import { Title } from "@/Components/Title"
import Image from "next/image"

import mockupImg from '../../../../assets/cases/mockups/tesla.png';
import Link from "next/link"
import { Associate } from "@/Components/Associate";

export default function Sistema() {

  return (
    <div className="site">
      <Title text="Tesla" />
      <div className="box-site">
        <div className="about">
          <h4>About project</h4>
          <p>Foi desenvolvido um projeto inovador que utiliza os sensores dos carros da Tesla para detectar e avaliar o comportamento do condutor, gerando um score com base na qualidade de direção. Com base nesses dados, o projeto busca monetizar o condutor por meio de criptomoedas.</p>
          <p>Esse projeto tem como objetivo incentivar e recompensar os motoristas que adotam práticas seguras e responsáveis ao volante. Ao utilizar os sensores dos carros da Tesla, é possível analisar parâmetros como velocidade, frenagem suave, respeito às leis de trânsito e outras métricas relevantes.</p>
          <p>Através do sistema de pontuação gerado, os condutores podem acumular criptomoedas como recompensa por seu bom desempenho na direção. Essa abordagem inovadora visa promover a segurança viária e incentivar comportamentos que reduzam o risco de acidentes, ao mesmo tempo em que oferece uma oportunidade de recompensa financeira para os motoristas engajados em práticas de direção responsáveis.</p>
          <p>Com esse projeto, busca-se não apenas melhorar a segurança no trânsito, mas também fomentar uma cultura de direção mais consciente e recompensar os esforços individuais para um comportamento exemplar ao volante.</p>
          <h4>Minha atuação:</h4>
          <p>Desenvolvedor Front-End</p>
          <p>Desenvolvedor Mobile</p>
          <h4>Technologies Used</h4>
          <Techs html css react rn flutter ts />
          <Associate d/>
        </div>
        <div className="mockup">
          <Image src={mockupImg} alt="" />
        </div>
      </div>
      <Link href="/cases" className="go-back bg-red-150 text-white-100 w-[100px] h-[50px] hover:bg-red-50 flex items-center justify-center" >Go back</Link>
    </div>
  )
}