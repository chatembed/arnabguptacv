"use client";

import { useState, useEffect } from "react";
import { encrypt, decrypt, generateUUID } from "@/lib/crypto";

const VISITOR_ID_KEY = "arnab-cv-visitor-id";

export function useVisitorId() {
  const [visitorId, setVisitorId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function initVisitorId() {
      try {
        // Check if we have an existing encrypted visitor ID
        const encryptedId = localStorage.getItem(VISITOR_ID_KEY);

        if (encryptedId) {
          // Decrypt and use existing ID
          const decryptedId = await decrypt(encryptedId);
          if (decryptedId) {
            setVisitorId(decryptedId);
            setIsLoading(false);
            return;
          }
        }

        // Generate new UUID and encrypt it
        const newId = generateUUID();
        const encryptedNewId = await encrypt(newId);
        localStorage.setItem(VISITOR_ID_KEY, encryptedNewId);
        setVisitorId(newId);
      } catch (error) {
        console.error("Error initializing visitor ID:", error);
        // Fallback to a simple UUID without encryption if crypto fails
        const fallbackId = generateUUID();
        setVisitorId(fallbackId);
      } finally {
        setIsLoading(false);
      }
    }

    initVisitorId();
  }, []);

  return { visitorId, isLoading };
}

