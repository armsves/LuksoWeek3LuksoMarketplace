"use client";

import { UpProvider } from "@/components/upProvider";
import { Marketplace } from "@/components/Marketplace";
import { ProfileSearch } from "@/components/ProfileSearch";
import { useUpProvider } from "@/components/upProvider";
import { useState, useEffect } from "react";

// Import the LUKSO web-components library
let promise: Promise<unknown> | null = null;
if (typeof window !== "undefined") {
  promise = import("@lukso/web-components");
}

function MainContent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load web component here if needed
    promise?.then(() => {
      setMounted(true);
    });
  }, []);

  const { selectedAddress, setSelectedAddress, isSearching } = useUpProvider();

  if (!mounted) {
    return null; // or a loading placeholder
  }

  return (
    <>
      <div className={`${isSearching ? "hidden" : "block"}`}>
        <Marketplace selectedAddress={selectedAddress} />
      </div>

      <div className={`${!isSearching ? "hidden" : "block"}`}>
        <ProfileSearch onSelectAddress={setSelectedAddress} />
      </div>
    </>
  );
}

/**
 * Root component of the application that wraps the main content with the UpProvider context.
 * Serves as the entry point for the donation and profile search functionality.
 *
 * @component
 * @returns {JSX.Element} The wrapped MainContent component with UpProvider context
 */
export default function Home() {
  return (
    <UpProvider>
      <MainContent />
    </UpProvider>
  );
}
