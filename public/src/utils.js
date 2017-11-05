
define(['jquery'], function($){
	$.ajax({
            // http://localhost:3000/employee/employeeLogin
            url: '/api/employee/checkRootLogin',
            type: 'get',
            success: function (info) {
                console.log(info);
                if (info.error) {
                    location.href = '/login.html';
                }
            }
        })
})