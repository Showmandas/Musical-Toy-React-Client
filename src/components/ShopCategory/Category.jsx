import React, { useEffect, useState } from "react";
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import CategoryCard from "./CategoryCard";
export default function Category() {
  const [category, setCategory] = useState([]);
  console.log(category);
  const [activeTab, setActiveTab] = useState("classical");
  console.log(activeTab);

  useEffect(() => {
    fetch(`https://musical-toy.vercel.app/getCategory/${activeTab}`)
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
      <div className="tab-container text-center">
        <div className="text-center w-100 m-auto">
          <div className="tabs d-flex justify-content-center align-items-center">
            <div
              onClick={() => handleTabClick("classical")}
              className={`tab  tab2 classical
               ${activeTab == "classical" ? " bg-danger text-white" : ""}`}
            >
              Classical
            </div>
            <div
              onClick={() => handleTabClick("pop")}
              className={`tab  tab2 pop ${
                activeTab == "pop" ? " bg-danger text-white" : ""
              }`}
            >
              Pop
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center align-items-center gap-5 my-5">
          {category.slice(0,3)?.map((data) => (
            <CategoryCard data={data} key={data._id} />
          ))}
        </div>
      </div>
    </div>
  );
}
