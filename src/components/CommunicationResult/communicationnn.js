import React,{useState,useEffect} from 'react';
import { createRoot } from 'react-dom';
import {  Space, Table, Tag  } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export function Check(){
  const { Column, ColumnGroup } = Table;
  const [products, setProducts] = useState([]);
    
  useEffect(() => {
      fetchProducts();
    }, []);
    const fetchProducts = () => {
      axios
        .get('http://192.168.253.177:8080/kgm/get/not/null/marks')
        .then((res) => {
          console.log(res);
          setProducts(res.data.jData);

        })
        .catch((err) => {
          console.log(err);
        });
       
    };
  return(
    <>
    <Table dataSource={products}>
    <Column title="Si.NO" dataIndex="age" key="age" />
   
    <ColumnGroup title="Name">
      <Column title="First Name" dataIndex="firstName" key="firstName" />
      <Column title="Last Name" dataIndex="lastName" key="lastName" />
    </ColumnGroup>
    <ColumnGroup title="Numerical Ability">
      <Column title="Basic" dataIndex="numericBasic" key="numericBasic" />
      <Column title="Intermediate" dataIndex="numericIntermediate" key="numericIntermediate" />
      <Column title="Advance" dataIndex="numericAdvanced" key="numericAdvanced" />
    </ColumnGroup>
    <ColumnGroup title="Verbal Ability">
      <Column title="Basic" dataIndex="verbalBasic" key="verbalBasic" />
      <Column title="Intermediate" dataIndex="verbalIntermediate" key="verbalIntermediate" />
      <Column title="Advance" dataIndex="verbalAdvanced" key="verbalAdvanced" />
    </ColumnGroup>
    <Column title="Communication" dataIndex="communication" key="communication"  />
    
  </Table>

    </>
  );
}