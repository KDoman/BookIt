import PageBreadcrumb from "../components/common/PageBreadCrumb";
import UserAddressCard from "../components/UserProfile/UserAddressCard";
import UserBasicInformation from "../components/UserProfile/UserBasicInformation";

export default function UserProfile() {
  return (
    <>
      <PageBreadcrumb pageTitle="Profil" />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <div className="space-y-6">
          <h1 className="font-semibold text-xl">Witaj, NAZWA_FIRMY!</h1>
          <UserBasicInformation />
          <UserAddressCard />
        </div>
      </div>
    </>
  );
}
