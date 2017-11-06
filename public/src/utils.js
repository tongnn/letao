
define(['jquery'], function($){
	$.ajax({
            // http://localhost:3000/employee/employeeLogin
            url: '/api/employee/checkRootLogin',
            type: 'get',
            success: function (info) {
                console.log(info);
                if (info.error) {
                    // location.href = '/login.html';
                }
            }
        })

    $('.logout').on('click', function(){
        $.ajax({
            url: 'api/employee/employeeLogout',
            type: 'get',
            success: function(info){
                if(info.success){
                    location.href = '/login.html';
                }
            }
        })
    })
})