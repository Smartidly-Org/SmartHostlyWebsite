"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import styles from "../styles";
import { fadeIn } from "../utils/motion";
import headset from "../public/headset.svg";

function sendQuoteEmail() {
  // Replace the following variables with the actual values filled by the user
  var firstName = ""; // Add the first name here
  var lastName = ""; // Add the last name here
  var email = ""; // Add the email here
  var eventTitle = ""; // Add the event title here
  var eventCategory = ""; // Default value for event category
  var locationOfEvent = ""; // Add the location of the event here
  var eventDate = "MM-DD-YYYY"; // Default value for event date
  var repeatingEvent = ""; // Add "Yes" or "No" for repeating event

  // Compose the email body
  var emailBody = "Hello Smarthostly Team,\n\n";
  emailBody += "I hope this email finds you well. I am excited to inquire about obtaining a quote for organizing an event. Below are the necessary details:\n\n";
  emailBody += "First Name: " + firstName + "\n";
  emailBody += "Last Name: " + lastName + "\n";
  emailBody += "Email: " + email + "\n\n";
  emailBody += "Event Title: " + eventTitle + "\n";
  emailBody += "Event Category: " + eventCategory + "\n";
  emailBody += "Location of Event: " + locationOfEvent + "\n\n";
  emailBody += "Event Date: " + eventDate + "\n";
  emailBody += "Repeating Event: " + repeatingEvent + "\n\n";
  emailBody += "Please let me know if you require any additional information. Looking forward to your prompt response.\n\n";
  emailBody += "Best regards,\n[Your Name]";

  // Encode the email body to be used in the mailto link
  var encodedEmailBody = encodeURIComponent(emailBody);

  // Create the mailto link with the recipient email and the pre-fed email body
  var mailtoLink = "mailto:info@smarthostly.com?subject=Quote Request&body=" + encodedEmailBody;

  // Open the email client with the pre-fed information
  window.location.href = mailtoLink;
}

// We are getting this "id, imgUrl, title" props from "{...world} spread".
const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${
      active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
    } ${
      styles.flexCenter
    } min-w-[170px] h-[600px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer `}
    onClick={() => handleClick(id)}
  >
    <Image
      src={imgUrl}
      alt={title}
      placeholder="blur"
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] ">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px] ">
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism mb-[16px]`}
        >
          <Image
            src={headset}
            alt="headset"
            className="w-1/2 h-1/2 object-contain"
          />
        </div>
        {/* <p className="font-normal text-[16px] leading-[20px] text-white uppercase ">
          Get a Quote
        </p> */}
        <button
          id="getQuoteButton"
          className="font-normal text-[16px] leading-[20px] text-white uppercase bg-blue-500 rounded-xl px-4 py-2 hover:bg-blue-600 transition-colors"
          onClick={sendQuoteEmail} // Use onClick instead of onclick
        >
          Get a Quote
        </button>

        <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white ">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
