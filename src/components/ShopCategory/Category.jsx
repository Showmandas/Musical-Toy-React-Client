import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from "./CategoryCard";
export default function Category() {
  const [category, setCategory] = useState([]);
  console.log(category);
  const [activeTab, setActiveTab] = useState("classical");
  console.log(activeTab);

  useEffect(() => {
    fetch(`https://musical-toy.vercel.app/alltoy/${activeTab}`)
      .then((res) => res.json())
      .then(result => {
        setCategory(result);
      });
  },[activeTab]);

  //   const result=category?.filter(data=>data.toyCategory==activeTab);
  // console.log(result)

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className="container my-5">
      <h2>Shop By Category</h2>
        <div className="text-center w-50 m-auto">
          <Tabs>
          <TabList>

            <Tab
              onClick={() => handleTabClick("classical")}
              className={`btn classical
               ${activeTab == "classical" ? " bg-danger text-white" : ""}`}
            >
              Classical
            </Tab>
            <Tab
              onClick={() => handleTabClick("pop")}
              className={`btn pop ${
                activeTab == "pop" ? " bg-danger text-white" : ""
              }`}
            >
              Pop
            </Tab>
            <Tab
              onClick={() => handleTabClick("hiphop")}
              className={`btn hiphop ${
                activeTab == "hiphop" ? " bg-danger text-white" : ""
              }`}
            >
              Hip Hop
            </Tab>
          </TabList>
          </Tabs>
        </div>
        <TabPanel className="container d-flex justify-content-center align-items-center gap-5 my-5">
          {category.slice(0,3)?.map((data) => (
            <CategoryCard data={data} key={data._id} />
          ))}
        </TabPanel>
      </div>

  );
}
