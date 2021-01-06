import Films from '@/views/Films/Index'
import NowPlaying from '@/views/Films/NowPlaying'
import ComingSoon from '@/views/Films/ComingSoon'
import Detail from '@/views/Films/Detail'
var film =
    [
        //模块化 
        // 电影模块
        // 电影模块父   /films
        //正在热映      /films/nowPlaying
        // 即将上映      /films/comingSoon
    
        {
            path: "/films",
            component: Films,
            children: [
                { path: "nowPlaying", component: NowPlaying },
                { path: "comingSoon", component: ComingSoon },
            ],
        },
        // 电影详情   /films/:filmId

        {
            path: "/film/:filmId",
            component: Detail,
        },
    ];
    

export default film
 
