interface MyText {
  text: string
}

export function Title(props: MyText){
  return(
    <div className="super-title">
      <span className="text-blue-100">{props.text}</span>
      <h3 className="text-white-100">
        {props.text}
      </h3>
    </div>
  )
}