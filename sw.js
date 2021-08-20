let cacheData2 = 'v2';


self.addEventListener('install',evn => {
    console.log('Service orker installed');

})


self.addEventListener('activate',evn => {
    console.log('Service activated');
    // renove unwantercache;
    env.waitUntil(
        caches.keys()
        .then(cacheNames =>{
            return Promise.all(
                keys.filter(key => key !== cacheData)
                .map(key => caches.delete(key))
            )
        })
    )
})

self.addEventListener('fetch',e =>{
       
    e.respondWith(
        caches.match(e.request)
        .then(cacheReg =>{
            return cacheReg || fetch(e.request)
            .then( fecthRes =>{
              return  caches.open(cacheData2)
              .then(cache =>{
                cache.put(e.request.url, fecthRes.clone());
                return fecthRes;
              })
                
            })
        })
    )
}) 