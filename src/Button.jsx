export default function Button(props){
  const {children, type, disabled} = props;
  return(
    <button className="ui-button" type={props.type} disabled={props.disabled}>{props.children}</button>
    
  );
};



// 1.Should generate a <button> element with the text provided.
// 2.It should also set the type and disabled attributes as they are received from the props.
// 3.It should set the class to ui-button
