import {Component} from "react"
import axios from "axios"
import Productcard from "../task12/ProductCard"
import Loader from "./Loader"

class UpdatedStateTask extends Component{
    constructor(){
        super()
        this.state={count:0,Products:null}
    }

    ChangeState=(a)=>{
    this.setState({count:a})
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
        axios.get(`https://fakestoreapi.com/products/${this.state.count}`)
        .then((res)=>{
          this.setState({Products:res.data})
        })
        .catch((error) => console.error("Error fetching product:", error));
              
    }
    }



    render(){
        return(
            <>
            <div>
            <button onClick={()=>this.ChangeState(0)}>0</button>
            <button onClick={()=>this.ChangeState(1)}>1</button>
            <button onClick={()=>this.ChangeState(2)}>2</button>
            <button onClick={()=>this.ChangeState(3)}>3</button>
            <button onClick={()=>this.ChangeState(4)}>4</button>
            <button onClick={()=>this.ChangeState(5)}>5</button>
            <button onClick={()=>this.ChangeState(6)}>6</button>
            <button onClick={()=>this.ChangeState(7)}>7</button>
            <button onClick={()=>this.ChangeState(8)}>8</button>
            <button onClick={()=>this.ChangeState(9)}>9</button>
            <button onClick={()=>this.ChangeState(10)}>10</button>
            <h1>{this.state.count}</h1>

               <div style={{ display: "flex", flexWrap: "wrap" }}>
               {!this.state.Products ? (
                     <Loader/>
               ) : (
                     
                            <Productcard
                                title={this.state.Products.title}
                                desc={this.state.Products.description}
                                img={this.state.Products.image}
                                categ={this.state.Products.category}
                            />
                        
                )}
            </div>
            
            </div>
            <br></br>
            <h1>Task 12 Completed</h1>
            <hr style={{ border: "none", borderTop: "2px dotted #333", margin: "20px 0" }} />
            </>
        )
    }

}


export default UpdatedStateTask