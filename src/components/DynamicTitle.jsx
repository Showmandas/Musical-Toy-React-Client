import React from 'react'

export default function DynamicTitle() {
    
// Custom hook to get the current location
const location = useLocation();

useEffect(() => {
  // Update the page title when the location changes
  document.title = getPageTitle(location.pathname);
}, [location]);

// Function to determine the page title based on the route
const getPageTitle = (pathname) => {
  switch (pathname) {
    case '/':
      return 'Home | MusicalToy';
    case '/alltoy':
      return 'AllToy | MusicalToy';
    case '/addtoy':
      return 'AddToy | MusicalToy';
    case '/login':
      return 'Login | MusicalToy';
    case '/mytoy':
      return 'MyToy | MusicalToy';
    // Add more cases for other routes as needed
    default:
      return 'Musical Toy';
  }
};

  return (
    
    
  )
}
