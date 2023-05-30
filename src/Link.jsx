export default function Link(props){
  const {children, href} = props;
  return(
    <a className="ui-link" href={props.href}>{children}</a>
    
  );
};



// Start by importing the Link component in the index.js and using it in the App component for the tests to pass
//     Should return an <a> element
//     That element should have the provided text.
//     It should also set the href attribute.
//     It should set the class to ui-link which you can find in the index.css

// For example: <Link href="https://react-tutorial.app">Shop online</Link> should render an <a href="https://react-tutorial.app" class="ui-link">Shop online</a> element.