import Image from "next/image"

import meImg from '../assets/me.jpg'

export function Me() {
  return (
    <div className="me">
      <div className="me-box">
        <div className="me-text">
          <h4 className="text-blue-50 font-bold text-[35px] mb-5">Quem é gutemberg?</h4>
          <p className="text-white-100 text-[20px] mb-3">Meu nome é Gutemberg do Nascimento Cruz e sou um desenvolvedor web autodidata que atua no mercado de TI desde 2018. Meu objetivo é ajudar empresas a alcançarem o melhor engajamento nos mecanismos de busca, proporcionando a melhor experiência navegável para o usuário final e uma interface clean.</p>
          <p className="text-white-100 text-[20px] mb-3">Ao longo da minha carreira, tive a oportunidade de participar de diversas maratonas de tecnologias, conhecidas como hackathons, e tive a felicidade de conquistar a vitória em duas ocasiões. Essas experiências me proporcionaram valiosas mentorias e insights no mundo dos negócios.</p>
          <p className="text-white-100 text-[20px]">Tenho uma paixão por aprender novas habilidades, mesmo que eu não possa me aprofundar e me especializar em tudo. No entanto, mantenho minha curiosidade e dedicação para entender como as coisas funcionam.
            Quanto à minha comunicação, sou equilibrado, sendo silencioso e focado quando necessário, e dinâmico e comunicativo quando a situação exige.</p>
        </div>
        <div className="me-img">
          <Image src={meImg} alt="" />
        </div>
      </div>
    </div>
  )
}