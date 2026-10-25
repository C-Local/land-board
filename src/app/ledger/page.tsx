import { CreditCard } from "lucide-react";
import PagePlaceholder from "../../components/PagePlaceholder/PagePlaceholder";

export default function LedgerPage() {
  return (
    <PagePlaceholder
      icon={<CreditCard size={30} strokeWidth={1.6} />}
      title="Ledger"
      text="Every charge and payment in one filterable list, so nothing goes unaccounted for."
    />
  );
}
