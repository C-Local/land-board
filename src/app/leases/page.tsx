import { FileText } from "lucide-react";
import PagePlaceholder from "../../_components/PagePlaceholder/PagePlaceholder";

export default function LeasesPage() {
  return (
    <PagePlaceholder
      icon={<FileText size={30} strokeWidth={1.6} />}
      title="Leases"
      text="Active leases, the ones expiring soon, and everything that has already ended."
    />
  );
}
