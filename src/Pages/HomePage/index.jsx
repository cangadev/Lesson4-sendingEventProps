import React from "react";
//import Head from "../../Components/Head";
import Header from "../../Components/Header";
import Propriedade from "../../Components/Props";
import Person from "../../Components/Props/ManyValues";
import ProptypePropdeault from "../../Components/Props/ProptypePropdfault";
import Event from "../../Components/EventoInProps";

function Home() {

  return (
    <>
    <Header/>
    
    <Propriedade name="Lucio" />
    <Person nome="Andre" morada="Viana" idade="12"/>
    <ProptypePropdeault  cor="azul"/>
    <ProptypePropdeault/>

    <Event/>

    </>
  ); 
}

export default Home;
