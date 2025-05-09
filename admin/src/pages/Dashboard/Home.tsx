import EcommerceMetrics from "../../components/ecommerce/EcommerceMetrics";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 ">
          <EcommerceMetrics />
        </div>
      </div>
    </>
  );
}
