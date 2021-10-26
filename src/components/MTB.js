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
    FormControl,
    ButtonGroup,
    ButtonToolbar
  } from "react-bootstrap";
  import 'bootstrap/dist/css/bootstrap.min.css';

export default function MTB({ session,setSession }) {

    
    const [mtb, setMtb] = useState();
    const [mtb_price, setMtb_price] = useState();
    const [mtb_socket, setMtb_socket] = useState();
    const [mtb_icon, setMtb_icon] = useState();

    const total = session.data.data.name.length;
    const items = [];
    var i = 0;

    var imtb = session.data.data.name;
    var pmtb = session.data.data.price;
    var smtb = session.data.data.socket;
    var icon = session.data.data.icon;



    const HandleSubmit = async e => {
        e.preventDefault();
    //console.log({data});
    //console.log({data}.data);
    //console.log({data}.data.role);
        if(session.cpu == null){
            setSession({
            cpu: session.cpu,
            gpu: session.gpu,
            mtb: mtb,
            ram: session.ram,
            psu: session.psu,
            str: session.str,
    //------------------
            cpu_price: session.cpu_price,
            gpu_price: session.gpu_price,
            mtb_price: mtb_price,
            ram_price: session.ram_price,
            psu_price: session.psu_price,
            str_price: session.str_price,
    //-----------------
            key: null,
            mode: session.mode,
            //-----------------
            mtb_socket: mtb_socket,
            data: session.data,

            cpu_icon: session.cpu_icon,
            gpu_icon: session.gpu_icon,
            mtb_icon: mtb_icon,
            ram_icon: session.ram_icon,
            psu_icon: session.psu_icon,
            str_icon: session.str_icon
            });
        }
        else {

        setSession({
            cpu: session.cpu,
            gpu: session.gpu,
            mtb: mtb,
            ram: session.ram,
            psu: session.psu,
            str: session.str,
    //------------------
            cpu_price: session.cpu_price,
            gpu_price: session.gpu_price,
            mtb_price: mtb_price,
            ram_price: session.ram_price,
            psu_price: session.psu_price,
            str_price: session.str_price,
    //-----------------
            key: null,
            mode: session.mode,
            //-----------------
            mtb_socket: session.mtb_socket,
            cpu_socket: session.cpu_socket,
            data: session.data,

            cpu_icon: session.cpu_icon,
            gpu_icon: session.gpu_icon,
            mtb_icon: mtb_icon,
            ram_icon: session.ram_icon,
            psu_icon: session.psu_icon,
            str_icon: session.str_icon
            });
        }
  }

    if(session.cpu != null){

        i = 0;
      for (i = 0; i < total; i++) {
            const j = i;
          items.push(
            <form onSubmit={HandleSubmit} onClick={e => setMtb_price(pmtb[j])}>
            <div onClick={e => setMtb_socket(smtb[j])}>
            <div onClick={e => setMtb_icon(icon[j])}>
                <Button type="submit" onClick={e => setMtb(imtb[j])} size="sm" variant="dark">{i+1} {imtb[i]}</Button>
            </div>
            </div>
            </form>
            )
      }

        return(
            <div>
                <p>MTB</p>
                    <form onSubmit={HandleSubmit} onClick={e => setMtb_price(0)}>
                        <div onClick={e => setMtb_socket(null)}>
                        <div onClick={e => setMtb_icon(null)}>
                            <Button type="submit" onClick={e => setMtb(null)} size="sm" variant="dark">Clear</Button>
                        
                        </div>
                        </div>
                    </form>
                    {items}
            </div>
        )
    }

i = 0;
      for (i = 0; i < total; i++) {
            const j = i;
          items.push(
            <form onSubmit={HandleSubmit} onClick={e => setMtb_price(pmtb[j])}>
            <div onClick={e => setMtb_socket(smtb[j])}>
            <div onClick={e => setMtb_icon(icon[j])}>
            <Button type="submit" onClick={e => setMtb(imtb[j]) } size="sm" variant="dark">{i+1} {imtb[i]}</Button>
            </div>
            </div>
            </form>
            )
      }

  return(
    <div>
        <p>MTB</p>
        <form onSubmit={HandleSubmit} onClick={e => setMtb_price(0)}>
            <div onClick={e => setMtb_socket(null)}>
            <div onClick={e => setMtb_icon(null)}>
            <Button type="submit" onClick={e => setMtb(null) } size="sm" variant="dark"> Clear </Button>
            </div>
            </div>
        </form>
        {items}
    </div>
  )
}