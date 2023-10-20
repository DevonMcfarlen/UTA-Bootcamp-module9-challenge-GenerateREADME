// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache 2.0': 
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
    case 'Boost':
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`;
    case 'BSD 3-Clause':
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`;
    case 'BSD 2-Clause':
      return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]`;
    case 'Eclipse':
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]`;
    case 'IBM Public License':
      return `[![License](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]`;
    case 'ISC':
      return `[![License](https://img.shields.io/badge/License-ISC-blue.svg)]`;
    case 'MIT':
      return `[![License](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
    case 'Mozzilla Public License':
      return `[![License](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`;
    case 'Perl':
      return `[![License](https://img.shields.io/badge/License-Perl-0298c3.svg)]`;
    case 'Unlicense':
      return `[![License](https://img.shields.io/badge/license-Unlicense-blue.svg)]`;
    case 'WTFPL':
      return `[![License](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)]`;
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'Apache 2.0': 
      return `(https://opensource.org/licenses/Apache-2.0)`;
    case 'Boost':
      return `(https://www.boost.org/LICENSE_1_0.txt)`;
    case 'BSD 3-Clause':
      return `(https://opensource.org/licenses/BSD-3-Clause)`;
    case 'BSD 2-Clause':
      return `(https://opensource.org/licenses/BSD-2-Clause)`;
    case 'Eclipse':
      return `(https://opensource.org/licenses/EPL-1.0)`;
    case 'IBM Public License':
      return `(https://opensource.org/licenses/IPL-1.0)`;
    case 'ISC':
      return `(https://opensource.org/licenses/ISC)`;
    case 'MIT':
      return `(https://opensource.org/licenses/MIT)`;
    case 'Mozzilla Public License':
      return `(https://opensource.org/licenses/MPL-2.0)`;
    case 'Perl':
      return `(https://opensource.org/licenses/Artistic-2.0)`;
    case 'Unlicense':
      return `(http://unlicense.org/)`;
    case 'WTFPL':
      return `(http://www.wtfpl.net/about/)`;
    default:
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'No License')
    return '';
  else
    return `## License
  ${renderLicenseBadge(license)}${renderLicenseLink(license)} <br> This project is covered under the ${license} license`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Table of Contents

  [Description](#description) <br>
  [Installation Instructions](#install) <br>
  [Usage](#usage) <br>
  [How To Contribute](#contribute) <br>
  [Tests](#tests) <br>
  [Questions](#questions) <br>

  ## Description <a name="description"></a>
  
  ${data.desc}

  ## Installation Instructions <a name="install"></a>

  ${data.install}
  

  ## Usage <a name="usage"></a>

  ${data.usage}

  ## How to Contribute <a name="contribute"></a>

  ${data.contri}
  
  ## Tests <a name="tests"></a>

  ${data.tests}
  
  
  ## Questions <a name="questions"></a>

  [My Github](https://github.com/${data.gitHub}) 
  <br>
  Email me at ${data.email} if you have any questions, and I'll get back to you as soon as possible!

  ${renderLicenseSection(data.license)}

  `;
}

module.exports = generateMarkdown;
