import React from "react";
import styles from "./Footer.module.scss";
import { Typography } from "antd";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Typography.Link>+8 (800) 555 35-35</Typography.Link>
      <Typography.Link>Privacy Policy</Typography.Link>
      <Typography.Link>Terms of Use</Typography.Link>
    </footer>
  );
};
