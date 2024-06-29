import React from "react";
import { Table } from "antd";
import styles from "./Orders.module.scss";
import { useAppSelector } from "../../store";
import { OrderItem } from "../../store/ordersSlice";

export const Orders: React.FC = () => {
  const data: OrderItem[] = useAppSelector((state) => state.orders.items);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 200,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      width: 200,
    },

    {
      title: "Customer ID",
      dataIndex: "customerId",
      key: "customerId",
      width: 200,
    },
    {
      title: "Total Cost",
      dataIndex: "totalCost",
      key: "totalCost",
      render: (totalCost: number) => `$${totalCost.toFixed(2)}`,
      width: 200,
    },
  ];

  return (
    <div>
      <h2 className={styles.title}>Orders</h2>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </div>
  );
};
