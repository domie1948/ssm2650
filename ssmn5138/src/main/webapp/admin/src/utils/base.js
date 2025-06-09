const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmn5138/",
            name: "ssmn5138",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmn5138/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "在线教育网站"
        } 
    }
}
export default base
