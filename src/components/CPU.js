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


export default function CPU({ session,setSession }) {

  const [cpu, setCpu] = useState();
  const [cpu_price, setCpu_price] = useState();
  const [cpu_socket, setCpu_socket] = useState();
  const [cpu_icon, setCpu_icon] = useState();

  const total = session.data.data.name.length;
  const items = [];
  var i = 0;
  
  var icpu = session.data.data.name;
  var pcpu = session.data.data.price;
  var scpu = session.data.data.socket;
  var icon = session.data.data.icon;

  

  const HandleSubmit = async e => {
      e.preventDefault();
  //console.log({data});
  //console.log({data}.data);
  //console.log({data}.data.role);
      if(session.mtb == null){
          setSession({
          cpu: cpu,
          gpu: session.gpu,
          mtb: session.mtb,
          ram: session.ram,
          psu: session.psu,
          str: session.str,
  //------------------
          cpu_price: cpu_price,
          gpu_price: session.gpu_price,
          mtb_price: session.mtb_price,
          ram_price: session.ram_price,
          psu_price: session.psu_price,
          str_price: session.str_price,
  //-----------------
          key: null,
          mode: session.mode,
          //-----------------
          mtb_socket: cpu_socket,
          data: session.data,

          cpu_icon: cpu_icon,
          gpu_icon: session.gpu_icon,
          mtb_icon: session.mtb_icon,
          ram_icon: session.ram_icon,
          psu_icon: session.psu_icon,
          str_icon: session.str_icon
          });
      }
      else {

      setSession({
          cpu: cpu,
          gpu: session.gpu,
          mtb: session.mtb,
          ram: session.ram,
          psu: session.psu,
          str: session.str,
  //------------------
          cpu_price: cpu_price,
          gpu_price: session.gpu_price,
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

          cpu_icon: cpu_icon,
          gpu_icon: session.gpu_icon,
          mtb_icon: session.mtb_icon,
          ram_icon: session.ram_icon,
          psu_icon: session.psu_icon,
          str_icon: session.str_icon
          });
      }
}

if(session.mtb != null){

  i = 0;
    for (i = 0; i < total; i++) {
          const j = i;
        items.push(
          <form onSubmit={HandleSubmit} onClick={e => setCpu_price(pcpu[j])}>
          <div onClick={e => setCpu_socket(scpu[j])}>
          <div onClick={e => setCpu_icon(icon[j])}>
              <Button type="submit" onClick={e => setCpu(icpu[j])} size="sm" variant="dark">{i+1} {icpu[i]}</Button>
          </div>
          </div>
          </form>
          )
    }

      return(
          <div>
              <p>CPU</p>
              <form onSubmit={HandleSubmit} onClick={e => setCpu_price(0)}>
                  <div onClick={e => setCpu_socket(null)}>
                  <div onClick={e => setCpu_icon(null)}>
                    <Button type="submit" onClick={e => setCpu(null)} size="sm" variant="dark">Clear</Button>
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
          <form onSubmit={HandleSubmit} onClick={e => setCpu_price(pcpu[j])}>
          <div onClick={e => setCpu_socket(scpu[j])}>
           <div onClick={e => setCpu_icon(icon[j])}>
             <Button type="submit" onClick={e => setCpu(icpu[j])} size="sm" variant="dark">{i+1} {icpu[i]}</Button>
             
          </div>
          </div>
          </form>
          )
    }


return(
  <div>
      <p>CPU</p>
      <form onSubmit={HandleSubmit} onClick={e => setCpu_price(0)}>
          <div onClick={e => setCpu_socket(null)}>
          <div onClick={e => setCpu_icon(null)}>
          <Button type="submit" onClick={e => setCpu(null)} size="sm" variant="dark">Clear</Button>
            
          </div>
          </div>
          </form>
      {items}
  </div>
)
}