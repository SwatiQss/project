import Form1 from "@/components/form/form";
import Cascade from "@/components/cascade/cascade";
import VerticalLineWithDrawer from "@/components/Line/Line";
import './page.css'

export default function Home() {
  return (
    
      <div className="main">
         <div className='merge-page'>
     <p className='heading'>Master Name Index</p>
     <h3 className='sub-heading'>Master Name Record Merge</h3>
     <Cascade />
     <p className='form-heading'>Primary Master Name Record</p>
     <div className="form">
     <Form1/>
     </div>
     
    </div>
    <div className="line">
    <VerticalLineWithDrawer/>
    </div>
 
      </div>
      
    
  );
}
