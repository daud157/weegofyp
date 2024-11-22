import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import MapView from "react-native-maps";
import { useTheme } from "@/context/ThemeContext"; // Import theme context

const PassengerMainHome = () => {
  const { theme, isDarkMode } = useTheme(); // Access theme and dark mode state

  const darkMapStyle = [
    {
      "elementType": "geometry",
      "stylers": [{ "color": "#212121" }],
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [{ "color": "#757575" }],
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [{ "color": "#212121" }],
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [{ "color": "#757575" }],
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [{ "color": "#303030" }],
    },
  ];

  const defaultMapStyle = []; // No custom styling for light mode

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      {/* Map */}
      <MapView
        style={styles.map}
        customMapStyle={isDarkMode ? darkMapStyle : defaultMapStyle} // Apply dark map style if dark mode is active
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />

      {/* Profile Circle */}
      <View
        style={[
          styles.profileCircle,
          { backgroundColor: theme.colors.card },
        ]}
      >
        <Image
          source={{
            uri: "https://randomuser.me/api/portraits/men/1.jpg",
          }}
          style={styles.profileImage}
        />
      </View>

      {/* Location Icons */}
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={[styles.iconButton, { backgroundColor: theme.colors.card }]}>
          <Text style={{ color: theme.colors.text }}>🔔</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.iconButton, { backgroundColor: theme.colors.card }]}>
          <Text style={{ color: theme.colors.text }}>⚙️</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.iconButton, { backgroundColor: theme.colors.card }]}>
          <Text style={{ color: theme.colors.text }}>➕</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomContainer}>
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[
              styles.locationButton,
              { backgroundColor: theme.colors.card, borderColor: theme.colors.primary },
            ]}
          >
            <Text style={{ color: theme.colors.text }}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.locationButton,
              { backgroundColor: theme.colors.card, borderColor: theme.colors.primary },
            ]}
          >
            <Text style={{ color: theme.colors.text }}>Office</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.locationButton,
              { backgroundColor: theme.colors.card, borderColor: theme.colors.primary },
            ]}
          >
            <Text style={{ color: theme.colors.text }}>Apartment</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          placeholder="Where would you go?"
          placeholderTextColor={theme.colors.text}
          style={[
            styles.input,
            { backgroundColor: theme.colors.card, borderColor: theme.colors.border, color: theme.colors.text },
          ]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { ...StyleSheet.absoluteFillObject },
  profileCircle: {
    position: "absolute",
    top: 100,
    alignSelf: "center",
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  iconsContainer: {
    position: "absolute",
    top: 50,
    right: 20,
    flexDirection: "column",
  },
  iconButton: {
    marginBottom: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    position: "absolute",
    bottom: 30,
    width: "100%",
    alignItems: "center",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    marginBottom: 20,
  },
  locationButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: "center",
  },
  input: {
    width: "90%",
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
  },
});

export default PassengerMainHome;
