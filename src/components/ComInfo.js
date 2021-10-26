import React,{ useState } from 'react'
import './Components.css'
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
import {RiCpuLine} from 'react-icons/ri';
import {FiHardDrive} from 'react-icons/fi';
import {RiArtboard2Fill} from 'react-icons/ri'
import {FaMemory} from 'react-icons/fa'
import {BsFillInboxFill} from 'react-icons/bs'
import {GiProcessor}from 'react-icons/gi'

export default function ComInfo({ session }) {

  return(
    <Container fluid>
      
       <div className="info">
          <p>Com infomation</p>
          <p>Key = {session.key}</p>
          <p><d><RiCpuLine/></d>CPU = {session.cpu}</p>
          <p><d><GiProcessor/></d>GPU = {session.gpu}</p>
          <p><d><RiArtboard2Fill/></d>MTB = {session.mtb}</p>
          <p><d><FaMemory/></d>RAM = {session.ram}</p>
          <p><d><BsFillInboxFill/></d>PSU = {session.psu}</p>
          <p><d><FiHardDrive/></d>STR = {session.str}</p>
        </div>
    </Container>
    
    
    
    
  )
}