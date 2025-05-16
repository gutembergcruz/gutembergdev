import Link from "next/link";
import Image from "next/image"

interface TypeSite {
  site: string
}

import bioexatavet from '../assets/cases/previa/bioexatavet.jpeg'

export function PrevSites(props: TypeSite) {
  return (
    <Link href="cases/site">
      <Image src={props.site} alt="Previa do Site" />
      <p>Learn more</p>
    </Link>
  )
}