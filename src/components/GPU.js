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

export default function GPU({ session,setSession }) {

  const [gpu, setGpu] = useState();
  const [gpu_price, setGpu_price] = useState();
  const [gpu_icon, setGpu_icon] = useState();

  const total = session.data.data.name.length;
  const items = [];
  var i = 0;

  var igpu = session.data.data.name;
  var pgpu = session.data.data.price;
  var icon = session.data.data.icon;

  const HandleSubmit = async e => {
      e.preventDefault();
  //console.log({data});
  //console.log({data}.data);
  //console.log({data}.data.role);

      setSession({
          cpu: session.cpu,
          gpu: gpu,
          mtb: session.mtb,
          ram: session.ram,
          psu: session.psu,
          str: session.str,
  //------------------
          cpu_price: session.cpu_price,
          gpu_price: gpu_price,
          mtb_price: session.mtb_price,
          ram_price: session.ram_price,
          psu_price: session.psu_price,
          str_price: session.str_price,
  //-----------------
          key: null,
          mode: session.mode,
          //-----------------
          mtb_socket: session.mtb_socket,
          data: session.data,

          cpu_icon: session.cpu_icon,
          gpu_icon: gpu_icon,
          mtb_icon: session.mtb_icon,
          ram_icon: session.ram_icon,
          psu_icon: session.psu_icon,
          str_icon: session.str_icon
          });
}
for (i = 0; i < total; i++) {
          const j = i;
        items.push(
          <form onSubmit={HandleSubmit} onClick={e => setGpu_price(pgpu[j])}>
          <div onClick={e => setGpu_icon(icon[j])}>
            <Button type="submit" onClick ={e => setGpu(igpu[j])} size="sm" variant="dark">{i+1} {igpu[i]}</Button>
          </div>
          </form>
          )
    }

return(
  <div>
      <p>GPU</p>
      <form onSubmit={HandleSubmit} onClick={e => setGpu_price(0)}>
      <div onClick={e => setGpu_icon(null)}>
            <Button type ="submit" onClick={e => setGpu(null)} size="sm" variant="dark">Clear</Button>
      </div>
      </form>
      {items}
  </div>
)
}