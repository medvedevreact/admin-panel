import React from "react";
import { Table } from "antd";
import styles from "./Customers.module.scss";
import { useAppSelector } from "../../store";

export const Customers: React.FC = () => {
  const data = useAppSelector((state) => state.customers.items);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 200,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: 200,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      width: 325,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
      width: 200,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: 325,
    },
  ];

  return (
    <div>
      <h2 className={styles.title}>Customers</h2>
      <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }} />
    </div>
  );
};
