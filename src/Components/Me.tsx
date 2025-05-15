import Image from "next/image"

import meImg from '../assets/me.jpg'

export function Me() {
  return (
    <div className="me">
      <div className="me-box">
        <div className="me-text">
          <h4 className="text-blue-50 font-bold text-[35px] mb-5">Who is Gutemberg?</h4>
          <p className="text-white-100 text-[20px] mb-3">
          Born in Manaus, Brazil, Gutemberg began his career as a Front-End Developer seven years ago. Over time, he refined his skills and expanded his expertise to include UX/UI Design and Full-Stack Development. His professional journey includes contributions to projects for renowned companies such as Mercedes-Benz, Mondelez, Tesla, Itaú, Samsung, Nestlé, among others.
          </p>
          <p className="text-white-100 text-[20px] mb-3">
          Gutemberg has always sought out challenges and found the perfect environment to test his skills in hackathons. He has participated in numerous events of this kind and, through dedication and talent, earned several notable wins.
          </p>
          <p className="text-white-100 text-[20px]">
          One of the biggest achievements of his career was winning his very first hackathon, which earned him valuable in-person mentorships with tech professionals in the innovation hub of Tel Aviv, Israel. This experience gave Gutemberg a broader business perspective and sparked his drive to always pursue scalability in his projects.
          </p>
        </div>
        <div className="me-img">
          <Image src={meImg} alt="" />
        </div>
      </div>
    </div>
  )
}