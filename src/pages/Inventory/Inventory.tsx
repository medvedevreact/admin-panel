import React from "react";
import { Table, Image, Rate } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "./Inventory.module.scss";

import { useAppSelector } from "../../store";

interface InventoryItem {
  id: string;
  photo: string;
  title: string;
  price: number;
  rating: number;
  quantity: number;
  brand: string;
  category: string;
}

const columns: ColumnsType<InventoryItem> = [
  {
    title: "Photo",
    dataIndex: "photo",
    key: "photo",
    width: 80, // Устанавливаем фиксированную ширину
    render: (text: string) => (
      <Image src={text} className={styles.fixedImage} />
    ),
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: 250, // Устанавливаем фиксированную ширину
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    width: 100, // Устанавливаем фиксированную ширину
    render: (price: number) => `$${price.toFixed(2)}`,
  },
  {
    title: "Rating",
    dataIndex: "rating",
    key: "rating",
    width: 175, // Устанавливаем фиксированную ширину
    render: (rating: number) => <Rate disabled defaultValue={rating} />,
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
    width: 100, // Устанавливаем фиксированную ширину
  },
  {
    title: "Brand",
    dataIndex: "brand",
    key: "brand",
    width: 150, // Устанавливаем фиксированную ширину
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
    width: 150, // Устанавливаем фиксированную ширину
  },
];

export const Inventory: React.FC = () => {
  const data = useAppSelector((state) => state.inventory.items);

  return (
    <div>
      <h2 className={styles.title}>Inventory</h2>
      <Table
        className={styles.customTable}
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};
