import PageBreadcrumb from "../components/common/PageBreadCrumb";
import WorkersTab from "../components/WorkersTabComponents/WorkersTab";

export const Workers = () => {
  return (
    <div>
      <PageBreadcrumb pageTitle="Pracownicy" />
      <div className="min-h-screen rounded-2xl border border-gray-200 bg-white px-5 py-7 dark:border-gray-800 dark:bg-white/[0.03] xl:px-10 xl:py-12">
        <WorkersTab />
      </div>
    </div>
  );
};
