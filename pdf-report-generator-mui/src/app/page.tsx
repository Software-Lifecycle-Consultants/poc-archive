"use client";
import PDFGenerator from "./components/pdf-generator-mui/page";
import { PDFViewer, StyleSheet, PDFDownloadLink } from "@react-pdf/renderer";
import { useState, useEffect } from "react";

const styles = StyleSheet.create({
  webView: {
    marginTop: 10,
    backgroundColor: "white",
    color: "black",
    paddingHorizontal: 10,
    marginVertical: 10,
  },

  button: {
    backgroundColor: "#4FD1C5",
    padding: "8px 12px",
    borderRadius: 9999,
    marginTop: 20,
  },

  pdfView: {
    marginBottom: 10,
    marginTop: 10,
  },
});

export default function Home() {
  // internal error handling
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // below error was handled using react hooks in above

  // Internal error: Error: PDFDownloadLink is a web
  // specific API. You're either using this component on Node, or your
  // bundler is not loading react-pdf from the appropriate web build.

  return (
    <>
      {isClient ? (
        <div>
          {/* pdf download button */}
          <PDFDownloadLink document={<PDFGenerator />} fileName="Booking pdf">
            {({ loading }) =>
              loading ? (
                <button style={styles.button}>Loading Document....</button>
              ) : (
                <button style={styles.button}>Download PDF</button>
              )
            }
          </PDFDownloadLink>

          {/* PDF View */}
          <div
            style={{
              fontSize: 25,
              margin: "10px 10px",
              textAlign: "center",
            }}
          >
            -- PDF View --
          </div>
          <div style={styles.pdfView}>
            <PDFViewer width= "100%" height="600">
              <PDFGenerator />
            </PDFViewer>
          </div>

          {/* Web View */}
          <div
            style={{
              fontSize: 25,
              margin: "10px 10px",
              textAlign: "center",
            }}
          >
            -- Web View --
          </div>
          <div style={styles.webView}>
            <PDFGenerator />
          </div>
        </div>
      ) : null}
    </>
  );
}
