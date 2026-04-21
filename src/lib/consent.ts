"use client";

import { useSyncExternalStore } from "react";

export const CONSENT_KEY = "nexora-cookie-consent";

export type CookieConsent = "accepted" | "declined" | "unset";

const listeners = new Set<() => void>();

function notifyListeners() {
  listeners.forEach((listener) => listener());
}

function subscribe(callback: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const handleStorage = (event: StorageEvent) => {
    if (event.key === null || event.key === CONSENT_KEY) {
      callback();
    }
  };

  listeners.add(callback);
  window.addEventListener("storage", handleStorage);

  return () => {
    listeners.delete(callback);
    window.removeEventListener("storage", handleStorage);
  };
}

function getSnapshot(): CookieConsent {
  if (typeof window === "undefined") {
    return "unset";
  }

  const value = window.localStorage.getItem(CONSENT_KEY);
  if (value === "accepted" || value === "declined") {
    return value;
  }

  return "unset";
}

export function useCookieConsent() {
  return useSyncExternalStore(subscribe, getSnapshot, () => "unset");
}

export function setCookieConsent(value: Exclude<CookieConsent, "unset">) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(CONSENT_KEY, value);
  notifyListeners();
}
