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
import PagerView from "react-native-pager-view";

const formatter = Intl.NumberFormat("en", { notation: "compact" });

const coffeeSizes = [250, 350, 450];

const MAX_AMOUNT = 5;
const MIN_AMOUNT = 1;

type PagerPosition = {
  position: number;
  offset: number;
};

export default function ProductScreen() {
  const { params } = useAppRoute<"Product">();
  const { colors } = useTheme();
  const nav = useAppNavigation();

  const [product, setProduct] = useState<Product>();
  const [size, setSize] = useState(coffeeSizes[0]);
  const [amount, setAmount] = useState(1);

  const [pagerPosition, setPagerPosition] = useState<PagerPosition>({
    offset: 0,
    position: 0,
  });

  const bottomSheetRef = useRef<BottomSheet>(null);

  async function fetchProduct(id: number) {
    setProduct(await productService.getProductById(id));
  }

  function addAmount(value: number) {
    const res = amount + value;
    if (MIN_AMOUNT <= res && res <= MAX_AMOUNT) {
      setAmount(amount + value);
    }
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
          <View style={{ height: "50%", position: "relative" }}>
            <PagerView
              onPageScroll={(e) => setPagerPosition(e.nativeEvent)}
              initialPage={0}
              style={{ flex: 1 }}
            >
              {product.images.map((image, key) => (
                <View key={key}>
                  <Image
                    source={image}
                    style={{ width: "100%", height: "100%" }}
                  />
                </View>
              ))}
            </PagerView>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 12,
                position: "absolute",
                bottom: 40,
                start: 0,
                end: 0,
                // zIndex: 10,
              }}
            >
              {product.images.map((_, key) => (
                <View
                  key={key}
                  style={{
                    width: key === pagerPosition.position ? 16 : 8,
                    height: 8,
                    borderRadius: 8,
                    backgroundColor: colors.onSurface,
                  }}
                />
              ))}
            </View>
          </View>
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
                  {coffeeSizes.map((_size, key) => {
                    const isSelected = size === _size;

                    return (
                      <TouchableOpacity
                        key={key}
                        onPress={() => setSize(_size)}
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
                          borderWidth: isSelected ? 2 : undefined,
                          borderColor: colors.primary,
                        }}
                      >
                        <MaterialCommunityIcons
                          name="coffee-outline"
                          size={20}
                          color={isSelected ? colors.primary : colors.tertiary}
                        />
                        <Text
                          variant="titleMedium"
                          style={{
                            color: isSelected
                              ? colors.primary
                              : colors.tertiary,
                            letterSpacing: 0.3,
                          }}
                        >
                          {_size}
                        </Text>
                      </TouchableOpacity>
                    );
                  })}
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
                    onPress={() => addAmount(-1)}
                    style={{
                      backgroundColor:
                        amount === MIN_AMOUNT ? "#5A5A5A" : Colors.chip,

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
                      color={
                        amount === MIN_AMOUNT
                          ? colors.tertiary
                          : colors.onSurface
                      }
                    />
                  </TouchableOpacity>

                  <Text variant="bodyLarge" style={{ color: colors.onSurface }}>
                    {amount}
                  </Text>

                  <TouchableOpacity
                    onPress={() => addAmount(1)}
                    style={{
                      backgroundColor:
                        amount === MAX_AMOUNT ? "#5A5A5A" : Colors.chip,
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
                      color={
                        amount === MAX_AMOUNT
                          ? colors.tertiary
                          : colors.onSurface
                      }
                    />
                  </TouchableOpacity>
                </View>

                <Text variant="titleLarge" style={{ color: colors.onSurface }}>
                  ${parseFloat((product.price * amount).toFixed(2))}
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
