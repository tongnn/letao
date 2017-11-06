//配置公共模块
require.config({
    baseUrl: '/public',
    paths: {
        jquery: 'assets/jquery/jquery.min',
        template: 'assets/artTemplate/template-web',
        uploadify: 'assets/uploadify/jquery.uploadify.min'
    },
    //如果第三方类库不支持AMD，shim可以实现类似模块的做法
    shim: {
        uploadify: {
            // 1.通过exports可以将非模块的方法或属性公开出来
            // 2.通过deps 可以依赖其他模块
            deps: ['jquery']
        }

    }
})