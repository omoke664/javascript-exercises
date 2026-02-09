const findTheOldest = function(people) {
  // Helper function to calculate age
  const getAge = (person) => {
    const finish = person.yearOfDeath || new Date().getFullYear();
    return finish - person.yearOfBirth;
  };

  // We start by assuming the first person is the oldest
  let oldestPerson = people[0];

  for (let i = 1; i < people.length; i++) {
    const currentPerson = people[i];
    
    // Compare ages using our helper
    if (getAge(currentPerson) > getAge(oldestPerson)) {
      oldestPerson = currentPerson;
    }
  }

  return oldestPerson; // Return the whole object {name: "...", ...}
};

// Do not edit below this line
module.exports = findTheOldest;
