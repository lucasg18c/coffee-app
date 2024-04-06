import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/features/home/HomeScreen";
import CartScreen from "@/features/cart/CartScreen";
import CheckoutScreen from "@/features/checkout/CheckoutScreen";
import PopularScreen from "@/features/popular/PopularScreen";
import ProductScreen from "@/features/product/ProductScreen";
import WelcomeScreen from "@/features/welcome/WelcomeScreen";
import { AppRoutesParamList } from "./routes";

const Stack = createNativeStackNavigator<AppRoutesParamList>();

export default function Router() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Popular" component={PopularScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Checkout" component={CheckoutScreen} />
    </Stack.Navigator>
  );
}
