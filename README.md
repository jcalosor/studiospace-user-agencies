# Studiospace User Agency Backend


## Introduction
Get all agencies. "Advertising, Brand & Creative" and "Media, PR & Events" are both serviceGroups that can be found inside of an agencies agencyService. To determine if an agency is in a region, check all locations for the agency and see if a country code of "AU", "GB" or "US" exists within it, if so, they are in that relevant region. Include the count of the number of agencies that have neither of these service groups in the Other category.

## Technologies Used
- **Node.js**: Runtime for building server-side applications.
- **TypeScript**: Enhances JavaScript with static typing.
- **Axios**: Handles http request.

## Installation

### 1. Clone the Repository
```bash
git clone git@github.com:jcalosor/studiospace-user-agencies.git
cd studiospace-user-agencies
```

### 2. Install dependencies
```bash
npm install
```

## Test
### 1. Execute the command
```bash
npm start 

OR

npx ts-node src/index.ts
```


## Result
The result of the command should be as follows:
```bash
Results:
Processed Agencies: {n}
Region Counts: { AU: {n}, GB: {n}, US: {n} }
Targeted Agencies Count: {n}
Other Category Count: {n}
```