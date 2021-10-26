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

export default function RAM({ session,setSession }) {

  const [ram, setRam] = useState();
  const [ram_price, setRam_price] = useState();
  const [ram_icon, setRam_icon] = useState();

  const total = session.data.data.name.length;
  const items = [];
  var i = 0;

  var iram = session.data.data.name;
  var pram = session.data.data.price;
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
          ram: ram,
          psu: session.psu,
          str: session.str,
  //------------------
          cpu_price: session.cpu_price,
          gpu_price: session.gpu_price,
          mtb_price: session.mtb_price,
          ram_price: ram_price,
          psu_price: session.psu_price,
          str_price: session.str_price,
  //-----------------
          key: null,
          mode: session.mode,
          //-----------------
          mtb_socket: session.mtb_socket,
          data: session.data,

          cpu_icon: session.cpu_icon,
          gpu_icon: session.gpu_icon,
          mtb_icon: session.mtb_icon,
          ram_icon: ram_icon,
          psu_icon: session.psu_icon,
          str_icon: session.str_icon
          });
}
for (i = 0; i < total; i++) {
          const j = i;
        items.push(
          <form onSubmit={HandleSubmit} onClick={e => setRam_price(pram[j])}>
          <div onClick={e => setRam_icon(icon[j])}>
          <Button type="submit" onClick={e => setRam(iram[j])} size="sm" variant="dark">{i+1} {iram[i]} </Button>
          </div>
          </form>
          )
    }

return(
  <div>
      <p>RAM</p>
      <form onSubmit={HandleSubmit} onClick={e => setRam_price(0)}>
      <div onClick={e => setRam_icon(null)}>
        <Button type ="submit" onClick={e => setRam(null)} size="sm" variant="dark">Clear</Button>
      </div>
      </form>
      {items}
  </div>
)
}