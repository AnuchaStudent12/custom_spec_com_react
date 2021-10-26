import './hex.css'
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
  import CPU from './ncpu.png';
  import GPU from './ngpu.png';
  import MB from './nmtb.png';
  import RAM from './nram.png';
  import PSU from './npsu.png';
  import STR from './nstr.png';
  import CASE from './ncase.png';
  //------------------------------------
  import intel from './intel.png';
  import amd from './ICON/amd.png';
  import rtx from './rtx.png';
  import asrock from './asrock.png';
  import gigabyte from './ICON/gig.png';
  import corsair from './corsair.png';
  import silverstone from './ss.png';
  import kingston from './ICON/kingston.png';
  import apacer from './ICON/panther.png';
  import samsung from './samsung.png';
  import wd from './ICON/WD.png';


export default function Hexpage({ session }) {
    const items = [];
    const x = session.cpu_icon+".png";

    if(session.cpu == null){
      items.push(
        <div className="one"><img src={CPU}/></div>
          )
    }
    else{
      switch(session.cpu_icon){
        case "intel" : items.push(
        <div className="one"><img src={intel} /></div>);
        break;
        case "amd" : items.push(
        <div className="one"><img src={amd} /></div>);
        break;
        case "rtx" : items.push(
        <div className="one"><img src={rtx} /></div>);
        break;
        case "asrock" : items.push(
        <div className="one"><img src={asrock} /></div>);
        break;
        case "gigabyte" : items.push(
        <div className="one"><img src={gigabyte} /></div>);
        break;
        case "corsair" : items.push(
        <div className="one"><img src={corsair} /></div>);
        break;
        case "silverstone" : items.push(
        <div className="one"><img src={silverstone} /></div>);
        break;
        case "kingston" : items.push(
        <div className="one"><img src={kingston} /></div>);
        break;
        case "apacer" : items.push(
        <div className="one"><img src={apacer} /></div>);
        break;
        case "samsung" : items.push(
        <div className="one"><img src={samsung} /></div>);
        break;
        case "wd" : items.push(
        <div className="one"><img src={wd} /></div>);
        break;
      }
    }

    items.push(
         <div className="two"><img src={CASE}/></div>
          );

    if(session.mtb == null){
      items.push(
        <div className="three"><img src={MB}/></div>
          )
    }
    else{
      switch(session.mtb_icon){
        case "intel" : items.push(
        <div className="three"><img src={intel} /></div>);
        break;
        case "amd" : items.push(
        <div className="three"><img src={amd} /></div>);
        break;
        case "rtx" : items.push(
        <div className="three"><img src={rtx} /></div>);
        break;
        case "asrock" : items.push(
        <div className="three"><img src={asrock} /></div>);
        break;
        case "gigabyte" : items.push(
        <div className="three"><img src={gigabyte} /></div>);
        break;
        case "corsair" : items.push(
        <div className="three"><img src={corsair} /></div>);
        break;
        case "silverstone" : items.push(
        <div className="three"><img src={silverstone} /></div>);
        break;
        case "kingston" : items.push(
        <div className="three"><img src={kingston} /></div>);
        break;
        case "apacer" : items.push(
        <div className="three"><img src={apacer} /></div>);
        break;
        case "samsung" : items.push(
        <div className="three"><img src={samsung} /></div>);
        break;
        case "wd" : items.push(
        <div className="three"><img src={wd} /></div>);
        break;
      }
    }

    if(session.ram == null){
      items.push(
         <div className="four"><img src={RAM}/></div>
          )
    }
    else{
      switch(session.ram_icon){
        case "intel" : items.push(
        <div className="four"><img src={intel} /></div>);
        break;
        case "amd" : items.push(
        <div className="four"><img src={amd} /></div>);
        break;
        case "rtx" : items.push(
        <div className="four"><img src={rtx} /></div>);
        break;
        case "asrock" : items.push(
        <div className="four"><img src={asrock} /></div>);
        break;
        case "gigabyte" : items.push(
        <div className="four"><img src={gigabyte} /></div>);
        break;
        case "corsair" : items.push(
        <div className="four"><img src={corsair} /></div>);
        break;
        case "silverstone" : items.push(
        <div className="four"><img src={silverstone} /></div>);
        break;
        case "kingston" : items.push(
        <div className="four"><img src={kingston} /></div>);
        break;
        case "apacer" : items.push(
        <div className="four"><img src={apacer} /></div>);
        break;
        case "samsung" : items.push(
        <div className="four"><img src={samsung} /></div>);
        break;
        case "wd" : items.push(
        <div className="four"><img src={wd} /></div>);
        break;
      }
    }

    if(session.psu == null){
      items.push(
         <div className="five"><img src={PSU}/></div>
          )
    }
    else{
      switch(session.psu_icon){
        case "intel" : items.push(
        <div className="five"><img src={intel} /></div>);
        break;
        case "amd" : items.push(
        <div className="five"><img src={amd} /></div>);
        break;
        case "rtx" : items.push(
        <div className="five"><img src={rtx} /></div>);
        break;
        case "asrock" : items.push(
        <div className="five"><img src={asrock} /></div>);
        break;
        case "gigabyte" : items.push(
        <div className="five"><img src={gigabyte} /></div>);
        break;
        case "corsair" : items.push(
        <div className="five"><img src={corsair} /></div>);
        break;
        case "silverstone" : items.push(
        <div className="five"><img src={silverstone} /></div>);
        break;
        case "kingston" : items.push(
        <div className="five"><img src={kingston} /></div>);
        break;
        case "apacer" : items.push(
        <div className="five"><img src={apacer} /></div>);
        break;
        case "samsung" : items.push(
        <div className="five"><img src={samsung} /></div>);
        break;
        case "wd" : items.push(
        <div className="five"><img src={wd} /></div>);
        break;
      }
    }

    if(session.str == null){
      items.push(
        <div className="six"><img src={STR}/></div>
          )
    }
    else{
      switch(session.str_icon){
        case "intel" : items.push(
        <div className="six"><img src={intel} /></div>);
        break;
        case "amd" : items.push(
        <div className="six"><img src={amd} /></div>);
        break;
        case "rtx" : items.push(
        <div className="six"><img src={rtx} /></div>);
        break;
        case "asrock" : items.push(
        <div className="six"><img src={asrock} /></div>);
        break;
        case "gigabyte" : items.push(
        <div className="six"><img src={gigabyte} /></div>);
        break;
        case "corsair" : items.push(
        <div className="six"><img src={corsair} /></div>);
        break;
        case "silverstone" : items.push(
        <div className="six"><img src={silverstone} /></div>);
        break;
        case "kingston" : items.push(
        <div className="six"><img src={kingston} /></div>);
        break;
        case "apacer" : items.push(
        <div className="six"><img src={apacer} /></div>);
        break;
        case "samsung" : items.push(
        <div className="six"><img src={samsung} /></div>);
        break;
        case "wd" : items.push(
        <div className="six"><img src={wd} /></div>);
        break;
      }
    }

    if(session.gpu == null){
      items.push(
         <div className="seven"><img src={GPU}/></div>
          )
    }
    else{
      switch(session.gpu_icon){
        case "intel" : items.push(
        <div className="seven"><img src={intel} /></div>);
        break;
        case "amd" : items.push(
        <div className="seven"><img src={amd} /></div>);
        break;
        case "rtx" : items.push(
        <div className="seven"><img src={rtx} /></div>);
        break;
        case "asrock" : items.push(
        <div className="seven"><img src={asrock} /></div>);
        break;
        case "gigabyte" : items.push(
        <div className="seven"><img src={gigabyte} /></div>);
        break;
        case "corsair" : items.push(
        <div className="seven"><img src={corsair} /></div>);
        break;
        case "silverstone" : items.push(
        <div className="seven"><img src={silverstone} /></div>);
        break;
        case "kingston" : items.push(
        <div className="seven"><img src={kingston} /></div>);
        break;
        case "apacer" : items.push(
        <div className="seven"><img src={apacer} /></div>);
        break;
        case "samsung" : items.push(
        <div className="seven"><img src={samsung} /></div>);
        break;
        case "wd" : items.push(
        <div className="seven"><img src={wd} /></div>);
        break;
      }
    }

    return(
    // *<div class="container">
    //<div class="one">
    //</div>
    //<div class="two">
    //</div>
    //<div class="three">
    //</div>
    //<div class="four">
    //</div>
    //<div class="five">
    //</div>
    //</div>
      
            
            <div className="con">
             {items}
         </div>
        
     
    )
}