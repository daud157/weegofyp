/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)` | `/(auth)/signin` | `/(auth)/signup` | `/(driver)/driver` | `/(driver)/driver/Earnings` | `/(driver)/driver/Profile` | `/(driver)/driver/Settings` | `/(driver)/driver/driverMainHome` | `/(driver)/driver/home` | `/(home)` | `/(home)/BookingHistory` | `/(home)/BookingScreens` | `/(home)/BookingScreens/` | `/(home)/BookingScreens/Child2Screen` | `/(home)/ProfileScreen` | `/(home)/SettingsScreen` | `/(home)/WalletScreen` | `/(home)/explore` | `/(home)/home` | `/(passenger)` | `/(passenger)/(home)` | `/(passenger)/(home)/BookingHistory` | `/(passenger)/(home)/BookingScreens` | `/(passenger)/(home)/BookingScreens/` | `/(passenger)/(home)/BookingScreens/Child2Screen` | `/(passenger)/(home)/ProfileScreen` | `/(passenger)/(home)/SettingsScreen` | `/(passenger)/(home)/WalletScreen` | `/(passenger)/(home)/explore` | `/(passenger)/(home)/home` | `/(passenger)/BookingHistory` | `/(passenger)/BookingScreens` | `/(passenger)/BookingScreens/` | `/(passenger)/BookingScreens/Child1Screen` | `/(passenger)/BookingScreens/Child2Screen` | `/(passenger)/ProfileScreen` | `/(passenger)/SettingsScreen` | `/(passenger)/WalletScreen` | `/(passenger)/driverRegistration` | `/(passenger)/explore` | `/(passenger)/home` | `/BookingHistory` | `/BookingScreens` | `/BookingScreens/` | `/BookingScreens/Child1Screen` | `/BookingScreens/Child2Screen` | `/ProfileScreen` | `/SettingsScreen` | `/WalletScreen` | `/_sitemap` | `/driver` | `/driver/Earnings` | `/driver/Profile` | `/driver/Settings` | `/driver/driverMainHome` | `/driver/home` | `/driverRegistration` | `/explore` | `/home` | `/signin` | `/signup`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
