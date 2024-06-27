import React from "react";
import { Table } from "antd";
import styles from "./Customers.module.scss";

interface Customer {
  customerId: string;
  customerName: string;
  orders: number[]; // массив идентификаторов заказов
  email: string;
  phone: string;
  address: string;
}

const Customers: React.FC = () => {
  const columns = [
    {
      title: "Customer ID",
      dataIndex: "customerId",
      key: "customerId",
    },
    {
      title: "Customer Name",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Orders ID",
      dataIndex: "orders",
      key: "orders",
      render: (orders: number[]) => orders.join(", "),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  const data: Customer[] = [
    {
      customerId: "C001",
      customerName: "John Doe",
      orders: [1, 3, 5],
      email: "john.doe@example.com",
      phone: "+1 123 456 7890",
      address: "123 Main St, Anytown, USA",
    },
    {
      customerId: "C002",
      customerName: "Jane Smith",
      orders: [2, 4],
      email: "jane.smith@example.com",
      phone: "+1 234 567 8901",
      address: "456 Oak Ave, Sometown, USA",
    },
    // Добавьте ещё клиентов по аналогии
    {
      customerId: "C003",
      customerName: "Michael Johnson",
      orders: [6, 7],
      email: "michael.johnson@example.com",
      phone: "+1 345 678 9012",
      address: "789 Elm Blvd, Othertown, USA",
    },
    {
      customerId: "C004",
      customerName: "Emily Brown",
      orders: [8],
      email: "emily.brown@example.com",
      phone: "+1 456 789 0123",
      address: "987 Pine Dr, Anothertown, USA",
    },
    {
      customerId: "C005",
      customerName: "David Wilson",
      orders: [9, 10],
      email: "david.wilson@example.com",
      phone: "+1 567 890 1234",
      address: "654 Birch Ln, Lasttown, USA",
    },
    {
      customerId: "C006",
      customerName: "Sophia Martinez",
      orders: [11, 12],
      email: "sophia.martinez@example.com",
      phone: "+1 678 901 2345",
      address: "321 Cedar Rd, Finaltown, USA",
    },
    {
      customerId: "C007",
      customerName: "James Garcia",
      orders: [13],
      email: "james.garcia@example.com",
      phone: "+1 789 012 3456",
      address: "876 Maple Ct, Penultimatetown, USA",
    },
    {
      customerId: "C008",
      customerName: "Isabella Robinson",
      orders: [14, 15],
      email: "isabella.robinson@example.com",
      phone: "+1 890 123 4567",
      address: "543 Walnut Loop, Previoustown, USA",
    },
    {
      customerId: "C009",
      customerName: "Jacob Lee",
      orders: [16],
      email: "jacob.lee@example.com",
      phone: "+1 901 234 5678",
      address: "210 Pineapple Ave, Firsttown, USA",
    },
    {
      customerId: "C010",
      customerName: "Olivia Nguyen",
      orders: [17],
      email: "olivia.nguyen@example.com",
      phone: "+1 012 345 6789",
      address: "135 Strawberry Pl, Inbetweentown, USA",
    },
  ];

  return (
    <div>
      <h2 className={styles.title}>Customers</h2>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </div>
  );
};

export default Customers;
