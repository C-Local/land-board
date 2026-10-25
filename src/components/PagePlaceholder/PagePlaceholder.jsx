import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import styles from "./PagePlaceholder.module.css";

export default function PagePlaceholder({ icon, title, text }) {
  return (
    <div className={styles.placeholder}>
      <div className={styles.content}>
        <div className={styles.icon}>{icon}</div>
        <p className={styles.label}>Coming soon</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>{text}</p>
        <Link className={styles.link} href="/">
          <ArrowLeft size={16} strokeWidth={2} />
          Back to dashboard
        </Link>
      </div>
    </div>
  );
}
