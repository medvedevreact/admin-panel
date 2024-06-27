import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Space, Table } from "antd";
import { DashboardCard } from "../../components/DashboardCard/DashboardCard";
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";

import styles from "./Dashboard.module.scss";

const columns = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
];

const data = [
  {
    key: "1",
    title: "Product A",
    quantity: 2,
    price: "$50",
  },
  {
    key: "2",
    title: "Product B",
    quantity: 3,
    price: "$75",
  },
  {
    key: "3",
    title: "Product C",
    quantity: 1,
    price: "$100",
  },
];

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Monthly revenue",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const dataChart = {
  labels,
  datasets: [
    {
      label: "Revenue",
      data: [500, 600, 700, 800, 900, 1000, 1100],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

export const Dashboard: React.FC = () => {
  return (
    <div>
      <h2 className={styles.title}>Dashboard</h2>
      <Space direction="horizontal" style={{ marginBottom: 40 }}>
        <DashboardCard
          icon={
            <ShoppingOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.5)",
                borderRadius: 22,
                fontSize: 24,
                padding: 10,
              }}
            />
          }
          title={"Inventory"}
          value={100}
        />
        <DashboardCard
          icon={
            <ShoppingCartOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(160,32,240,0.25)",
                borderRadius: 22,
                fontSize: 24,
                padding: 10,
              }}
            />
          }
          title={"Orders"}
          value={100}
        />
        <DashboardCard
          icon={
            <UserOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 22,
                fontSize: 24,
                padding: 10,
              }}
            />
          }
          title={"Customer"}
          value={100}
        />
        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 22,
                fontSize: 24,
                padding: 10,
              }}
            />
          }
          title={"Revenue"}
          value={100}
        />
      </Space>

      <div className={styles.content}>
        <div className={styles.tableContainer}>
          <h4 className={styles.subTitle}>Recent Orders</h4>
          <Table columns={columns} dataSource={data} pagination={false} />
        </div>
        <div className={styles.chartContainer}>
          <Bar data={dataChart} options={options} />
        </div>
      </div>
    </div>
  );
};
