import React from "react";
import { Button, Checkbox, Form, Input, Typography } from "antd";
const { Title } = Typography;

const Login = () => {
   const onFinish = (values) => {
      console.log("Success:", values);
   };
   const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
   };

   return (
      <div className='flex justify-center pt-20'>
         <div className='max-w-[400px] w-full border border-gray-400 rounded-lg p-4'>
            <Title level={3}>Sign in</Title>

            <Form
               name='basic'
               initialValues={{ remember: true }}
               onFinish={onFinish}
               onFinishFailed={onFinishFailed}
               autoComplete='off'
               layout='vertical'
            >
               <Form.Item
                  label='Username'
                  name='username'
                  rules={[{ required: true, message: "Please input your username!" }]}
               >
                  <Input />
               </Form.Item>

               <Form.Item
                  label='Password'
                  name='password'
                  rules={[{ required: true, message: "Please input your password!" }]}
               >
                  <Input.Password />
               </Form.Item>

               <Form.Item name='remember' valuePropName='checked' label={null}>
                  <Checkbox>Remember me</Checkbox>
               </Form.Item>

               <Form.Item label={null}>
                  <Button type='primary' htmlType='submit'>
                     Submit
                  </Button>
               </Form.Item>
            </Form>
         </div>
      </div>
   );
};
export default React.memo(Login);
