export default function Input(props){
  const {type='text', placeholder, name} = props;
  return(
    <input className="ui-textfield" type={type} name={props.name} placeholder={props.placeholder}/>
    
  );
};



// 1.Should render an <input /> element.
  // 2.Should set the type to type="text" by default (when         the type prop has not been specified).
  // 3.It should also let the user change the type, so <Input      type="email" /> should override the default type and set     it to type="email".
  // 4.It should also accept the placeholder and name              attributes.
  // 5.It should set the class to ui-textfield
