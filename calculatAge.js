//Program to Calculate Age Using Date of Birth
function calculateAge(yearOfBirth) {
    const currentYear = new Date().getFullYear();
    return currentYear - yearOfBirth;
  }
  
  console.log(calculateAge(1990)); // Example: Output (assuming current year is 2024): 34
  