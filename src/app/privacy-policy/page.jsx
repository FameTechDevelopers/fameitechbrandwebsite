import Navbar from "../../components/navbar/Navbar";
import React from "react";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <div className="mx-auto bg-[#303030bb] z-[99]">
        <div className=" max-w-[1300px] mx-auto">
          <Navbar />
        </div>
      </div>
      <div className="privacy-bg text-black px-12">
        <div className="max-w-[1300px] p-2 mx-auto relative">
          <div className=" pt-16 text-[14px] pb-8">
            <div className="">
              <div className=" md:w-[55%] my-36">
                <h2 className="text-[3rem] font-bold mb-4">Privacy Policy</h2>
                <p className="mb-8 text-[1.6rem]">
                  FAMEITECH values the privacy of our clients and is committed
                  to protecting it as our own. This Privacy Policy outlines how
                  we collect, use, and safeguard your personal information on
                  www.fameitech.com. By using our website, you agree to the
                  terms outlined in this policy.
                </p>
              </div>
            </div>
            <h2 className="text-[16px] font-bold mb-4">
              Personal Information Collected
            </h2>
            <p className="mb-4">
              FAMEITECH collects information such as the client's name, email,
              mailing address, and phone number. This information is provided by
              clients during the ordering process or when saving information
              with our company. Additionally, we may use email addresses or
              mailing addresses obtained through our Contact Us Form to respond
              to comments, queries, and other communications. We also maintain
              records of past client interests and online purchases to improve
              our services.
            </p>

            <h2 className="text-[16px] font-bold mb-4">
              Use of Collected Data
            </h2>
            <p className="mb-4">
              The collected information is used to process orders, confirm
              orders through emails, and address customer queries. Clients may
              receive updates about our site, services, newsletters, and
              promotional information. Information about client interests and
              purchases is utilized to enhance our website design and improve
              the overall purchasing experience.
            </p>

            <h2 className="text-[16px] font-bold mb-4">Newsletter Opt-out</h2>
            <p className="mb-4">
              Clients can opt out of receiving newsletters and promotional
              communications by following the instructions in each communication
              or by contacting us at{" "}
              <a href="mailto:info@fameitech.com" className="text-primary text-[16px] font-bold">
                info@fameitech.com
              </a>{" "}
              or calling{" "}
              <a href="tel:+13025017152" className="text-primary text-[16px] font-bold">
                +1 302-501-7152
              </a>
              .
            </p>

            <h2 className="text-[16px] font-bold mb-4">
              Social Media (Features) and Widgets
            </h2>
            <p className="mb-4">
              Our website may include Social Media Features and Widgets hosted
              by third parties. These features may collect your IP address and
              other information, governed by the privacy policy of the
              respective providers.
            </p>

            <h2 className="text-[16px] font-bold mb-4">3rd Party Sharing</h2>
            <p className="mb-4">
              FAMEITECH does not sell personal information to third parties. We
              use trusted third-party services for credit card processing and
              live customer support, ensuring they only use your information to
              provide necessary services.
            </p>

            <h2 className="text-[16px] font-bold mb-4">
              Security of Personal Information
            </h2>
            <p className="mb-4">
              We employ Secure Sockets Layer (SSL) Software to encrypt client
              information during transmission. While we follow industry
              standards to protect data, absolute security cannot be guaranteed.
              For security inquiries, email us at{" "}
              <a href="mailto:info@fameitech.com" className="text-primary text-[16px] font-bold">
                info@fameitech.com
              </a>
              .
            </p>

            <h2 className="text-[16px] font-bold mb-4">
              Access to Registered Accounts
            </h2>
            <p className="mb-4">
              Clients can access their registered accounts on our homepage,
              allowing them to view and update their information.
            </p>

            <h2 className="text-[16px] font-bold mb-4">
              Changing & Deleting / Unsubscribing Accounts
            </h2>
            <p className="mb-4">
              To cancel subscriptions or request the deletion of personal
              information, clients can email us. We retain information as long
              as the account is active or as required by legal obligations.
            </p>

            <h2 className="text-[16px] font-bold mb-4">
              Cookies and Their Use
            </h2>
            <p className="mb-4">
              FAMEITECH uses cookies to enhance user experience. The Help
              section of most browsers explains how to manage cookies. Cookies
              help recognize browsers, store items in shopping carts and provide
              valuable site features. We also track IP addresses for diagnostic
              purposes and gather broad demographic information.
            </p>

            <h2 className="text-[16px] font-bold mb-4">
              Clear Gifs (Web Beacons/Web Bugs)
            </h2>
            <p className="mb-4">
              Clear gifs help manage content by tracking user movements. They
              are not tied to personally identifiable information.
            </p>

            <h2 className="text-[16px] font-bold mb-4">Testimonials</h2>
            <p className="mb-4">
              With consent, we may post client testimonials with names.
              Testimonials can be removed upon request.
            </p>

            <h2 className="text-[16px] font-bold mb-4">
              Links to Other Web Sites
            </h2>
            <p className="mb-4">
              FAMEITECH's website may contain links to external sites with
              different privacy practices. Check the privacy statement of any
              visited website.
            </p>

            <h2 className="text-[16px] font-bold mb-4">
              Notification of Changes in Privacy Policy
            </h2>
            <p className="mb-4">
              FAMEITECH reserves the right to modify this privacy statement.
              Changes will be posted on the website and other appropriate
              locations. Material changes will be notified via email or on the
              homepage before taking effect.
            </p>

            <h2 className="text-[16px] font-bold mb-4">Questions</h2>
            <p className="mb-4">
              For any questions regarding our Privacy Policy, contact us at our
              toll-free number{" "}
              <a href="tel:+13025017152" className="text-primary text-[16px] font-bold">
                +1 302-501-7152
              </a>{" "}
              or email us on{" "}
              <a href="mailto:info@fameitech.com" className="text-primary text-[16px] font-bold">
                info@fameitech.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
