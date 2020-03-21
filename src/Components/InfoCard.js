import React,{useState} from 'react';
import axios from 'axios';
import {Button} from 'semantic-ui-react';

const InfoCard = ()=>{

    const[cards,setCard]= useState();

    async function callInfo(){

        const cards = await axios.get('https:rawg.io/api/games?ordering=-rating');

        console.log(cards.data.results);

        setCard(cards);
    }

    return(

        <div>
            <Button onClick={callInfo}>API</Button>
        </div>
    );
};

export default InfoCard;