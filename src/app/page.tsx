import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CalendarDays,
  CreditCard,
  FileText,
  House,
  MoreVertical,
  PieChart,
  User,
  Wallet,
  Wrench,
} from "lucide-react";
import Chart from "../components/Chart/Chart";
import Greeting from "../components/Greeting/Greeting";
import styles from "./page.module.css";

export default function DashboardPage() {
  return (
    <>
      <h1 className="sr_only">Dashboard</h1>

      <div className={styles.top_section}>
        <div className={styles.reminders}>
          <Greeting />

          <div className={styles.reminder_list}>
            <div className={styles.reminder_card}>
              <div className={styles.reminder_icon}>
                <CalendarDays size={26} strokeWidth={1.75} />
              </div>
              <div className={styles.reminder_text}>
                <p className={styles.reminder_title}>
                  Follow up with Oak Ridge House
                </p>
                <p className={styles.reminder_time}>
                  <span className={styles.pulse_ring}>
                    <span className={styles.pulse_dot} />
                  </span>
                  Today, 10:00 AM
                </p>
              </div>
              <button
                type="button"
                className={styles.reminder_menu}
                aria-label="Reminder options"
              >
                <MoreVertical size={18} strokeWidth={2} />
              </button>
            </div>

            <p className={styles.reminders_more}>+ 3 more</p>
          </div>

          <Link className={styles.reminders_link} href="#">
            View all reminders
            <ArrowRight size={17} strokeWidth={2} />
          </Link>
        </div>

        <div className={styles.neutral_stats}>
          <div className={styles.stat_card}>
            <div className={styles.stat_icon}>
              <Wallet size={20} strokeWidth={1.75} />
            </div>
            <div className={styles.stat_content}>
              <div className={styles.stat_top}>
                <p className={styles.stat_label}>Collected</p>
                <p className={styles.stat_people}>
                  <User size={13} strokeWidth={1.75} />
                  41
                </p>
              </div>
              <div className={styles.stat_bottom}>
                <p className={styles.stat_value}>$41.2k</p>
                <p className={styles.stat_delta}>
                  <span className={styles.delta_up}>↑ 8%</span>
                  <span className={styles.delta_note}>vs. last month</span>
                </p>
              </div>
            </div>
          </div>

          <div className={styles.stat_card}>
            <div className={styles.stat_icon}>
              <PieChart size={20} strokeWidth={1.75} />
            </div>
            <div className={styles.stat_content}>
              <div className={styles.stat_top}>
                <p className={styles.stat_label}>Occupancy</p>
                <p className={styles.stat_people}>
                  <User size={13} strokeWidth={1.75} />
                  58
                </p>
              </div>
              <div className={styles.stat_bottom}>
                <p className={styles.stat_value}>92%</p>
                <p className={styles.stat_delta}>
                  <span className={styles.delta_up}>↑ 2%</span>
                  <span className={styles.delta_note}>vs. last month</span>
                </p>
              </div>
            </div>
          </div>

          <div className={styles.stat_card}>
            <div className={styles.stat_icon}>
              <House size={20} strokeWidth={1.75} />
            </div>
            <div className={styles.stat_content}>
              <div className={styles.stat_top}>
                <p className={styles.stat_label}>Vacant</p>
              </div>
              <div className={styles.stat_bottom}>
                <p className={styles.stat_value}>7</p>
                <p className={styles.stat_delta}>
                  <span className={styles.delta_down}>+1</span>
                  <span className={styles.delta_note}>2 days ago</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.alert_stats}>
          <div className={`${styles.stat_card} ${styles.stat_alert}`}>
            <div className={styles.stat_icon}>
              <FileText size={20} strokeWidth={1.75} />
            </div>
            <div className={styles.stat_content}>
              <div className={styles.stat_top}>
                <p className={styles.stat_label}>Outstanding</p>
                <p className={styles.stat_people}>
                  <User size={13} strokeWidth={1.75} />6
                </p>
              </div>
              <div className={styles.stat_bottom}>
                <p className={`${styles.stat_value} ${styles.value_red}`}>
                  $6.8k
                </p>
                <p className={styles.stat_delta}>
                  <span className={styles.delta_down}>↑ 12%</span>
                  <span className={styles.delta_note}>vs. last month</span>
                </p>
              </div>
            </div>
          </div>

          <div className={`${styles.stat_card} ${styles.stat_warn}`}>
            <div className={styles.stat_icon}>
              <CalendarDays size={20} strokeWidth={1.75} />
            </div>
            <div className={styles.stat_content}>
              <div className={styles.stat_top}>
                <p className={styles.stat_label}>Expiring</p>
              </div>
              <div className={styles.stat_bottom}>
                <p className={styles.stat_value}>3</p>
                <p className={styles.stat_aside}>30+ days</p>
              </div>
            </div>
          </div>

          <div className={`${styles.stat_card} ${styles.stat_alert}`}>
            <div className={styles.stat_icon}>
              <Wrench size={20} strokeWidth={1.75} />
            </div>
            <div className={styles.stat_content}>
              <div className={styles.stat_top}>
                <p className={styles.stat_label}>Repair requests</p>
                <p className={styles.stat_people}>
                  <User size={13} strokeWidth={1.75} />9
                </p>
              </div>
              <div className={styles.stat_bottom}>
                <p className={`${styles.stat_value} ${styles.value_red}`}>12</p>
                <p className={styles.stat_delta}>
                  <span className={styles.delta_down}>↑ 33%</span>
                  <span className={styles.delta_note}>vs. last month</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.charts_section}>
        <div className={styles.chart_card}>
          <div className={styles.chart_top}>
            <h2 className={styles.chart_title}>Rent</h2>
            <div className={styles.legend}>
              <p className={styles.legend_item}>
                <span className={styles.dot_blue} />
                Collected
              </p>
              <p className={styles.legend_item}>
                <span className={styles.dot_purple} />
                Outstanding
              </p>
            </div>
          </div>
          <div className={styles.chart_area}>
            <Chart
              label="Rent collected and outstanding, March to September"
              labels={["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]}
              maxY={100}
              yTicks={[
                { value: 0, label: "$0" },
                { value: 25, label: "$25k" },
                { value: 50, label: "$50k" },
                { value: 75, label: "$75k" },
                { value: 100, label: "$100k" },
              ]}
              lines={[
                { color: "#236ace", values: [70, 76, 80, 84, 86, 86, 89] },
                { color: "#a8b8ec", values: [30, 26, 18, 15, 13, 16, 17] },
              ]}
            />
          </div>
        </div>

        <div className={styles.chart_card}>
          <div className={styles.chart_top}>
            <h2 className={styles.chart_title}>Occupancy</h2>
          </div>
          <div className={styles.chart_area}>
            <Chart
              label="Occupancy rate, March to September"
              labels={["Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]}
              maxY={100}
              yTicks={[
                { value: 0, label: "0%" },
                { value: 25, label: "25%" },
                { value: 50, label: "50%" },
                { value: 75, label: "75%" },
                { value: 100, label: "100%" },
              ]}
              lines={[
                { color: "#236ace", values: [82, 86, 88, 90, 91, 92, 93] },
              ]}
            />
          </div>
        </div>
      </div>

      <div className={styles.lists_section}>
        <div className={styles.list_card}>
          <div className={styles.list_top}>
            <h2 className={styles.list_title}>
              <CreditCard size={19} strokeWidth={1.75} />
              Recent Payments
            </h2>
            <Link className={styles.list_link} href="/ledger">
              View all
              <ArrowRight size={15} strokeWidth={2} />
            </Link>
          </div>

          <table className={styles.payments_table}>
            <thead>
              <tr>
                <th>Date</th>
                <th>Tenant</th>
                <th>Property</th>
                <th className={styles.table_center}>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.table_date}>Sep 1, 2026</td>
                <td>
                  <span className={styles.table_name}>Emily W.</span>
                </td>
                <td>
                  <span className={styles.table_name}>Pine View Townhomes</span>
                </td>
                <td className={styles.table_amount}>$2,200</td>
              </tr>
              <tr>
                <td className={styles.table_date}>Sep 1, 2026</td>
                <td>
                  <span className={styles.table_name}>Michael T.</span>
                </td>
                <td>
                  <span className={styles.table_name}>Oak Ridge House</span>
                </td>
                <td className={styles.table_amount}>$1,850</td>
              </tr>
              <tr>
                <td className={styles.table_date}>Aug 31, 2026</td>
                <td>
                  <span className={styles.table_name}>Sarah C.</span>
                </td>
                <td>
                  <span className={styles.table_name}>Maple Apartments</span>
                </td>
                <td className={styles.table_amount}>$2,100</td>
              </tr>
              <tr>
                <td className={styles.table_date}>Aug 30, 2026</td>
                <td>
                  <span className={styles.table_name}>David K.</span>
                </td>
                <td>
                  <span className={styles.table_name}>Cedar Flats</span>
                </td>
                <td className={styles.table_amount}>$1,950</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles.list_card}>
          <div className={styles.list_top}>
            <h2 className={styles.list_title}>
              <CalendarDays size={19} strokeWidth={1.75} />
              Upcoming Lease Expirations
            </h2>
            <Link className={styles.list_link} href="/leases">
              View all
              <ArrowRight size={15} strokeWidth={2} />
            </Link>
          </div>

          <div className={styles.rows}>
            <div className={styles.row}>
              <div className={styles.row_thumb}>
                <Building2 size={22} strokeWidth={1.75} />
              </div>
              <div className={styles.row_text}>
                <p className={styles.row_title}>Maple Apartments</p>
                <p className={styles.row_sub}>Unit 3 · Sarah Chen</p>
              </div>
              <p className={styles.row_meta}>Oct 15, 2026</p>
              <p className={`${styles.pill} ${styles.pill_red}`}>30 days</p>
            </div>

            <div className={styles.row}>
              <div className={styles.row_thumb}>
                <Building2 size={22} strokeWidth={1.75} />
              </div>
              <div className={styles.row_text}>
                <p className={styles.row_title}>Oak Ridge House</p>
                <p className={styles.row_sub}>Unit 1 · Michael Torres</p>
              </div>
              <p className={styles.row_meta}>Nov 1, 2026</p>
              <p className={`${styles.pill} ${styles.pill_yellow}`}>47 days</p>
            </div>

            <div className={styles.row}>
              <div className={styles.row_thumb}>
                <Building2 size={22} strokeWidth={1.75} />
              </div>
              <div className={styles.row_text}>
                <p className={styles.row_title}>Pine View Townhomes</p>
                <p className={styles.row_sub}>Unit 2 · Emily Watson</p>
              </div>
              <p className={styles.row_meta}>Nov 20, 2026</p>
              <p className={styles.pill}>86 days</p>
            </div>

            <div className={styles.row}>
              <div className={styles.row_thumb}>
                <Building2 size={22} strokeWidth={1.75} />
              </div>
              <div className={styles.row_text}>
                <p className={styles.row_title}>Cedar Flats</p>
                <p className={styles.row_sub}>Unit 4 · James Park</p>
              </div>
              <p className={styles.row_meta}>Dec 5, 2026</p>
              <p className={styles.pill}>84 days</p>
            </div>
          </div>
        </div>

        <div className={styles.list_card}>
          <div className={styles.list_top}>
            <h2 className={styles.list_title}>
              <Wrench size={19} strokeWidth={1.75} />
              Maintenance To-Do
            </h2>
            <Link className={styles.list_link} href="/maintenance">
              View all
              <ArrowRight size={15} strokeWidth={2} />
            </Link>
          </div>

          <div className={styles.rows}>
            <div className={styles.row}>
              <div className={styles.row_text}>
                <p className={styles.row_title}>Leaky kitchen faucet</p>
                <p className={styles.row_sub}>Maple Apartments · Unit 3</p>
              </div>
              <p className={styles.row_meta}>2 days ago</p>
              <p className={`${styles.pill} ${styles.pill_red}`}>High</p>
            </div>

            <div className={styles.row}>
              <div className={styles.row_text}>
                <p className={styles.row_title}>HVAC not cooling</p>
                <p className={styles.row_sub}>Oak Ridge House · Unit 1</p>
              </div>
              <p className={styles.row_meta}>4 days ago</p>
              <p className={`${styles.pill} ${styles.pill_yellow}`}>Medium</p>
            </div>

            <div className={styles.row}>
              <div className={styles.row_text}>
                <p className={styles.row_title}>Broken door handle</p>
                <p className={styles.row_sub}>Pine View Townhomes · Unit 2</p>
              </div>
              <p className={styles.row_meta}>5 days ago</p>
              <p className={`${styles.pill} ${styles.pill_yellow}`}>Medium</p>
            </div>

            <div className={styles.row}>
              <div className={styles.row_text}>
                <p className={styles.row_title}>Routine inspection</p>
                <p className={styles.row_sub}>Cedar Flats · James Park</p>
              </div>
              <p className={styles.row_meta}>1 week ago</p>
              <p className={styles.pill}>Low</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
