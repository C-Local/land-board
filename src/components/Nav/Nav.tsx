import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  ChartColumn,
  CreditCard,
  FileText,
  LayoutDashboard,
  Search,
  Settings,
  Users,
  Wrench,
} from "lucide-react";
import logo from "../../assets/land_board_logo.png";
import CurrentMonth from "../CurrentMonth/CurrentMonth";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <>
      <nav className={styles.sidebar} aria-label="Main">
        <Link className={styles.branding} href="/">
          <Image
            className={styles.logo}
            src={logo}
            width={609}
            height={609}
            alt=""
          />
          <span className={styles.title}>Land Board</span>
        </Link>

        <Link className={styles.link} href="/">
          <LayoutDashboard
            className={styles.link_icon}
            size={18}
            strokeWidth={1.5}
          />
          <span className={styles.link_text}>Dashboard</span>
        </Link>
        <Link className={styles.link} href="/properties">
          <Building2 className={styles.link_icon} size={18} strokeWidth={1.5} />
          <span className={styles.link_text}>Properties</span>
        </Link>
        <Link className={styles.link} href="/tenants">
          <Users className={styles.link_icon} size={18} strokeWidth={1.5} />
          <span className={styles.link_text}>Tenants</span>
        </Link>
        <Link className={styles.link} href="/leases">
          <FileText className={styles.link_icon} size={18} strokeWidth={1.5} />
          <span className={styles.link_text}>Leases</span>
        </Link>
        <Link className={styles.link} href="/ledger">
          <CreditCard
            className={styles.link_icon}
            size={18}
            strokeWidth={1.5}
          />
          <span className={styles.link_text}>Ledger</span>
        </Link>
        <Link className={styles.link} href="/maintenance">
          <Wrench className={styles.link_icon} size={18} strokeWidth={1.5} />
          <span className={styles.link_text}>Maintenance</span>
        </Link>
        <Link className={styles.link} href="/reports">
          <ChartColumn
            className={styles.link_icon}
            size={18}
            strokeWidth={1.5}
          />
          <span className={styles.link_text}>Reports</span>
        </Link>
        <Link className={styles.link} href="/settings">
          <Settings className={styles.link_icon} size={18} strokeWidth={1.5} />
          <span className={styles.link_text}>Settings</span>
        </Link>
      </nav>

      <header className={styles.topbar}>
        <div className={styles.search_area} role="search">
          <Search className={styles.search_icon} size={30} strokeWidth={1.5} />
          <div className={styles.cursor} />
          <input
            className={styles.search}
            type="text"
            placeholder="Search properties, tenants, etc."
            aria-label="Search properties, tenants, and leases"
          />
        </div>
        <div className={styles.topbar_right}>
          <CurrentMonth className={styles.date} />
          <button type="button" className={styles.profile} aria-label="Account">
            CL
          </button>
        </div>
      </header>
    </>
  );
}
