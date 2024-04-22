import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, Grid } from "@mui/material";
import logo from "../assets/Images/Reachout-Logo-240-x-56.png";
import backgroundImg from "../assets/Images/Desktop-size-1920-x-500px-_-Product-Page-02.png";
import List from "../Components/SMS-M-List/sms-m-list";
import TextList from "../Components/SMS-List/Sms-List";
import Benifit from "../Components/Benifits-Card/benifts-card";
import icon1 from "../assets/Icon/newspaper.png";
import icon2 from "../assets/Icon/id-card .png";
import icon3 from "../assets/Icon/multiple-users-silhouette.png";
import icon4 from "../assets/Icon/chatting.png";
import icon5 from "../assets/Icon/bar-chart.png";
import icon6 from "../assets/Icon/secure.png";
import mobilePhoneImg from "../assets/Images/20_-500-x-500-1.png";
import UniquenessCard from "../Components/Uniqueness/uniquenessCard";
import chart from "../assets/Icon/chart.png";
import setting from "../assets/Icon/profile.png";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Package from "../Components/packagesCard/package";
import RateCard from "../Components/Rate-Card/RateCard";
import SmsTable from "../Components/Table/table";
import Btn from "../Components/StarterButton/btn";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Page() {
  const [selectedValue, setSelectedValue] = useState("br"); // Initial value set to "br"

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  useEffect(() => {
  }, [selectedValue]); 

  useEffect(() => {
    AOS.init({
      duration: 2000 
    });
  }, []); 

  const data = [
    {
      title: "Title 1",
      text: "Text 1",
      icon: "icon1.png",
    },
    {
      title: "Title 2",
      text: "Text 2",
      icon: "icon2.png",
    },
    {
      title: "Title 3",
      text: "Text 3",
      icon: "icon3.png",
    },
    {
      title: "Title 4",
      text: "Text 4",
      icon: "icon4.png",
    },
  ];

  const packageBr = [
    {
      freeNumber: "2",
      freeSms: "20",
      validityPeriod: "60",
    },
    {
      freeNumber: "3",
      freeSms: "100",
      validityPeriod: "60",
    },
    {
      freeNumber: "4",
      freeSms: "200",
      validityPeriod: "60",
    },
    {
      freeNumber: "4",
      freeSms: "500",
      validityPeriod: "60",
    },
  ];
  const packageNic = [
    {
      freeNumber: "1",
      freeSms: "10",
      validityPeriod: "30",
    },
    {
      freeNumber: "2",
      freeSms: "50",
      validityPeriod: "30",
    },
    {
      freeNumber: "2",
      freeSms: "100",
      validityPeriod: "30",
    },
    {
      freeNumber: "3",
      freeSms: "250",
      validityPeriod: "30",
    },
  ];

  const conditionsBr = [
    {
      text: "For Star customers requiring more than 5 number maskings, there will be a one-time fee of Rs. 2500/- + Tax for each additional number masking.",
    },
    {
      text: "The number mask used must be relevant and owned by the company.",
    },
    {
      text: "The above Free SMS quoto based on 160 characters for Transactional SMS and 125 characters for Promotional SMS. Any character increase beyond these limits will be calculated accordingly.",
    },
  ];

  const conditionsNic = [
    {
      text: "Star customers requiring more than 3 number masking must upgrade their registration type from NIC/DL to BR",
    },
    {
      text: "The number mask used must be relevant and owned by the company.",
    },
    {
      text: "It is recommended to upgrade your registration type from NIC/DL to BR to enjoy double the benefits.",
    },
    {
      text: "The above Free SMS quota based on 160 characters for Transactional SMS and 125 characters for Promotional SMS. Any character increase beyond these limits will be calculated accordingly.",
    },
  ];

  function PackageList({ packages }) {
    return (
      <Grid container data-aos="fade-up">
        {packages.map((packageData, index) => (
          <Package key={index} {...packageData} />
        ))}
      </Grid>
    );
  }

  function ConditionList({ Conditions }) {
    return (
      <Grid container data-aos="fade-up">
        {Conditions.map((packageData, index) => (
          <TextList key={index} {...packageData} />
        ))}
      </Grid>
    );
  }

  return (
    <>
      <Grid
        container
        sx={{
          backgroundColor: "black",
          height: "8vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid data-aos="fade-right" lg={8} md={10} sm={10} xs={11}>
          <img
            src={logo}
            alt="Your Image"
            style={{ width: "auto", height: "auto" }}
          />
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          backgroundImage: `url(${backgroundImg})`,
          height: "82vh",
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid data-aos="fade-up"  mb={4} lg={8} md={10} sm={10} xs={11}>
          <Typography   sx={{ fontWeight: "bold", fontSize: "28px" }}>
            Revolutionize Your Business with <br /> ‘ReachOut’ SMS Marketing
            Platform
          </Typography>

          <Typography pt={1} sx={{ fontSize: "18px" }}>
            Now, you can register your account by logging into the portal and{" "}
            <br /> creating a User ID to send SMS messages to your contacts
            within <br /> few Clicks!
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          item
          mt={4}
          lg={8}
          md={10}
          sm={10}
          xs={11}
          textAlign={{ lg: "start", md: "start" }}
        >
          <Typography
            sx={{ fontWeight: "bold", fontSize: { lg: "28px", md: "24px" } }}
          >
            Are you ready to take your business to new heights of growth? Unlock
            the power of SMS marketing with our cutting-edge platform!
          </Typography>
        </Grid>
        <Grid mt={2} lg={8} md={10} sm={10} xs={11} textAlign={"start"}>
          <Typography sx={{ fontSize: { lg: "18px", md: "18px" } }}>
            SMS marketing has become a game-changer in the world of business
            communication. It’s the art of sending targeted text messages to
            your customers, and it’s more effective than ever before.
          </Typography>
        </Grid>
        <Grid mt={3} lg={8} md={10} sm={10} xs={11} textAlign={"start"}>
          <Typography
            sx={{ fontWeight: "bold", fontSize: { lg: "28px", md: "24px" } }}
          >
            What is Maraketing?
          </Typography>
          <Typography mt={2} sx={{ fontSize: { lg: "18px", md: "18px" } }}>
            SMS marketing is a powerful tool that allows businesses to send
            personalized and timely messages to customers’ mobile phones. Unlike
            other marketing channels, SMS has an astonishing open rate of 98%,
            ensuring that your messages gets noticed.
          </Typography>
        </Grid>
        <Grid item mt={3} lg={8} md={10} sm={10} xs={11} textAlign={"start"}>
          <Typography
            sx={{ fontWeight: "bold", fontSize: { lg: "28px", md: "24px" } }}
          >
            Why Do You Need SMS Marketing?
          </Typography>
          <Typography mt={2} sx={{ fontSize: { lg: "18px", md: "18px" } }}>
            In today’s competitive market, standing out is crucial. SMS
            marketing allows you to connect with your customers in a direct and
            personal way. Whether you’re a startup, a small local business, a
            growing business or an established enterprise, SMS marketing can
            help you:
          </Typography>

          <Grid lg={12} md={12} sm={12} mt={3}>
            <List
              title="Boost Engagement : "
              text="SMS messages have a much higher open and response rate compared to emails or social media."
            />
            <List
              title="Increase Sales : "
              text="Send promotions, exclusive offers, and discounts directly to your customers' phones to drive sales."
            />
            <List
              title="Improve Customer Loyalty :"
              text="Keep your customers informed about new products, events, and updates, fostering brand loyalty."
            />
            <List
              title="Enhance Customer Service :"
              text="Send order updates, appointment reminders, or solicit feedback through SMS to provide exceptional customer service."
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        mt={12}
        container
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          item
          lg={8}
          md={10}
          sm={10}
          xs={11}
          textAlign={{ lg: "center", md: "start" }}
        >
          <Grid>
            <Typography
              sx={{
                fontSize: { lg: "28px", md: "28px", sm: "20px" },
                fontWeight: "bold",
              }}
            >
              How ‘ReachOut’ SMS Marketing Platform Benefits Your Business
            </Typography>
            <Typography mt={3} sx={{ fontSize: { lg: "18px", md: "18px" } }}>
              Our SMS Marketing Platform is designed to empower your business
              with advanced features and capabilities
            </Typography>
          </Grid>

          <Grid container mt={6} rowGap={2} display={"flex"}>
            <Benifit
              title="Easy Campaign Management"
              text="Create and schedule SMS campaigns with ease, allowing you to stay organized and efficient."
              icon={icon1}
            />

            <Benifit
              title="Sender IDs / Number Masking"
              text="Use your BRAND NAME to send SMS campaigns and stand out in your recipients' inbox, making it a powerful branding strategy."
              icon={icon2}
            />

            <Benifit
              title="Targeted Messaging"
              text="Segment your audience list based on demographics, purchase history, and behavior to send highly relevant messages."
              icon={icon3}
            />

            <Benifit
              title="Customized Messaging"
              text="Personalize your Message contents with a single template."
              icon={icon4}
            />

            <Benifit
              title="Detailed Analytics"
              text="Gain insights into your campaign performance with comprehensive analytics and reporting."
              icon={icon5}
            />

            <Benifit
              title="Compliance and Security"
              text="Rest easy knowing that our platform adheres to all SMS marketing regulations and ensures data security."
              icon={icon6}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        mt={6}
        pb={5}
        container
        sx={{
          backgroundColor: "#fff8eb",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid mt={1} item lg={8} md={10} sm={10} xs={11} display={"flex"}>
          <Grid mt={4} item lg={12} md={12} sm={12} xs={12} textAlign={"start"}>
            <Typography
              sx={{
                fontSize: { lg: "28px", md: "24px", xs: "18px" },
                fontWeight: "bold",
              }}
            >
              The Uniqueness of Our ‘ReachOut’ SMS Marketing Platform:
            </Typography>
            <Grid lg={12} md={12} sm={12} xs={12} mt={3}>
              <UniquenessCard
                icon={icon4}
                title="Customized Messaging"
                text="Personalize your Message contents with a single template."
              />
              <UniquenessCard
                icon={setting}
                title="Self-Care Registration"
                text="Hassle-free registration with our user-friendly self-care portal, putting you in control of your SMS marketing journey."
              />
              <UniquenessCard
                icon={chart}
                title="Campaign Execution Module"
                text="Execute your SMS campaigns effortlessly with our intuitive module, designed to streamline the process for maximum results"
              />
            </Grid>
          </Grid>
          <Grid
            mt={15}
            alignItems={"center"}
            item
            lg={6}
            md={8}
            sm={8}
            display={{ lg: "flex", md: "flex", sm: "none", xs: "none" }}
            justifyContent={"center"}
          >
            <Box
              component={"img"}
              src={mobilePhoneImg}
              sx={{ width: "85%", height: "88%", color: "#FF6E3C" }}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          mt={6}
          item
          lg={8}
          md={10}
          sm={10}
          xs={11}
          display={"flex"}
          justifyContent={"center"}
        >
          <Grid lg={12} sm={12} md={12} xs={12}>
            <Typography
              textAlign={"center"}
              sx={{ fontWeight: "bold", fontSize: "28px" }}
            >
              Registration Type and the Benefits
            </Typography>
            <Typography textAlign={"start"} mt={3} sx={{ fontSize: "16px" }}>
              You can register using your Business Registration (BR), National
              Identity Card (NIC), or Driving License (DL). However, registering
              with your Business Registration will double your benefits! Refer
              to the table below for more details.
            </Typography>

            <Typography textAlign="start" mt={3} sx={{ fontSize: "16px" }}>
              <span style={{ fontWeight: "bold" }}>
                Startup, Small Office, and Home Office (SOHO/Micro):
              </span>{" "}
              For online registration, you need scanned copies of NIC or DL, and
              any recent utility bills or the latest bank statements as billing
              proof.
            </Typography>

            <Typography textAlign="start" mt={3} sx={{ fontSize: "16px" }}>
              <span style={{ fontWeight: "bold" }}>
                Sole Proprietorship/Partnership:
              </span>{" "}
              For online registration, provide scanned copies of the BR, owner’s
              NIC or DL, and any recent utility bills, along with the latest
              bank statements as billing proof.
            </Typography>

            <Typography textAlign="start" mt={3} sx={{ fontSize: "16px" }}>
              <span style={{ fontWeight: "bold" }}>
                Private Limited or Corporation:
              </span>{" "}
              For online registration, submit scanned copies of the BR, Form
              1/20/Act, and the Director’s NIC or DL. If VAT/SVAT registered,
              include the scanned copy.
            </Typography>

            <Grid mt={3} item>
              <Grid
                lg={12}
                md={12}
                sm={12}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="br"
                    value={selectedValue}
                    onChange={handleRadioChange}
                    name="radio-buttons-group"
                    sx={{
                      width: { lg: "60vh", md: "60vh", sm: "40vh", xs: "30vh" },
                    }}
                  >
                    <FormControlLabel
                      sx={{
                        backgroundColor: "#FF6E3C",
                        p: "10px",
                        borderRadius: "10px",
                        color: "white",
                      }}
                      value="br"
                      control={
                        <Radio
                          sx={{
                            color: "grey",
                            "&.Mui-checked": {
                              color: "black",
                            },
                          }}
                        />
                      }
                      label={
                        <Typography
                          sx={{ fontSize: "16px", fontWeight: "bold" }}
                        >
                          If Registered with BR
                        </Typography>
                      }
                    />

                    <FormControlLabel
                      sx={{
                        backgroundColor: "#FF6E3C",
                        mt: "10px",

                        p: "10px",
                        borderRadius: "10px",
                        color: "white",
                      }}
                      value="nic"
                      control={
                        <Radio
                          sx={{
                            color: "grey",
                            "&.Mui-checked": {
                              color: "black",
                            },
                          }}
                        />
                      }
                      label={
                        <Typography
                          sx={{ fontSize: "16px", fontWeight: "bold" }}
                        >
                          If Registered with NIC or DL
                        </Typography>
                      }
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid mt={8} display={"flex"} justifyContent={"center"}>
                <Typography sx={{ fontSize: "28px", fontWeight: "bold" }}>
                  One time bundled offer
                </Typography>
              </Grid>

              <Grid container mt={6} rowGap={2} display={"flex"}>
                {selectedValue === "br" ? (
                  <PackageList packages={packageBr} />
                ) : (
                  <PackageList packages={packageNic} />
                )}
              </Grid>

              <Grid mt={4} item lg={12} sm={12} md={12} xs={12}>
                <Typography
                  mb={3}
                  sx={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Terms & Conditions
                </Typography>

                {selectedValue === "br" ? (
                  <ConditionList Conditions={conditionsBr} />
                ) : (
                  <ConditionList Conditions={conditionsNic} />
                )}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        mt={4}
        container
        sx={{
          backgroundColor: "#fff8eb",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid pb={5} mt={3} item lg={8} md={10} sm={10} xs={10}>
          <Grid item lg={12} md={12} textAlign={"center"}>
            <Typography sx={{ fontSize: "28px", fontWeight: "bold" }}>
              Account Type and the Benefits
            </Typography>
            <Typography mt={3} sx={{ fontSize: "18px" }}>
              Your benefits depend on the chosen Account Type. Yet, you can
              upgrade your Account to enjoy additional benefits as outlined in
              the rate card table below
            </Typography>
          </Grid>

          <Grid container mt={6} rowGap={2} display={"flex"}>
            <RateCard title="Intro" price="1500" smsCost="2.00" />
            <RateCard title="Starter" price="3500" smsCost="1.50" />
            <RateCard title="Growth" price="5500" smsCost="1.00" />
            <RateCard title="Star" price="10000" smsCost="0.60" />
          </Grid>
        </Grid>
      </Grid>

      <Grid
        mt={3}
        container
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          pb={8}
          display={"flex"}
          mt={2}
          item
          lg={8}
          md={10}
          sm={10}
          xs={10}
        >
          <Grid item lg={6} md={12} sm={12} xs={12}>
            <Typography sx={{ fontSize: "28px", fontWeight: "bold" }}>
              Terms & Conditions
            </Typography>
            <Grid lg={11} md={12} sm={12} mt={3}>
              <TextList text="Approx.. of 35 characters will be used for Opt-Out message as per TRCL guid lines for Promotional SMS" />
              <TextList text="Above SMS rates are for All Mobile Networks in Sri Lanka" />
              <TextList text="The One-Time setup fee is non-refundable." />
            </Grid>
          </Grid>
          <Grid item mt={{ md: 6, lg: 0, sm: 6, xs: 6 }} lg={6} md={12} xs={12}>
            <Typography sx={{ fontSize: "28px", fontWeight: "bold" }}>
              Promotional SMS
            </Typography>
            <Typography mt={2.2} sx={{ fontSize: "16px" }}>
              These messages are all about promoting a product or service. They
              include any sales or marketing texts, whether you asked for them
              or not. Look out for deals, discounts, coupons, and more in these
              messages.
            </Typography>

            <Typography mt={3} sx={{ fontSize: "28px", fontWeight: "bold" }}>
              Transactional SMS
            </Typography>
            <Typography mt={2} sx={{ fontSize: "16px" }}>
              These messages are sent to share important details about using a
              product, service, and any other relevant notification to your
              client.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        mt={6}
        pb={6}
        container
        sx={{
          backgroundColor: "#fff8eb",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid mt={6} item lg={8} md={10} sm={10} xs={10} display={"flex"}>
          <Grid mt={2} item lg={12} md={12} sm={12} textAlign={"center"}>
            <Typography
              sx={{
                fontSize: { lg: "28px", md: "24px", sm: "24px" },
                fontWeight: "bold",
              }}
            >
              Buy Credit / Reload Packs and Enjoy Benefits
            </Typography>
            <Typography
              mt={2}
              sx={{ fontSize: { lg: "18px", md: "16px", sm: "16px" } }}
            >
              After registering your account through the portal, you can now add
              credit using your debit or credit card or by reloading your Hutch
              account number. This credit allows you to use the ReachOut
              Platform for sending Bulk SMS. The validity of the credit will
              depend on your account registration type (BR, NIC, or DL). Refer
              to table 02 for more details.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          lg={12}
          md={12}
          sm={12}
          justifyContent={"center"}
          display={"flex"}
        >
          {/* <Grid mt={6} item lg={8} md={10} sm={12} xs={11} display={"flex"} justifyContent={"center"}>
            <SmsTable />
          </Grid> */}
        </Grid>
        <Grid
          mt={6}
          lg={12}
          md={12}
          sm={10}
          xs={10}
          display={"flex"}
          justifyContent={"center"}
        >
          <Grid  item lg={8} md={8} justifyContent={"start"}>
            <Typography
              sx={{
                fontSize: { lg: "28px", md: "24px", sm: "24px" },
                fontWeight: "bold",
              }}
            >
              Terms & Conditions
            </Typography>

            <Grid mt={4}>
              <TextList text="Rates mentioned include the current Government Tax; changes will apply." />
              <TextList text="The SMS quota/number of SMS units applies to all mobile networks in Sri Lanka (Flat Rate for All Networks)." />
              <TextList text="The SMS validity period for the SMS Pack is subject to your registration type, i.e., BR or NIC." />
              <TextList text="Each SMS unit is equivalent to 160 SMS characters (Transactional SMS)." />
              <TextList text="The One-Time setup fee is non-refundable." />
              <TextList text="Approximately 35 characters will be used for the Opt-Out message as per TRCL guidelines (for Promotional SMS)" />
            </Grid>
          </Grid>
        </Grid>

        <Grid
          mt={6}
          lg={8}
          md={8}
          sm={10}
          xs={10}
          p={3}
          sx={{
            backgroundColor: "white",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
            borderRadius: "5px",
          }}
        >
          <Typography
            textAlign={"center"}
            sx={{
              fontSize: { lg: "28px", md: "22px", sm: "20px" },
              fontWeight: "bold",
            }}
          >
            Ready to transform your business with ReachOut SMS marketing?
          </Typography>
          <Grid
            container
            p={3}
            gap={{ lg: 2, md: 2, sm: 2, xs: 2 }}
            display={"flex"}
            justifyContent={"center"}
          >
            <Grid
              item
              display={"flex"}
              alignItems={"center"}
              lg={5}
              md={5}
              sm={12}
              p={2}
              sx={{ backgroundColor: "#FF6E3C", borderRadius: "10px" }}
            >
              <Typography
                color={"white"}
                textAlign={"center"}
                sx={{
                  fontSize: { lg: "18px", md: "18px", sm: "20px" },
                }}
              >
                Try our platform for free with a demo package and make a start
                to your business new growth journey
              </Typography>
            </Grid>
            <Grid
              item
              display={"flex"}
              alignItems={"center"}
              lg={5}
              md={5}
              sm={12}
              p={2}
              sx={{
                border: "2px solid #FF6E3C",
                borderRadius: "10px",
              }}
            >
              <Typography
                color={"black"}
                textAlign={"center"}
                sx={{
                  fontSize: { lg: "18px", md: "18px", sm: "20px" },
                }}
              >
                Schedule an appointment with our experts for a personalized
                demonstration of how our SMS Marketing Platform can take your
                business to a new level.
              </Typography>
            </Grid>
          </Grid>
          <Typography
            color={"black"}
            textAlign={"center"}
            sx={{
              fontSize: { lg: "18px", md: "18px", sm: "18px", xs: "16px" },
            }}
          >
            Don’t miss out on the opportunity to engage, convert, and retain
            your customers. Join the SMS marketing revolution today!
          </Typography>
          <Grid
            mx={"auto"}
            lg={5}
            md={5}
            sm={5}
            xs={8}
            mt={3}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Btn />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Page;
