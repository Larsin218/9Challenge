function renderLicenseBadge(license) {
  const badges = {
      'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
      'Apache 2.0': '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
      'GPLv3': '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
      'None': ''
  };
  return badges[license] || '';
}

function renderLicenseLink(license) {
  const links = {
      'MIT': 'https://opensource.org/licenses/MIT',
      'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
      'GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
      'None': ''
  };
  return links[license] || '';
}

function renderLicenseSection(license) {
  if (license === 'None') {
      return '';
  } else {
      return `## License\nThis project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
  }
}

function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
Any questions can be answered by [${data.github}] on GitHub or at [${data.email}].
`;
}

module.exports = generateMarkdown;
