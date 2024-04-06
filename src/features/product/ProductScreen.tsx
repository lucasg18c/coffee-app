import React, { useEffect, useMemo, useRef, useState } from "react";
import { useAppNavigation, useAppRoute } from "@/hooks";
import { Page } from "@/common/components";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { Button, Text, useTheme } from "react-native-paper";
import { productService } from "@/data/mock";
import { Product } from "@/types";
import { Image, TouchableOpacity, View } from "react-native";
import { Colors } from "@/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const formatter = Intl.NumberFormat("en", { notation: "compact" });

const coffeeSizes = [250, 350, 450];

export default function ProductScreen() {
  const { params } = useAppRoute<"Product">();
  const { colors } = useTheme();
  const nav = useAppNavigation();

  const [product, setProduct] = useState<Product>();

  const bottomSheetRef = useRef<BottomSheet>(null);

  async function fetchProduct(id: number) {
    setProduct(await productService.getProductById(id));
  }

  useEffect(() => {
    fetchProduct(params.id);
  }, [params.id]);

  useEffect(() => {
    if (!!bottomSheetRef?.current) {
      setTimeout(() => {
        bottomSheetRef.current!.expand();
      }, 200);
    }
  }, [bottomSheetRef, product]);

  const snapPoints = useMemo(() => ["50%"], []);

  return (
    <Page backgroundColor={colors.background}>
      <TouchableOpacity
        style={{ position: "absolute", top: 64, start: 24, zIndex: 10 }}
        onPress={nav.goBack}
      >
        <MaterialIcons
          name="arrow-back-ios-new"
          size={24}
          color={colors.onSurface}
        />
      </TouchableOpacity>
      {!!product && (
        <>
          <Image
            source={product.image}
            style={{ width: "100%", height: "50%" }}
          />
          <BottomSheet
            ref={bottomSheetRef}
            index={-1}
            snapPoints={snapPoints}
            backgroundStyle={{ backgroundColor: colors.primaryContainer }}
            handleIndicatorStyle={{ backgroundColor: colors.onSurface }}
          >
            <BottomSheetScrollView
              contentContainerStyle={{ padding: 24, gap: 16 }}
            >
              <Text variant="titleLarge">{product.title}</Text>
              {!!product.description && (
                <Text variant="bodyMedium" style={{ color: colors.tertiary }}>
                  {product.description}
                </Text>
              )}

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <Text
                  variant="titleMedium"
                  style={{ color: Colors.highlight, letterSpacing: 1.2 }}
                >
                  ★ {product.rating}
                </Text>
                <Text variant="bodyMedium" style={{ color: colors.tertiary }}>
                  ({formatter.format(product.reviews)})
                </Text>
              </View>

              <View>
                <Text variant="titleSmall" style={{ color: colors.onSurface }}>
                  Size
                </Text>

                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  {coffeeSizes.map((size, key) => (
                    <TouchableOpacity
                      key={key}
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        paddingHorizontal: 24,
                        paddingVertical: 12,
                        gap: 8,
                        backgroundColor: Colors.chip,
                        borderRadius: 8,
                        marginTop: 8,
                        flex: 1,
                      }}
                    >
                      <MaterialCommunityIcons
                        name="coffee-outline"
                        size={20}
                        color={colors.tertiary}
                      />
                      <Text
                        variant="titleMedium"
                        style={{ color: colors.tertiary, letterSpacing: 0.3 }}
                      >
                        {size}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: 16,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: Colors.chip,
                      borderRadius: 50,
                      width: 32,
                      height: 32,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MaterialCommunityIcons
                      name="minus-thick"
                      size={18}
                      color={colors.onSurface}
                    />
                  </TouchableOpacity>

                  <Text variant="bodyLarge" style={{ color: colors.onSurface }}>
                    1
                  </Text>

                  <TouchableOpacity
                    style={{
                      backgroundColor: Colors.chip,
                      borderRadius: 50,
                      width: 32,
                      height: 32,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <MaterialCommunityIcons
                      name="plus"
                      size={18}
                      color={colors.onSurface}
                    />
                  </TouchableOpacity>
                </View>

                <Text variant="titleLarge" style={{ color: colors.onSurface }}>
                  ${product.price}
                </Text>
              </View>

              <Button mode="contained" style={{ marginTop: 16 }}>
                Add to Order
              </Button>
            </BottomSheetScrollView>
          </BottomSheet>
        </>
      )}
    </Page>
  );
}
