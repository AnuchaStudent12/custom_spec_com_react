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
export default function STR({ session,setSession }) {

  const [str, setStr] = useState();
  const [str_price, setStr_price] = useState();
  const [str_icon, setStr_icon] = useState();

  const total = session.data.data.name.length;
  const items = [];
  var i = 0;

  var istr = session.data.data.name;
  var pstr = session.data.data.price;
  var icon = session.data.data.icon;

      const HandleSubmit = async e => {
        e.preventDefault();
    //console.log({data});
    //console.log({data}.data);
    //console.log({data}.data.role);

    setSession({
      cpu: session.cpu,
      gpu: session.gpu,
      mtb: session.mtb,
      ram: session.ram,
      psu: session.psu,
      str: str,
//------------------
      cpu_price: session.cpu_price,
      gpu_price: session.gpu_price,
      mtb_price: session.mtb_price,
      ram_price: session.ram_price,
      psu_price: session.psu_price,
      str_price: str_price,
//-----------------
      key: null,
      mode: session.mode,
      //-----------------
      mtb_socket: session.mtb_socket,
      data: session.data,
      //------------------
      cpu_icon: session.cpu_icon,
      gpu_icon: session.gpu_icon,
      mtb_icon: session.mtb_icon,
      ram_icon: session.ram_icon,
      psu_icon: session.psu_icon,
      str_icon: str_icon
      });
  }

      for (i = 0; i < total; i++) {
            const j = i;
          items.push(
            <form onSubmit={HandleSubmit} onClick={e => setStr_price(pstr[j])}>
              <div onClick={e => setStr_icon(icon[j])}>
               <Button type="submit" onClick={e => setStr(istr[j])} size="sm" variant="dark">{i+1} {istr[i]} </Button>
               </div>
            </form>
            )
      }

  return(
    <div>
        <p>STR</p>
        <form onSubmit={HandleSubmit} onClick={e => setStr_price(0)}>
        <div onClick={e => setStr_icon(null)}>
            <Button type="submit" onClick={e => setStr(null) } size="sm" variant="dark"> Clear </Button>
        </div>
        </form>
        {items}
    </div>
  )
}
