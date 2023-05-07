
  const repositories = [
    {
      owner: 'LaxmanPache123',
      repo: 'noteapp',
      branch: 'main'
    },
    // {
    //   owner: 'Nuva-Org',
    //   repo: 'model_inventory',
    //   branch: 'v1.0.0'
    // },
    {
        owner: 'Nuva-Org',
        repo: 'model_inventory',
        branch: 'v1.0.0'
      },
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

// const https = require('https');
import * as fs from 'fs'
import * as https from 'https'
// const fetch = require('node-fetch');
// const fetch = require('./fetch');
import fetch from 'node-fetch';
// for (const repo of repositories) {
//     const zipUrl = `https://github.com/${repo.owner}/${repo.repo}/archive/${repo.branch}.zip`;
//     const zipFile = `./zipFiles/${repo.owner}-${repo.repo}-${repo.branch}.zip`;
//     const file = fs.createWriteStream(zipFile);
//     https.get(zipUrl, function(response) {
//       console.log(zipUrl)
//       console.log('statusCode:', response.statusCode);
//       response.pipe(file);
//       // response.on('data', (d) => {
//       //   console.log(d)
//       //   process.stdout.write(d);
//       // });
    
//     }).on('error', (e) => {
//       console.error(e);
//     });
//   }
const getAllZip=async()=>{
  console.log('process started')
  for(const repo of repositories){
    const zipUrl = `https://github.com/${repo.owner}/${repo.repo}/archive/${repo.branch}.zip`;
      const zipFile = `./zipFiles/${repo.owner}-${repo.repo}-${repo.branch}.zip`;
    const response = await fetch(zipUrl);
    // const file = fs.createWriteStream(zipFile);
    // https.get(zipUrl,(res)=>{
    //   // console.log(res)
    //   // console.log(res)
    //   res.pipe(file)

    // })
    // console.log(response)
  console.log(zipUrl)
  if (response.ok) {
    const dest = fs.createWriteStream(zipFile);
    response.body.pipe(dest);
  } else {
    console.log('Failed to download file:', response.statusText);
  }
  
  }
}
getAllZip()

