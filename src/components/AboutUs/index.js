import React, { useState } from "react";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import { AboutUsContainer, AboutUsContent } from "./AboutUsElements";

//  AboutUsItems,
//   AboutUsP,
//   AboutUsButton,
//   AboutUsHeading,

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // function goBack() {
  //   alert("Hello!");
  // }

  return (
    <AboutUsContainer>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <AboutUsContent>
        Welcome to Bamber Ranch! We are so pleased to share with you a treasure
        our family has enjoyed for decades. Bamber Ranch is a labor of love from
        4 generations of Colorado cattlemen. Robert D. Bamber (Bob) grew up on
        his father and mother's (Vitale and Nellie) ranch outside of Pritchett
        CO. Bob loved helping his parents and working with his brothers and
        sister. He often took solo trips on horseback and train to transport
        cattle to sale.
        <br />
        <br />
        Bob was drafted into World War II and went to serve his country. Before
        leaving he married Juanita Mae Bickford who grew up on a neighboring
        homestead. When Bob returned he and Juanita began buying their own land
        and cattle to put together Bamber Ranch. Bob and Juanita enjoyed many
        happy years watching their family which included 3 children, 2
        daughters, Shirley and Tammy and a son Jack, and ranch grow. Upon Bob’s
        death his only son Jack took over the ranch along with his wife Sandee
        and 4 children Tonna, Jaclyn, Bobby and Shannon. Jack, a former rodeo
        cowboy, race horse owner and true American cattleman continues to care
        for and grow his herd today.
        <br />
        <br />
        Jack cares for his herd with great compassion and pride. A ranch of
        10,000 acres and 500 cattle takes a cowboy with a big heart. Calving
        season on the Bamber Ranch comes in the spring and as you know
        springtime in Colorado can often bring snow and cold temperatures. It
        was not an uncommon occurrence in the Bamber home for the children to
        awake a spring morning to find a brand new baby calf (or two!) in their
        kitchen, too young to be able withstand the cold temperatures and
        blowing winds. Warmed with towels and often the girls’ hair dryers the
        baby calves would be tenderly (and excitedly) nursed back to health. The
        new calf, often turned pet, would be bottle-fed and when healthy enough
        returned to the pasture. Jack with his soft heart keeping the animal on
        the ranch for years to come as they often were named and would still
        respond to the family who cared for them.
        <br />
        On the ranch today, there is a dog named Rooster and we have about 10
        quarter horses who, like our cattle, roam around freely on our Ranch.
        Bamber Ranch is not simply about beef production, Bamber Ranch is a
        labor of love. Family owned and operated. Cattle cared for and driven by
        Jack, his children and now grandchildren. We are so excited to share our
        Colorado ranch raised beef with you!
        <br />
      </AboutUsContent>

      {/* <AboutUsContent>
        <AboutUsItems>
          <AboutUsHeading>Beef</AboutUsHeading>
          <AboutUsP>Colorado Ranch Raised</AboutUsP>
          <AboutUsButton onClick={goBack}>Place Order</AboutUsButton>
        </AboutUsItems>
      </AboutUsContent> */}
    </AboutUsContainer>
  );
};

export default AboutUs;
