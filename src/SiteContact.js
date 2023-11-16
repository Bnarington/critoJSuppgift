import React from "react";
import Header from "./components/sitewide/01_Header";
import ShowcaseContacts from "./components/contacts/01_ShowcaseContacts";
import CallBoxes from "./components/contacts/02_CallBoxes";
import ContactForm from "./components/contacts/03_ContactForm";
import Map from "./components/contacts/04_MapImg";
import Footer from "./components/sitewide/12_Footer";

const SiteContacts = () => {
  return (
    <div>
      <Header />
      <ShowcaseContacts />
      <CallBoxes />
      <ContactForm />
      <Map />
      <Footer />
    </div>
  );
};

export default SiteContacts;
