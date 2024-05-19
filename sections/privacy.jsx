"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const Privacy = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <h1 className="mt-[10px] sm:text-[20px] text-[20px] text-left text-secondary-white font-extrabold text-white">Privacy Policy</h1>
      <p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[10px] font-normal sm:text-[20px] text-[20px] text-left text-secondary-white ">

        <span className="font-extrabold text-white"> Service Provider </span><br></br><br></br>

        <p>All tickets are issued subject to these terms and conditions of sale and entry. The Service Provider in this case is,</p>

        <div>Smartidly Technologies (India) Private Limited</div>
        <div>Org.nr: 38112</div>
        <div>CIN number: U72900TZ2022PTC038112</div>
        <div>5/242, Seenapuram post Thuduppathi Via, perundurai Erode Erode</div>
        <div>TN 638057 IN</div>
        <div>Contact: info@smarthostly.com</div>
        <div>in the name of application SmartHostly</div>

        <div> By purchasing tickets and/or attending any events, the ticket buyer and any attendee agree to comply with the following terms and conditions. {" "}</div><br></br><br></br>


        <span className="font-extrabold text-white"> 1. Introduction </span><br></br><br></br>

        <div>
          This Privacy Policy governs the collection, use, and protection of your personal information by Smartidly Technologies (India) Private Limited, referred to as “SmartHostly“ in this document. Please read this policy carefully to understand how we handle your data.

        </div><br></br><br></br>

        <span className="font-extrabold text-white"> 2. Service Scope </span><br></br><br></br>

        <div>
          Smarthostly provides the following services: Displaying and listing events as submitted by the event host Accepting and processing online orders for tickets to events Providing Consumers with a confirmation number for their transaction and their ticket Providing tools and a platform for event host to create, manage, ticket, sell, refund and promote their events Detailed descriptions of specific services are available on the relevant Smarthostly websites.

        </div><br></br><br></br>

        <span className="font-extrabold text-white"> 3. Non-Personal Data</span><br></br><br></br>

        <div>
          Smarthostly provides the following services: Displaying and listing events as submitted by the event host Accepting and processing online orders for tickets to events Providing Consumers with a confirmation number for their transaction and their ticket Providing tools and a platform for event host to create, manage, ticket, sell, refund and promote their events Detailed descriptions of specific services are available on the relevant Smarthostly websites.


        </div><br></br><br></br>

        <span className="font-extrabold text-white"> 4. Types of Personal Data Collected </span><br></br><br></br>

        <div>
          When users interact with Smarthostly, we may collect Personal Data. This may occur on our behalf or on behalf of an Organiser who uses our Services to manage and promote events. This distinction is essential for compliance with EU data protection laws, as explained later in this Privacy Policy



        </div><br></br><br></br>

        <span className="font-extrabold text-white px-10"> 4.1 Data on All Users </span><br></br><br></br>

        <div className="px-10">
          Information provided by Users: Users may voluntarily share Personal Data with Smarthostly when using the Services. This includes registering for a User account, contacting Smarthostly with questions, responding to surveys, or browsing the Services. The collected Personal Data includes, but is not limited to, Users' names, email addresses, and other information enabling personal identification. Information collected automatically: Technical data sent from the User's computer or mobile device while using the Services is considered &ldqou;Automatic Data.&rdqou; This may include, but is not limited to, device identifiers (e.g., IP address), device or browser characteristics, activity statistics during the use of the Services, and data collected through Cookies and similar tracking technologies. Smarthostly's website uses an analytics service that transmits traffic data to analytic provider servers. This instance of Analytics does not identify individual users or associate your IP address with any other data held. Reports provided by our Analytics provider help us understand website traffic and web page usage. You can opt out of this tracking by activating the “Do Not Track“ setting in your browser extensions.




        </div><br></br><br></br>

        <span className="font-extrabold text-white px-10"> 4.2 Data on Consumers </span><br></br><br></br>

        <div className="px-10">
          Smarthostly collects additional Personal Data from Consumers using our Services. This includes financial information like credit card details and billing addresses when Users register for paid events. Additionally, Organisers may request and collect various types of Personal Data from Consumers during event registration. Smarthostly does not control the Personal Data collected by Organisers and makes it available to the Organiser as detailed in the “Disclosure & Transfer of Personal Data“ section below. Smarthostly may also collect Personal Data from third-party sources, including Organisers, social media, other Consumers, payment processing partners, credit card issuing banks, and others.


        </div><br></br><br></br>

        <span className="font-extrabold text-white px-10"> 4.3 Data on Organisers </span><br></br><br></br>

        <div className="px-10">
          Information provided by Users: Users may voluntarily share Personal Data with Smarthostly when using the Services. This includes registering for a User account, contacting Smarthostly with questions, responding to surveys, or browsing the Services. The collected Personal Data includes, but is not limited to, Users' names, email addresses, and other information enabling personal identification.



        </div><br></br><br></br>


        <span className="font-extrabold text-white"> 5. How Personal Data Is Used </span><br></br><br></br>

        <div>
          Personal Data may be used as follows:




        </div><br></br><br></br>

        <span className="font-extrabold text-white px-10"> 5.1 Specific Purposes </span><br></br><br></br>

        <div className="px-10">
          Any Personal Data provided for a specific purpose may be used by Smarthostly for that purpose. For example, if you contact Smarthostly by email, we will use the Personal Data you provide in our response and will respond to the email address provided.





        </div><br></br><br></br>

        <span className="font-extrabold text-white px-10"> 5.2 Use of Services </span><br></br><br></br>

        <div className="px-10">
          If you provide Personal Data to use the Services, this data will be used to grant you access to the Services and analyse your usage.

        </div><br></br><br></br>

        <span className="font-extrabold text-white px-10"> 5.3 Internal Purposes </span><br></br><br></br>

        <div className="px-10">
          Smarthostly may use your Personal Data for internal business purposes, such as improving the Content and functionality of the Services, understanding our Users, protecting against wrongdoing, enforcing our Terms of Service, and managing our business. Smarthostly may employ an AI solution to generate recommendations with the aim of displaying the most relevant content to Users on our website and in emails. In this regard, Smarthostly shares data related to your ticket purchases and data collected from Cookies with the AI solution.


        </div><br></br><br></br>

        <span className="font-extrabold text-white px-10"> 5.4 Marketing Communications </span><br></br><br></br>

        <div className="px-10">
          Depending on your marketing preferences and provided consent, we may use your Personal Data to contact you for marketing and advertising purposes. This may include informing you about upcoming events, sharing promotional materials, or displaying promotional Content on the Services. Smarthostly reserves the right to market products or services of Smarthostly and/or Organisers to you, similar to those previously purchased by you. Please refer to the “Opting Out“ section below to learn how you can opt out of Smarthostly Marketing Communications.


        </div><br></br><br></br>

        <span className="font-extrabold text-white px-10"> 5.5 Other </span><br></br><br></br>

        <div className="px-10">
          If your Personal Data is to be used in any manner inconsistent with this Privacy Policy, we will inform you of this prior to or while collecting Personal Data and will obtain your consent before its use.



        </div><br></br><br></br>

        <span className="font-extrabold text-white px-10"> 5.6 Data Aggregation </span><br></br><br></br>

        <div className="px-10">
          To enhance our Services, we may conduct research on User demographics, interests, and behaviour based on Personal Data and other collected information. We typically conduct this research on an aggregate basis, ensuring it does not identify an individual User. Personal Data in such aggregated form is considered Non-Personal Data for the purposes of this Privacy Policy.




        </div><br></br><br></br>


        <span className="font-extrabold text-white"> 6. Disclosure & Transfer of Personal Data </span><br></br><br></br>

        <div>
          This section outlines the circumstances under which Smarthostly may disclose or transfer personal data. It clarifies that while Smarthostly does not sell personal data to third parties, certain conditions necessitate sharing or transferring data to ensure the continued operation and integrity of services. Below are detailed scenarios where personal data may be disclosed or transferred:




        </div><br></br><br></br>

        <span className="font-extrabold text-white px-10"> 6.1 No Sale of Personal Data </span><br></br><br></br>

        <div className="px-10">
          Smarthostly does not sell Personal Data to any third party, including advertisers. Under certain circumstances described below, we may disclose or transfer your Personal Data to specific third parties without additional notice.

        </div><br></br><br></br>

        <span className="font-extrabold text-white px-10"> 6.2 Transfer of Business </span><br></br><br></br>

        <div className="px-10">
          In the course of conducting business, Smarthostly might sell or acquire assets or other businesses. Personal Data may be included in transferred assets during mergers, reorganisations, or similar events. You acknowledge and agree that any successor to or acquirer of Smarthostly or its assets will have the right to use your Personal Data in accordance with the terms of this Privacy Policy.



        </div><br></br><br></br>

        <span className="font-extrabold text-white px-10"> 6.3 Subsidiaries, Affiliates, and Parent Companies </span><br></br><br></br>

        <div className="px-10">
          Your Personal Data may be shared with Smarthostly's parent companies, subsidiaries, or affiliates for purposes consistent with this Privacy Policy. These entities will be obligated to maintain Personal Data in accordance with this Privacy Policy.



        </div><br></br><br></br>


        <span className="font-extrabold text-white px-10"> 6.4 Service Providers </span><br></br><br></br>

        <div className="px-10">
          Smarthostly does not sell Personal Data to any third party, including advertisers. Under certain circumstances described below, we may disclose or transfer your Personal Data to specific third parties without additional notice.

        </div><br></br><br></br>


        <span className="font-extrabold text-white px-10"> 6.5 Organisers </span><br></br><br></br>

        <div className="px-10">
          Smarthostly may share your Personal Data with third-party service providers who process Personal Data on our behalf to perform various business-related functions. These companies may include marketing agencies, database service providers, email service providers, and others listed in our list of Sub-Processors. When we engage another company for these functions, we provide them with the necessary information, including Personal Data, to perform their tasks




        </div><br></br><br></br>

        <span className="font-extrabold text-white px-10"> 6.6 Third-Party Connections </span><br></br><br></br>

        <div className="px-10">
          Users can connect their Smarthostly account to other third-party accounts, such as Facebook. In such cases, Smarthostly may use information related to Users' third-party accounts following this Privacy Policy.

        </div><br></br><br></br>

        <span className="font-extrabold text-white px-10"> 6.7 Legal </span><br></br><br></br>

        <div className="px-10">
          Smarthostly may disclose your Personal Data if required by law or if we believe in good faith that such action is necessary to comply with a legal obligation, protect our rights and interests, prevent or investigate any wrongdoing related to the Services, protect the personal safety of our Users or the public, or to protect against legal liability.


        </div><br></br><br></br>














        <span className="font-extrabold text-white"> 7. Storage and Handling of Personal Data </span><br></br><br></br>

        <div>
          Smarthostly may store your Personal Data or transfer it to third parties in accordance with this Privacy Policy. We take reasonable steps to protect your Personal Data from loss or misuse. However, no network, technical equipment, or digital transmission is guaranteed to be fully secure or error-free. Therefore, Users should exercise caution when disclosing Personal Data electronically. We ensure that only authorised employees handle your Personal Data. If an employee's authorization is revoked or expires, we take immediate steps to revoke their access to Personal Data. These employees are also subject to applicable non-disclosure laws.

        </div><br></br><br></br>

        <span className="font-extrabold text-white"> 8. Your Control Over Your Personal Data </span><br></br><br></br>

        <div>
          Users can request access to the Personal Data SmartHostly stores about them and can also request corrections, updates, or deletions of their Personal Data. Registered Users may exercise these rights by logging in and visiting the “My Data“ page. Both registered and unregistered Users may also exercise these rights by contacting us at info@smarthostly.com. If Users request Smarthostly to delete their Personal Data, Smarthostly may delete or anonymize such Personal Data, even if this action removes access to this Personal Data for the Organiser. However, Consumers should understand that even if their Personal Data is deleted or anonymized in this manner, the data may still be available in the Organiser's own databases if Smarthostly transmitted it to the Organiser before receiving the User's request for deletion or anonymization. Smarthostly will consider and respond to all data update/deletion requests in accordance with applicable law. Consumers are encouraged to contact the Organiser(s) directly with any requests for the deletion of Personal Data. You understand and accept that you are responsible for your login information (e.g., user ID/name, password, card number, security questions and answers, etc.). This responsibility applies even if you change your login information. This information must remain confidential and not be shared or disclosed to others. If your login information is compromised or if you suspect that someone else has learned or obtained it, you are responsible for taking all necessary measures to comply with the terms and conditions you agreed to when creating your login information. You must also promptly notify Smarthostly of any such incidents.






        </div><br></br><br></br>

        <span className="font-extrabold text-white"> 9.  Retention of Personal Data </span><br></br><br></br>

        <div>
          Smarthostly may retain a User's Personal Data as long as the User is registered to use the Services. You may close your account at any time by contacting us. Smarthostly may also retain Personal Data for an additional period, as permitted or required by applicable laws. Even after we delete your Personal Data, it may continue to exist on backup media for legal reasons or legitimate business purposes

        </div><br></br><br></br>

        <span className="font-extrabold text-white"> 10. Cookies & Other Tracking Technologies </span><br></br><br></br>

        <div>
          We do not use cookies for tracking purposes.

        </div><br></br><br></br>


        <span className="font-extrabold text-white"> 10. Cookies & Other Tracking Technologies </span><br></br><br></br>

        <div>
          We do not use cookies for tracking purposes.

        </div><br></br><br></br>

        <span className="font-extrabold text-white"> 11. User Choice </span><br></br><br></br>

        <div>
          Users have several choices regarding their Personal Data:

        </div><br></br><br></br>


        <span className="font-extrabold text-white px-10"> 11.1 Limited Provision of Personal Data </span><br></br><br></br>

        <div className="px-10">
          You can browse the Services without providing any Personal Data or only providing limited Personal Data. However, some functionality may be limited if you choose not to provide certain information. For instance, your name and email address are required by Organisers to sell you tickets.

        </div><br></br><br></br>

        <span className="font-extrabold text-white px-10"> 11.2 Opting Out </span><br></br><br></br>

        <div className="px-10">
          You can browse the Services without providing any Personal Data or only providing limited Personal Data. However, some functionality may be limited if you choose not to provide certain information. For instance, your name and email address are required by Organisers to sell you tickets.


        </div><br></br><br></br>

        <span className="font-extrabold text-white px-10"> 11.3 Marketing Communications from Smarthostly </span><br></br><br></br>

        <div className="px-10">
          Smarthostly may send Users electronic marketing communications based on their account settings and given consent. Users can “opt out“ of receiving these communications at any time using the “Unsubscribe“ link at the bottom of such communications.

        </div><br></br><br></br>

        <span className="font-extrabold text-white px-10"> 11.4 Social Notifications </span><br></br><br></br>

        <div className="px-10">
          If Users connect their Facebook account or sign up for other social media integrations that include social notifications, Users will receive these notifications. Users can manage social notifications directly on the related social accounts or disconnect these accounts from Smarthostly at any time.


        </div><br></br><br></br>

        <span className="font-extrabold text-white px-10"> 11.5 Data Retention </span><br></br><br></br>

        <div className="px-10">
          Regardless of your “Opt out“ status, we may retain your Personal Data in accordance with this Privacy Policy. We will, however, no longer use this data to contact you. Please note that Organisers who received your Personal Data may continue to use that data to contact you if their privacy policy permits. However, they may no longer use the Smarthostly platform for this purpose.


        </div><br></br><br></br>

        <span className="font-extrabold text-white"> 12. Exclusions </span><br></br><br></br>

        <div className="">
          Potential exclusions to our privacy policy

        </div><br></br><br></br>

        <span className="font-extrabold text-white px-10"> 12.1 Personal Data Provided to Others </span><br></br><br></br>

        <div className="px-10">
          This Privacy Policy does not apply to any Personal Data that a User may provide to another User through the Services or other means. This includes Personal Data provided to Organisers on event pages or information posted publicly on the Services.


        </div><br></br><br></br>

        <span className="font-extrabold text-white px-10"> 12.2 Links to Third-Party Sites </span><br></br><br></br>

        <div className="px-10">
          This Privacy Policy applies exclusively to the Services. Smarthostly Services may contain links to other websites not operated or controlled by Smarthostly (“Third-Party Sites“). The policies and procedures described in this Privacy Policy do not apply to Third-Party Sites. Links from Smarthostly to Third-Party Sites do not imply Smarthostly's endorsement or review of these sites. Users are encouraged to contact these sites directly for information on their privacy policies.



        </div><br></br><br></br>

        <span className="font-extrabold text-white"> 13. Users under 17 </span><br></br><br></br>

        <div className="">
          If you are aged 16 or under, please obtain your parents' or guardians' permission before providing personal information to Smarthostly. Users under 17 are not allowed to provide personal information to Smarthostly without this permission.

        </div><br></br><br></br>
        <span className="font-extrabold text-white "> 14. Ongoing Changes to Privacy Policy </span><br></br><br></br>

        <div className="">
          The nature of Smarthostly's business and Services may change over time. Consequently, we may need to update or modify this Privacy Policy. Smarthostly reserves the right to make such updates or modifications at any time. We may provide additional notice of these changes via email or notifications on the Services, but this is not required. Users are encouraged to review this Privacy Policy periodically, especially before providing any Personal Data to Smarthostly. Continued use of the Services following updates or changes to this Privacy Policy constitutes acceptance of those changes. If a User finds such changes unacceptable, the User should cease using the Services.


        </div><br></br><br></br>

        <span className="font-extrabold text-white "> 15. Resolving Disputes </span><br></br><br></br>

        <div className="">
          If you have concerns or complaints about Smarthostly's practices regarding the use of Personal Data, please contact us at: info@smarthostly.com. We will work with you to resolve your complaint reasonably.



        </div><br></br><br></br>

        <span className="font-extrabold text-white "> 16. Transfer of Personal Data to a Third Country </span><br></br><br></br>

        <div className="">
          We may transfer your personal information to countries other than your country of residence. Our website servers are primarily located in the EU. However, our group companies, third-party service providers, and partners operate in various countries, including India, the US and other countries. This means that when we collect your personal information, it may be processed in any of these countries. We implement appropriate safeguards to protect your personal information in those countries in accordance with this Privacy Policy, ensuring compliance with GDPR. We contract with third-party companies processing your data and may transfer information to the United States, India and other countries. These third-party companies are required to follow the Standard Contractual Clauses for data transfers between the EU and non-EU countries issued by the European Commission.




        </div><br></br><br></br>








        <span className="font-extrabold text-white">| Disclaimer </span><br></br><br></br>

        <div>
          This Agreement shall be governed by and construed in accordance with the laws of India. Any dispute arising from this Agreement shall fall under the exclusive jurisdiction of the District Court of Judicature at Erode, Tamil Nadu, India. Both parties acknowledge that this Agreement, in conjunction with the Service Provider's Privacy Statement and other policies posted on the Site, constitutes the entire and exclusive agreement between them, superseding and nullifying all prior written or oral agreements, communications, and understandings relating to the subject matter herein. Any modifications to this Agreement must be in writing and signed by both parties, unless otherwise specified herein. No agency, partnership, joint venture, or employment relationship is created because of this Agreement, and the User possesses no authority to bind the Service Provider in any capacity. The Service Provider retains the right to amend or supplement these Terms & Conditions at its discretion. To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and its use.








        </div><br></br><br></br>





      </p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow-down"
        className="w-[18px] h-[28px] object-contain mt-[28px] "
      />
    </motion.div>
  </section>
);

export default Privacy;
