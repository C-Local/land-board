import { Building2 } from "lucide-react";
import PagePlaceholder from "../../_components/PagePlaceholder/PagePlaceholder";

export default function PropertiesPage() {
  return (
    <PagePlaceholder
      icon={<Building2 size={30} strokeWidth={1.6} />}
      title="Properties"
      text="Every building and unit you manage will live here, with occupancy and rent at a glance."
    />
  );
}
