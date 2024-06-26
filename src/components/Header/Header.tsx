import React from "react";

import styles from "./Header.module.scss";
import bear from "../../assets/russian-bear.jpg";
import { BellFilled } from "@ant-design/icons";
import { Badge } from "antd";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img src={bear} alt="Bear" className={styles.bear} />
      <h1 className={styles.title}>Ivan's Dashboard</h1>
      <Badge count={5}>
        <BellFilled className={styles.bell} />
      </Badge>
    </header>
  );
};

export default Header;
