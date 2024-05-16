import React, { useEffect, useState } from "react";
import { useStateContext } from "../context";
import DisplayCampaigns from "../components/DisplayCampaigns";
import Banner from "../components/Banner";

const Home = () => {
  const [isLoading, setisLoading] = useState(false);
  const [campaigns, setcampaigns] = useState([]);
  const { address, contract, getCampaigns } = useStateContext();
  const fetchcampaigns = async () => {
    setisLoading(true);
    const data = await getCampaigns();
    setcampaigns(data);
    setisLoading(false);
  };

  useEffect(() => {
    if (contract) fetchcampaigns();
  }, [address, contract]);
  return (
    <>
      <Banner />
      <DisplayCampaigns
        title="All Campaigns"
        isLoading={isLoading}
        campaigns={campaigns}
      />
    </>
  );
};

export default Home;
