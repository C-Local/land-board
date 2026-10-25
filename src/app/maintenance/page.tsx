import { Wrench } from "lucide-react";
import PagePlaceholder from "../../components/PagePlaceholder/PagePlaceholder";

export default function MaintenancePage() {
  return (
    <PagePlaceholder
      icon={<Wrench size={30} strokeWidth={1.6} />}
      title="Maintenance"
      text="Log repairs, track what is still open, and keep notes on what the contractor found."
    />
  );
}
