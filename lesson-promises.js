

// let a;

// setTimeout(() => a='TEST');

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     a = 'test';
//     resolve(a);
//   }, 2000);
//   reject('Something went wrong ...');

  // const user = users.fi....... 
  // if(user) {
  //   resolve(user)
  // }
  // reject(error)

// } )

// promise  
//   .then(res => res + '123')
//   .then(res => console.log(res))
//   .catch(error => console.error(error))
//   .finally(() => console.log('Promise ended'))


// {
//   "albumId": 1,
//   "id": 2,
//   "title": "reprehenderit est deserunt velit ipsam",
//   "url": "https://via.placeholder.com/600/771796",
//   "thumbnailUrl": "https://via.placeholder.com/150/771796"
// }


class Photo {
  constructor (id, title, url) {
    this.id = id;
    this.title = title;
    this.url = url;
  }
}



const createImg = (url) => {
  const wrapper = document.getElementById('img-container');
  const img = document.createElement('img');

  img.setAttribute('src', url);
  img.className = 'imgage';

  wrapper.appendChild(img);
}

const url = 'https://jsonplaceholder.typicode.com/photos';


const myMap = (arr) => arr.map(el => new Photo(el.id, el.title, el.thumbnailUrl));

fetch(url)
  .then(res => res.json()) // .then(function(response) { return response.json()})
  .then(x => x.slice(0,20))
  .then(myMap)  
  .then(photos => photos.forEach(photo => createImg(photo.url)))  
  .then(res => console.log(res))
  .catch(err=> console.error(err))
  .finally()
  






