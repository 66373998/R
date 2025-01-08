var rule = {
        title: '韩小圈',
            host: 'https://www.mxjscl.com/',
            url: '/hanxiaoquan/fyclass-fypage.html',
            searchUrl: '/search.php?searchword=**',
            searchable: 2, //是否启用全局搜索,
            quickSearch: 0, //是否启用快速搜索,
            filterable: 0, //是否启用分类筛选,
            headers: { //网站的请求头,完整支持所有的,常带ua和cookies
                'User-Agent': 'MOBILE_UA', // "Cookie": "searchneed=ok"
            },
            class_name:'电影&电视剧&综艺&动漫',
            class_url:'1&2&3&4',
            tab_exclude: '类型',
            play_parse: true,
            lazy: `js:
            if(/\\.(m3u8|mp4)/.test(input)){
                input = {parse:0,url:input}
            }else{
                if(rule.parse_url.startsWith('json:')){
                    let purl = rule.parse_url.replace('json:','')+input;
                    let html = request(purl);
                    input = {parse:0,url:JSON.parse(html).url}
                }else{
                    input= rule.parse_url+input; 
                }`,
            limit: 6,
            double: true, // 推荐内容是否双层定位
            推荐: '*',
            一级: '.myui-vodlist__box;a&&title;a&&data-original;p&&Text;a&&href',
            二级: {
                title: '.myui-content__detail .title--span&&Text;.myui-content__detail p.data:eq(3)&&Text',
                img: '.myui-content__thumb .lazyload&&data-original',
                desc: '.myui-content__detail p.otherbox&&Text;.year&&Text;.myui-content__detail p.data:eq(4)&&Text;.myui-content__detail p.data:eq(2)&&Text;.myui-content__detail p.data:eq(0)&&Text',
                content: '.content&&Text',
                tabs: '.myui-panel__head&&li',
                // tabs: '.nav-tabs&&li',
                lists: '.myui-content__list:eq(#id) li',
            },
            搜索: '.myui-vodlist__media;a&&title;a&&data-original;p&&Text;a&&href',
        }