import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Page from "@/common/components/Page";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Button, useTheme } from "react-native-paper";
import { useTranslation } from "react-i18next";

export default function WelcomeScreen() {
  const { t } = useTranslation();
  const nav = useNavigation();
  const theme = useTheme();

  function handleGoHome() {
    nav.navigate("Home" as never);
  }

  return (
    <Page backgroundColor="#47362F">
      <LinearGradient
        colors={["#38231A", "#2C1B14", "#3C2B2420"]}
        locations={[0, 0.8, 0.9]}
        style={{
          height: "35%",
          justifyContent: "flex-end",
          paddingStart: 50,
          paddingBottom: 25,
        }}
      >
        <Text
          style={{
            color: "#AF7F64",
            fontSize: 40,
            fontWeight: "500",
            width: "50%",
          }}
        >
          {t("welcome.heading")}
        </Text>
      </LinearGradient>

      <Image
        source={require("@assets/coffee_1.png")}
        style={{
          height: "40%",
          position: "absolute",
          top: "25%",
          start: 0,
          end: 0,
          zIndex: -1,
        }}
      />

      <LinearGradient
        colors={["#3D2C2520", "#47362F", "#47362F"]}
        locations={[0, 0.1, 1]}
        style={{
          height: "40%",
          position: "absolute",
          bottom: 0,
          start: 0,
          end: 0,
          padding: 50,
        }}
      >
        <Text
          style={{
            color: "#ffffff",
            flex: 1,
            fontWeight: "500",
            fontSize: 16,
            lineHeight: 22,
            letterSpacing: 0.5,
          }}
        >
          {t("welcome.intro")}
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button mode="contained" onPress={handleGoHome}>
            {t("welcome.getStarted")}
          </Button>
          <Button
            mode="text"
            onPress={handleGoHome}
            textColor={theme.colors.tertiary}
          >
            {t("welcome.skip")}
          </Button>
        </View>
      </LinearGradient>
    </Page>
  );
}
