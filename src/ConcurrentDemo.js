import * as React from 'react';

class ConcurrentDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.buttonRef = React.createRef(null);
  }

  componentDidMount() {
    const button = this.buttonRef.current;
    setTimeout(() => this.setState({ count: 1 }), 500);
    setTimeout(() => button.click(), 500);
  }

  handleButtonClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 2 }));
  }

  render() {
    return (
        <div>
          <button ref={this.buttonRef} onClick={this.handleButtonClick}>增加2</button>
          <div>
            {Array.from(new Array(200)).map((v, index) => (
                <span key={index}>{this.state.count}</span>
            ))}
          </div>
        </div>
    );
  }
}

export default ConcurrentDemo;
