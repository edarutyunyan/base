import React, { useEffect, useState } from 'react';
import { Button, Card, Form, Input, Select, Space } from 'antd';
import { createMenuCategory, getLunchMenus } from '../../../../Utils/API';

export const CategoryCreateForm: React.FC<any> = () => {
  const [menus, setMenus] = useState<{ label: string; value: string }[]>([]);

  useEffect(() => {
    getLunchMenus().then((data) => {
      if (data) {
        const result = Object.entries(data).map((item) => ({
          label: item[1].menuName,
          value: item[0],
        }));
        setMenus(result);
      }
    });
  }, []);

  const onFormSubmit = (data: any) => {
    createMenuCategory({
      categoryName: data.categoryName,
      menuId: data.selectedMenuId,
    }).then((response) => console.log(response));
  };

  return (
    <Card hoverable>
      <Form className={'LunchMenuCreateForm'} labelCol={{ span: 24 }} onFinish={onFormSubmit}>
        <Form.Item
          label={'Выберите меню, в которое вы хотите добавить категорию:'}
          wrapperCol={{ span: 6 }}
          required
          requiredMark={true}
          name={'selectedMenuId'}
        >
          <Select
            options={menus}
            defaultValue={menus[0]?.value || undefined}
            style={{ minWidth: 200 }}
          />
        </Form.Item>
        <Space>
          <Button>Добавить меню</Button>
        </Space>

        <Form.Item label={'Название категории'} name={'categoryName'}>
          <Input placeholder={'Например: "Горячее" или "Закуски"'} />
        </Form.Item>

        <Button htmlType={'submit'}>Добавить категорию</Button>
      </Form>
    </Card>
  );
};
