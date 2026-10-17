import { AdminDashboard } from "@/components/admin-dashboard";
export const metadata = {
  title: "Admin prototype",
  robots: { index: false, follow: false },
};
export default function Admin() {
  return <AdminDashboard />;
}
