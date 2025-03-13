// Code your solution here
function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
  }
  
  function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  
  const broncosRecord = [
    { year: "2014", result: "L" },
    { year: "2015", result: "W" },
    { year: "2016", result: "L" }
  ];
  
  console.log(superbowlWin(broncosRecord)); 
  
  const drivers = ["Sam", "Sarah", "Sally", "Samantha"];
  console.log(findMatching(drivers, "sAm")); 
  console.log(fuzzyMatch(drivers, "Sa")); 
  
  const driverObjects = [
    { name: "Bobby", hometown: "New York" },
    { name: "Sam", hometown: "Nashville" },
    { name: "Sarah", hometown: "Los Angeles" }
  ];
  
  console.log(matchName(driverObjects, "Sam")); 
