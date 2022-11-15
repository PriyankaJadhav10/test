import React from "react";

const Cards = (props) => {
  return (
    <div className="Card" style={{ display: "flex", flexWrap: "wrap" }}>
      {props.data &&
        props.data.map((data, index) => {
          // console.log(record);
          return (
            <div className="box" key={`${data.subname}-${index}`} style={{border: "solid"}}>
              <div>
                <img src={data.banner} width="350" height="300" alt="" style={{border: "solid",padding:'3px'}}/>
              </div>

              <br />
              <div>
                {data.subname}
                <br />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Cards;
