import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "semantic-ui-react";

const InfoCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://www.mocky.io/v2/5e75881a3000008388a5faba?fbclid=IwAR3N6KAnIoQomJFJOjulC5ARd3XlxUqXza1abvQ9ddnHd-N0qa-iIlmCmu0");
      setData(result.data);
      console.log(result.data);
    };
    fetchData();
  }, []);

  return (
      
          <Card.Group>
      {data.map(card => (
        <Card >
          <Card.Header>{card.text}</Card.Header>
      <Card.Description>{card.created_at}</Card.Description>
        </Card>
      ))}
      
    </Card.Group>
    
    
  );
};

export default InfoCard;

