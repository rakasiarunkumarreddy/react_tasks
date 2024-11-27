import React, { Component } from "react";
import "./style3.css";

class Compo extends Component {
  render() {
    return (
      <div className="compo-container">
        <div className="compo-item">
          <h1>Poco</h1>
          <img
            alt="Poco"
            src="https://tinyurl.com/bdhhcytx"
          />
          <p>
            Poco Mobiles offers high-performance smartphones with a focus on
            value for money, delivering powerful specs, sleek design, and
            competitive pricing.
          </p>
        </div>
        <div className="compo-item">
          <h1>Redmi</h1>
          <img
            alt="Redmi"
            src="https://imgs.search.brave.com/hVT1QvfWaJTCgzhFQA-_oDbGKVijM-G2CQ17G71xXMQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9taXN0/b3JlLnBrL2Nkbi9z/aG9wL2ZpbGVzL3Bv/ZHVjdGltYWdlM18z/MDB4LmpwZz92PTE2/OTQ1MDk2NzE"
          />
          <p>
            Redmi Mobiles offers high-performance smartphones with a focus on
            value for money, delivering powerful specs, sleek design, and
            competitive pricing.
          </p>
        </div>
        <div className="compo-item">
          <h1>Apple</h1>
          <img
            alt="Apple"
            src="https://imgs.search.brave.com/9JMmHkhacV4tJ52ZuDNS9FX35AETJiH_hFo9n_8budY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zaWx2ZXItaXBo/b25lLXdpdGgtcGlj/dHVyZS1waG9uZS1p/dF8xMDIyMjEyLTE4/Nzc2LmpwZz9zaXpl/PTYyNiZleHQ9anBn"
          />
          <p>
            Apple Mobiles offers high-performance smartphones with a focus on
            value for money, delivering powerful specs, sleek design, and
            competitive pricing.
          </p>
        </div>
        <div className="compo-item">
          <h1>IQOO</h1>
          <img
            alt="IQOO"
            src="https://tinyurl.com/5dc2swsj"
          />
          <p>
            IQOO Mobiles offers high-performance smartphones with a focus on
            value for money, delivering powerful specs, sleek design, and
            competitive pricing.
          </p>
        </div>
        <h1 style={{marginLeft:"40%"}}>Task 3 Completed</h1>
        <hr style={{ border: "none", borderTop: "2px dotted #333", margin: "20px 0" }} />
        </div>
    );
  }
}

export default Compo;
