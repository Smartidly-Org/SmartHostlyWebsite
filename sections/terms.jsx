"use client";
import { motion } from "framer-motion";
import { TypingText } from "../components";
import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const Terms = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <h1 className="mt-[10px] sm:text-[20px] text-[20px] text-left text-secondary-white font-extrabold text-white">Terms of Service</h1>
      <p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[10px] font-normal sm:text-[20px] text-[20px] text-left text-secondary-white ">

        <span className="font-extrabold text-white"> Service Provider </span><br></br><br></br>

        <p>All tickets are issued subject to these terms and conditions of sale and entry. The Service Provider in this case is,</p>

        <div>Smartidly Technologies (India) Private Limited</div>
        <div>Org.nr: 38112</div>
        <div>CIN number: U72900TZ2022PTC038112</div>
        <div>5/242, Seenapuram post Thuduppathi Via, perundurai Erode</div>
        <div>TN 638057 IN</div>
        <div>Contact: info@smarthostly.com</div>
        <div>in the name of application SmartHostly</div>

        <div> By purchasing tickets and/or attending any events, the ticket buyer and any attendee agree to comply with the following terms and conditions. {" "}</div><br></br><br></br>


        <span className="font-extrabold text-white"> 1. Responsibility for the event </span><br></br><br></br>

        <div>As for the actual events, the Service provider is only the issuer of tickets and agent for promoters, arenas, and organisers. the Service provider is therefore not responsible for the event as such. the Service provider is therefore not responsible for the implementation of the events, or their quality and content, and is thus also not responsible for any financial compensation due to or linked to, for example, cancelled / rescheduled events or other shortcomings linked to the events. In the case of streamed events, the organiser, not the Service provider, is responsible for the connection, transmission, and streaming. All questions or requirements concerning the event itself and its implementation must be directed to the arena / organiser. More specific information about the Event Host and the special conditions that apply to a specific event are given in connection with the booking / purchasing of tickets.
        </div><br></br><br></br>

        <span className="font-extrabold text-white"> 2. Personal Use </span><br></br><br></br>

        <div>Tickets may only be purchased for personal use and may not be used commercially. This means that tickets may not be purchased and / or resold for commercial purposes. Tickets may also not be offered in competitions or in connection with the offer of another product or service without the written consent of the Service provider and / or the responsible arena / organiser. If the event has restrictions on the number of tickets per purchase and customer, the maximum number may not be exceeded.
        </div><br></br><br></br>

        <span className="font-extrabold text-white"> 3. My Bookings </span><br></br><br></br>

        <div>
          It is up to you as a customer to check that your booking is correct (correct email address, correct event, correct number, correct arena, etc.) and that you have received your ticket well before the event starts.

        </div><br></br><br></br>

        <span className="font-extrabold text-white"> 4. Cancelled or Rescheduled Events </span><br></br><br></br>

        <div>
          As a ticket buyer, you are responsible for checking whether an event has been cancelled or been rescheduled. If events are cancelled or rescheduled, you should contact the responsible Event Host immediately. The Event Host is responsible for questions and decisions about, for example, redemption of tickets. Following a decision by the Event Host, the Service provider may in certain cases, on behalf of the Event Host, redeem tickets for cancelled events. In the event of a cancelled or rescheduled event, where the redemption of the ticket is approved by the Event Host, any service / distribution fees will not be refunded.


        </div><br></br><br></br>

        <span className="font-extrabold text-white px-10"> 4.1 Festival Tickets </span><br></br><br></br>

        <div className="px-10">
          Tickets for festivals are only sold for the entire festival and not for individual artists and performances. Tickets can therefore not be redeemed at cancelled or changed program points.



        </div><br></br><br></br>

        <span className="font-extrabold text-white"> 5. Loss of Tickets </span><br></br><br></br>

        <div>
          Lost tickets will not be reimbursed. If you choose an e-ticket as the delivery method, you can print a new ticket yourself via your email that was sent after your booking. Please note that e-tickets has a built-in security system that only allows entry once per ticket. You are responsible for ensuring that delivery information is correctly stated at the time of purchase.

        </div><br></br><br></br>

        <span className="font-extrabold text-white"> 6. Service and Distribution Fees </span><br></br><br></br>

        <div>
          In addition to the ticket price, a service fee may be added and in some cases also a distribution fee.


        </div><br></br><br></br>


        <span className="font-extrabold text-white"> 7. Transaction Fees </span><br></br><br></br>

        <div>
          In addition to the ticket price, a transaction fee may be added which in some cases be included in the service fee.



        </div><br></br><br></br>

        <span className="font-extrabold text-white"> 8. Purchases that contravene set conditions </span><br></br><br></br>

        <div>
          The Service provider reserves the right to cancel a booking or purchase and with immediate effect close your access if you as a ticket buyer do not provide correct information about yourself or otherwise violate or attempt to circumvent the Service provider terms when buying tickets. This applies, among other things, if you book or buy more tickets than allowed or buy tickets for commercial use. In the event of cancellations for such a reason, the service fee and any distribution fees will not be refunded. The Service provider may also decide not to refund the ticket price paid either.




        </div><br></br><br></br>

        <span className="font-extrabold text-white"> 9. Right of withdrawal of ticket purchase </span><br></br><br></br>

        <div>
          The rules on the right of withdrawal in the Act (2005: 59) on distance contracts and contracts outside business premises (the Distance Contracts Act) do not apply to the purchase of event tickets. Once payment has been made, you are therefore bound by your purchase. However, you can cancel a booking until payment has been made. Keep in mind, however, that if you choose Klarna or a similar payment solution, as a payment alternative, the choice of this alternative is to equate with card or bank payment and payment has thus been made through the choice of payment alternative, even if the invoice is to be paid at a later time.





        </div><br></br><br></br>

        <span className="font-extrabold text-white"> 10. Donation </span><br></br><br></br>

        <div>
          As a ticket buyer, you have the opportunity, when booking or purchasing for certain events, in connection with the purchase to give a donation / gift to the event host, artists or other recipient that is stated on the Service website at the time of booking / purchase.






        </div><br></br><br></br>

        <span className="font-extrabold text-white"> 11. Verified Fan </span><br></br><br></br>

        <div>
          In collaboration with the event host, The Service Provider offers priority for ticket purchases on special campaign occasions, where you as a buyer have the opportunity in advance to register your interest in buying a ticket as a real fan, a so-called Verified Fan. When deciding who should be given priority, the following criteria are used: In order to assess whether you are qualified to have access to a pre-purchase code as a Verified Fan, we will ask you to provide information about yourself (which we call `'`authorization information`'`). All information provided, the eligibility information, will be used to determine if you, in our opinion, are a real fan, so-called. `'`Verified Fan`'`. As part of the assessment, the authorization information is transferred to a third party who, on our behalf, analyses and verifies the authorization information. On the basis of the eligibility information, we will also make an assessment of whether you will try to buy tickets for commercial and / or fraudulent purposes and / or if you may otherwise violate the conditions that apply to this pre-purchase or other terms at the Service provider. To make the assessment, we create a profile for you using the information you have provided. The assessment is based on a number of criteria, including your previous purchases and the analysis and verification of the information you have provided. The outcome of our assessment of your profile determines whether you will have access to this pre-purchase and be part of the pre-purchase selection process. The Service provider or/and The Event Host, reserves the right, at its sole discretion and completely without responsibility, to decide at any time whether you have the right to be involved in the selection process to obtain access to pre-purchase codes or not. We do this to best offer tickets to real fans. We process your personal data in accordance with our personal data policy. When you register, we also collect information about you on behalf of the performer`'`s administration, promoter and record company. We may also share the information with them so that they can administer the event and conduct marketing in accordance with their personal information policy.

        </div><br></br><br></br>

        <span className="font-extrabold text-white"> 12. Responsibility for Services </span><br></br><br></br>

        <div>
          The Service Provider shall not be held accountable for, nor provide compensation for any losses incurred due to operational interruptions, delays, suspensions, or other technical challenges that impede or hinder the utilisation of the service.


        </div><br></br><br></br>

        <span className="font-extrabold text-white"> 13. Payment and Fees </span><br></br><br></br>

        <div>
          It is crucial to emphasise that the Event Host shall assume full responsibility for the ticket price and the taxes on the ticket price, and the Service Provider shall not be held liable for any inaccuracies or discrepancies in the information, taxes on the ticket price or proceedings pertaining to the event. Kindly be advised that by engaging in any transaction through our platform, you acknowledge and agree to adhere to the terms and conditions set forth herein and any inaccuracies or discrepancies in the payment is liable to the event host.



        </div><br></br><br></br>

        <span className="font-extrabold text-white"> 14. Applicable Law </span><br></br><br></br>

        <div>
          Indian law applies to all purchases. If any third party brings a claim against the Service provider related to Customer’s use of the Service other than a claim covered by (above) or breach of this agreement, Customer must defend, indemnify, and hold the Service provider harmless from and against all damages, losses, and expenses of any kind (including reasonable legal fees and costs) related to such claim.




        </div><br></br><br></br>

        <span className="font-extrabold text-white"> 15. Governing Law and Forum </span><br></br><br></br>

        <div>
          This agreement is governed by the laws of India (without regard to conflicts of law principles) for any dispute between the parties or relating in any way to the subject matter of this agreement. Any suit or legal proceeding must be exclusively brought in the courts of Tamil Nadu, India, and Customer submits to this personal jurisdiction and venue. Nothing in this agreement prevents either party from seeking injunctive relief in a court of competent jurisdiction. The prevailing party in any litigation is entitled to recover its attorneys fees and costs from the other party.





        </div><br></br><br></br>

        <span className="font-extrabold text-white"> 16. Arbitration and Dispute Resolution </span><br></br><br></br>

        <div>
          If a dispute, controversy or claim arises out of or relates to this contract, or breach, termination or invalidity thereof, and if such dispute, controversy or claim cannot be settled and resolved through negotiation, then the parties agree first to try in good faith to settle such dispute, controversy or claim through arbitration in India in accordance with the Indian Government Rules for the time being in force which Rules are deemed to be incorporated by reference into this clause. The venue and seat of the arbitration shall be India. The Tribunal shall consist of 1 arbitrator. The language of the arbitration shall be English.






        </div><br></br><br></br>

        <span className="font-extrabold text-white"> 17. Entire Agreement </span><br></br><br></br>

        <div>
          This Agreement, in conjunction with the Service Provider's Privacy Statement and other policies posted on the Site, constitutes the complete and exclusive understanding between the parties, supplanting and nullifying all previous written or oral agreements, communications, and understandings related to the subject matter herein. Any modifications to this Agreement must be in writing and signed by both parties, except as otherwise provided herein. No agency, partnership, joint venture, or employment relationship is created because of this Agreement, and the User possesses no authority to bind the Service Provider in any capacity. The Service Provider reserves the right to amend or supplement these Terms & Conditions at its discretion.







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

export default Terms;
