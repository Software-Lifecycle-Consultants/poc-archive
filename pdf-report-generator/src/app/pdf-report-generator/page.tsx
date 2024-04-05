"use client";
import React from "react";
import { Page, Text, Document, View } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";

const tw = createTw({
  theme: {
    fontFamily: {
      sans: ["Comic Sans"],
    },
    extend: {
      colors: {
        custom: "#bada55",
      },
    },
  },
});



const BookingPDF = () => {
  return (
    <Document>
      <Page size="A4" wrap>
        <View
          style={tw(
            "flex flex-col font-semibold justify-center bg-white text-black mx-10 my-10"
          )}
        >
          {/* PDF Heading */}
          <Text style={tw("text-2xl text-center py-4 bg-blue-200 ")}>
            Travala
          </Text>
          {/* PDF Heading */}

          {/* Booking details content */}
          <Text style={tw("my-5 text-left text-2xl")}>Booking Details</Text>
          <View
            style={tw(
              "flex flex-col gap-4 font-medium text-black bg-yellow-200 p-5"
            )}
          >
            {/* Check In */}
            <View style={tw("flex flex-row bg-white")}>
              <Text style={tw("text-left text-lg w-96")}>Check In</Text>
              <Text style={tw("text-left w-96 text-lg")}>
                Monday 11, March, 2024
              </Text>
            </View>

            {/* Check out */}
            <View style={tw("flex flex-row bg-white")}>
              <Text style={tw("text-left text-lg w-96")}>Check Out</Text>
              <Text style={tw("text-left w-96 text-lg")}>
                Monday 15, March, 2024
              </Text>
            </View>

            {/* Guests */}
            <View style={tw("flex flex-row bg-white")}>
              <Text style={tw("text-left text-lg w-96")}>Guests</Text>
              <Text style={tw("text-left w-96 text-lg")}>
                2 Adults, 1 Child
              </Text>
            </View>

            {/* Rooms */}
            <View style={tw("flex flex-row bg-white")}>
              <Text style={tw("text-left text-lg w-96")}>Rooms</Text>
              <Text style={tw("text-left w-96 text-lg")}>01</Text>
            </View>

            {/* Room Plan */}
            <View style={tw("flex flex-row bg-white")}>
              <Text style={tw("text-left text-lg w-96")}>Room Plan</Text>
              <Text style={tw("text-left w-96 text-lg")}>
                President Luxury Double Room View NY City
              </Text>
            </View>
          </View>
          {/* Booking details content */}

          {/* Booked by content */}
          <Text style={tw("my-5 text-left text-2xl")} break>
            Booked By
          </Text>

          <View style={tw("flex font-medium text-black bg-yellow-200 p-5")}>
            <View style={tw("flex flex-row gap-2")}>
              {/* View section 1 */}
              <View style={tw("flex flex-col bg-green-200")}>
                <Text style={tw("text-left text-lg w-96")}>Yohan Asitha</Text>
                <Text style={tw("text-left w-96 text-lg")}>
                  Yohanasitha98@gmail.com
                </Text>
                <Text style={tw("text-left w-96 text-lg")}>+94775160907</Text>
              </View>

              {/* View section 2 */}
              <View style={tw("flex flex-col bg-green-200")}>
                <Text style={tw("text-left text-lg w-96")}>Yohan Asitha</Text>
                <Text style={tw("text-left w-96 text-lg")}>
                  Yohanasitha98@gmail.com
                </Text>
                <Text style={tw("text-left w-96 text-lg")}>+94775160907</Text>
              </View>
            </View>
          </View>
          {/* Booked by content */}
        </View>
      </Page>
    </Document>
  );
};

export default BookingPDF;
