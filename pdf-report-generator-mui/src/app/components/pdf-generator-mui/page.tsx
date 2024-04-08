"use client";
import React from "react";
import { Page, Text, Document, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    fontWeight: "bold",
    justifyContent: "center",
    backgroundColor: "white",
    color: "black",
    margin: "10px",
    padding: "10px",
  },
  heading: {
    fontSize: 24,
    textAlign: "center",
    paddingVertical: 10,
    backgroundColor: "#90caf9",
  },
  subHeading: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 24,
    textAlign: "left",
  },
  detailsView: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    fontWeight: 500,
    color: "black",
    backgroundColor: "#ffeb3b",
    padding: 5,
  },

  detailsRow: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
  },

  details: {
    textAlign: "left",
    fontSize: 18,
    width: 384,
  },

  content: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },

  section:{
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#C6F6D5",
    paddingVertical:10,
  }
});

const PDFGenerator = () => {
  return (
    <Document>
      <Page size="A4" wrap>
        <View style={styles.container}>
          {/* PDF Heading */}
          <Text style={styles.heading}>Travala</Text>

          {/* PDF Heading */}

          {/* Booking details content */}
          <Text style={styles.subHeading}>Booking Details</Text>
          <View style={styles.detailsView}>
            {/* Check In */}
            <View style={styles.detailsRow}>
              <Text style={styles.details}>Check In</Text>
              <Text style={styles.details}>Monday 11, March, 2024</Text>
            </View>

            {/* Check out */}
            <View style={styles.detailsRow}>
              <Text style={styles.details}>Check Out</Text>
              <Text style={styles.details}>Monday 15, March, 2024</Text>
            </View>

            {/* Guests */}
            <View style={styles.detailsRow}>
              <Text style={styles.details}>Guests</Text>
              <Text style={styles.details}>2 Adults, 1 Child</Text>
            </View>

            {/* Rooms */}
            <View style={styles.detailsRow}>
              <Text style={styles.details}>Rooms</Text>
              <Text style={styles.details}>01</Text>
            </View>

            {/* Room Plan */}
            <View style={styles.detailsRow}>
              <Text style={styles.details}>Room Plan</Text>
              <Text style={styles.details}>
                President Luxury Double Room View NY City
              </Text>
            </View>
          </View>
          {/* Booking details content */}

          {/* Booked by content */}
          <Text style={styles.subHeading} break>
            Booked By
          </Text>

          <View style={styles.detailsView}>
            <View style={styles.content}>
              {/* View section 1 */}
              <View style={styles.section}>
                <Text style={styles.details}>Yohan Asitha</Text>
                <Text style={styles.details}>Yohanasitha98@gmail.com</Text>
                <Text style={styles.details}>+94775160907</Text>
              </View>

              {/* View section 2 */}
              <View style={styles.section}>
                <Text style={styles.details}>Yohan Asitha</Text>
                <Text style={styles.details}>Yohanasitha98@gmail.com</Text>
                <Text style={styles.details}>+94775160907</Text>
              </View>
            </View>
          </View>
          {/* Booked by content */}
        </View>
      </Page>
    </Document>
  );
};

export default PDFGenerator;
