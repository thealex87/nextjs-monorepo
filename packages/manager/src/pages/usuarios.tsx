import Router from "next/router";
import React from "react";
import { Button } from "shared";

const NextPage = () => {
  const handleClick = () => {
    Router.push("/");
  };
  return (
    <div className="titleWrapper">
      <div className="textStyle">Usuários</div>

      <Button onClick={handleClick} buttonType="prev">
        Gerenciamento
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

export default NextPage;
