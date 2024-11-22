/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)` | `/(auth)/signin` | `/(auth)/signup` | `/(driver)/driver` | `/(driver)/driver/Earnings` | `/(driver)/driver/Profile` | `/(driver)/driver/Settings` | `/(driver)/driver/driverMainHome` | `/(driver)/driver/home` | `/(passenger)` | `/(passenger)/BookingScreen` | `/(passenger)/PassengerMainHome` | `/(passenger)/ProfileScreen` | `/(passenger)/SettingsScreen` | `/(passenger)/WalletScreen` | `/(passenger)/driverRegistration` | `/(passenger)/explore` | `/(passenger)/home` | `/BookingScreen` | `/PassengerMainHome` | `/ProfileScreen` | `/SettingsScreen` | `/WalletScreen` | `/_sitemap` | `/driver` | `/driver/Earnings` | `/driver/Profile` | `/driver/Settings` | `/driver/driverMainHome` | `/driver/home` | `/driverRegistration` | `/explore` | `/home` | `/signin` | `/signup`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
