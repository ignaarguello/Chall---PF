import React from 'react'
import { SlArrowLeft } from "react-icons/sl";
import './FlechaLeft.css'

export default function FlechaLeft(props) {
  return (
    <SlArrowLeft class='flecha' onClick={props.evento}/>
  )
}
