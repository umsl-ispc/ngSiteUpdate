/**
 * Created by paz5x4 on 10/14/2015.
 */
angular.module('ispc.ContactsFactory', [

])
.factory('ContactsFactory',[
        function () {
            var cfSvc = {};

            cfSvc.getContacts = function() {
                return contactsList;
            };

            var contactsList = [
                {
                    role: 'Faculty Advisor',
                    title: 'Dr.',
                    firstName: 'Dinesh',
                    lastName: 'Mirchandani',
                    email: 'mirchandanid@umsl.edu'
                },{
                    role: 'ISPC President',
                    title: '',
                    firstName: 'Jestika',
                    lastName: 'Gajjar',
                    email: ''
                },{
                    role: 'ISPC Vice President',
                    title: '',
                    firstName: 'Dante',
                    lastName: 'Nguyen',
                    email: ''
                },{
                    role: 'ISPC Webmaster',
                    title: '',
                    firstName: 'Phil',
                    lastName: 'Zahniel',
                    email: ''
                },{
                    role: 'ISPC Webmaster',
                    title: '',
                    firstName: 'Nick',
                    lastName: 'Kaczmarek',
                    email: ''
                }
            ];

            return cfSvc;
        }
    ])
;