"use client";
import { useState, useEffect } from "react";
import BookingPDF from "./pdf-report-generator/page";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

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
          {/* PDF download */}
          <PDFDownloadLink document={<BookingPDF />} fileName="Booking pdf">
            {({ loading }) =>
              loading ? (
                <button>Loading Document....</button>
              ) : (
                <button className="bg-teal-500 py-2 px-3 rounded-full mt-5">
                  Download PDF
                </button>
              )
            }
          </PDFDownloadLink>

          {/* PDF view */}
          <div className="text-2xl my-5 text-center"> --- PDF View ---</div>
          <PDFViewer className="w-full h-screen">
            <BookingPDF />
          </PDFViewer>

          {/* web view */}
          <div className="text-2xl my-5 text-center"> --- Web View ---</div>
          <BookingPDF />
        </div>
      ) : null}
    </>
  );
}
