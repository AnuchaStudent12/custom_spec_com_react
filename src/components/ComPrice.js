import React,{ useState } from 'react'
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Components.css'
import {RiCpuLine} from 'react-icons/ri';
import {FiHardDrive} from 'react-icons/fi';
import {RiArtboard2Fill} from 'react-icons/ri'
import {FaMemory} from 'react-icons/fa'
import {BsFillInboxFill} from 'react-icons/bs'
import {GiProcessor}from 'react-icons/gi'


export default function ComPrice({ session }) {
    const i = parseInt(session.cpu_price) + parseInt(session.gpu_price) + parseInt(session.mtb_price) 
    + parseInt(session.ram_price) + parseInt(session.psu_price) + parseInt(session.str_price);

  return(
    <Container fluid>
      <div className="price" >
           <p>Com Price</p>
           <p><d><RiCpuLine/></d>CPU = {session.cpu_price}</p>
           <p><d><GiProcessor/></d>GPU = {session.gpu_price}</p>
           <p><d><RiArtboard2Fill/></d>MTB = {session.mtb_price}</p>
           <p><d><FaMemory/></d>RAM = {session.ram_price}</p>
           <p><d><BsFillInboxFill/></d>PSU = {session.psu_price}</p>
           <p><d><FiHardDrive/></d>STR = {session.str_price}</p>
           <p>Total = {i}</p>
        </div>
    </Container>
    
      
      
      
    
    
  )
}