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
  FormControl
} from "react-bootstrap";
import './Components.css'
import PropTypes from 'prop-types';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SearchPage({ setSession }) {
  const [key, setKey] = useState();

  const HandleSubmit = async e => {
    e.preventDefault();
    const {data} = await axios.post('http://localhost:80/spec/loadcom.php', JSON.stringify({
    key: key
    }));

    //console.log({data});
    console.log({data}.data);
    //console.log({data}.data.role);

    setSession({
            cpu: {data}.data.cpu_name,
            gpu: {data}.data.gpu_name,
            mtb: {data}.data.mtb_name,
            ram: {data}.data.ram_name,
            psu: {data}.data.psu_name,
            str: {data}.data.str_name,
    //------------------
            cpu_price: {data}.data.cpu_price,
            gpu_price: {data}.data.gpu_price,
            mtb_price: {data}.data.mtb_price,
            ram_price: {data}.data.ram_price,
            psu_price: {data}.data.psu_price,
            str_price: {data}.data.str_price,
    //-----------------
            key: key,
            mode: null,
            //-----------------
            mtb_socket: {data}.data.socket,
            cpu_icon: {data}.data.cpu_icon,
            gpu_icon: {data}.data.gpu_icon,
            mtb_icon: {data}.data.mtb_icon,
            ram_icon: {data}.data.ram_icon,
            psu_icon: {data}.data.psu_icon,
            str_icon: {data}.data.str_icon
            });
  }


  return(
     
     <Navbar bg="dark" variant="dark" fixed="top">
  <Navbar.Brand href="#home" className="front">PCxSPEC</Navbar.Brand>
  
  <Form inline>
    <FormControl type="text" placeholder="Search" onChange={e => setKey(e.target.value)} />
    <Button variant="outline-info" onClick={HandleSubmit}>Search</Button>
  </Form>
</Navbar>
    
  )
}