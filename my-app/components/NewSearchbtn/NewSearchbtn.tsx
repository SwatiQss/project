import React from 'react';
import { CheckCircleOutlined,SearchOutlined  } from '@ant-design/icons';
import { Button, Flex, Tooltip } from 'antd';


const Button1: React.FC = () => (
  <Flex gap="small" vertical>
    
    <Flex wrap gap="small">
      
      <Button  icon={<SearchOutlined  style={{ fontWeight: '600',}}/>} style={{backgroundColor:"#4CC9FE", color:"#fff",fontWeight:"600"}}>New Search</Button>
      
      
      
    </Flex>
  </Flex>
);

export default Button1;