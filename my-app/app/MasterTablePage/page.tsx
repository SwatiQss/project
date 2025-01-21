import Cascade from "@/components/cascade/cascade";
import './page.css'
import MasterTable from "@/components/MasterTable/MasterTable";
import Button1 from "@/components/buttonSelect/buttonSelect";
export default function Home() {
  return (
    
       <div className='merge-page'>
     <p className='heading'>Master Name Index</p>
     <h3 className='sub-heading'>Master Name Record Merge</h3>
     <Cascade />
     <p className='form-heading'>Primary Master Name Record</p>
     <p className="table-heading">Select Name</p>
     <div className="table">
     <MasterTable/>
     </div>
     <div className='button-container'>
      <Button1/>
      </div>
     
    </div>
      
    
  );
}