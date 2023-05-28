import React, { useState } from "react";

const Faqs = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);

  const handleQuestionClick = (index: number) => {
    if (activeQuestion === index) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(index);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="col-span-12">
        <div className="text-center text-xl">
          <p className="mb-4">
            We aim to develop leadership qualities and capabilities in young
            people through these programs.
          </p>
        </div>
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="space-y-4">
          <div
            className={`bg-white text-black rounded-2xl shadow-md py-4 px-6 `}
          >
            <div
              className="font-semibold text-lg cursor-pointer "
              onClick={() => handleQuestionClick(0)}
            >
              What is AIESEC?
            </div>
            <div
              className={`collapsible-content ${
                activeQuestion === 0 ? "open" : ""
              }`}
            >
              <div className={`py-2 text-justify`}>
                AIESEC is an entirely youth-led not-for-profit organisation
                present in over 100 countries and territories, and active since
                1948. We provide young people with the opportunity to grow and
                learn in an exciting new environment, undertaking enriching
                cross-cultural experiences while having a positive impact on
                world and developing relevant skills for their future careers.
              </div>
            </div>
          </div>

          <div
            className={`bg-white text-black rounded-2xl shadow-md py-4 px-6`}
            onClick={() => handleQuestionClick(1)}
          >
            <div className="font-semibold text-lg cursor-pointer">
              What is AIESEC’s goal?
            </div>
            <div
              className={`collapsible-content ${
                activeQuestion === 1 ? "open" : ""
              }`}
            >
              <div className="py-2 text-justify">
                AIESEC aims to develop leadership in every young person around
                the world, because to make a change in this world, you need to
                be a decision maker, you can become that way, if you have a
                developed leader inside you, which can only happen through
                putting yourself into challenging environment and to be open to
                the world and this is exactly what we do in AIESEC we provide
                exchange and membership programs that enable people to discover
                and boost their potential.
              </div>
            </div>
          </div>

          <div
            className={`bg-white text-black rounded-2xl shadow-md py-4 px-6`}
          >
            <div
              className="font-semibold text-lg cursor-pointer"
              onClick={() => handleQuestionClick(2)}
            >
              Do I need to become a member of AIESEC to apply for an exchange?
            </div>
            <div
              className={`collapsible-content ${
                activeQuestion === 2 ? "open" : ""
              }`}
            >
              <div className="py-2 text-justify">
                No, you do not have to become a member of AIESEC to go on
                exchange.
              </div>
            </div>
          </div>

          <div
            className={`bg-white text-black rounded-2xl shadow-md py-4 px-6 `}
          >
            <div
              className="font-semibold text-lg cursor-pointer"
              onClick={() => handleQuestionClick(3)}
            >
              Do I need to cover my own insurance, visa and flight tickets?
            </div>
            <div
              className={`collapsible-content ${
                activeQuestion === 3 ? "open" : ""
              }`}
            >
              <div className="py-2 text-justify">
                Yes, you are responsible for obtaining your own flight tickets.
                Being insured is a requirement for going abroad with AIESEC,
                thus you will be responsible for getting insurance prior to
                going abroad for the whole duration of your exchange. AIESEC
                will assist you with obtaining your visa, however it is your
                responsibility to obtain the visa and pay for it on your own.
              </div>
            </div>
          </div>

          <div
            className={`bg-white text-black rounded-2xl shadow-md py-4 px-6 `}
          >
            <div
              className="font-semibold text-lg cursor-pointer"
              onClick={() => handleQuestionClick(4)}
            >
              What kind of support will AIESEC give me during my Exchange
              Experience?
            </div>
            <div
              className={`collapsible-content ${
                activeQuestion === 4 ? "open" : ""
              }`}
            >
              <div className="py-2 text-justify">
                - Support in the opportunity search - Support in the cultural
                preparation for the exchange - AIESEC representative will assist
                you throughout the duration of your exchange - Reception
                activities and social integration into the organisation in the
                country of your destination
              </div>
            </div>
          </div>

          <div
            className={`bg-white text-black rounded-2xl shadow-md py-4 px-6 `}
          >
            <div
              className="font-semibold text-lg cursor-pointer"
              onClick={() => handleQuestionClick(5)}
            >
              How to sign up ?
            </div>
            <div
              className={`collapsible-content ${
                activeQuestion === 5 ? "open" : ""
              }`}
            >
              <div className="py-2 text-justify">
                In order to benefit from AIESEC opportunities , all you have to
                do is to sign up on{" "}
                <a
                  href="https://aiesec.org"
                  target="_blank"
                  className=" text-primary"
                >
                  aiesec.org
                </a>{" "}
                and apply for the opportunities that suit you. Once we find a
                match, we can start the process of putting things in place for
                your exchange experience.
              </div>
            </div>
          </div>
          <div
            className={`bg-white text-black rounded-2xl shadow-md py-4 px-6 `}
          >
            <div
              className="font-semibold text-lg cursor-pointer"
              onClick={() => handleQuestionClick(6)}
            >
              What are your exchange programs?
            </div>
            <div
              className={`collapsible-content ${
                activeQuestion === 6 ? "open" : ""
              }`}
            >
              <div className="py-2 text-justify">
                <p className=" text-gv font-semibold">Global Volunteer (GV):</p>
                <p>
                  {" "}
                  Work with NGOs projects based on SDGs from 6 to 8 weeks,
                  generally food and accommodation are provided by AIESEC or
                  NGO. This program exchange fee is 1500 dh.{" "}
                </p>
                <br />
                <p className=" text-gta font-semibold"> Global Talent (GTa):</p>
                <p>
                  {" "}
                  Develop your leadership while boosting your career prospects
                  with an international internship in your field. The
                  opportunities available can be either: short term (9-12 weeks:
                  2000 dh), mid term (13 -26 weeks: 2500 dh), long term (27 -78
                  weeks: 3000 dh).
                </p>{" "}
                <br />
                <p className=" text-gte font-semibold">
                  {" "}
                  Global Teacher (GTe):
                </p>
                Develop your leadership while boosting your career prospects
                with an opportunity to work as a teacher abroad. The
                opportunities available can be either: short term (9-12 weeks:
                2000 dh), mid term (13 -26 weeks: 2500 dh), long term (27 -78
                weeks: 3000 dh).
              </div>
            </div>
          </div>
          <div
            className={`bg-white text-black rounded-2xl shadow-md py-4 px-6 `}
          >
            <div
              className="font-semibold text-lg cursor-pointer "
              onClick={() => handleQuestionClick(7)}
            >
              How can I be a member in AIESEC?
            </div>
            <div
              className={`collapsible-content ${
                activeQuestion === 7 ? "open" : ""
              }`}
            >
              <div className="py-2 text-justify">
                In order to be a member, you will have to wait for our
                recruitment which mostly happens around January in Winter, or
                August in Summer. To be updated with all our agenda, news,
                opportunities and recruitment, you can click on follow and see
                first!
              </div>
            </div>
          </div>
          <div
            className={`bg-white text-black rounded-2xl shadow-md py-4 px-6 `}
          >
            <div
              className="font-semibold text-lg cursor-pointer "
              onClick={() => handleQuestionClick(8)}
            >
              Is there any specific time for applying?
            </div>
            <div
              className={`collapsible-content ${
                activeQuestion === 8 ? "open" : ""
              }`}
            >
              <div className="py-2 text-justify">
                There’s no specific time set by the organization but for each
                opportunity there’s a deadline. For now there are opportunities
                that are open but their periods of start can be different from
                each other. <br /> <br />
                You can apply to the opportunity that suits your interest,
                preferably in countries and territories that are partners, and
                then go through the process (Our AIESEC members in both your
                home and host countries will make sure to be there every step of
                the way before leaving for your project or internship and while
                you are abroad!)
              </div>
            </div>
          </div>
          <div
            className={`bg-white text-black rounded-2xl shadow-md py-4 px-6 `}
          >
            <div
              className="font-semibold text-lg cursor-pointer"
              onClick={() => handleQuestionClick(9)}
            >
              Where is your office?
            </div>
            <div
              className={`collapsible-content ${
                activeQuestion === 9 ? "open" : ""
              }`}
            >
              <div className="py-2 text-justify">
                Our Office is in{" "}
                <a
                  href="https://goo.gl/maps/ZKGpgVaQN4YaABRK8"
                  target="_blank"
                  className=" text-primary"
                  rel="noopener noreferrer"
                >
                  IIHEM Rabat
                </a>
                , near Megamall, but it is preferable to send us your contact
                info & our Local Office in your cities will be contacting you
                shortly. For more info, check our platform:{" "}
                <a
                  href="https://aiesec.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-primary"
                >
                  aiesec.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
