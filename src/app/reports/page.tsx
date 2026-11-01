import { BarChart3 } from "lucide-react";
import PagePlaceholder from "../../_components/PagePlaceholder/PagePlaceholder";

export default function ReportsPage() {
  return (
    <PagePlaceholder
      icon={<BarChart3 size={30} strokeWidth={1.6} />}
      title="Reports"
      text="Collections, occupancy, and vacancy over whatever period you want to look at."
    />
  );
}
