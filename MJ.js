/ Function to calculate NSSF savings
function calculateNSSF(age, yearsOfWork, basicSalary) {
    const retirementAge = 55;
    const monthsPerYear = 12;
    const nssfRate = 0.15;

    // Calculate years to retirement
    const yearsToRetirement = retirementAge - age;

    // Calculate total NSSF amount accumulated
    const totalNSSF = yearsOfWork * monthsPerYear * (nssfRate * basicSalary);

    // Return an object with results
    return {
        yearsToRetirement: yearsToRetirement,
        totalNSSF: totalNSSF
    };
}

// Example usage:
const age = 30; // Current age of the employee
const yearsOfWork = 15; // Number of years the employee has been working
const basicSalary = 100000; // Employee's basic salary

// Calculate NSSF savings
const result = calculateNSSF(age, yearsOfWork, basicSalary);

// Display results
console.log(`Years to retirement: ${result.yearsToRetirement} years`);
console.log(`Total NSSF accumulated: ${result.totalNSSF}`);