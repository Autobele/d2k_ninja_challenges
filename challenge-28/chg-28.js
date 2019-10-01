(function(){
  'use strict'

  const ajax = new XMLHttpRequest();
  ajax.open('GET', '/')
  ajax.send()

  ajax.addEventListener('readystatechange', function(){
    console.log('Terminou a requisição', ajax.readyState)
  }, false)

})();