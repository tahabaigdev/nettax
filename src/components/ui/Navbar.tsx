import DropdownMenu from "./DropdownMenu";
import NavHashlink from "./NavHashlink";

const Navbar = () => {
  return (
    <ul className="relative flex items-center gap-[3rem]">
      <li>
        <DropdownMenu
          label="About Us"
          description="Empowering tax professionals with expert-led education and certifications."
          image="/images/nettax-dost-dropdown.webm"
          href="/about"
          items={[
            {
              label: "Who We Are",
              description:
                "We are seasoned tax professionals in Pakistan, dedicated to providing expert guidance and tailored solutions.",
              href: "/about#who-we-are",
            },
            {
              label: "Our Mission & Vision",
              description:
                "We empower clients through transparent, personalized tax strategies and dependable support, making compliance simple and stress‑free.",
              href: "/about#our-mission",
            },
            {
              label: "Our Team",
              description:
                "Our highly qualified team delivers top-tier legal and client-centered services with professionalism and integrity.",
              href: "/about#our-team",
            },
            {
              label: "Why Choose Nettax?",
              description:
                "Choose Nettax for trusted expertise and customized tax solutions tailored to your specific needs.",
              href: "/about#why-choose-nettax",
            },
          ]}
        />
      </li>

      <li>
        <DropdownMenu
          label="Nettax Dost"
          description="Your free 24/7 tax assistant—instant answers, zero cost, always reliable."
          href="/nettax-dost"
          image="/images/about-dropdown.webm"
          items={[
            {
              label: "About Nettax Dost",
              description:
                "Your free tax assistant for quick answers and expert guidance.",
              href: "/nettax-dost#about-nettax-dost",
            },
            {
              label: "How it Works",
              description:
                "Create your profile to access courses, tools, and certifications instantly.",
              href: "/nettax-dost#how-it-work",
            },
            {
              label: "Who Can Join",
              description:
                "Certified tax professionals offering personalized filing and compliance solutions.",
              href: "/nettax-dost#who-can-join",
            },
            {
              label: "Start Earning",
              description:
                "Find verified tax agents near you for seamless assistance.",
              href: "/nettax-dost#start-earning",
            },
          ]}
        />
      </li>

      <li>
        <DropdownMenu
          label="Nettax Guru"
          description="Master taxes with expert-led courses and industry-recognized certifications."
          href="/nettax-guru"
          image="/images/nettax-guru-dropdown.webm"
          items={[
            {
              label: "Tax Courses",
              description:
                "Practical tax training from basics to advanced—learn from industry experts.",
              href: "/nettax-guru#tax-courses",
            },
            {
              label: "Certifications",
              description:
                "Earn recognized credentials to boost your tax career and credibility.",
              href: "/nettax-guru#certifications",
            },
            {
              label: "Learning Modes",
              description:
                "Flexible learning: self-paced, live classes, or corporate training—your choice.",
              href: "/nettax-guru#learning-modes",
            },
            {
              label: "Support",
              description:
                "Dedicated help for your tax learning journey—ask us anything!",
              href: "/nettax-guru#support",
            },
          ]}
        />
      </li>

      <li>
        <DropdownMenu
          label="Our Services"
          description="End-to-end tax, compliance & business registration solutions—expert-backed and hassle-free."
          image="/images/service-dropdown.webm"
          href="/our-services"
          items={[
            {
              label: "NTN Registration",
              description:
                "We help individuals and businesses get their National Tax Number (NTN) from FBR, which is necessary to file taxes and run legal financial activities in Pakistan.",
              href: "/our-services#ntn-registration",
            },
            {
              label: "Sales Tax Registration & Returns",
              description:
                "We assist businesses in getting registered for sales tax and filing their monthly returns accurately and on time, helping them stay compliant with FBR rules.",
              href: "/our-services#income-tax",
            },
            {
              label: "NGO/NPO Registration",
              description:
                "We guide you step by step to register your non-profit organization and help you apply for tax exemptions and legal approvals.",
              href: "/our-services#sales-tax",
            },
            {
              label: "Income Tax Return Filing",
              description:
                "Our experts file your annual income tax return, help with tax planning, and manage your FBR profile to avoid any issues or penalties.",
              href: "/our-services#trademark-company",
            },
            {
              label: "Trademark & Company Registration",
              description:
                "We make it easy for you to register your business and trademark your brand name officially with SECP and IPO Pakistan, protecting your identity legally.",
              href: "/our-services#ngo-npo",
            },
            {
              label: "Legal Advisory & SECP Compliance",
              description:
                "We provide clear legal advice and help your company stay updated with SECP regulations, including all necessary legal filings.",
              href: "/our-services#legal-advisory",
            },
          ]}
        />
      </li>

      <li>
        <DropdownMenu
          label="Resources"
          description="Free tools, guides, and templates to simplify tax compliance for you."
          image="/images/resources-dropdown.webm"
          href="/"
          items={[
            {
              label: "Blog",
              description:
                "Authoritative insights and tax tips to keep you informed",
              href: "/blog",
            },
            {
              label: "Price List",
              description: "Transparent service pricing—no hidden fees",
              href: "/price-list",
            },
            {
              label: "Tax Calculator",
              description: "User-friendly tool for instant tax estimates",
              href: "/tax-calculator",
            },
            {
              label: "SRB (Sindh Revenue Board)",
              description: "Expert assistance with regional tax compliance",
              href: "https://www.srb.gos.pk/srb/",
            },
            {
              label: "FBR / SECP Services",
              description:
                "Step-by-step guides to official registration and filing portals",
              href: "https://www.secp.gov.pk/",
            },
            {
              label: "PSEB Support",
              description:
                "Dedicated help for IT firms seeking PSEB registration",
              href: "https://techdestination.com/",
            },
            {
              label: "FBR",
              description:
                "FBR tax registration, returns, and audit support for individuals/businesses.",
              href: "https://fbr.gov.pk/",
            },
          ]}
        />
      </li>

      <li>
        <NavHashlink href="/#contact" label="Contact Us" />
      </li>
    </ul>
  );
};

export default Navbar;
