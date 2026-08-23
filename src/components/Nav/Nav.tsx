import styles from "./Nav.module.css";
import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/land_board_logo.jpg";
import {
  LayoutDashboard,
  Building2,
  Users,
  FileText,
  CreditCard,
  Wrench,
  Settings,
  Search,
} from "lucide-react";

function Nav() {
  // Logic for creating the current month and year on the topbar

  const dateData = new Date();

  const date =
    dateData.toLocaleString("default", { month: "long" }) +
    " " +
    dateData.getFullYear().toString();

  return (
    <div className={styles.component_wrapper}>
      <div className={styles.sidebar}>
        <div className={styles.branding}>
          <Image
            className={styles.logo}
            src={logo}
            height={609}
            width={609}
            alt="Land Board logo"
          ></Image>
          <h1 className={styles.title}>Land Board</h1>
        </div>

        <Link className={styles.link} href="/">
          <LayoutDashboard
            size={16}
            strokeWidth={1.5}
            className={styles.link_icon}
          ></LayoutDashboard>
          <p className={styles.link_text}>Dashboard</p>
        </Link>
        <Link className={styles.link} href="/">
          <Building2
            size={16}
            strokeWidth={1.5}
            className={styles.link_icon}
          ></Building2>
          <p className={styles.link_text}>Properties</p>
        </Link>
        <Link className={styles.link} href="/">
          <Users
            size={16}
            strokeWidth={1.5}
            className={styles.link_icon}
          ></Users>
          <p className={styles.link_text}>Tenants</p>
        </Link>
        <Link className={styles.link} href="/">
          <FileText
            size={16}
            strokeWidth={1.5}
            className={styles.link_icon}
          ></FileText>
          <p className={styles.link_text}>Leases</p>
        </Link>
        <Link className={styles.link} href="/">
          <CreditCard
            size={16}
            strokeWidth={1.5}
            className={styles.link_icon}
          ></CreditCard>
          <p className={styles.link_text}>Ledger</p>
        </Link>
        <Link className={styles.link} href="/">
          <Wrench
            size={16}
            strokeWidth={1.5}
            className={styles.link_icon}
          ></Wrench>
          <p className={styles.link_text}>Maintenance</p>
        </Link>
        <Link className={styles.link} href="/">
          <Settings
            size={16}
            strokeWidth={1.5}
            className={styles.link_icon}
          ></Settings>
          <p className={styles.link_text}>Settings</p>
        </Link>
      </div>
      <div className={styles.topbar}>
        <div className={styles.search_container}>
          <Search
            size={16}
            strokeWidth={1.5}
            className={styles.search_icon}
          ></Search>
          <input
            className={styles.search}
            type="text"
            placeholder="Search properties, tenants, etc."
          ></input>
        </div>
        <div className={styles.rightside_items}>
          <p className={styles.date}>{date}</p>
          <button className={styles.profile}>CL</button>
        </div>
      </div>
      {/* End of component */}
    </div>
  );
}

export default Nav;
