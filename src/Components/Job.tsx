import Image from "next/image";
import { Title } from "./Title";

import losangoImg from '../assets/losango.png';

export function Job() {
  return (
    <div className="job bg-dk-100">
      <div className="job-box">
        <Title text="Meu trampo" />
        <Image className="losango-img" src={losangoImg} alt="" />
        <p className="text-white-100">
        Com uma sólida experiência de 5 anos no mercado de TI, meu principal objetivo é auxiliar <br /> <span>sua empresa</span> a alcançar um alto nível de engajamento nos <span>mecanismos de busca</span>, <br />proporcionando uma <span>experiência</span> de navegação otimizada para o usuário final e uma <br /> interface <span>limpa e intuitiva</span>.
      </p>
      </div>
      
    </div>
  )
}