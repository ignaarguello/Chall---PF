import React from 'react'
import { SlArrowRight } from "react-icons/sl";


export default function FlechaRight(props) {
  return (
    <SlArrowRight class='flecha' onClick={props.evento}/>
  )
}
