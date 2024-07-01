import React, { useEffect } from "react";
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
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchCustomersData } from "../../store/customersSlice";
import { fetchInventoryData } from "../../store/inventorySlice";
import { fetchOrdersData } from "../../store/ordersSlice";

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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface MonthlyRevenue {
  [month: string]: number;
}

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

const monthsNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const Dashboard: React.FC = () => {
  const inventoryQuantity = useAppSelector(
    (state) => state.inventory.totalQuantity
  );

  const orders = useAppSelector((state) => state.orders.items);
  const ordersQuantity = useAppSelector((state) => state.orders.totalQuantity);
  const ordersRevenue = useAppSelector((state) => state.orders.totalRevenue);
  const recentOrders = orders.slice(-3);
  const customersQuantity = useAppSelector(
    (state) => state.customers.customersQuantity
  );
  const dispatch = useAppDispatch();

  let monthlyRevenue: MonthlyRevenue = {};

  for (let i = 0; i < orders.length; i++) {
    const dateStr = orders[i].date;
    const date = new Date(dateStr);
    const month = date.getMonth();
    const monthName = monthsNames[month];

    if (monthlyRevenue.hasOwnProperty(monthName)) {
      monthlyRevenue[monthName] += orders[i].totalCost;
    } else {
      monthlyRevenue[monthName] = orders[i].totalCost;
    }
  }

  useEffect(() => {
    // Вызываем один раз при загрузке компонента
    dispatch(fetchInventoryData());
    dispatch(fetchCustomersData());
    dispatch(fetchOrdersData());
  }, []);

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
          value={inventoryQuantity}
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
          value={ordersQuantity}
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
          value={customersQuantity}
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
          value={parseFloat(ordersRevenue.toFixed(2))}
        />
      </Space>

      <div className={styles.content}>
        <div className={styles.tableContainer}>
          <h4 className={styles.subTitle}>Recent Orders</h4>
          <Table
            columns={columns}
            dataSource={recentOrders.reverse()}
            pagination={false}
          />
        </div>
        <div className={styles.chartContainer}>
          <Bar
            data={{
              labels: Object.keys(monthlyRevenue),
              datasets: [
                {
                  label: "Revenue",
                  data: Object.values(monthlyRevenue),
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                },
              ],
            }}
            options={options}
          />
        </div>
      </div>
    </div>
  );
};
