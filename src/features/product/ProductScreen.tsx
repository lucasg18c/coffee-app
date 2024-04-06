import { Text } from "react-native";
import React from "react";
import { useAppRoute } from "@/hooks";
import { Page } from "@/common/components";

export default function ProductScreen() {
  const { params } = useAppRoute<"Product">();
  return (
    <Page>
      <Text>Product ID: {params.id}</Text>
    </Page>
  );
}
