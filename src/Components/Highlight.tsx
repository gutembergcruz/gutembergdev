import Image from "next/image";
import { Title } from "./Title";

import caseMerImg from '../assets/cases/logos/mercedes.jpg';
import insideImg from '../assets/cases/logos/inside.jpg';
import elafazImg from '../assets/cases/logos/elafaz.jpg';
import teslaImg from '../assets/cases/logos/tesla.jpg';
import trademapImg from '../assets/cases/logos/trademap.jpg';
import nomadImg from '../assets/cases/logos/nomad.jpg';

import Link from "next/link";

export function Highlight() {
  return (
    <div className="highlight bg-dk-100">
      <Title text="Cases Destaques" />
      <div className="highlight-box">
        <Link href="/cases/mercedes">
          <Image src={caseMerImg} alt="Logo Mercedes Benz"/>
          <p>Saber mais</p>
        </Link>
        <Link href="/cases/nomad">
          <Image src={nomadImg} alt="Logo Nomad"/>
          <p>Saber mais</p>
        </Link>
        <Link href="/cases/elafaz">
          <Image src={elafazImg} alt="Logo Ela Faz"/>
          <p>Saber mais</p>
        </Link>
      </div>
      <div className="highlight-box">
        <Link href="/cases/trademap">
          <Image src={trademapImg} alt="Logo Trademap"/>
          <p>Saber mais</p>
        </Link>
        <Link href="/cases/tesla">
          <Image src={teslaImg} alt="Logo Tesla"/>
          <p>Saber mais</p>
        </Link>
        <Link href="/cases/inside">
          <Image src={insideImg} alt="Logo Inside"/>
          <p>Saber mais</p>
        </Link>
      </div>
      <Link href="/cases" className="btn-all bg-blue-100 hover:bg-blue-50">Ver todos</Link>
    </div>
  )
}