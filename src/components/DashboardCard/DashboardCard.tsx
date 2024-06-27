import { Card, Space, Statistic } from "antd";
import React from "react";

interface DashboardCardProps {
  icon: React.ReactNode;
  title: string;
  value: number;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  icon,
  title,
  value,
}) => {
  return (
    <Card size="default">
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
};
