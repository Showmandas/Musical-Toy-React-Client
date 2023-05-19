import React, { useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryCard from './CategoryCard';
export default function Category() {
  const[category,setCategory]=useState([])
  const [activeTab, setActiveTab] = useState("classical");

  
  useEffect(() => {
    fetch(`https://musical-toy.vercel.app/alltoy/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setCategory(result);
      });
  }, []);

  const result=category?.filter(data=>data.status==activeTab);
  console.log(result)

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className='container my-5'>
    <h2>Shop By Category</h2>
        <Tabs className='w-50 m-auto'>
    <TabList className='text-center'>
      <Tab  onClick={() => handleTabClick("classical")}
              className={`tab  tab2 classical ${
                activeTab == "classical" ? " bg-danger text-white" : ""
              }`}>Classical</Tab>
      <Tab onClick={() => handleTabClick("pop")}
              className={`tab  tab2 pop ${
                activeTab == "pop" ? " bg-danger text-white" : ""
              }`}>Pop</Tab>
      <Tab onClick={() => handleTabClick("hiphop")}
              className={`tab  tab2 hiphop ${
                activeTab == "hiphop" ? " bg-danger text-white" : ""
              }`}>Hip Hop</Tab>
    </TabList>

    <TabPanel>
    <div className='d-flex'>
    {
      category.map(datas=><CategoryCard datas={datas}/>)
    }
    </div>
     
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
    </div>
  )
}
