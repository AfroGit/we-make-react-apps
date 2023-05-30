export default function Container(props){
  const {children} = props;
  console.log(props);
  return(
    <div className="ui-container">{props.children}</div>
  );
};


// Should render a <div> element that wraps everything inside it.
// Should have the class ui-container

// This is an example of what wrapping means <Container><p>content</p></Container>. This would end up rendering: <div class="ui-container"><p>content</p></div>