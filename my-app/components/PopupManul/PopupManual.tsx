"use client"
import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const ModalManual: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
      Manual Search
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Are you sure you want to create a manual search</p>
      </Modal>
    </>
  );
};

export default ModalManual;