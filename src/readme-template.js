//Generates template for readme including the user's responses
const generateText = (Project, Description, Installing, contributionGuidelines,
    license, github, email, Tests) => {

    return `# ${Project}


## Description

${Description}

## Table of Contents

${Installing ? `- [Installation](#Installation)` : ""}
${contributionGuidelines ? `- [How To Contribute](#How-to-Contribute)` : ""}
${license ? `- [Licenses](#License)` : ""}
- [Contact](#Contact)
${Tests ? `- [Tests](#Tests)` : ""}

${Installing ? `## Installation 
${Installing}` : ""}


${contributionGuidelines ? `## How to Contribute 

${contributionGuidelines}` : ""}

${license ? `## License 
${license}` : ""}

## Contact

${github}
${email}


${Tests ? `## Tests 
${Tests}` : ""} 
`

}

module.exports = { generateText }

