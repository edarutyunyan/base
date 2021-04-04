import React from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

type AddButtonProps = {
  title?: string;
  onClick: () => void;
};

export const AddButton: React.FC<AddButtonProps> = ({ title, onClick }: AddButtonProps) => {
  return (
    <Button icon={<PlusOutlined />} shape={'round'}>
      {title}
    </Button>
  );
};

AddButton.defaultProps = {
  title: undefined,
};
