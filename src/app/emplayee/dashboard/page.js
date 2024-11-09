import Layout from "@/app/component/common/Layout";
import DashBoard from "@/app/component/staff/DashBoard";
import Tabs from "@/app/component/staff/Tabs";
import React from "react";

const page = () => {
  return (
    <Layout>
      <div className="p-3">
        <Tabs />
      </div>
    </Layout>
  );
};

export default page;
