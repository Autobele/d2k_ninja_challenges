(function (win, doc) {
    'use strict';

    function handler(element, event, callback){
        document.querySelector(element).addEventListener(event, callback, false)
    }

    var $h1 = querySelector('[data-js="sp"]')

    handler('[data-js="link"]', 'click', function(event){  
        event.preventDefault();
        $h1.innerHTML = 'Autobele'
        
    });

    handler('[data-js="sp"]', 'click', function(event){
        event.preventDefault();
        alert('Click sp')
    });


})(window, document)