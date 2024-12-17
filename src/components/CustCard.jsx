import { Card } from "react-bootstrap";
import React from "react";

const CustCard = ({ img }) => {
  return (
    <Card>
      <Card.Body>{img}</Card.Body>
    </Card>
  );
};

export default CustCard;
