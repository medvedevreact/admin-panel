import React from "react";
import { Table, Image, Rate } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "./Inventory.module.scss";

interface InventoryItem {
  key: string;
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
    render: (text: string) => <Image src={text} width={50} />,
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (price: number) => `$${price.toFixed(2)}`,
  },
  {
    title: "Rating",
    dataIndex: "rating",
    key: "rating",
    render: (rating: number) => <Rate disabled defaultValue={rating} />,
  },
  {
    title: "Quantity",
    dataIndex: "quantity",
    key: "quantity",
  },
  {
    title: "Brand",
    dataIndex: "brand",
    key: "brand",
  },
  {
    title: "Category",
    dataIndex: "category",
    key: "category",
  },
];

const data: InventoryItem[] = [
  {
    key: "1",
    photo: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg",
    title: "Apple iPhone 13",
    price: 999.99,
    rating: 4.5,
    quantity: 50,
    brand: "Apple",
    category: "Smartphones",
  },
  {
    key: "2",
    photo: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg",
    title: "Samsung Galaxy S21",
    price: 799.99,
    rating: 4,
    quantity: 75,
    brand: "Samsung",
    category: "Smartphones",
  },
  {
    key: "3",
    photo: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg",
    title: "Sony WH-1000XM4",
    price: 349.99,
    rating: 5,
    quantity: 150,
    brand: "Sony",
    category: "Headphones",
  },
  {
    key: "4",
    photo: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg",
    title: "Dell XPS 13",
    price: 1299.99,
    rating: 4.7,
    quantity: 30,
    brand: "Dell",
    category: "Laptops",
  },
  {
    key: "5",
    photo: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SL1500_.jpg",
    title: "Apple Watch Series 7",
    price: 399.99,
    rating: 4.8,
    quantity: 100,
    brand: "Apple",
    category: "Wearables",
  },
];

export const Inventory: React.FC = () => {
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
