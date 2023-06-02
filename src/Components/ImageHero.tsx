import Image from "next/image";
import superHero from '../assets/super.svg'
import superHeroM from '../assets/superHeroMobile.svg'
export function ImageHero() {
  return (
    <div className="super-hero">
      <Image className="imageSuperM" src={superHeroM} alt="" />
      <Image className="imageSuper" src={superHero} alt="" />
    </div>
  )
}