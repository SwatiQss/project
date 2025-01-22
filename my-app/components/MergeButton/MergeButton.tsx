import React from 'react';
import { UsergroupAddOutlined   } from '@ant-design/icons';
import { Button, Flex, Tooltip } from 'antd';


const Button1: React.FC = () => (
  <Flex gap="small" vertical>
    
    <Flex wrap gap="small">
      
      <Button  icon={<UsergroupAddOutlined   style={{ fontWeight: 'bold', fontSize:"12px"}}/>} style={{backgroundColor:"white", color:"gray",fontWeight:"600"}}>Merge Together</Button>
      
      
      
    </Flex>
  </Flex>
);

export default Button1;