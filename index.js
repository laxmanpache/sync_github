
  const repositories = [
    {
      owner: 'LaxmanPache123',
      repo: 'noteapp',
      branch: 'main'
    },
    {
        owner: 'Nuva-Org',
        repo: 'model_inventory',
        branch: 'v1.0.0'
      },
      {
        owner: 'LaxmanPache123',
        repo: 'noteapp',
        branch: 'main'
      },
      {
        owner: 'Nuva-Org',
        repo: 'Nimbus-Frontend',
        branch: 'onprem'
      },
  ];

const https = require('https');
const fs = require('fs');

for (const repo of repositories) {
    const zipUrl = `https://github.com/${repo.owner}/${repo.repo}/archive/${repo.branch}.zip`;
    const zipFile = `./zipFiles/${repo.owner}-${repo.repo}-${repo.branch}.zip`;
    const file = fs.createWriteStream(zipFile);
    https.get(zipUrl, function(response) {
      response.pipe(file);
    });
  }
