import { Image, ScrollView, View } from "react-native";
import React from "react";
import Page from "@/common/components/Page";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, useTheme } from "react-native-paper";
import { useTranslation } from "react-i18next";

export type Product = {
  image: any;
  title: string;
  description?: string;
  price: number;
};

const featured: Product[] = [
  {
    title: "Espresso Brown Coffee",
    image: require("@assets/coffee_2.png"),
    price: 5.99,
    description: "Complex flavor",
  },
  {
    title: "Espresso Brown Coffee",
    image: require("@assets/coffee_3.png"),
    price: 5.99,
    description: "Complex flavor",
  },
  {
    title: "Espresso Brown Coffee",
    image: require("@assets/coffee_4.png"),
    price: 5.99,
    description: "Complex flavor",
  },
  {
    title: "Espresso Brown Coffee",
    image: require("@assets/coffee_2.png"),
    price: 5.99,
    description: "Complex flavor",
  },
  {
    title: "Espresso Brown Coffee",
    image: require("@assets/coffee_3.png"),
    price: 5.99,
    description: "Complex flavor",
  },
  {
    title: "Espresso Brown Coffee",
    image: require("@assets/coffee_4.png"),
    price: 5.99,
    description: "Complex flavor",
  },
  {
    title: "Espresso Brown Coffee",
    image: require("@assets/coffee_3.png"),
    price: 5.99,
    description: "Complex flavor",
  },
  {
    title: "Espresso Brown Coffee",
    image: require("@assets/coffee_4.png"),
    price: 5.99,
    description: "Complex flavor",
  },
  {
    title: "Espresso Brown Coffee",
    image: require("@assets/coffee_2.png"),
    price: 5.99,
    description: "Complex flavor",
  },
  {
    title: "Espresso Brown Coffee",
    image: require("@assets/coffee_3.png"),
    price: 5.99,
    description: "Complex flavor",
  },
  {
    title: "Espresso Brown Coffee",
    image: require("@assets/coffee_4.png"),
    price: 5.99,
    description: "Complex flavor",
  },
];

export default function HomeScreen() {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <Page backgroundColor="#47362F">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",
            padding: 16,
            alignItems: "center",
            gap: 24,
            marginTop: 24,
          }}
        >
          <View
            style={{
              backgroundColor: theme.colors.surfaceVariant,
              padding: 4,
              borderRadius: 50,
            }}
          >
            <MaterialIcons name="menu" size={24} color="white" />
          </View>
          <Text style={{ flex: 1, color: "#fff" }} variant="titleMedium">
            {t("home.greeting")}
          </Text>
          <MaterialIcons name="search" size={24} color="white" />
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 16,
            marginTop: 24,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: theme.colors.primary }}>Coffee</Text>
          <Text style={{ color: theme.colors.onSurface }}>Tea</Text>
          <Text style={{ color: theme.colors.onSurface }}>Juice</Text>
          <Text style={{ color: theme.colors.onSurface }}>Cake</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            marginTop: 16,
            flexGrow: 0,
          }}
          contentContainerStyle={{
            gap: 24,
            paddingHorizontal: 16,
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          {featured.map((product, key) => (
            <View
              key={key}
              style={{
                backgroundColor: theme.colors.surface,
                width: 168,
                borderRadius: 12,
                overflow: "hidden",
              }}
            >
              <Image
                source={product.image}
                style={{ width: 168, height: 122, resizeMode: "cover" }}
              />
              <View style={{ padding: 8 }}>
                <Text variant="titleLarge">{product.title}</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View style={{ flex: 1, marginTop: 4 }}>
                    <Text>{product.description}</Text>
                    <Text variant="titleMedium" style={{ marginTop: 4 }}>
                      ${product.price}
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: theme.colors.primary,
                      width: 24,
                      height: 24,
                      borderRadius: 50,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <MaterialIcons
                      name="calendar-today"
                      size={14}
                      color="white"
                    />
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>

        <Text
          variant="titleMedium"
          style={{ paddingHorizontal: 16, marginVertical: 32 }}
        >
          Popular
        </Text>

        <View style={{ paddingHorizontal: 16, gap: 16 }}>
          {featured.map((product, key) => (
            <View
              key={key}
              style={{
                flexDirection: "row",
                backgroundColor: theme.colors.surface,
                borderRadius: 12,
                alignItems: "center",
                paddingEnd: 16,
              }}
            >
              <Image
                source={product.image}
                style={{ height: 64, width: 64, borderRadius: 12 }}
              />

              <View style={{ flex: 1, marginStart: 16 }}>
                <Text variant="titleMedium">{product.title}</Text>
                <Text>{product.description}</Text>
              </View>

              <Text variant="titleMedium">${product.price}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </Page>
  );
}
