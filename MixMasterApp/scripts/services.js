'use strict';

angular.module('MixMaster.Services', ['ngResource'])
    .factory('Occasions',
        function ($resource) {
            return $resource('https://addb.absolutdrinks.com/occasions/', {},
                {
                    list: { method: 'GET', params: { apiKey: '' }
                }
            });
    })
    .factory('Drinks', 
        function ($resource) {
            return $resource('https://addb.absolutdrinks.com/drinks/:filter/:id/',
            { filter: '@filter', id: "@id" },
            {
                list: { method: 'GET', params: { apiKey: '' } },
                byid: { method: 'GET', params: { apiKey: '' } }
            }
        );
        
    })
    .value('version', '0.1');


