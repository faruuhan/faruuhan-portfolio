import React, { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import ProfileCard from "../../components/profileCard/ProfileCard";
import "animate.css";

const Homepage = () => {
  useEffect(() => {
    document.title = "farhan — developer";
  }, []);

  return (
    <Layout>
      <div className="p-5 max-w-[931px] m-auto flex flex-col lg:py-10">
        <div>
          <ProfileCard />
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
