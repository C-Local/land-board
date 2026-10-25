import { Settings } from "lucide-react";
import PagePlaceholder from "../../components/PagePlaceholder/PagePlaceholder";

export default function SettingsPage() {
  return (
    <PagePlaceholder
      icon={<Settings size={30} strokeWidth={1.6} />}
      title="Settings"
      text="Your account, your default lease terms, and how Land Board behaves day to day."
    />
  );
}
