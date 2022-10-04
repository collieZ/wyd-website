// import Vue from 'vue';
// import axios from 'axios';
// async function getServerConfig () {
// function getServerConfig () {
//   return new Promise(async (resolve, reject) => {
//     Vue.prototype.baseConfig = 'result.data1';
//     await axios.get(`./config.json`).then((result) => {
//       // Vue.prototype.baseConfig = 'result.data';
//       console.log(Vue.prototype.baseConfig)
//       // resolve();
//     }).catch((error) => {
//       console.log(error);
//       // reject();
//     });
//     Vue.prototype.baseConfig = 'result.data2';
//   });
// }
// getServerConfig();

// async function getServerConfig () {
//   console.log('result.data')
//   // const data = await axios.get(`./config.json`)
//   const data = await axios({
//     method: 'get',
//     url: './config.json'
//   });
//   console.log(data)
//   // await axios.get(`./config.json`).then((result) => {
//   //   // let config = {};
//   //   console.log(result.data)
//   //   Vue.prototype.baseConfig = result.data;
//   //   console.log(Vue)
//   //   // config = result.data[currEnv];
//   //   // Object.keys(config).forEach((key) => {
//   //   //   Vue.prototype[key] = config[key];
//   //   // });
//   //   // resolve();
//   // }).catch((error) => {
//   //   console.log(error);
//   //   // reject();
//   // });
// }
// getServerConfig();
