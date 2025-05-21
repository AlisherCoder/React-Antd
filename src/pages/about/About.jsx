import React, { useState } from "react";
import { useFetch } from "@/hooks/useFetch";
import { Skeleton, Card, Image, Result, Button } from "antd";
import { DeleteOutlined, EditOutlined, EllipsisOutlined } from "@ant-design/icons";
import axios from "axios";
const { Meta } = Card;

const url = import.meta.env.VITE_BASE_URL;

const About = () => {
   const { data, error, loading } = useFetch("/products");
   const [refreshKey, setRefreshKey] = useState(0);

   const handleDelete = (id) => {
      axios
         .delete(`${url}/products/${id}`)
         .then(() => {
            console.log("ok");
            setRefreshKey((p) => p + 1);
         })
         .catch()
         .finally();
   };

   return (
      <div key={refreshKey} className='container mx-auto mb-10'>
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
                           <DeleteOutlined onClick={() => handleDelete(item.id)} />,
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
