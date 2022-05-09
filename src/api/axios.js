// import React from 'react';
// import axios from 'axios';
import instance from '../config/axiosConfig';
// import qs from 'qs';

// var data = qs.stringify({});

const getContact = () => {
  return instance
    .get('/contactPage')
    .then(response => response.data)
    .catch(err => console.log('Errors -', err));
};

export {getContact};

// export default class updateProfile {
//   static async contactPage() {
//     console.log('abcc');
//     const config = {
//       method: 'get',
//       url: 'http://192.168.0.104:12345/contactPage',
//       headers: {},
//       data: data,
//     };

//     axios(config)
//       .then(function (response) {
//         console.log(JSON.stringify(response.data));
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }

//   // static async fetchDetails() {
//   //   console.log('abcc');
//   //   axios({
//   //     method: 'get',
//   //     url: 'http://192.168.0.104:12345/contactPage',
//   //     // headers: {
//   //     //   'Cookie': 'connect.sid=s%3A-VgHQ_5KygV6pX80OjdmGzCg7llAgLak.Z6h9%2BQfk5IPm69bK6hRoLXdXkbv4DY%2FQaiDJ5E7KRq0'
//   //     // }
//   //     headers: {},
//   //     data: data,
//   //   })
//   //     .then(function (response) {
//   //       console.log(JSON.stringify(response.data));
//   //     })
//   //     .catch(function (error) {
//   //       console.log(error.response.data.message);
//   //     });
//   // }

//   static async fetchDetails() {
//     console.log('abcc');
//     return axios({
//       method: 'get',
//       url: 'http://192.168.0.101:12345/contactPage',
//       // headers: {
//       //   'Cookie': 'connect.sid=s%3A-VgHQ_5KygV6pX80OjdmGzCg7llAgLak.Z6h9%2BQfk5IPm69bK6hRoLXdXkbv4DY%2FQaiDJ5E7KRq0'
//       // }
//       headers: {},
//       data: data,
//     })
//       .then(response => response.data)
//       .catch(function (error) {
//         console.log(error.response.data.message);
//       });
//   }

//   static async changeName(name) {
//     console.log('In Name' + name);
//     var data = qs.stringify({id: '6273a8447f7dcccd891f6606', name: name});
//     axios({
//       method: 'put',
//       url: 'http://192.168.42.49:12233/users/changeName',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         Cookie:
//           'connect.sid=s%3A-VgHQ_5KygV6pX80OjdmGzCg7llAgLak.Z6h9%2BQfk5IPm69bK6hRoLXdXkbv4DY%2FQaiDJ5E7KRq0',
//       },
//       data: data,
//     })
//       .then(function (response) {
//         console.log(JSON.stringify(response.data));
//       })
//       .catch(function (error) {
//         console.log('Name ' + error);
//       });
//   }

//   static async changePhoto(avatar) {
//     var data = qs.stringify({id: '6273a8447f7dcccd891f6606', avatar: avatar});
//     axios({
//       method: 'put',
//       url: 'http://192.168.42.49:12233/users/changePhoto',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//         Cookie:
//           'connect.sid=s%3A-VgHQ_5KygV6pX80OjdmGzCg7llAgLak.Z6h9%2BQfk5IPm69bK6hRoLXdXkbv4DY%2FQaiDJ5E7KRq0',
//       },
//       data: data,
//     })
//       .then(function (response) {
//         console.log(JSON.stringify(response.data));
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   }
// }
