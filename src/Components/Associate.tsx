import Link from "next/link";

export function Associate(props: any){
  return(
    <p>Associado a: {' '}
      {props.d && 
      <Link href="https://www.driveonauto.com/" target="_blank" rel="noopener noreferrer" className="underline">DriveOn</Link>
      } 
      {props.c && 
      <Link href="https://www.casadossites.com/" target="_blank" rel="noopener noreferrer" className="underline">Casa dos Sites</Link>
      } 
      {props.v && 
      <Link href="https://www.valemobi.com.br/" target="_blank" rel="noopener noreferrer" className="underline">Valemobi</Link>
      } 
      {props.x && 
      <Link href="https://www.x-apps.com.br/" target="_blank" rel="noopener noreferrer" className="underline">X-Apps</Link>
      }
      {props.b && 
      <Link href="https://btracer.com.br/" target="_blank" rel="noopener noreferrer" className="underline">Btracer</Link>
      }</p>
  )
}