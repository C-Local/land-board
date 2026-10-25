"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import useClientValue from "../../hooks/useClientValue";
import morningIcon from "../../assets/morning_icon.png";
import afternoonIcon from "../../assets/afternoon_icon.png";
import eveningIcon from "../../assets/evening_icon.png";
import styles from "./Greeting.module.css";

const icons = {
  morning: morningIcon,
  afternoon: afternoonIcon,
  evening: eveningIcon,
};

export function getPeriod(hour) {
  if (hour < 12) return "Morning";
  if (hour < 17) return "Afternoon";
  return "Evening";
}

export default function Greeting() {
  const period = useClientValue(() => getPeriod(new Date().getHours()), "");

  return (
    <div className={styles.greeting}>
      <Image
        className={styles.icon}
        src={icons[period] || morningIcon}
        alt=""
        width={48}
        height={48}
      />
      <p className={styles.text}>{period ? `${period}!` : "Hello"}</p>
      <button type="button" className={styles.add_button}>
        <Plus size={17} strokeWidth={2.25} />
        Add reminder
      </button>
    </div>
  );
}
