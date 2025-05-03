import PageBreadcrumb from "../components/common/PageBreadCrumb";
import UserBasicInformation from "../components/UserProfile/UserBasicInformation";
import FAKE_LOGO from "../../public/favicon.png";
import UserAddressInformation from "../components/UserProfile/UserAddressInformation";
import { useState } from "react";

export interface FakeAccount {
  companyLogo: string;
  companyName: string;
  addressEmail: string;
  companyWebsite: string;
  companyPhone: string;
  companySocialLinks: {
    instagram: string;
    facebook: string;
    x: string;
    linkedin: string;
  };
  companyAddress: {
    country: string;
    city: string;
    zipCode: string;
    street: string;
    streetNumber: number;
  };
}
export default function UserProfile() {
  const [fakeAccount, setFakeAccount] = useState<FakeAccount>({
    companyLogo: FAKE_LOGO,
    companyName: "BarberKing",
    addressEmail: "barberking@gmail.com",
    companyWebsite: "example.com",
    companyPhone: "111111111",
    companySocialLinks: {
      instagram: "instagram link",
      facebook: "facebook link",
      x: "x link",
      linkedin: "linkedin link",
    },
    companyAddress: {
      country: "Polska",
      city: "Warszawa",
      zipCode: "03-522",
      street: "Stalowa",
      streetNumber: 17,
    },
  });

  return (
    <>
      <PageBreadcrumb pageTitle="Profil" />
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] lg:p-6">
        <div className="space-y-6">
          <h1 className="font-semibold text-xl">
            Witaj {fakeAccount.companyName}!
          </h1>
          <UserBasicInformation
            fakeAccount={fakeAccount}
            setFakeAccount={setFakeAccount}
          />
          <UserAddressInformation
            fakeAccount={fakeAccount}
            setFakeAccount={setFakeAccount}
          />
        </div>
      </div>
    </>
  );
}
