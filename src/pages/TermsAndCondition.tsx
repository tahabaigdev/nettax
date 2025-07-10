import HelmetSeo from "@/components/layout/HelmetSeo";
import { useEffect } from "react";

const TermsAndCondition = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="px-[2rem] pt-[13rem] pb-[6rem] xl:px-[0rem]">
      <HelmetSeo
        title="Terms and Condition - nettax"
        description="Welcome to the Terms and Condition of nettax."
        url="https://nettax.org/terms-condition"
      />
      <div className="container flex flex-col gap-[2rem] rounded-[1.2rem] border border-[#cacaca] p-[2rem]">
        <div className="flex flex-col gap-[1rem]">
          <h5 className="text-[2.4rem] leading-[3.2rem] font-semibold">
            Terms and Condition:
          </h5>

          <p className="text-[2.4rem] leading-[4rem] font-light">
            At nettax, we are committed to protecting your privacy and ensuring
            that your personal information is handled responsibly and
            transparently. This Terms and Condition outlines how we collect,
            use, and safeguard your data in accordance with applicable laws and
            regulations.
          </p>
        </div>

        <div className="flex flex-col gap-[1rem]">
          <h5 className="text-[2.4rem] leading-[3.2rem] font-semibold">
            1. Information We Collect
          </h5>

          <p className="text-[2.4rem] leading-[4rem] font-light">
            We collect and process various types of data to provide our services
            effectively, including: Information We Collect Personal Information:
            Name, address, contact details, and identification numbers (e.g.,
            CNIC or Taxpayer ID). Financial Information: Income details, tax
            records, bank details, and financial statements necessary for tax
            filing and compliance. Usage Data: Website interaction details,
            cookies, and analytics for improving our online platform. 2. How We
            Use Your Information The information we collect is used for the
            following purposes: To provide tax consulting, filing, and
            compliance services. To communicate with you regarding updates,
            consultations, and client inquiries. To comply with legal
            obligations, such as regulatory filings and audits. To improve our
            services, including website usability and client experience. 3.
            Sharing and Disclosure We do not sell or share your information with
            unauthorized third parties. However, we may share your data: With
            regulatory authorities (e.g., FBR, SECP) as required by law. With
            authorized service providers who assist in delivering our services
            under strict confidentiality agreements. If required by legal
            processes or to protect our rights and operations. 4. Data Security
            We implement advanced technical and organizational measures to
            protect your data from unauthorized access, disclosure, alteration,
            or destruction. These measures include: Secure encryption protocols
            for data transfer and storage. Regular audits and updates to our
            security systems. Restricted access to sensitive information within
            our organization. 5. Your Rights As a client, you have the right to:
            Access: Request details of the personal information we hold about
            you. Rectification: Update or correct your personal data. Erasure:
            Request deletion of your data, subject to legal obligations. Object:
            Restrict certain processing activities. To exercise these rights,
            please contact us at [Insert Email Address]. 6. Cookies and Tracking
            Our website uses cookies to enhance user experience and analyze
            website traffic. You can disable cookies through your browser
            settings; however, doing so may affect your access to certain
            features. 7. Policy Updates nettax may update this Terms and
            Condition periodically to reflect changes in laws, services, or
            practices. We encourage you to review this page regularly to stay
            informed.
          </p>
        </div>

        <div className="flex flex-col gap-[1rem]">
          <p className="text-[2.4rem] leading-[4rem] font-light">
            Contact Us If you have any questions or concerns about this Privacy
            Policy, please reach out to us:
          </p>
        </div>

        <div className="flex flex-col gap-[1rem]">
          <p className="text-[2.4rem] leading-[4rem] font-light">
            nettax Email: info@nettax.org Phone: (022) 611 5534
            Website:www.nettax.org
          </p>
        </div>
      </div>
    </main>
  );
};

export default TermsAndCondition;
