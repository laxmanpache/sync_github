
  const repositories = [
    {
      owner: 'LaxmanPache123',
      repo: 'noteapp',
      branch: 'main'
    },
    {
      owner: 'LaxmanPache123',
      repo: 'funny',
      branch: 'main'
    },
    // {
    //     owner: 'Nuva-Org',
    //     repo: 'model_inventory',
    //     branch: 'v1.0.0'
    //   },
      // {
      //   owner: 'LaxmanPache123',
      //   repo: 'noteapp',
      //   branch: 'main'
      // },
      // {
      //   owner: 'Nuva-Org',
      //   repo: 'Nimbus-Frontend',
      //   branch: 'onprem'
      // },
  ];

import * as fs from 'fs'
import fetch from 'node-fetch'
import { TOKEN } from './Config.js';
const getAllZip=async()=>{
  console.log('process started')
  for(const repo of repositories){
    const zipUrl = `https://api.github.com/repos/${repo.owner}/${repo.repo}/zipball/${repo.branch}`;
      const zipFile = `./zipFiles/${repo.owner}-${repo.repo}-${repo.branch}.zip`;
    const response = await fetch(zipUrl, {
          headers: {
            Authorization: `Bearer ${TOKEN}`
          }
        });
  if (response.ok) {
    const dest = fs.createWriteStream(zipFile);
    response.body.pipe(dest);
    console.log('file downloaded')
  } else {
    console.log('Failed to download file:', response.statusText);
  }
  
  }
}
getAllZip()

