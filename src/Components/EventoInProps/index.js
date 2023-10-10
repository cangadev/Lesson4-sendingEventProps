import React from "react";
import Button from "./Button";

function Event(){
    function Gritar(){
        console.log("Estou comendo!")
    }
    function Pessoa(){
        console.log("Lucas Adão!")
    }
    return(
        <>
         <Button event={Gritar} text="Oque estás fazendo?"/>
         <Button event={Pessoa} text="Qual é o teu nome?"/>
        </>
    )
}
export default Event;