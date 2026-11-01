"use client";

import useClientValue from "../../_hooks/useClientValue";

function getMonth() {
  return new Date().toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });
}

export default function CurrentMonth({ className }) {
  const month = useClientValue(getMonth, "");
  return <p className={className}>{month}</p>;
}
