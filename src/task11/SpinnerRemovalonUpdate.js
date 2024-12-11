import { Component } from "react";
import axios from "axios";
import Productcard from "../task11/ProductCard";
import Loader from "./Spinner";

class UpdatedState extends Component {
  constructor() {
    super();
    this.state = { count: 0, Products: null };
  }

  shouldComponentUpdate() {
    if (this.state.count >= 10) {
      return false;
    } else {
      return true;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
    axios
      .get(`https://fakestoreapi.com/products/${this.state.count}`)
      .then((res) => {
        this.setState({ Products: res.data });
      });
    }
  }
  Increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  Decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <>
      <div style={{textAlign:"center"}}>
        <h1>{this.state.count}</h1>
        <button onClick={this.Increment}>Increase</button>
        <button onClick={this.Decrement} disabled={this.state.count < 1}>
          Decrease
        </button>
{this.state.Products ? (
    <Productcard
      title={this.state.Products.title}
      desc={this.state.Products.description}
      img={this.state.Products.image}
      categ={this.state.Products.category}
    />
  ) : (
    <Loader />
  )}
     </div>
     <br></br>
     <h1>Task 11 Completed</h1>
     <hr style={{ border: "none", borderTop: "2px dotted #333", margin: "20px 0" }} />
     </>
    );
  }
}

export default UpdatedState;