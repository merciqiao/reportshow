//本机环境:localhost,开发环境:dev,测试环境:test,生产环境:product
var evn='dev';

var Global={
    localhost:{
        report_api_url:'http://localhost:8804/'
    },
    dev:{
        report_api_url:'http://172.24.132.134:8804/'
    },
    test:{
        report_api_url:'http://172.24.132.134:8803/'
    }
    
};