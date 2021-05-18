import React from "react";
// import Jumbotron from 'react-bootstrap/Jumbotron';

// import {Link} from 'react-router-dom';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/kad1001/repos")
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },

        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

    getIcon(item) {
      const javascriptIcon = <i class="fab fa-js" a="Javascript"></i>
      const htmlIcon = <i class="fab fa-html5"></i>
      const cssIcon = <i class="fab fa-css3-alt"></i>
      if (item.language === "JavaScript") {
        return javascriptIcon
      } else if (item.language === "HTML") {
        return htmlIcon
      } else if (item.language === "CSS") {
        return cssIcon
      }
    }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message} </div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <div>
            <ul>
              {items.map(item => (
                item.fork ? '' :
                <li key={item.name}>
                  
                  <h5>{item.name} {this.getIcon(item)}</h5>
                  <p>{item.description}</p>
                  <a href={item.html_url}>Repository</a>
                  <br></br>
                  {item.homepage ? <a href={item.homepage}>Demo</a> : '' }
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
    }
  }
}

export default List;
