import { Footer } from "./Footer";
import { Nav } from "./Nav";

export function Box(props: any){
  return(
    <div className="box">
      <Nav menu={props.menu}/>
      {props.children}
      <Footer />
    </div>
  )
}