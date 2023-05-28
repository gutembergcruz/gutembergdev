import Image from "next/image"

import meImg from '../assets/me.jpg'

export function Me() {
  return (
    <div className="me">
      <div className="me-box">
        <div className="me-text">
          <h4 className="text-blue-50 font-bold text-[35px] mb-5">Quem é gutemberg?</h4>
          <p className="text-white-100 text-[20px] mb-3">
          Nascido em Manaus-AM, Gutemberg iniciou sua carreira como Desenvolvedor Front End há 5 anos. Ao longo do tempo, ele refinou suas habilidades e expandiu seu conhecimento como UX/UI Designer e FullStack. Sua trajetória profissional inclui contribuições em projetos para empresas renomadas como Mercedes Benz, Mondelez, Tesla, Itau, Samsung, Nestle, entre outras.
          </p>
          <p className="text-white-100 text-[20px] mb-3">
          Gutemberg sempre buscou desafios e encontrou nos Hackathons o ambiente perfeito para testar suas habilidades. Ele participou de inúmeros eventos desse tipo e, com dedicação e talento, conquistou algumas vitórias notáveis.
          </p>
          <p className="text-white-100 text-[20px]">
          Uma das maiores realizações de sua carreira foi a vitória em seu primeiro hackathon, que lhe rendeu valiosas mentorias presenciais com profissionais de tecnologia no polo tecnológico de Tel Aviv, Israel. Essa experiência proporcionou a Gutemberg uma visão de negócio ampliada, impulsionando-o a buscar sempre a escalabilidade em seus projetos.
          </p>
        </div>
        <div className="me-img">
          <Image src={meImg} alt="" />
        </div>
      </div>
    </div>
  )
}