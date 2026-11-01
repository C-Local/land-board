import { Users } from "lucide-react";
import PagePlaceholder from "../../_components/PagePlaceholder/PagePlaceholder";

export default function TenantsPage() {
  return (
    <PagePlaceholder
      icon={<Users size={30} strokeWidth={1.6} />}
      title="Tenants"
      text="Who lives where, what they owe, and the full payment history behind every balance."
    />
  );
}
