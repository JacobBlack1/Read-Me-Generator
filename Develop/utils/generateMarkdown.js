function renderLicenseBadge(license) {
  if (license == "Apache") {
    console.log("apache");
    license =
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    return license;
  } else if (license == "GNU") {
    console.log("GNU");
    license =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](http://www.gnu.org/licenses/gpl-3.0)";
    return license;
  } else if (license == "MIT") {
    license =
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    return license;
  } else if ((license = "Boost")) {
    ("[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)");
    return license;
  } else if (license == "Eclipse") {
    license =
      "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    return license;
  }

  else if (license == "None" || license == null) {
    license = " ";
    return license;
  }
}




function generateMarkdown(reponse) {
  return `
# ${response.title}

#Table of Contents(#table-of-contents)

-[Description](#description)
-[Installation](#instuction)
-[usage](#usage)
-[test](#test)
-[contribution](#contribution)
-[Credits](#Credits)    
-[License](#License)
-[questions](#questions)


## Desciption:
![License](https://img.shields.io/badge/Licence-${response.licence}-blue.svg "License Badge")

  ${response.description}
## Installation:
  ${response.Installation}
## usage:
  ${response.usage}
## Contributon:
  ${response.contribution}
## Test:
  ${response.test}
## Credits:
  ${response.credit}
## License:
This application is covered under the ${response.license}
 license. To learn more about the the ${response.license} 
 license, click on ${renderLicenseBadge(response.license)}

## Questions:
  For any questions, go to my GitHub page down below:

  [GitHub/${response.githubUsername}](https://github.com/${response.githubUsername})

### [Return to the Table of Contents](#table-of-contents)`;
}

module.exports = generateMarkdown;