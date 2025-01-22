
import './page.css'
import MasterTable from "@/components/MasterTable/MasterTable";
import Form1 from '@/components/form2/form2';
import Button1 from '@/components/buttonSelect/buttonSelect';
import CaseCard from '@/components/Cards/casecard';
import { Row, Col } from 'antd';
export default function Home() {
    
  return (
    
    <div className="main">
    <p className="heading">Master Name Index</p>
    <h3 className="sub-heading">Master Name Record Merge</h3>
<Row gutter={[16, 16]} className="content-row">
 <Col xs={24} md={12} className="merge-page">
   <p className="table-heading">Primary Master Name Record</p>
  <div className='casecard'> <CaseCard /></div>
 </Col>
 <Col xs={24} md={12} className="table-head">
   <p className="table-heading">Comparable Record</p>
   <div className="form">
     <Form1/>
     </div>
 </Col>
</Row>
</div>
   
      
    
  );
}