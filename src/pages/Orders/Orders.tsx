import React, { useState } from "react";
import { Table, Modal } from "antd";
import styles from "./Orders.module.scss";
import { useAppSelector } from "../../store";
import { OrderItem } from "../../store/ordersSlice";

export const Orders: React.FC = () => {
  const data: OrderItem[] = useAppSelector((state) => state.orders.items);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<OrderItem | null>(null);

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

  const handleRowClick = (record: OrderItem) => {
    setSelectedOrder(record);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <h2 className={styles.title}>Orders</h2>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
        rowKey="id"
        rowClassName={styles.tableRowHover}
        onRow={(record) => ({
          onClick: () => {
            handleRowClick(record);
          },
        })}
      />
      <Modal
        title="Order Details"
        visible={modalVisible}
        onCancel={closeModal}
        footer={null}
      >
        {selectedOrder && (
          <div className={styles.modalContent}>
            <p>ID: {selectedOrder.id}</p>
            <p>Date: {selectedOrder.date}</p>
            <p className={styles.customerInfo}>
              Customer ID: {selectedOrder.customerId}
            </p>
            <ul className={styles.itemsList}>
              {selectedOrder.items.map((item, index) => (
                <li key={index} className={styles.orderItem}>
                  <img src={item.photo} alt="" className={styles.fixedImage} />
                  <div className={styles.orderItemDetails}>
                    <h3>Title: {item.title}</h3>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p>
              Total Cost: <b>${selectedOrder.totalCost.toFixed(2)}</b>
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};
