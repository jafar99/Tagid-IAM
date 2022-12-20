import React, { useState } from 'react';
import { Button, Table ,Form, Input, Space } from 'antd';
import '../CSS/Table.css'


const Tables = () => {

  const columns = [
    {
      title: 'Bar Code No',
      dataIndex: 'name',
    },
    {
      title: 'Count',
      dataIndex: 'Fcount',
    },
    {
      title: 'Expected Count',
      dataIndex: 'ECount',
    },
    {
        title: 'Status',
        dataIndex: 'Bstatus'

        
    }
  ];
  
  const[fcount,setFcount] = useState(100);
  const[ecount,setEcount] = useState(100);


  
  const data = [];
  for (let i = 0; i < 6; i++) {
    data.push({
      key: i,
      name: `245645 ${i}`,
      Fcount: fcount,
      ECount: ecount,
      Bstatus : (fcount === ecount) ?  " Appproved" : " Denied",
     
  
    });
  
   
  }


  return (
    <div>

<Form
      name="complex-form"
     
      justify="center" align="middle"
        style={{marginTop:"30px"}}
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
    >
      <Form.Item label="Box No" style={{display:"inline-table",marginRight:"20px"}}>
        <Space>
          <Form.Item
            name="BoxNo"
            
            rules={[
              {
                required: true,
                message: 'Box No is required',
              },
            ]}
          >
            <Input
              style={{
                
                width: 260,
              }}
              placeholder="Enter Box Number"
            />
          </Form.Item>
         
        </Space>
      </Form.Item>
     
      
      <Form.Item label=" " colon={false}  style={{display:"inline-table",marginLeft:"10px"}}>
        <Button type="primary" htmlType="submit" style={{}}>
          Submit
        </Button>
      </Form.Item>



    </Form>
      <div
        style={{
          marginBottom: 16,
        }}
      >
       
      </div>
      <Table style={{margin:"0px 40px"}}  columns={columns} dataSource={data} />
    </div>
  );
};
export default Tables;






































// // import * as React from "react";
// // import Table from "@mui/material/Table";
// // import TableBody from "@mui/material/TableBody";
// // import TableCell from "@mui/material/TableCell";
// // import TableContainer from "@mui/material/TableContainer";
// // import TableHead from "@mui/material/TableHead";
// // import TableRow from "@mui/material/TableRow";
// // import Paper from "@mui/material/Paper";
// // import "../CSS/Table.css";

// // function createData(name, trackingId, date, status) {
// //   return { name, trackingId, date, status };
// // }

// // const rows = [
// //   createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
// //   createData("Big Baza Bang ", 18908424, "2 March 2022", "Pending"),
// //   createData("Mouth Freshner", 18908424, "2 March 2022", "Approved"),
// //   createData("Cupcake", 18908421, "2 March 2022", "Delivered"),

// //   createData("Lasania Chiken Fri", 18908424, "2 March 2022", "Approved"),
// //   createData("Big Baza Bang ", 18908424, "2 March 2022", "Pending"),
// //   createData("Mouth Freshner", 18908424, "2 March 2022", "Approved"),
// //   createData("Cupcake", 18908421, "2 March 2022", "Delivered"),
  
// // ];


// // const makeStyle=(status)=>{
// //   if(status === 'Approved')
// //   {
// //     return {
// //       background: 'rgb(145 254 159 / 47%)',
// //       color: 'green',
// //     }
// //   }
// //   else if(status === 'Pending')
// //   {
// //     return{
// //       background: '#ffadad8f',
// //       color: 'red',
// //     }
// //   }
// //   else{
// //     return{
// //       background: '#59bfff',
// //       color: 'white',
// //     }
// //   }
// // }

// // export default function BasicTable() {
// //   return (
// //     <div>

        
// //       <div className="Table">
        
        


// //         <TableContainer
// //           component={Paper}
// //           style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
// //         >
// //           <Table sx={{ minWidth: 650 }} aria-label="simple table">
// //             <TableHead>
// //               <TableRow>
// //                 <TableCell>Bar Code</TableCell>
// //                 <TableCell align="left">Count </TableCell>
// //                 <TableCell align="left">Expected</TableCell>
// //                 <TableCell align="left"> Status</TableCell>
             
// //               </TableRow>
// //             </TableHead>
// //             <TableBody style={{ color: "white" }}>
// //               {rows.map((row) => (
// //                 <TableRow
// //                   key={row.name}
// //                   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
// //                 >
// //                   <TableCell component="th" scope="row">
// //                     {row.name}
// //                   </TableCell>
// //                   <TableCell align="left">{row.trackingId}</TableCell>
// //                   <TableCell align="left">{row.date}</TableCell>
// //                   <TableCell align="left">
// //                     <span className="status" style={makeStyle(row.status)}>{row.status}</span>
// //                   </TableCell>
             
// //                 </TableRow>
// //               ))}
// //             </TableBody>
// //           </Table>
// //         </TableContainer>
// //       </div>

// //       </div> 
// //   );
// // }
