import { useSyncExternalStore } from "react";

function subscribe(onChange) {
  const timer = setInterval(onChange, 60000);
  return () => clearInterval(timer);
}

export default function useClientValue(getValue, serverValue) {
  return useSyncExternalStore(subscribe, getValue, () => serverValue);
}
