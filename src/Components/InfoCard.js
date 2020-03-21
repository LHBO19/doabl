import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "semantic-ui-react";

const InfoCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https:rawg.io/api/games?ordering=-rating");
      setData(result.data.results);
      console.log(result.data.results);
    };
    fetchData();
  }, []);

  return (
      
          <Card.Group>
      {data.map(card => (
        <Card >
          <Card.Header>{card.name}</Card.Header>
      <Card.Description>{card.released}</Card.Description>
        </Card>
      ))}
      
    </Card.Group>
    
    
  );
};

export default InfoCard;

