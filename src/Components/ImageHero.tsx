import Image from "next/image";
import superHero from '../assets/super.svg'
export function ImageHero() {
  return (
    <div className="super-hero">
      <Image src={superHero} alt="" />
    </div>
  )
}