import React, { useState } from "react";

import { Badge, Drawer, List } from "antd";
import { BellFilled, ShoppingCartOutlined } from "@ant-design/icons";

import styles from "./Header.module.scss";
import bear from "../../assets/russian-bear.jpg";
import { useAppDispatch, useAppSelector } from "../../store";
import { OrderItem, resetNewOrders } from "../../store/ordersSlice";

export const Header: React.FC = () => {
  const newOrders = useAppSelector((state) => state.orders.newOrders);
  const orders = useAppSelector((state) => state.orders.items);
  const dispatch = useAppDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const updateLocalStorage = () => {
    localStorage.setItem("savedOrders", JSON.stringify(orders));
  };

  return (
    <header className={styles.header}>
      <img src={bear} alt="Bear" className={styles.bear} />
      <h1 className={styles.title}>Ivan's Dashboard</h1>
      <Badge count={newOrders.length}>
        <BellFilled
          className={styles.bell}
          onClick={() => {
            setIsOpen(!isOpen);
            updateLocalStorage();
          }}
        />
      </Badge>
      <Drawer
        open={isOpen}
        title="New Orders"
        placement="right"
        onClose={() => {
          setIsOpen(false);
          dispatch(resetNewOrders());
        }}
      >
        <List
          itemLayout="horizontal"
          dataSource={newOrders}
          renderItem={(item: OrderItem) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Badge dot>
                    <ShoppingCartOutlined
                      style={{ fontSize: "24px", color: "#1890ff" }}
                    />
                  </Badge>
                }
                title={`New Order with ID ${item.id}`}
                description={`Total Cost: $${item.totalCost.toFixed(2)}`}
              />
            </List.Item>
          )}
        />
      </Drawer>
    </header>
  );
};

export default Header;
