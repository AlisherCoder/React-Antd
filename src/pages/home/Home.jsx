import React, { useState } from "react";
import { Button, Checkbox, Form, Input, InputNumber, Typography, Result } from "antd";
import TextArea from "antd/es/input/TextArea";
import axios from "axios";
const { Title } = Typography;

const url = import.meta.env.VITE_BASE_URL;

const Home = () => {
   const [done, setDone] = useState(false);
   const [loading, setLoading] = useState(false);

   const onFinish = (values) => {
      setLoading(true);
      axios
         .post(`${url}/products`, values)
         .then(() => {
            setDone(true);
         })
         .catch()
         .finally(() => {
            setLoading(false);
         });
   };
   const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
   };

   return (
      <div className='relative flex flex-col items-center justify-center pt-20'>
         {done && (
            <div className='w-[500px] h-[600px] grid place-items-center absolute top-[50%] left-[50%] transition-shadow -translate-x-[50%] -translate-y-[50%] z-10 bg-white'>
               <Result
                  status='success'
                  title='Successfully created!'
                  subTitle='Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait.'
                  extra={[
                     <Button onClick={() => setDone(false)} type='primary' key='console'>
                        Go Back
                     </Button>,
                     //  <Button key='buy'>Buy Again</Button>,
                  ]}
               />
            </div>
         )}
         <div className='max-w-[400px] w-full border-gray-400 rounded-lg p-4 shadow-[0px_0px_20px_3px_gray]'>
            <Title level={3}>Create product</Title>

            <Form
               name='basic'
               initialValues={{ remember: true }}
               onFinish={onFinish}
               onFinishFailed={onFinishFailed}
               autoComplete='off'
               layout='vertical'
            >
               <Form.Item
                  label='Product name'
                  name='name'
                  rules={[{ required: true, message: "Please input product name!" }]}
               >
                  <Input />
               </Form.Item>

               <Form.Item
                  label='Color'
                  name='color'
                  rules={[{ required: true, message: "Please input product color!" }]}
               >
                  <Input />
               </Form.Item>

               <Form.Item
                  label='Price'
                  name='price'
                  rules={[{ required: true, message: "Please input product price!" }]}
               >
                  <InputNumber />
               </Form.Item>

               <Form.Item
                  label='Description'
                  name='description'
                  rules={[{ required: true, message: "Please input product description!" }]}
               >
                  <TextArea rows={2} placeholder='maxLength is 4' maxLength={4} />
               </Form.Item>

               {/* <Form.Item name='remember' valuePropName='checked' label={null}>
                  <Checkbox>Remember me</Checkbox>
               </Form.Item> */}
               {/* <Upload /> */}

               <Form.Item className='mt-1.5' label={null}>
                  <Button loading={loading} type='primary' htmlType='submit'>
                     Create
                  </Button>
               </Form.Item>
            </Form>
         </div>
      </div>
   );
};
export default React.memo(Home);
