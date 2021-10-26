import React,{ useState } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';
import ComInfo from './ComInfo'
import ComPrice from './ComPrice'
import SearchPage from './SearchPage'
import SavePage from './SavePage'
import Hexpage from './Hexpage'
import CPU from './CPU'
import GPU from './GPU'
import MTB from './MTB'
import RAM from './RAM'
import PSU from './PSU'
import STR from './STR'
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
    FormControl,
    ButtonGroup,
    ButtonToolbar
  } from "react-bootstrap";
 
  import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {

	const [session, setSession] = useState({
        cpu: null,
        gpu: null,
        mtb: null,
        ram: null,
        psu: null,
        str: null,
        //------------------
        cpu_price: 0,
        gpu_price: 0,
        mtb_price: 0,
        ram_price: 0,
        psu_price: 0,
        str_price: 0,
        //-----------------
        key: null,
        mode: null,
        //-------------------
        mtb_socket: null,
        data: null,
        //------------------
        cpu_icon: null,
        gpu_icon: null,
        mtb_icon: null,
        ram_icon: null,
        psu_icon: null,
        str_icon: null
          });
    
    
        const HandleSubmit1 = async e => {
    
        e.preventDefault();
    
        if (session.mtb != null) {
            const {data} = await axios.post('http://localhost:80/spec/select.php', JSON.stringify({
            type: "cpu",
            socket: session.mtb_socket
            }));
        console.log({data}.data);
    
    
        setSession({
                cpu: session.cpu,
                gpu: session.gpu,
                mtb: session.mtb,
                ram: session.ram,
                psu: session.psu,
                str: session.str,
        //------------------
                cpu_price: session.cpu_price,
                gpu_price: session.gpu_price,
                mtb_price: session.mtb_price,
                ram_price: session.ram_price,
                psu_price: session.psu_price,
                str_price: session.str_price,
        //-----------------
                key: session.key,
                mode: "CPU",
                //-----------------
                mtb_socket: session.mtb_socket,
                data: {data},
    
                cpu_icon: session.cpu_icon,
                gpu_icon: session.gpu_icon,
                mtb_icon: session.mtb_icon,
                ram_icon: session.ram_icon,
                psu_icon: session.psu_icon,
                str_icon: session.str_icon
                });
            }
            else{
                const {data} = await axios.post('http://localhost:80/spec/select.php', JSON.stringify({
            type: "cpu",
            }));
        console.log({data}.data);
    
    
        setSession({
                cpu: session.cpu,
                gpu: session.gpu,
                mtb: session.mtb,
                ram: session.ram,
                psu: session.psu,
                str: session.str,
        //------------------
                cpu_price: session.cpu_price,
                gpu_price: session.gpu_price,
                mtb_price: session.mtb_price,
                ram_price: session.ram_price,
                psu_price: session.psu_price,
                str_price: session.str_price,
        //-----------------
                key: session.key,
                mode: "CPU",
                //-----------------
                mtb_socket: session.mtb_socket,
                data: {data},
    
                cpu_icon: session.cpu_icon,
                gpu_icon: session.gpu_icon,
                mtb_icon: session.mtb_icon,
                ram_icon: session.ram_icon,
                psu_icon: session.psu_icon,
                str_icon: session.str_icon
                });
            }
        }
        const HandleSubmit2 = async e => {
        e.preventDefault();
    
        const {data} = await axios.post('http://localhost:80/spec/select.php', JSON.stringify({
            type: "gpu",
          }));
    
        setSession({
                cpu: session.cpu,
                gpu: session.gpu,
                mtb: session.mtb,
                ram: session.ram,
                psu: session.psu,
                str: session.str,
        //------------------
                cpu_price: session.cpu_price,
                gpu_price: session.gpu_price,
                mtb_price: session.mtb_price,
                ram_price: session.ram_price,
                psu_price: session.psu_price,
                str_price: session.str_price,
        //-----------------
                key: session.key,
                mode: "GPU",
                //-----------------
                mtb_socket: session.mtb_socket,
                data: {data},
    
                cpu_icon: session.cpu_icon,
                gpu_icon: session.gpu_icon,
                mtb_icon: session.mtb_icon,
                ram_icon: session.ram_icon,
                psu_icon: session.psu_icon,
                str_icon: session.str_icon
                });
        }
        const HandleSubmit3 = async e => {
        e.preventDefault();
        if(session.cpu != null){
    
            const {data} = await axios.post('http://localhost:80/spec/select.php', JSON.stringify({
            type: "mtb",
            socket: session.mtb_socket
          }));
            console.log({data}.data);
    
        setSession({
                cpu: session.cpu,
                gpu: session.gpu,
                mtb: session.mtb,
                ram: session.ram,
                psu: session.psu,
                str: session.str,
        //------------------
                cpu_price: session.cpu_price,
                gpu_price: session.gpu_price,
                mtb_price: session.mtb_price,
                ram_price: session.ram_price,
                psu_price: session.psu_price,
                str_price: session.str_price,
        //-----------------
                key: session.key,
                mode: "MTB",
                //-----------------
                mtb_socket: session.mtb_socket,
                data: {data},
    
                cpu_icon: session.cpu_icon,
                gpu_icon: session.gpu_icon,
                mtb_icon: session.mtb_icon,
                ram_icon: session.ram_icon,
                psu_icon: session.psu_icon,
                str_icon: session.str_icon
                });
    
            }
            else{
                const {data} = await axios.post('http://localhost:80/spec/select.php', JSON.stringify({
            type: "mtb",
          }));
            console.log({data}.data);
    
        setSession({
                cpu: session.cpu,
                gpu: session.gpu,
                mtb: session.mtb,
                ram: session.ram,
                psu: session.psu,
                str: session.str,
        //------------------
                cpu_price: session.cpu_price,
                gpu_price: session.gpu_price,
                mtb_price: session.mtb_price,
                ram_price: session.ram_price,
                psu_price: session.psu_price,
                str_price: session.str_price,
        //-----------------
                key: session.key,
                mode: "MTB",
                //-----------------
                mtb_socket: session.mtb_socket,
                data: {data},
    
                cpu_icon: session.cpu_icon,
                gpu_icon: session.gpu_icon,
                mtb_icon: session.mtb_icon,
                ram_icon: session.ram_icon,
                psu_icon: session.psu_icon,
                str_icon: session.str_icon
                });
    
            }
        }
        const HandleSubmit4 = async e => {
        e.preventDefault();
    
        const {data} = await axios.post('http://localhost:80/spec/select.php', JSON.stringify({
            type: "ram",
          }));
    
        setSession({
                cpu: session.cpu,
                gpu: session.gpu,
                mtb: session.mtb,
                ram: session.ram,
                psu: session.psu,
                str: session.str,
        //------------------
                cpu_price: session.cpu_price,
                gpu_price: session.gpu_price,
                mtb_price: session.mtb_price,
                ram_price: session.ram_price,
                psu_price: session.psu_price,
                str_price: session.str_price,
        //-----------------
                key: session.key,
                mode: "RAM",
                //-----------------
                mtb_socket: session.mtb_socket,
                data: {data},
    
                cpu_icon: session.cpu_icon,
                gpu_icon: session.gpu_icon,
                mtb_icon: session.mtb_icon,
                ram_icon: session.ram_icon,
                psu_icon: session.psu_icon,
                str_icon: session.str_icon
                });
        }
        const HandleSubmit5 = async e => {
        e.preventDefault();
    
        const {data} = await axios.post('http://localhost:80/spec/select.php', JSON.stringify({
            type: "psu",
          }));
    
        setSession({
                cpu: session.cpu,
                gpu: session.gpu,
                mtb: session.mtb,
                ram: session.ram,
                psu: session.psu,
                str: session.str,
        //------------------
                cpu_price: session.cpu_price,
                gpu_price: session.gpu_price,
                mtb_price: session.mtb_price,
                ram_price: session.ram_price,
                psu_price: session.psu_price,
                str_price: session.str_price,
        //-----------------
                key: session.key,
                mode: "PSU",
                //-----------------
                mtb_socket: session.mtb_socket,
                data: {data},
    
                cpu_icon: session.cpu_icon,
                gpu_icon: session.gpu_icon,
                mtb_icon: session.mtb_icon,
                ram_icon: session.ram_icon,
                psu_icon: session.psu_icon,
                str_icon: session.str_icon
                });
        }
        const HandleSubmit6 = async e => {
        e.preventDefault();
    
        const {data} = await axios.post('http://localhost:80/spec/select.php', JSON.stringify({
            type: "str",
          }));
    
        setSession({
                cpu: session.cpu,
                gpu: session.gpu,
                mtb: session.mtb,
                ram: session.ram,
                psu: session.psu,
                str: session.str,
        //------------------
                cpu_price: session.cpu_price,
                gpu_price: session.gpu_price,
                mtb_price: session.mtb_price,
                ram_price: session.ram_price,
                psu_price: session.psu_price,
                str_price: session.str_price,
        //-----------------
                key: session.key,
                mode: "STR",
                //-----------------
                mtb_socket: session.mtb_socket,
                data: {data},
    
                cpu_icon: session.cpu_icon,
                gpu_icon: session.gpu_icon,
                mtb_icon: session.mtb_icon,
                ram_icon: session.ram_icon,
                psu_icon: session.psu_icon,
                str_icon: session.str_icon
                });
        }
    


    if (session.mode == "CPU") {
        return(
        <div>
            
            <ComInfo session={session} />
            <Hexpage session={session}/>
            <ComPrice session={session} />
            <SearchPage setSession={setSession} />
            <ButtonToolbar>
        <ButtonGroup className="buttongropo" aria-label="First-group">
            <Button variant="dark" onClick={HandleSubmit1}>CPU</Button>
            <Button variant="dark" onClick={HandleSubmit2}>GPU</Button>
            <Button variant="dark" onClick={HandleSubmit3}>MTB</Button>
            <Button variant="dark" onClick={HandleSubmit4}>RAM</Button>
            <Button variant="dark" onClick={HandleSubmit5}>PSU</Button>
            <Button variant="dark" onClick={HandleSubmit6}>STR</Button>
         </ButtonGroup>
         <ButtonGroup className="savepage" aria-label="Secon-group">
            <SavePage session={session} setSession={setSession} />
         </ButtonGroup>
         </ButtonToolbar>

            <CPU session={session} setSession={setSession} />

        </div>
        )
    }

    if (session.mode == "GPU") {
        return(
        <div>
            
            <ComInfo session={session} />
            <Hexpage session={session}/>
            <ComPrice session={session} />
            <SearchPage setSession={setSession} />
            <ButtonToolbar>
        <ButtonGroup className="buttongropo" aria-label="First-group">
            <Button variant="dark" onClick={HandleSubmit1}>CPU</Button>
            <Button variant="dark" onClick={HandleSubmit2}>GPU</Button>
            <Button variant="dark" onClick={HandleSubmit3}>MTB</Button>
            <Button variant="dark" onClick={HandleSubmit4}>RAM</Button>
            <Button variant="dark" onClick={HandleSubmit5}>PSU</Button>
            <Button variant="dark" onClick={HandleSubmit6}>STR</Button>
         </ButtonGroup>
         <ButtonGroup className="savepage" aria-label="Secon-group">
            <SavePage session={session} setSession={setSession} />
         </ButtonGroup>
         </ButtonToolbar>

            <GPU session={session} setSession={setSession} />

        </div>
        )
    }

    if (session.mode == "MTB") {
        return(
        <div>
            
            <ComInfo session={session} />
            <Hexpage session={session}/>
            <ComPrice session={session} />
            <SearchPage setSession={setSession} />
            
            <ButtonToolbar>
        <ButtonGroup className="buttongropo" aria-label="First-group">
            <Button variant="dark" onClick={HandleSubmit1}>CPU</Button>
            <Button variant="dark" onClick={HandleSubmit2}>GPU</Button>
            <Button variant="dark" onClick={HandleSubmit3}>MTB</Button>
            <Button variant="dark" onClick={HandleSubmit4}>RAM</Button>
            <Button variant="dark" onClick={HandleSubmit5}>PSU</Button>
            <Button variant="dark" onClick={HandleSubmit6}>STR</Button>
         </ButtonGroup>
         <ButtonGroup className="savepage" aria-label="Secon-group">
            <SavePage session={session} setSession={setSession} />
         </ButtonGroup>
         </ButtonToolbar>
            <MTB session={session} setSession={setSession} />

        </div>
        )
    }

    if (session.mode == "RAM") {
        return(
        <div>
            
            <ComInfo session={session} />
            <Hexpage session={session}/>
            <ComPrice session={session} />
            <SearchPage setSession={setSession} />
            
            <ButtonToolbar>
        <ButtonGroup className="buttongropo" aria-label="First-group">
            <Button variant="dark" onClick={HandleSubmit1}>CPU</Button>
            <Button variant="dark" onClick={HandleSubmit2}>GPU</Button>
            <Button variant="dark" onClick={HandleSubmit3}>MTB</Button>
            <Button variant="dark" onClick={HandleSubmit4}>RAM</Button>
            <Button variant="dark" onClick={HandleSubmit5}>PSU</Button>
            <Button variant="dark" onClick={HandleSubmit6}>STR</Button>
         </ButtonGroup>
         <ButtonGroup className="savepage" aria-label="Secon-group">
            <SavePage session={session} setSession={setSession} />
         </ButtonGroup>
         </ButtonToolbar>

            <RAM session={session} setSession={setSession} />

        </div>
        )
    }

    if (session.mode == "PSU") {
        return(
        <div>
            
            <ComInfo session={session} />
            <Hexpage session={session}/>
            <ComPrice session={session} />
            <SearchPage setSession={setSession} />
           
            <ButtonToolbar>
        <ButtonGroup className="buttongropo" aria-label="First-group">
            <Button variant="dark" onClick={HandleSubmit1}>CPU</Button>
            <Button variant="dark" onClick={HandleSubmit2}>GPU</Button>
            <Button variant="dark" onClick={HandleSubmit3}>MTB</Button>
            <Button variant="dark" onClick={HandleSubmit4}>RAM</Button>
            <Button variant="dark" onClick={HandleSubmit5}>PSU</Button>
            <Button variant="dark" onClick={HandleSubmit6}>STR</Button>
         </ButtonGroup>
         <ButtonGroup className="savepage" aria-label="Secon-group">
            <SavePage session={session} setSession={setSession} />
         </ButtonGroup>
         </ButtonToolbar>

            <PSU session={session} setSession={setSession} />

        </div>
        )
    }

    if (session.mode == "STR") {
        return(
        <div>
            
            <ComInfo session={session} />
            <Hexpage session={session}/>
            <ComPrice session={session} />
            <SearchPage setSession={setSession} />
            
            <ButtonToolbar>
        <ButtonGroup className="buttongropo" aria-label="First-group">
            <Button variant="dark" onClick={HandleSubmit1}>CPU</Button>
            <Button variant="dark" onClick={HandleSubmit2}>GPU</Button>
            <Button variant="dark" onClick={HandleSubmit3}>MTB</Button>
            <Button variant="dark" onClick={HandleSubmit4}>RAM</Button>
            <Button variant="dark" onClick={HandleSubmit5}>PSU</Button>
            <Button variant="dark" onClick={HandleSubmit6}>STR</Button>
         </ButtonGroup>
         <ButtonGroup className="savepage" aria-label="Secon-group">
            <SavePage session={session} setSession={setSession} />
         </ButtonGroup>
         </ButtonToolbar>

            <STR session={session} setSession={setSession} />

        </div>
        )
    }

  return(
    <div>
        
        <ComInfo session={session} />
        <Hexpage session={session}/>
        <ComPrice session={session} />
        <SearchPage setSession={setSession} />
        <ButtonToolbar>
        <ButtonGroup className="buttongropo" aria-label="First-group">
            <Button variant="dark" onClick={HandleSubmit1}>CPU</Button>
            <Button variant="dark" onClick={HandleSubmit2}>GPU</Button>
            <Button variant="dark" onClick={HandleSubmit3}>MTB</Button>
            <Button variant="dark" onClick={HandleSubmit4}>RAM</Button>
            <Button variant="dark" onClick={HandleSubmit5}>PSU</Button>
            <Button variant="dark" onClick={HandleSubmit6}>STR</Button>
         </ButtonGroup>
         <ButtonGroup className="savepage" aria-label="Secon-group">
            <SavePage session={session} setSession={setSession} />
         </ButtonGroup>
         </ButtonToolbar>
    </div>
  )
}