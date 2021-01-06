
//该配置文件时用于配置网络请求需要的uri地址
//集中管理地址

//uri的特定前缀
let prefix = "/api";




export default {
    //获取城市列表的信息
    getCities: prefix + "/getCitiesInfo",
    //获取正在热映信息
    getNowPlaying:prefix +  "/getNowPlayingFilmList",
    //获取即将上映信息
    getComingSoon:prefix + "/getComingSoonFilmList",
    

  
}
