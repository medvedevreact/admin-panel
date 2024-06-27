import React from "react";
import { Table } from "antd";
import styles from "./Orders.module.scss";

interface Order {
  orderId: number;
  customerId: string;
  totalCost: number;
}

const Orders: React.FC = () => {
  const columns = [
    {
      title: "Order ID",
      dataIndex: "orderId",
      key: "orderId",
    },
    {
      title: "Customer ID",
      dataIndex: "customerId",
      key: "customerId",
    },
    {
      title: "Total Cost",
      dataIndex: "totalCost",
      key: "totalCost",
      render: (totalCost: number) => `$${totalCost.toFixed(2)}`,
    },
  ];

  const data: Order[] = [
    {
      orderId: 1,
      customerId: "ABC123",
      totalCost: 150.75,
    },
    {
      orderId: 2,
      customerId: "XYZ789",
      totalCost: 299.99,
    },
    {
      orderId: 3,
      customerId: "DEF456",
      totalCost: 199.5,
    },
  ];

  return (
    <div>
      <h2 className={styles.title}>Orders</h2>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default Orders;
