import Image from "next/image"

import mercedesImg from '../assets/cases/logos/mercedes.jpg'
import arkaImg from '../assets/cases/logos/arka.jpg'
import insideImg from '../assets/cases/logos/inside.jpg'
import elafazImg from '../assets/cases/logos/elafaz.jpg'
import mondelezImg from '../assets/cases/logos/mondelez.jpg'
import nomadImg from '../assets/cases/logos/nomad.jpg'
import trademapImg from '../assets/cases/logos/trademap.jpg'
import teslaImg from '../assets/cases/logos/tesla.jpg'
import samsungImg from '../assets/cases/logos/samsung.jpg'

import bioexatavetImg from '../assets/cases/previa/bioexatavet.jpg'
import captImg from '../assets/cases/previa/capt.jpg'
import checklistImg from '../assets/cases/previa/checklist.jpg'
import complementoImg from '../assets/cases/previa/complemento.jpg'
import fhormulaImg from '../assets/cases/previa/fhormula.jpg'
import grandsonImg from '../assets/cases/previa/grandson.jpg'
import h2oImg from '../assets/cases/previa/h2o.png'
import hbImg from '../assets/cases/previa/hb.jpg'
import hytorcImg from '../assets/cases/previa/hytorc.jpg'
import inkImg from '../assets/cases/previa/ink.jpg'
import inteligenteImg from '../assets/cases/previa/inteligente.jpg'
import intraempreendaImg from '../assets/cases/previa/intraempreenda.jpg'
import medeirosImg from '../assets/cases/previa/medeiros.jpg'
import modernaImg from '../assets/cases/previa/moderna.jpg'
import norteshopImg from '../assets/cases/previa/norteshop.jpg'
import nossarifaImg from '../assets/cases/previa/nossarifa.jpg'
import nyataImg from '../assets/cases/previa/nyata.jpg'
import nypagImg from '../assets/cases/previa/nypag.jpg'
import portalatualizadoImg from '../assets/cases/previa/portalatualizado.jpg'
import souzaImg from '../assets/cases/previa/souza.jpg'
import uniprintImg from '../assets/cases/previa/uniprint.jpg'

import { Title } from "./Title"
import Link from "next/link"

export function Cases() {
  return (
    <>
      <div className="cases">
        <Title text="Sistemas internos" />
        <div className="cases-box grid gap-5 grid-cols-5">
          <Link href="cases/mercedes">
            <Image src={mercedesImg} alt="Logo Mercedes Benz" />
            <p>Saber mais</p>
          </Link>
          <Link href="cases/elafaz">
            <Image src={elafazImg} alt="Logo Ela Faz Tecnologia" />
            <p>Saber mais</p>
          </Link>
          <Link href="cases/tesla">
            <Image src={teslaImg} alt="Logo Tesla" />
            <p>Saber mais</p>
          </Link>
          <Link href="cases/inside">
            <Image src={insideImg} alt="Logo Inside" />
            <p>Saber mais</p>
          </Link>
          <Link href="cases/arka">
            <Image src={arkaImg} alt="Logo Arka Digital" />
            <p>Saber mais</p>
          </Link>
          <Link href="cases/samsung">
            <Image src={samsungImg} alt="Logo Samsung" />
            <p>Saber mais</p>
          </Link>
          <Link href="cases/mondelez">
            <Image src={mondelezImg} alt="Logo Mondelez Internacional" />
            <p>Saber mais</p>
          </Link>
          <Link href="cases/trademap">
            <Image src={trademapImg} alt="Logo Trademap" />
            <p>Saber mais</p>
          </Link>
          <Link href="cases/nomad">
            <Image src={nomadImg} alt="Logo Nomad" />
            <p>Saber mais</p>
          </Link>
        </div>
      </div>
      <div className="cases bg-dk-100">
        <Title text="Sites comerciais" />
        <div className="cases-box grid gap-5 grid-cols-4">
          <Link href="cases/bioexatavet">
            <Image src={bioexatavetImg} alt="" />
            <p>Saber mais</p>
          </Link>
          <Link href="cases/h2o">
            <Image src={h2oImg} alt="" />
            <p>Saber mais</p>
          </Link>
          <Link href="cases/hb">
            <Image src={hbImg} alt="" />
            <p>Saber mais</p>
          </Link>
          <Link href="cases/moderna">
            <Image src={modernaImg} alt="" />
            <p>Saber mais</p>
          </Link>
          <Link href="cases/portalatualizado">
            <Image src={portalatualizadoImg} alt="" />
            <p>Saber mais</p>
          </Link>
          <Link href="cases/hytorc">
            <Image src={hytorcImg} alt="" />
            <p>Saber mais</p>
          </Link>
          <Link href="cases/uniprint">
            <Image src={uniprintImg} alt="" />
            <p>Saber mais</p>
          </Link>
          <Link href="cases/souza">
            <Image src={souzaImg} alt="" />
            <p>Saber mais</p>
          </Link>
          <Link href="cases/nypag">
            <Image src={nypagImg} alt="" />
            <p>Saber mais</p>
          </Link>
          <Link href="cases/nyata">
            <Image src={nyataImg} alt="" />
            <p>Saber mais</p>
          </Link>
          <Link href="cases/nossarifa">
            <Image src={nossarifaImg} alt="" />
            <p>Saber mais</p>
          </Link>
          <Link href="cases/norteshop">
            <Image src={norteshopImg} alt="" />
            <p>Saber mais</p>
          </Link>
          <Link href="cases/medeiros">
            <Image src={medeirosImg} alt="" />
            <p>Saber mais</p>
          </Link>
          <Link href="cases/inteligente">
            <Image src={inteligenteImg} alt="" />
            <p>Saber mais</p>
          </Link>
          <Link href="cases/ink">
            <Image src={inkImg} alt="" />
            <p>Saber mais</p>
          </Link>
          <Link href="cases/grandson">
            <Image src={grandsonImg} alt="" />
            <p>Saber mais</p>
          </Link>
          <Link href="cases/complemento">
            <Image src={complementoImg} alt="" />
            <p>Saber mais</p>
          </Link>
          <Link href="cases/checklist">
            <Image src={checklistImg} alt="" />
            <p>Saber mais</p>
          </Link>
          <Link href="cases/capt">
            <Image src={captImg} alt="" />
            <p>Saber mais</p>
          </Link>
          <Link href="cases/intraempreenda">
            <Image src={intraempreendaImg} alt="" />
            <p>Saber mais</p>
          </Link>
          <Link href="cases/fhormula">
            <Image src={fhormulaImg} alt="" />
            <p>Saber mais</p>
          </Link>
        </div>
      </div>
    </>
  )
}

export function SelectedCase() {
  return (
    <div className="selected-case">

    </div>
  )
}