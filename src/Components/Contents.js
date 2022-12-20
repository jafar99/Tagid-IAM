import { Button, Space } from 'antd';
import React, { useState,  } from 'react';
import '../CSS/Contents.css'
import { Divider, Table, Form, Input, Spin } from 'antd';
import axios from 'axios';



const columns = [
  {
    title: 'Barcode',
    dataIndex: 'product_code',
  },
  {
    title: 'Expected Count',
    dataIndex: 'count',
    render(text, record) {
      return(<b style={{ fontsize: "100px" }}>{text}</b>)
        
    }
  },
  {
    title: 'FoundCount',
    dataIndex: 'found_count',
    render(text, record) {
      return(<b style={{ fontsize: "100px" }}>{text}</b>)
        
    }
  },
];




const Contents = () => {

  const [data, setData] = useState([])
  const [loading, setloading] = useState(false)



  function onBoxSubmit(value) {
    let datalist = []

    axios.get('/tunnel-route/get_box_details', {
      params: {
        box_id: value.boxnumber
      }
    })
      .then(res => {
        setloading(true)
        for (let i = 0; i < res.data.data.length; i++) {
          res.data.data[i]["found_count"] = 5
          datalist.push(res.data.data[i])
        }
        setData(datalist)
        setloading(false)

      })
      .catch(err => {
        console.log(err)
      })




  }


  function refreshPage() {
    window.location.reload(true);
  }
  return (
    <div className='Box'>
      <Form className='input-form'
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}

        // onFinish={clickHandler}
        onFinish={onBoxSubmit}
        autoComplete="off"
      >
        <Form.Item className='box-label'
          label="Box/Reference Number  "
          name="boxnumber"
          rules={[
            {
              required: true,
              message: 'Box/Reference Number!',
            },
          ]}
        >
          <Input  className='input' />
        </Form.Item>


        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>


      <Divider />


      {loading ? <Spin /> :
        <>
          <Table id='myTable'
            columns={columns}
            dataSource={data}
            rowKey={record => record.barcode}
            // rowClassName={color}
            // rowClassName={(record) => {putRowColourDetails(record.count,record.found_count)}}
            rowClassName={(record, index)=> {
              var colorName = 'ant-table10';

              if (record.found_count !== record.count) {
                colorName = 'ant-table10';
              }
              else if (record.found_count === record.count) {
                colorName = 'ant-table90';
              }
              return colorName;          
            }}
            scroll={{y:600}}
            defaultPageSize={50}
          />

          <Space wrap className='scanBtn'> 
            <Button type='primary' value='Reload Page' onClick={refreshPage} className='scan'> Rescan</Button>
            <Button type='primary' className='submit'> Submit </Button>
          </Space>
        </>
      }


    </div>
  );
}


export default Contents;
