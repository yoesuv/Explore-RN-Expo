import { QueryProvider } from "@/src/query-provider";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <QueryProvider>
      <Stack
        screenOptions={({ route }) => ({
          headerShown: route.name !== "home",
        })}
      />
    </QueryProvider>
  );
}
