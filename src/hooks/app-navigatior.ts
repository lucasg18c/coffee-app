import { AppRoutesParamList } from "@/routes";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AppNavigationProp = NativeStackNavigationProp<AppRoutesParamList>;

export function useAppNavigation() {
  return useNavigation<AppNavigationProp>();
}

export function useAppRoute<T extends keyof AppRoutesParamList>() {
  return useRoute<RouteProp<AppRoutesParamList, T>>();
}
