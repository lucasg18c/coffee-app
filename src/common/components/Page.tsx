import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export interface PageProps {
  children: React.ReactNode;
  backgroundColor?: string;
}

export default function Page(props: PageProps) {
  return (
    <SafeAreaView
      style={{ backgroundColor: props.backgroundColor, height: "100%" }}
    >
      <StatusBar style="light" />
      {props.children}
    </SafeAreaView>
  );
}
