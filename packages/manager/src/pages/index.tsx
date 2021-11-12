import Router from "next/router";
import React from "react";
import { Button } from "shared";

const Index = () => {
  const handleClick = () => {
    Router.push("/usuarios");
  };
  return (
    <div className="titleWrapper">
      <div className="textStyle">Gerenciamento</div>

      <Button onClick={handleClick} buttonType="next">
        Usários
      </Button>
      <style jsx>
        {`
          .titleWrapper {
            display: flex;
            flex-direction: column;
            text-align: center;
            margin-top: 200px;
          }
          .textStyle {
            font-size: 50px;
          }
        `}
      </style>
    </div>
  );
};

export default Index;
