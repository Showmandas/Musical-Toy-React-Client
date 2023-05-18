import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
export default function Category() {
  return (
    <div className='container my-5'>
    <h2>Shop By Category</h2>
        <Tabs className='w-50 m-auto'>
    <TabList className='text-center'>
      <Tab>Classical</Tab>
      <Tab>Pop</Tab>
      <Tab>Hip Hop</Tab>
    </TabList>

    <TabPanel>
    <div className='d-flex'>
    <div className="card">
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Violin</h5>
    <p className="card-text">Price: 500 /-</p>
    <a href="#" className="btn btn-primary">View Details</a>
  </div>
</div>
    </div>
     
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
    </div>
  )
}
