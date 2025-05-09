"use client";

import { Button } from "antd";

interface PrimaryButtonProps {
  children: React.ReactNode;
}

export default function PrimaryButton({ children }: PrimaryButtonProps) {
  return <Button type="primary">{children}</Button>;
}
