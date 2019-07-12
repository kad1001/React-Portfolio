import React from "react";
// import Jumbotron from 'react-bootstrap/Jumbotron';

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
                <li key={item.name}>
                  {" "}
                  <a href={item.html_url}>{item.name}</a>
                  <p>{item.description}</p>
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
