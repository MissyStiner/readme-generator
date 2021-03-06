// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

This project is licensed under the ${license} license.`;
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

Run the following command to install dependencies:

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}
  
## Contributing

${data.contributing}

## Tests

Use the following command to run tests:

${data.test}

## Questions

Contact me with questions at ${
    data.email
  }. Check out my work at [${data.github}](https://github.com/${
    data.github
  }/).

`;
}

module.exports = generateMarkdown;
