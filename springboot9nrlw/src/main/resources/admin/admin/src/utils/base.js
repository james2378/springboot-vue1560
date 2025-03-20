const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot9nrlw/",
            name: "springboot9nrlw",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot9nrlw/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于Springboot的在线政务服务中心"
        } 
    }
}
export default base
