import React, { useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import { Skeleton, Card, Image, Result, Button, Spin, Flex, Alert } from "antd";
import { DeleteOutlined, EditOutlined, EllipsisOutlined } from "@ant-design/icons";
import axios from "axios";
const { Meta } = Card;

const url = import.meta.env.VITE_BASE_URL;

const contentStyle = {
   padding: 50,
   background: "rgba(0, 0, 0, 0.05)",
   borderRadius: 4,
};
const content = <div style={contentStyle} />;

const About = () => {
   const { data, error, refetch } = useFetch("/products");
   const [loading, setLoading] = useState(false);

   const handleDelete = (id) => {
      setLoading(true);
      axios
         .delete(`${url}/products/${id}`)
         .then(() => {
            refetch();
         })
         .catch()
         .finally(() => setLoading(false));
   };

   return (
      <div className='container mx-auto mb-10'>
         {error ? (
            <Result
               status='404'
               title='404'
               subTitle='Error'
               extra={<Button type='primary'>Back Home</Button>}
            />
         ) : (
            <div className='grid grid-cols-4 gap-3'>
               {data?.map((item) => {
                  return (
                     <Card
                        className='overflow-hidden flex flex-col'
                        key={item.id}
                        hoverable
                        cover={<Image src={item.image} alt={item.name} />}
                        actions={[
                           <DeleteOutlined  onClick={() => handleDelete(item.id)} />,
                           <EditOutlined key='edit' />,
                           <EllipsisOutlined key='ellipsis' className='flex-1' />,
                        ]}
                     >
                        <Meta title={item.name} description={item.description} />
                     </Card>
                  );
               })}
            </div>
         )}

         {loading && <Skeleton />}
      </div>
   );
};

export default About;
