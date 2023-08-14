import React from 'react'

function Copyrights (){
    const currentYear = new Date().getFullYear();
    return <p>All Copyrights Reserved © Umer Fayyaz - {currentYear} </p>;
  } 

export default Copyrights;