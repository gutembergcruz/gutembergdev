import Image from "next/image";
import { Title } from "./Title";

import bioexatavetImg from "../assets/cases/previa/bioexatavet.jpg";
import captImg from "../assets/cases/previa/capt.jpg";
import checklistImg from "../assets/cases/previa/checklist.jpg";
import complementoImg from "../assets/cases/previa/complemento.jpg";
import fhormulaImg from "../assets/cases/previa/fhormula.jpg";
import grandsonImg from "../assets/cases/previa/grandson.jpg";
import h2oImg from "../assets/cases/previa/h2o.png";
import hbImg from "../assets/cases/previa/hb.jpg";
import hytorcImg from "../assets/cases/previa/hytorc.jpg";
import inkImg from "../assets/cases/previa/ink.jpg";
import inteligenteImg from "../assets/cases/previa/inteligente.jpg";
import intraempreendaImg from "../assets/cases/previa/intraempreenda.jpg";
import medeirosImg from "../assets/cases/previa/medeiros.jpg";
import modernaImg from "../assets/cases/previa/moderna.jpg";
import norteshopImg from "../assets/cases/previa/norteshop.jpg";
import nossarifaImg from "../assets/cases/previa/nossarifa.jpg";
import nyataImg from "../assets/cases/previa/nyata.jpg";
import nypagImg from "../assets/cases/previa/nypag.jpg";
import portalatualizadoImg from "../assets/cases/previa/portalatualizado.jpg";
import souzaImg from "../assets/cases/previa/souza.jpg";
import uniprintImg from "../assets/cases/previa/uniprint.jpg";

import Link from "next/link";

export function Highlight() {
  return (
    <div className="cases bg-dk-100" style={{"paddingBottom": "100px"}}>
      <Title text="Some cases" />
      <div className="cases-box grid gap-5 grid-cols-4">
        <Link href="cases/bioexatavet">
          <Image src={bioexatavetImg} alt="" />
          <p>Learn More</p>
        </Link>
        <Link href="cases/h2o">
          <Image src={h2oImg} alt="" />
          <p>Learn More</p>
        </Link>
        <Link href="cases/hb">
          <Image src={hbImg} alt="" />
          <p>Learn More</p>
        </Link>
        <Link href="cases/moderna">
          <Image src={modernaImg} alt="" />
          <p>Learn More</p>
        </Link>
        <Link href="cases/portalatualizado">
          <Image src={portalatualizadoImg} alt="" />
          <p>Learn More</p>
        </Link>
        <Link href="cases/hytorc">
          <Image src={hytorcImg} alt="" />
          <p>Learn More</p>
        </Link>
        <Link href="cases/uniprint">
          <Image src={uniprintImg} alt="" />
          <p>Learn More</p>
        </Link>
        <Link href="cases/souza">
          <Image src={souzaImg} alt="" />
          <p>Learn More</p>
        </Link>
        <Link href="cases/nypag">
          <Image src={nypagImg} alt="" />
          <p>Learn More</p>
        </Link>
        <Link href="cases/nyata">
          <Image src={nyataImg} alt="" />
          <p>Learn More</p>
        </Link>
        <Link href="cases/nossarifa">
          <Image src={nossarifaImg} alt="" />
          <p>Learn More</p>
        </Link>
        <Link href="cases/norteshop">
          <Image src={norteshopImg} alt="" />
          <p>Learn More</p>
        </Link>
        <Link href="cases/medeiros">
          <Image src={medeirosImg} alt="" />
          <p>Learn More</p>
        </Link>
        <Link href="cases/inteligente">
          <Image src={inteligenteImg} alt="" />
          <p>Learn More</p>
        </Link>
        <Link href="cases/ink">
          <Image src={inkImg} alt="" />
          <p>Learn More</p>
        </Link>
        <Link href="cases/grandson">
          <Image src={grandsonImg} alt="" />
          <p>Learn More</p>
        </Link>
        <Link href="cases/complemento">
          <Image src={complementoImg} alt="" />
          <p>Learn More</p>
        </Link>
        <Link href="cases/checklist">
          <Image src={checklistImg} alt="" />
          <p>Learn More</p>
        </Link>
        <Link href="cases/capt">
          <Image src={captImg} alt="" />
          <p>Learn More</p>
        </Link>
        <Link href="cases/intraempreenda">
          <Image src={intraempreendaImg} alt="" />
          <p>Learn More</p>
        </Link>
      </div>
    </div>
  );
}
