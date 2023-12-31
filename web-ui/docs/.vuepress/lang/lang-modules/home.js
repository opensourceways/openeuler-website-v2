/**
 * @file  首页模块国际化配置入口
 * */

module.exports = {
  cn: {
    HOME_CAROUSEL_DATA: [
      {
        TITLE: "iSula",
        LINK: "/other/projects/isula",
        DES: "小个头 大能量",
        IMG: "/img/minisite/isula/mobile-banner.png",
        VIDEO_URL:
          "https://openeuler-website-beijing.obs.cn-north-4.myhuaweicloud.com/iSula.mp4",
      },
      {
        TITLE: "A-Tune",
        LINK: "/other/projects/atune",
        DES: "一款基于AI开发的智能优化引擎",
        IMG: "/img/minisite/atune/mobile-banner.png",
        VIDEO_URL:
          "https://openeuler-website-beijing.obs.cn-north-4.myhuaweicloud.com/A-Tune.mp4",
      },
      {
        TITLE: "StratoVirt",
        LINK: "/other/projects/stratovirt",
        DES: "面向云数据中心的企业级虚拟化平台",
        IMG: "/img/minisite/svirt/mobile-banner.png",
        VIDEO_URL:
          "https://openeuler-website-beijing.obs.cn-north-4.myhuaweicloud.com/StratoVirt-minisite.mp4",
      },
    ],
    ROOM_LEFT_IMG: [
      {
        IMG: "/img/activities/internship.png",
        LINK: "/internship/",
      },
      {
        IMG: "/img/activities/devday2022.png",
        LINK: "/interaction/summit-list/devday2022/",
      },
      {
        IMG: "/img/activities/pc_home_bottom_banner.png",
        LINK: "/activities/",
      },
    ],
    HOME_NEWRELEASE: [
      {
        MOBILE_IMG:
          "url('https://openeuler-website-beijing.obs.cn-north-4.myhuaweicloud.com/openEuler-devday-2022/images/home_devday_mo.png')",
        PC_IMG:
          "url('https://openeuler-website-beijing.obs.cn-north-4.myhuaweicloud.com/openEuler-devday-2022/images/home_devday_pc.png')",
        LINK: "/interaction/summit-list/devday2022/",
      },
    ],
    HOME_CALENDAR: "openEuler 开发者日历",
    HOME_NAV: [
      {
        TITLE: "案例中心",
        IMG: "/img/home/new-home/use-case.svg",
        IMG_HOVER: "/img/home/new-home/use-case-hover.svg",
        DSSCRIPTIVE: "汇聚各大行业用户案例",
        LINK: "https://new.openeuler.org/zh/showcase/",
      },
      {
        TITLE: "迁移专区",
        IMG: "/img/home/new-home/migrate.svg",
        DSSCRIPTIVE: "教你替换操作系统成openEuler",
        IMG_HOVER: "/img/home/new-home/migrate-hover.svg",
        LINK: "/other/migration/",
      },
      {
        TITLE: "开源实习",
        IMG: "/img/home/new-home/internship-summit.svg",
        IMG_HOVER: "/img/home/new-home/internship-summit-hover.svg",
        DSSCRIPTIVE: "帮助高校开发者在社区成长",
        LINK: "/internship/",
      },
      {
        TITLE: "峰会专区",
        IMG: "/img/home/new-home/summit.svg",
        IMG_HOVER: "/img/home/new-home/summit-hover.svg",
        DSSCRIPTIVE: "2022 开放原子开源峰会",
        LINK: "https://openatom.cn/summit",
      },
    ],
    IMG_CAROUSE: {
      TITLE: "面向数字基础设施的开源操作系统",
      BUTTON: "立即体验",
      TRY_URL: "community/contribution/detail.html",
      LIST: [
        {
          TITLE: "支持多样性计算",
          IMG_URL: "/img/home/carouse/img-list1.jpg",
        },
        {
          TITLE: "覆盖全场景应用",
          IMG_URL: "/img/home/carouse/img-list2.jpg",
        },
        {
          TITLE: "完整开发工具链",
          IMG_URL: "/img/home/carouse/img-list3.jpg",
        },
      ],
    },
    COMMUNITY_ACTIVITY: {
      TITLE: "社区动态",
      CARD: {
        TITLE: "openEuler社区活力",
        CONTENT:
          "openEuler也是一个开源的操作系统技术平台，鼓励社区贡献、合作。",
        VIEW_DETAILS: "查看贡献详情",
        LINK: "https://datastat.openeuler.org/en/overview",
      },
    },
    HOME_INTRODUCE: {
      INTRO_TITLE: "The Most Innovative Open Source Community",
      INTRO_HEAD: "开启openEuler编码之旅",
      INTRO_DESCRIPTION:
        "openEuler通过开放的社区形式与全球开发者共同构建一个开放、多元和架构包容的软件生态体系，孵化支持多种处理器架构、覆盖数字设施全场景，推动企业数字基础设施软硬件、应用生态繁荣发展。",
      INTRO_IMG_URL: "",
      INTRO_MAP: [
        {
          NAME: "下载",
          TITLE: "openEuler ISO",
          IMG: "/img/home/step1.png",
          GIF: "/img/home/step-move-1.gif",
          LINK: "/download/",
        },
        {
          NAME: "体验",
          TITLE: "openEuler系统",
          IMG: "/img/home/step2.png",
          GIF: "/img/home/step-move-2.gif",
          LINK: "",
        },
        {
          NAME: "查阅",
          TITLE: "openEuler文档",
          IMG: "/img/home/step3.png",
          GIF: "/img/home/step-move-3.gif",
          LINK: "/docs/",
          OTHER_LINK: "/zh/",
        },
        {
          NAME: "贡献",
          TITLE: "openEuler社区",
          IMG: "/img/home/step4.png",
          GIF: "/img/home/step-move-4.gif",
          LINK: "/community/contribution/",
        },
      ],
      INTRO_MAP_SND: {
        NAME: "体验",
        TITLE: "openEuler系统",
        IMG: "/img/home/step2.png",
        LINK: "javascript:;",
        GIF: "/img/home/step-move-2.gif",
      },
      INTRO_GUIDE: {
        INFO: "选择您喜欢的体验方式",
        GUIDE_WAY: [
          {
            TITLE: "树莓派",
            IMG: "/img/home/areaPai.png",
            LINK: "https://gitee.com/openeuler/raspberrypi",
          },
          {
            TITLE: "硬件",
            IMG: "/img/home/areaHardware.svg",
            LINK: "/zh/docs/20.03_LTS/docs/Installation/installation.html",
          },
          {
            TITLE: "虚拟机",
            IMG: "/img/home/areaVirtual.svg",
            LINK: "/zh/docs/20.03_LTS/docs/Virtualization/virtualization.html",
          },
          {
            TITLE: "ECS",
            IMG: "/img/home/areaECS.svg",
            LINK: "https://huaweicloud.com/product/ecs.html",
          },
        ],
      },
    },
    HOME_ACTIVE: {
      ACTIVE_TITLE: "好玩的活动停不下来",
      ACTIVE_DESCRIPTION:
        "openEuler社区不定期举办各种workshop、SIG讨论、线下活动、社区峰会，精彩动态随时掌握。",
    },
    HOME_ROUND: {
      ROUND_TITLE: "我们正在不断成长",
      VIEW_DETAIL: "查看详情",
      VIEW_DETAIL_LINK: "https://datastat.openeuler.org/zh/overview",
      ROUND_LIST: [
        {
          ROUND_VALUE: "",
          ROUND_KEY: "contributors",
          ROUND_IMG: "/img/round/contributer1.png",
          ROUND_TEXT: "贡献者",
          ROUND_STYLE: {
            backcolor: "blue",
          },
        },
        {
          ROUND_VALUE: "",
          ROUND_KEY: "repos",
          ROUND_IMG: "/img/round/software1.png",
          ROUND_TEXT: "代码仓库",
          ROUND_STYLE: {
            backcolor: "pink",
          },
        },
        {
          ROUND_VALUE: "",
          ROUND_KEY: "sigs",
          ROUND_IMG: "/img/round/sig1.png",
          ROUND_TEXT: "特别兴趣小组",
          ROUND_STYLE: {
            backcolor: "yellow",
          },
        },
        {
          ROUND_VALUE: "",
          ROUND_KEY: "users",
          ROUND_IMG: "/img/round/user1.png",
          ROUND_TEXT: "社区用户",
          ROUND_STYLE: {
            backcolor: "yellow",
          },
        },
        {
          ROUND_VALUE: "",
          ROUND_KEY: "businessosv",
          ROUND_IMG: "/img/round/osv1.png",
          ROUND_TEXT: "商用OSV",
          ROUND_STYLE: {
            backcolor: "blue",
          },
        },
      ],
    },
    HOME_ROOMS: {
      ROOM_NAME: [
        { NAME: "博客", ID: "blog" },
        { NAME: "新闻", ID: "news" },
      ],
      EVENT_NAME: "最新活动",
      BLOG_NAME: "openEuler 博客",
      NEWS_NAME: "openEuler 新闻",
      EVENT_LIST: [
        {
          TAG: "事件",
          DATE: "2020-06-07",
          CONTENT: "吹响开源集结号——”点亮“暑假2020",
        },
        {
          TAG: "事件",
          DATE: "2020-01-04",
          CONTENT: "去HDC.Cloud 2020 参加黑客松， 玩儿openEuler，赢取大礼",
        },
        {
          TAG: "事件",
          DATE: "2020-12-10",
          CONTENT: "HDC.Cloud | openEuler黑客马拉松",
        },
      ],
      BLOG_LIST: [
        {
          TAG: "openEuler Blog Maintainer",
          DATE: "2020-05-08",
          CONTENT: "A-Tune让系统更智能",
        },
        {
          TAG: "zhongjun",
          DATE: "2020-05-07",
          CONTENT: "浅谈openEuler开源社区经营度量分析系统选型",
        },
        {
          TAG: "Ivye",
          DATE: "2020-05-06",
          CONTENT: "HDC.Cloud | openEuler黑客马拉松",
        },
      ],
      NEWS_LIST: [
        {
          TAG: "极云IT杂谈",
          DATE: "2020-05-09",
          CONTENT: "华为OpenEuler操作系统强势来袭，正式开源时代来了？",
        },
        {
          TAG: "中国网科学频道",
          DATE: "2020-05-06",
          CONTENT: "华为联合产业伙伴openEuler2020年峰会成功召开",
        },
        {
          TAG: "新浪",
          DATE: "2020-04-12",
          CONTENT: "openEuler开源路带来多样性计算计算技术与产业生态共荣",
        },
      ],
    },
    USER_CASE: {
      TITLE: "用户案例",
      VIEW_MORE: "查看更多",
      VIEW_MORE_LINK: "https://new.openeuler.org/zh/showcase/",
      CASE_LIST: [
        {
          TYPE: "金融",
          URL: "/img/home/case/finance.svg",
          ACTIVE_URL: "/img/home/case/finance-active.svg",
        },
        {
          TYPE: "运营商",
          URL: "/img/home/case/operator.svg",
          ACTIVE_URL: "/img/home/case/operator-active.svg",
        },

        {
          TYPE: "能源",
          URL: "/img/home/case/energy.svg",
          ACTIVE_URL: "/img/home/case/energy-active.svg",
        },

        {
          TYPE: "物流",
          URL: "/img/home/case/logistics.svg",
          ACTIVE_URL: "/img/home/case/logistics-active.svg",
        },
        {
          TYPE: "其他",
          URL: "/img/home/case/education.svg",
          ACTIVE_URL: "/img/home/case/education-active.svg",
        },
      ],
    },
    HOME_SOURCE: {
      SOURCE_TITLE: "获取更多资源",
      SOURCE_APPLY: {
        TITLE: "测试资源申请",
        DES: "如果缺乏测试设备，可以尝试",
        APPLY: "在此申请。",
        SPONSOR: "感谢鹏城实验室赞助!",
        SPONSORLINK: "https://dw.pcl.ac.cn/",
      },
      SOURCE_MAIL: {
        TITLE: "邮件订阅",
        DES: "任何社区话题都可以在这里讨论。",
        SUBSCRIBE: "更多订阅请点击",
        LINK: "邮件列表",
        MAIL: "community@openeuler.org",
      },
      SOURCE_PUBLISH_TITLE: "发布 openEuler 商业发行版的厂商",
      SOURCE_LINK_TITLE: "友情链接",
    },
    HOME_SOURCE_EDITION: [
      {
        LINK: "https://www.xfusion.com/cn/",
        PC: "/img/home/link/xfusion.png",
      },
      {
        LINK: "http://www.chinaredflag.cn/",
        PC: "/img/home/link/zhongkehongqi.png",
      },
      {
        LINK: "https://www.kyland.com.cn/",
        PC: "/img/home/link/intewell.png",
      },
      {
        LINK: "http://www.linx-info.com/#/",
        PC: "/img/home/link/linx-tech.png",
      },
      {
        LINK: "http://www.i-soft.com.cn/",
        PC: "/img/home/link/cetc.png",
      },
      {
        LINK: "https://www.kylinos.cn/",
        PC: "/img/home/link/qiling.png",
      },
      {
        LINK: "http://www.kylinsec.com.cn/",
        PC: "/img/home/link/xinan.png",
      },
      {
        LINK: "http://www.hoperun.com/",
        PC: "/img/home/link/hopeRun.png",
      },
      {
        LINK: "https://www.suse.com/",
        PC: "/img/home/link/suse.png",
      },
      {
        LINK: "https://www.turbolinux.com.cn/",
        PC: "/img/home/link/turbo.png",
      },
      {
        LINK: "http://www.tongyuanos.com/",
        PC: "/img/home/link/tongYuan.png",
      },
      {
        LINK: "https://www.uniontech.com/",
        PC: "/img/home/link/tongxin.png",
      },
      {
        LINK: "https://www.h3c.com/cn/",
        PC: "/img/home/link/hbc.png",
      },
      {
        LINK: "http://www.iscas.ac.cn/",
        PC: "/img/home/link/iscas.png",
      },
      {
        LINK: "https://www.thundersoft.com/",
        PC: "/img/home/link/zhongkechuangda.png",
      },
      {
        LINK: "http://www.nfschina.com/",
        PC: "/img/home/link/zhongkefangde.png",
      },
    ],
    RANK_TIP:'注：按公司名拼音首字母顺序排序',
    FRIENDSHIP_LINK_LIST: [
      {
        LINK: "http://www.mulanos.cn/",
        PC: "/img/home/link/mulan.png",
        MOBILE: "/img/home/link/mobile-mulan.png",
      },
      {
        LINK: "https://kunpeng.huawei.com/",
        PC: "/img/home/link/kunpeng.png",
        MOBILE: "/img/home/link/mobile-kunpeng.png",
      },
      {
        LINK: "http://ic-openlabs.huawei.com/chat/#/",
        PC: "/img/home/link/xiaozhi.png",
        MOBILE: "/img/home/link/mobile-xiaozhi.png",
      },
      {
        LINK: "https://dw.pcl.ac.cn/",
        PC: "/img/home/link/pengcheng.png",
        MOBILE: "/img/home/link/mobile-pengcheng.png",
      },
      {
        LINK: "https://www.infoq.cn/?utm_source=openeuler&utm_medium=youlian",
        PC: "/img/home/link/infoQ.png",
        MOBILE: "/img/home/link/mobile-infoQ.png",
      },
      {
        LINK: "https://kaiyuanshe.cn/",
        PC: "/img/home/link/kaiyuanshe-logo.png",
        MOBILE: "/img/home/link/kaiyuanshe-logo-mobile.png",
      },
      {
        LINK: "http://www.vulab.com.cn/",
        PC: "/img/home/link/zhongke_pc.png",
        MOBILE: "/img/home/link/zhongke_mo.png",
      },
      {
        LINK: "https://www.authing.cn/",
        PC: "/img/home/link/Authing_pc.png",
        MOBILE: "/img/home/link/Authing_mo.png",
      },
    ],
    MORE: "更多",
    EXPAND: "展开全部",
    RETRACT: "收起全部",
  },
  en: {
    HOME_CAROUSEL_DATA: [
      {
        TITLE: "iSula",
        LINK: "/other/projects/isula",
        DES: "Packs a huge punch in a small size",
        IMG: "/img/minisite/isula/mobile-banner.png",
        VIDEO_URL:
          "https://openeuler-website-beijing.obs.cn-north-4.myhuaweicloud.com/iSula.mp4",
      },
      {
        TITLE: "A-Tune",
        LINK: "/other/projects/atune",
        DES: "AI-based Tuning Engine",
        IMG: "/img/minisite/atune/mobile-banner.png",
        VIDEO_URL:
          "https://openeuler-website-beijing.obs.cn-north-4.myhuaweicloud.com/A-Tune.mp4",
      },
      {
        TITLE: "StratoVirt",
        LINK: "/other/projects/stratovirt",
        DES: "Virtualization platform for cloud data centers",
        IMG: "/img/minisite/svirt/mobile-banner.png",
        VIDEO_URL:
          "https://openeuler-website-beijing.obs.cn-north-4.myhuaweicloud.com/StratoVirt-minisite.mp4",
      },
    ],
    HOME_NEWRELEASE: [
      {
        MOBILE_IMG:
          "url('https://openeuler-website-beijing.obs.cn-north-4.myhuaweicloud.com/openEuler-devday-2022/images/home_devday_mo.png')",
        PC_IMG:
          "url('https://openeuler-website-beijing.obs.cn-north-4.myhuaweicloud.com/openEuler-devday-2022/images/home_devday_pc.png')",
        LINK: "/interaction/summit-list/devday2022/",
      },
    ],
    ROOM_LEFT_IMG: [
      {
        IMG: "/img/home/blogImg.png",
        LINK: "/interaction/blog-list/",
      },
      {
        IMG: "/img/home/newsImg.png",
        LINK: "/interaction/news-list/",
      },
    ],
    HOME_LAST_BANNER: {},
    HOME_INTRODUCE: {
      INTRO_TITLE: "The Most Innovative Open Source Community",
      INTRO_HEAD: "Start your journey in openEuler",
      INTRO_DESCRIPTION:
        "As an open community, openEuler works with global developers to build an open, diverse, and architecture-inclusive software ecosystem that supports multiple processor architectures and covers a full range of digital facilities. openEuler is committed to supercharging enterprise digital infrastructure and boosting the application ecosystem.",
      INTRO_IMG_URL: "",
      INTRO_MAP: [
        {
          NAME: "01",
          TITLE: " Download openEuler ISO",
          IMG: "/img/home/step1.png",
          GIF: "/img/home/step-move-1.gif",
          LINK: "/download/",
        },
        {
          NAME: "02",
          TITLE: "Use openEuler OS",
          IMG: "/img/home/step2.png",
          GIF: "/img/home/step-move-2.gif",
          LINK: "",
        },
        {
          NAME: "03",
          TITLE: "Read openEuler Documentation",
          IMG: "/img/home/step3.png",
          GIF: "/img/home/step-move-3.gif",
          LINK: "/docs/",
          OTHER_LINK: "/en/",
        },
        {
          NAME: "04",
          TITLE: "Contribute to openEuler Community",
          IMG: "/img/home/step4.png",
          GIF: "/img/home/step-move-4.gif",
          LINK: "/community/contribution/",
        },
      ],
      INTRO_MAP_SND: {
        NAME: "02",
        TITLE: "Use openEuler OS",
        IMG: "/img/home/step2.png",
        LINK: "",
        GIF: "/img/home/step-move-2.gif",
      },
      INTRO_GUIDE: {
        INFO: "Choose your favorite experience mode",
        GUIDE_WAY: [
          {
            TITLE: "Raspberry Pi",
            IMG: "/img/home/areaPai.png",
            LINK: "https://gitee.com/openeuler/raspberrypi",
          },
          {
            TITLE: "Hardware",
            IMG: "/img/home/areaHardware.svg",
            LINK: "/en/docs/20.03_LTS/docs/Installation/Installation.html",
          },
          {
            TITLE: "VM",
            IMG: "/img/home/areaVirtual.svg",
            LINK: "/en/docs/20.03_LTS/docs/Virtualization/virtualization.html",
          },
          {
            TITLE: "ECS",
            IMG: "/img/home/areaECS.svg",
            LINK: "https://huaweicloud.com/product/ecs.html",
          },
        ],
      },
    },
    HOME_ACTIVE: {
      ACTIVE_TITLE: "Join Us in Community Activities",
      ACTIVE_DESCRIPTION:
        "Join us in workshops, SIG discussions, offline activities, and community summits to keep abreast of the latest trend.",
    },
    HOME_ROUND: {
      ROUND_TITLE: "We Are Thriving",
      VIEW_DETAIL: "View details",
      VIEW_DETAIL_LINK: "https://datastat.openeuler.org/en/overview",
      ROUND_LIST: [
        {
          ROUND_VALUE: "",
          ROUND_KEY: "contributors",
          ROUND_IMG: "/img/round/contributer1.png",
          ROUND_TEXT: "Contributor",
          ROUND_STYLE: {
            backcolor: "blue",
          },
        },
        {
          ROUND_VALUE: "",
          ROUND_KEY: "repos",
          ROUND_IMG: "/img/round/software1.png",
          ROUND_TEXT: "Repository",
          ROUND_STYLE: {
            backcolor: "pink",
          },
        },
        {
          ROUND_VALUE: "",
          ROUND_KEY: "sigs",
          ROUND_IMG: "/img/round/sig1.png",
          ROUND_TEXT: "SIG",
          ROUND_STYLE: {
            backcolor: "yellow",
          },
        },
        {
          ROUND_VALUE: "",
          ROUND_KEY: "users",
          ROUND_IMG: "/img/round/user1.png",
          ROUND_TEXT: "User",
          ROUND_STYLE: {
            backcolor: "yellow",
          },
        },
        {
          ROUND_VALUE: "",
          ROUND_KEY: "businessosv",
          ROUND_IMG: "/img/round/osv1.png",
          ROUND_TEXT: "OS Vendor",
          ROUND_STYLE: {
            backcolor: "blue",
          },
        },
      ],
    },
    USER_CASE: {
      TITLE: "Success Stories",
      VIEW_MORE: "View More",
      VIEW_MORE_LINK: "https://new.openeuler.org/en/showcase/",
      CASE_LIST: [
        {
          TYPE: "Finance",
          URL: "/img/home/case/finance.svg",
          ACTIVE_URL: "/img/home/case/finance-active.svg",
        },
        {
          TYPE: "Carrier",
          URL: "/img/home/case/operator.svg",
          ACTIVE_URL: "/img/home/case/operator-active.svg",
        },

        {
          TYPE: "Energy",
          URL: "/img/home/case/energy.svg",
          ACTIVE_URL: "/img/home/case/energy-active.svg",
        },

        {
          TYPE: "Logistics",
          URL: "/img/home/case/logistics.svg",
          ACTIVE_URL: "/img/home/case/logistics-active.svg",
        },
        {
          TYPE: "Others",
          URL: "/img/home/case/education.svg",
          ACTIVE_URL: "/img/home/case/education-active.svg",
        },
      ],
    },
    HOME_ROOMS: {
      ROOM_NAME: [
        { NAME: "Blog", ID: "blog" },
        { NAME: "News", ID: "news" },
      ],
      EVENT_NAME: "Latest Activity",
      BLOG_NAME: "openEuler Blog",
      EVENT_LIST: [
        {
          TAG: "事件",
          DATE: "2020-06-07",
          CONTENT: "吹响开源集结号——”点亮“暑假2020",
        },
        {
          TAG: "事件",
          DATE: "2020-01-04",
          CONTENT: "去HDC.Cloud 2020 参加黑客松， 玩儿openEuler，赢取大礼",
        },
        {
          TAG: "事件",
          DATE: "2020-12-10",
          CONTENT: "HDC.Cloud | openEuler黑客马拉松",
        },
      ],
      NEWS_LIST: [
        {
          TAG: "极云IT杂谈",
          DATE: "2020-05-09",
          CONTENT: "华为OpenEuler操作系统强势来袭，正式开源时代来了？",
        },
        {
          TAG: "中国网科学频道",
          DATE: "2020-05-06",
          CONTENT: "华为联合产业伙伴openEuler2020年峰会成功召开",
        },
        {
          TAG: "新浪",
          DATE: "2020-04-12",
          CONTENT: "openEuler开源路带来多样性计算计算技术与产业生态共荣",
        },
      ],
      NEWS_NAME: "openEuler News",
    },
    HOME_DEV: {
      DEV_TITLE: "Like-Minded Developers",
      DEV_DESCRIPTION:
        "The brightest minds of the development community gather here. Find the elite developers you are interested in.",
      DEV_INFO: [
        {
          NAME: "Tao Feng",
          TITLE: "",
          RANK: "sig-OS-Builder-Maintainer",
          MAIL_LINK: "t.feng94@foxmail.com",
          GITEE_LINK: "https://gitee.com/t_feng",
          IMG: "/img/home/developer/fengtao.png",
        },
        {
          NAME: "Ge Guo",
          TITLE: "",
          RANK: "Compiler SIG Maintainer",
          MAIL_LINK: "nobleprize@foxmail.com",
          GITEE_LINK: "https://gitee.com/jdkboy",
          IMG: "/img/home/developer/guoge.png",
        },
        {
          NAME: "Li Yang",
          TITLE: "",
          RANK: "Packaging Maintainer",
          MAIL_LINK: "rainbow1981@163.com",
          GITEE_LINK: "https://gitee.com/yangli69393",
          IMG: "/img/home/developer/yangli.png",
        },
        {
          NAME: "Xuzhou Zhang",
          TITLE: "",
          RANK: "Packaging Maintainer",
          MAIL_LINK: "whoisxxx@126.com",
          GITEE_LINK: "https://gitee.com/whoisxxx",
          IMG: "/img/home/developer/zhangxuzhou.png",
        },
        {
          NAME: "Rui Zhang",
          TITLE: "",
          RANK: "sig-OS-Builder-Maintainer",
          MAIL_LINK: "13851924834@139.com",
          GITEE_LINK: "https://gitee.com/anonymous_z",
          IMG: "/img/home/developer/zhangrui.png",
        },
        {
          NAME: "Yingliang Yang",
          TITLE: "",
          RANK: "Kernel  Maintainer",
          MAIL_LINK: "zjutyyl@163.com",
          GITEE_LINK: "https://gitee.com/yangyingliang",
          IMG: "/img/home/developer/yangyingliang.png",
        },
        {
          NAME: "Yandong Xu",
          TITLE: "",
          RANK: "Virt-Maintainer",
          MAIL_LINK: "gwmxyd@163.com",
          GITEE_LINK: "https://gitee.com/xydong",
          IMG: "/img/home/developer/xuyandong.png",
        },
        {
          NAME: "Senglin Xia",
          TITLE: "",
          RANK: "Desktop Maintainer",
          MAIL_LINK: "13813374731@163.com",
          GITEE_LINK: "https://gitee.com/small_leek",
          IMG: "/img/home/developer/xiasenglin.png",
        },
        {
          NAME: "Bodong Wu",
          TITLE: "",
          RANK: "CICD SIG-Maintainer",
          MAIL_LINK: "walkingwalk@163.com",
          GITEE_LINK: "https://gitee.com/walkingwalk",
          IMG: "/img/home/developer/wubodong.png",
        },
        {
          NAME: "Xiaopeng Wang",
          TITLE: "",
          RANK: "Networking SIG Maintainer",
          MAIL_LINK: "wangxp006@163.com",
          GITEE_LINK: "https://gitee.com/wangxp006",
          IMG: "/img/home/developer/wangxiaopeng.png",
        },
        {
          NAME: "Yiru Wang",
          TITLE: "",
          RANK: "System-Tool Maintainer",
          MAIL_LINK: "wangyiruapp@163.com",
          GITEE_LINK: "https://gitee.com/ruebb",
          IMG: "/img/home/developer/wangyiru.png",
        },
        {
          NAME: "Feilong Lin",
          TITLE: "",
          RANK: "Storage Maintainer",
          MAIL_LINK: "404544243@qq.com",
          GITEE_LINK: "https://gitee.com/volcanodragon",
          IMG: "/img/home/developer/linfeilong.png",
        },
        {
          NAME: "Qingqing Li",
          TITLE: "",
          RANK: "sig-RISC-V-Maintainer",
          MAIL_LINK: "solar.hu@huawei.com",
          GITEE_LINK: "https://gitee.com/solarhu",
          IMG: "/img/home/developer/liqingqing.png",
        },
        {
          NAME: "Cihua Li",
          TITLE: "",
          RANK: "Base-Service  Maintainer",
          MAIL_LINK: "lilin_0209@163.com",
          GITEE_LINK: "https://gitee.com/licihua",
          IMG: "/img/home/developer/licihua.png",
        },
        {
          NAME: "Xingke Han",
          TITLE: "",
          RANK: "Base-Service  Maintainer",
          MAIL_LINK: "1152071778@qq.com",
          GITEE_LINK: "https://gitee.com/hanxinke",
          IMG: "/img/home/developer/hanxingke.png",
        },
        {
          NAME: "Hanjun Guo",
          TITLE: "",
          RANK: "Kernel  Maintainer",
          MAIL_LINK: "dileimao@126.com",
          GITEE_LINK: "https://gitee.com/hanjun-guo",
          IMG: "/img/home/developer/guohanjun.png",
        },
        {
          NAME: "Feng Hu",
          TITLE: "Application, System-tool, ",
          RANK: "Packaging SIG Maintainer",
          MAIL_LINK: "solar.hu@huawei.com",
          GITEE_LINK: "https://gitee.com/solarhu",
          IMG: "/img/home/developer/hufen.png",
        },
        {
          NAME: "Kaitian Du",
          TITLE: "Application, CICD SIG",
          RANK: "Maintainer",
          MAIL_LINK: "dukaitian@huawei.com",
          GITEE_LINK: "https://gitee.com/jimmy_hero",
          IMG: "/img/home/developer/dukaitian.png",
        },
        {
          NAME: "Xiaowen He",
          TITLE: "Packaging SIG, Base-",
          RANK: "service SIG Maintainer",
          MAIL_LINK: "hexiaowen@huawei.com",
          GITEE_LINK: "https://gitee.com/jimmy_hero",
          IMG: "/img/home/developer/hexiaowen.png",
        },
        {
          NAME: "Chunyi Zhu",
          TITLE: "Packaging SIG, Base-",
          RANK: "service SIG Maintainer",
          MAIL_LINK: "zhuchunyi@huawei.com",
          GITEE_LINK: "https://gitee.com/zhuchunyi",
          IMG: "/img/home/developer/zhuchunyi.png",
        },
        {
          NAME: "Xiuqi Xie",
          TITLE: "Kernel SIG",
          RANK: "Maintainer",
          MAIL_LINK: "xiexiuqi@huawei.com",
          GITEE_LINK: "https://gitee.com/xiexiuqi",
          IMG: "/img/home/developer/xiexiuqi.png",
        },
        {
          NAME: "Jian Dong",
          TITLE: "Packaging SIG",
          RANK: "Maintainer",
          MAIL_LINK: "dongjian13@huawei.com",
          GITEE_LINK: "https://gitee.com/dogsheng",
          IMG: "/img/home/developer/dongjian.png",
        },
        {
          NAME: "Haomin Tsai",
          TITLE: "iSulad SIG",
          RANK: " Maintainer",
          MAIL_LINK: "caihaomin@huawei.com",
          GITEE_LINK: "https://gitee.com/caihaomin",
          IMG: "/img/home/developer/caihaomin.png",
        },
        {
          NAME: "Feng Li",
          TITLE: "Container SIG",
          RANK: "Maintainer",
          MAIL_LINK: "lifeng68@huawei.com",
          GITEE_LINK: "https://gitee.com/lifeng2221dd1",
          IMG: "/img/home/developer/lifeng.png",
        },
        {
          NAME: "Hailiang Zhang",
          TITLE: "Virt SIG",
          RANK: "Maintainer",
          MAIL_LINK: "zhang.zhanghailiang@huawei.com",
          GITEE_LINK: "https://gitee.com/zhanghailiang_lucky",
          IMG: "/img/home/developer/zhanghailiang.png",
        },
        {
          NAME: "Xuan Zheng",
          TITLE: "sig-ai-bigdata SIG",
          RANK: "Maintainer",
          MAIL_LINK: "sinever@126.com",
          GITEE_LINK: "gitee.com/sinever",
          IMG: "/img/home/developer/zhengxian.png",
        },
        {
          NAME: "Jianwei Zhu",
          TITLE: "Base-Service SIG",
          RANK: "Maintainer",
          MAIL_LINK: "zhujianwei7@huawei.com",
          GITEE_LINK: "https://gitee.com/zhujianwei001",
          IMG: "/img/home/developer/zhujianwei.png",
        },
        {
          NAME: "Zhipeng Xie",
          TITLE: "A-Tune SIG",
          RANK: "Maintainer",
          MAIL_LINK: "xiezhipeng1@huawei.com",
          GITEE_LINK: "https://gitee.com/xiezhipeng1",
          IMG: "/img/home/developer/xiezhipeng.png",
        },
        {
          NAME: "Wei Xiong",
          TITLE: "sig-perl-modules/ sig-perl-",
          RANK: "Modules SIG Maintainer",
          MAIL_LINK: "xiongwei888@huawei.com",
          GITEE_LINK: "https://gitee.com/myeuler",
          IMG: "/img/home/developer/xiongwei.png",
        },
        {
          NAME: "Yanpeng Zhu",
          TITLE: "sig-release-management",
          RANK: "SIG Maintainer",
          MAIL_LINK: "zhuyanpeng@huawei.com",
          GITEE_LINK: "https://gitee.com/zyp-rock",
          IMG: "/img/home/developer/zhuyanpeng.png",
        },
        {
          NAME: "Zhiqiang Liu",
          TITLE: "Storage SIG",
          RANK: "Maintainer",
          MAIL_LINK: "lzhq28@mail.ustc.edu.cn",
          GITEE_LINK: "https://gitee.com/liuzhiqiang26",
          IMG: "/img/home/developer/liuzhiqiang.png",
        },
        {
          NAME: "Feilong Lin",
          TITLE: "Storage SIG",
          RANK: "Maintainer",
          MAIL_LINK: "404544243@qq.com",
          GITEE_LINK: "https://gitee.com/volcanodragon",
          IMG: "/img/home/developer/linfeilong.png",
        },
      ],
    },
    HOME_SOURCE: {
      SOURCE_TITLE: "More Resources",
      SOURCE_APPLY: {
        TITLE: "Test Resource Application",
        DES: "If test devices are not available, you can",
        APPLY: "apply for resources here.",
        SPONSOR: "Thanks for the sponsorship of Peng Cheng Laboratory.",
        SPONSORLINK: "https://dw.pcl.ac.cn/",
      },
      SOURCE_MAIL: {
        TITLE: "E-mail Subscription",
        DES: "Discuss any community topic here.",
        SUBSCRIBE: "For more subscriptions, please click the ",
        LINK: "Mailing Lists",
        MAIL: "community@openeuler.org",
      },
      SOURCE_PUBLISH_TITLE: "Vendors with openEuler-based Commercial Editions",
      SOURCE_LINK_TITLE: "Reference Links",
    },
    RANK_TIP:'',
    HOME_SOURCE_EDITION: [
      {
        LINK: "https://www.xfusion.com/en/",
        PC: "/img/home/link/xfusion.png",
      },
      {
        LINK: "http://www.chinaredflag.cn/",
        PC: "/img/home/link/zhongkehongqi.png",
      },
      {
        LINK: "https://www.kyland.com.cn/",
        PC: "/img/home/link/intewell.png",
      },
      {
        LINK: "http://www.linx-info.com/#/",
        PC: "/img/home/link/linx-tech.png",
      },
      {
        LINK: "http://www.i-soft.com.cn/",
        PC: "/img/home/link/cetc.png",
      },
      {
        LINK: "https://www.kylinos.cn/",
        PC: "/img/home/link/qiling.png",
      },
      {
        LINK: "http://www.kylinsec.com.cn/",
        PC: "/img/home/link/xinan.png",
      },
      {
        LINK: "http://www.hoperun.com/",
        PC: "/img/home/link/hopeRun.png",
      },
      {
        LINK: "https://www.suse.com/",
        PC: "/img/home/link/suse.png",
      },
      {
        LINK: "https://www.turbolinux.com.cn/",
        PC: "/img/home/link/turbo.png",
      },
      {
        LINK: "http://www.tongyuanos.com/",
        PC: "/img/home/link/tongYuan.png",
      },
      {
        LINK: "https://www.uniontech.com/",
        PC: "/img/home/link/tongxin.png",
      },
      {
        LINK: "https://www.h3c.com/cn/",
        PC: "/img/home/link/hbc.png",
      },
      {
        LINK: "http://www.iscas.ac.cn/",
        PC: "/img/home/link/iscas.png",
      },
      {
        LINK: "https://www.thundersoft.com/",
        PC: "/img/home/link/zhongkechuangda.png",
      },
      {
        LINK: "http://www.nfschina.com/",
        PC: "/img/home/link/zhongkefangde.png",
      },
    ],
    FRIENDSHIP_LINK_LIST: [
      {
        LINK: "http://www.mulanos.cn/",
        PC: "/img/home/link/mulan.png",
        MOBILE: "/img/home/link/mobile-mulan.png",
      },
      {
        LINK: "https://kunpeng.huawei.com/en/",
        PC: "/img/home/link/kunpeng.png",
        MOBILE: "/img/home/link/mobile-kunpeng.png",
      },
      {
        LINK: "http://ic-openlabs.huawei.com/chat/#/",
        PC: "/img/home/link/xiaozhi.png",
        MOBILE: "/img/home/link/mobile-xiaozhi.png",
      },
      {
        LINK: "https://dw.pcl.ac.cn/",
        PC: "/img/home/link/pengcheng.png",
        MOBILE: "/img/home/link/mobile-pengcheng.png",
      },
      {
        LINK: "https://www.infoq.cn/?utm_source=openeuler&utm_medium=youlian",
        PC: "/img/home/link/infoQ.png",
        MOBILE: "/img/home/link/mobile-infoQ.png",
      },
      {
        LINK: "https://kaiyuanshe.cn/",
        PC: "/img/home/link/kaiyuanshe-logo.png",
        MOBILE: "/img/home/link/kaiyuanshe-logo-mobile.png",
      },
      {
        LINK: "http://www.vulab.com.cn/",
        PC: "/img/home/link/zhongke_pc.png",
        MOBILE: "/img/home/link/zhongke_mo.png",
      },
      {
        LINK: "https://www.authing.cn/",
        PC: "/img/home/link/Authing_pc.png",
        MOBILE: "/img/home/link/Authing_mo.png",
      },
    ],
    MORE: "Read More",
    EXPAND: "Expand All",
    RETRACT: "Collapse All",
    HOME_CALENDAR: "开发者日历",
    HOME_NAV: [
      {
        TITLE: "Success Stories",
        IMG: "/img/home/new-home/use-case.svg",
        IMG_HOVER: "/img/home/new-home/use-case-hover.svg",
        DSSCRIPTIVE: "Learn success stories in various industries.",
        LINK: "https://new.openeuler.org/en/showcase/",
      },
      {
        TITLE: "Porting Guide",
        IMG: "/img/home/new-home/migrate.svg",
        IMG_HOVER: "/img/home/new-home/migrate-hover.svg",
        DSSCRIPTIVE: "Learn how to port to openEuler.",
        LINK: "/other/migration/",
      },
      {
        TITLE: "Opensource Internship",
        IMG: "/img/home/new-home/internship-summit.svg",
        IMG_HOVER: "/img/home/new-home/internship-summit-hover.svg",
        DSSCRIPTIVE: "Helping University Developers Grow in the Community",
        LINK: "https://www.openeuler.org/zh/internship/",
      },
      {
        TITLE: "Summits",
        IMG: "/img/home/new-home/summit.svg",
        IMG_HOVER: "/img/home/new-home/summit-hover.svg",
        DSSCRIPTIVE: "2022 OpenAtom Global Open Source Summit",
        LINK: "https://openatom.cn/summit",
      },
    ],
    IMG_CAROUSE: {
      TITLE: "Open Source Operating System for Digital Infrastructure",
      BUTTON: "Try Now",
      TRY_URL: "community/contribution/detail.html",
      LIST: [
        {
          TITLE: "All-Scenario Applications",
          IMG_URL: "/img/home/carouse/img-list1-en.png",
        },
        {
          TITLE: "Various Devices",
          IMG_URL: "/img/home/carouse/img-list2-en.png",
        },
        {
          TITLE: "Development Tool Chain",
          IMG_URL: "/img/home/carouse/img-list3-en.png",
        },
      ],
    },
    COMMUNITY_ACTIVITY: {
      TITLE: "We Are Thriving",
      CARD: {
        TITLE: "openEuler Community Vitality",
        CONTENT:
          "openEuler is an open platform for operating system technologies that encourages contributions and cooperation.",
        VIEW_DETAILS: "Learn More",
        LINK: "https://datastat.openeuler.org/en/overview",
      },
    },
  },
  ru: {
    HOME_CAROUSEL_DATA: [
      {
        TITLE: "iSula",
        LINK: "/other/projects/isula",
        DES: "Ударная сила в компактном размере",
        IMG: "/img/minisite/isula/mobile-banner.png",
        VIDEO_URL:
          "https://openeuler-website-beijing.obs.cn-north-4.myhuaweicloud.com/iSula.mp4",
      },
      {
        TITLE: "A-Tune",
        LINK: "/other/projects/atune",
        DES: "инструмент настройки на базе ИИ",
        IMG: "/img/minisite/atune/mobile-banner.png",
        VIDEO_URL:
          "https://openeuler-website-beijing.obs.cn-north-4.myhuaweicloud.com/A-Tune.mp4",
      },
      {
        TITLE: "StratoVirt",
        LINK: "/other/projects/stratovirt",
        DES: "Платформа виртуализации для облачных центров обработки данных",
        IMG: "/img/minisite/svirt/mobile-banner.png",
        VIDEO_URL:
          "https://openeuler-website-beijing.obs.cn-north-4.myhuaweicloud.com/StratoVirt-minisite.mp4",
      },
    ],
    HOME_NEWRELEASE: [
      {
        MOBILE_IMG:
          "url('https://openeuler-website-beijing.obs.cn-north-4.myhuaweicloud.com/openEuler-devday-2022/images/home_devday_mo.png')",
        PC_IMG:
          "url('https://openeuler-website-beijing.obs.cn-north-4.myhuaweicloud.com/openEuler-devday-2022/images/home_devday_pc.png')",
        LINK: "/interaction/summit-list/devday2022/",
      },
    ],
    ROOM_LEFT_IMG: [
      {
        IMG: "/img/home/blogImg.png",
        LINK: "/interaction/blog-list/",
      },
      {
        IMG: "/img/home/newsImg.png",
        LINK: "/interaction/news-list/",
      },
    ],
    HOME_LAST_BANNER: {},
    HOME_INTRODUCE: {
      INTRO_TITLE: "The Most Innovative Open Source Community",
      INTRO_HEAD: "Начните свой путь в openEuler",
      INTRO_DESCRIPTION:
        "Как открытое сообщество, openEuler работает с глобальными разработчиками, чтобы создать открытую, разнообразную и интегрированную с архитектурой экосистему программного обеспечения, которая поддерживает многопроцессорную архитектуру и охватывает весь спектр цифровых средств. openEuler стремится к эффективности корпоративной цифровой инфраструктуры и развитию экосистемы приложений.",
      INTRO_IMG_URL: "",
      INTRO_MAP: [
        {
          NAME: "01",
          TITLE: "Загрузить ISO openEuler",
          IMG: "/img/home/step1.png",
          GIF: "/img/home/step-move-1.gif",
          LINK: "/download/",
        },
        {
          NAME: "02",
          TITLE: "Использовать ОС openEuler",
          IMG: "/img/home/step2.png",
          GIF: "/img/home/step-move-2.gif",
          LINK: "",
          OTHER_LINK: "/ru/",
        },
        {
          NAME: "03",
          TITLE: "Читать документацию openEuler",
          IMG: "/img/home/step3.png",
          GIF: "/img/home/step-move-3.gif",
          LINK: "/docs/",
          OTHER_LINK: "/en/",
        },
        {
          NAME: "04",
          TITLE: "Участвовать в сообществе openEuler",
          IMG: "/img/home/step4.png",
          GIF: "/img/home/step-move-4.gif",
          LINK: "/community/contribution/",
        },
      ],
      INTRO_MAP_SND: {
        NAME: "02",
        TITLE: "Использовать ОС openEuler",
        IMG: "/img/home/step2.png",
        LINK: "",
        GIF: "/img/home/step-move-2.gif",
      },
      INTRO_GUIDE: {
        INFO: "Choose your favorite experience mode",
        GUIDE_WAY: [
          {
            TITLE: "Raspberry Pi",
            IMG: "/img/home/areaPai.png",
            LINK: "https://gitee.com/openeuler/raspberrypi",
          },
          {
            TITLE: "Hardware",
            IMG: "/img/home/areaHardware.svg",
            LINK: "/en/docs/20.03_LTS/docs/Installation/Installation.html",
          },
          {
            TITLE: "VM",
            IMG: "/img/home/areaVirtual.svg",
            LINK: "/en/docs/20.03_LTS/docs/Virtualization/virtualization.html",
          },
          {
            TITLE: "ECS",
            IMG: "/img/home/areaECS.svg",
            LINK: "https://huaweicloud.com/product/ecs.html",
          },
        ],
      },
    },
    HOME_ACTIVE: {
      ACTIVE_TITLE: "Присоединиться к сообществу",
      ACTIVE_DESCRIPTION:
        "Присоединяйтесь к сообществу и участвуйте в семинарах, обсуждениях специальных групп (SIG), традиционных мероприятиях и саммитах сообщества, чтобы быть в курсе актуальных тенденций.",
    },
    HOME_ROUND: {
      ROUND_TITLE: "Мы процветаем",
      VIEW_DETAIL: "View details",
      VIEW_DETAIL_LINK: "https://datastat.openeuler.org/en/overview",
      ROUND_LIST: [
        {
          ROUND_VALUE: "",
          ROUND_KEY: "contributors",
          ROUND_IMG: "/img/round/contributer1.png",
          ROUND_TEXT: "участников",
          ROUND_STYLE: {
            backcolor: "blue",
          },
        },
        {
          ROUND_VALUE: "",
          ROUND_KEY: "repos",
          ROUND_IMG: "/img/round/software1.png",
          ROUND_TEXT: "программных продуктов",
          ROUND_STYLE: {
            backcolor: "pink",
          },
        },
        {
          ROUND_VALUE: "",
          ROUND_KEY: "sigs",
          ROUND_IMG: "/img/round/sig1.png",
          ROUND_TEXT: "групп SIG",
          ROUND_STYLE: {
            backcolor: "yellow",
          },
        },
        {
          ROUND_VALUE: "",
          ROUND_KEY: "users",
          ROUND_IMG: "/img/round/user1.png",
          ROUND_TEXT: "пользователей",
          ROUND_STYLE: {
            backcolor: "yellow",
          },
        },
        {
          ROUND_VALUE: "",
          ROUND_KEY: "businessosv",
          ROUND_IMG: "/img/round/osv1.png",
          ROUND_TEXT: "поставщиков ОС",
          ROUND_STYLE: {
            backcolor: "blue",
          },
        },
      ],
    },
    HOME_CALENDAR: "开发者日历",
    HOME_NAV: [
      {
        TITLE: "Success Stories",
        IMG: "/img/home/new-home/use-case.svg",
        IMG_HOVER: "/img/home/new-home/use-case-hover.svg",
        DSSCRIPTIVE: "Learn success stories in various industries.",
        LINK: "https://new.openeuler.org/ru/showcase/",
      },
      {
        TITLE: "Porting Guide",
        IMG: "/img/home/new-home/migrate.svg",
        IMG_HOVER: "/img/home/new-home/migrate-hover.svg",
        DSSCRIPTIVE: "Learn how to port to openEuler.",
        LINK: "/other/migration/",
      },
      {
        TITLE: "Opensource Internship",
        IMG: "/img/home/new-home/internship-summit.svg",
        IMG_HOVER: "/img/home/new-home/internship-summit-hover.svg",
        DSSCRIPTIVE: "Helping University Developers Grow in the Community",
        LINK: "https://www.openeuler.org/zh/internship/",
      },
      {
        TITLE: "Summits",
        IMG: "/img/home/new-home/summit.svg",
        IMG_HOVER: "/img/home/new-home/summit-hover.svg",
        DSSCRIPTIVE: "2022 OpenAtom Global Open Source Summit",
        LINK: "https://openatom.cn/summit",
      },
    ],
    IMG_CAROUSE: {
      TITLE: "Open Source Operating System for Digital Infrastructure",
      BUTTON: "Try Now",
      TRY_URL: "community/contribution/detail.html",
      LIST: [
        {
          TITLE: "All-Scenario Applications",
          IMG_URL: "/img/home/carouse/img-list1-en.png",
        },
        {
          TITLE: "Various Devices",
          IMG_URL: "/img/home/carouse/img-list2-en.png",
        },
        {
          TITLE: "Development Tool Chain",
          IMG_URL: "/img/home/carouse/img-list3-en.png",
        },
      ],
    },
    COMMUNITY_ACTIVITY: {
      TITLE: "We Are Thriving",
      CARD: {
        TITLE: "openEuler Community Vitality",
        CONTENT:
          "openEuler is an open platform for operating system technologies that encourages contributions and cooperation.",
        VIEW_DETAILS: "Learn More",
        LINK: "https://datastat.openeuler.org/en/overview",
      },
    },
    USER_CASE: {
      TITLE: "Success Stories",
      VIEW_MORE: "View More",
      VIEW_MORE_LINK: "https://new.openeuler.org/ru/showcase/",
      CASE_LIST: [
        {
          TYPE: "Финансы",
          URL: "/img/home/case/finance.svg",
          ACTIVE_URL: "/img/home/case/finance-active.svg",
        },
        {
          TYPE: "Оператор",
          URL: "/img/home/case/operator.svg",
          ACTIVE_URL: "/img/home/case/operator-active.svg",
        },

        {
          TYPE: "Энергетика",
          URL: "/img/home/case/energy.svg",
          ACTIVE_URL: "/img/home/case/energy-active.svg",
        },

        {
          TYPE: "Логистика",
          URL: "/img/home/case/logistics.svg",
          ACTIVE_URL: "/img/home/case/logistics-active.svg",
        },
        {
          TYPE: "Другие сферы",
          URL: "/img/home/case/education.svg",
          ACTIVE_URL: "/img/home/case/education-active.svg",
        },
      ],
    },
    HOME_ROOMS: {
      ROOM_NAME: [
        { NAME: "Блог", ID: "blog" },
        { NAME: "Новости", ID: "news" },
      ],
      EVENT_NAME: "Новое мероприятие",
      BLOG_NAME: "Блог",
      EVENT_LIST: [
        {
          TAG: "事件",
          DATE: "2020-06-07",
          CONTENT: "吹响开源集结号——”点亮“暑假2020",
        },
        {
          TAG: "事件",
          DATE: "2020-01-04",
          CONTENT: "去HDC.Cloud 2020 参加黑客松， 玩儿openEuler，赢取大礼",
        },
        {
          TAG: "事件",
          DATE: "2020-12-10",
          CONTENT: "HDC.Cloud | openEuler黑客马拉松",
        },
      ],
      NEWS_LIST: [
        {
          TAG: "极云IT杂谈",
          DATE: "2020-05-09",
          CONTENT: "华为OpenEuler操作系统强势来袭，正式开源时代来了？",
        },
        {
          TAG: "中国网科学频道",
          DATE: "2020-05-06",
          CONTENT: "华为联合产业伙伴openEuler2020年峰会成功召开",
        },
        {
          TAG: "新浪",
          DATE: "2020-04-12",
          CONTENT: "openEuler开源路带来多样性计算计算技术与产业生态共荣",
        },
      ],
      NEWS_NAME: "Новости",
    },
    HOME_DEV: {
      DEV_TITLE: "Разработчики-единомышленники",
      DEV_DESCRIPTION:
        "Здесь собираются блестящие эксперты сообщества разработчиков. Найдите лучшего интересующего вас разработчика.",
      DEV_INFO: [
        {
          NAME: "Tao Feng",
          TITLE: "",
          RANK: "sig-OS-Builder-Maintainer",
          MAIL_LINK: "t.feng94@foxmail.com",
          GITEE_LINK: "https://gitee.com/t_feng",
          IMG: "/img/home/developer/fengtao.png",
        },
        {
          NAME: "Ge Guo",
          TITLE: "",
          RANK: "Compiler SIG Maintainer",
          MAIL_LINK: "nobleprize@foxmail.com",
          GITEE_LINK: "https://gitee.com/jdkboy",
          IMG: "/img/home/developer/guoge.png",
        },
        {
          NAME: "Li Yang",
          TITLE: "",
          RANK: "Packaging Maintainer",
          MAIL_LINK: "rainbow1981@163.com",
          GITEE_LINK: "https://gitee.com/yangli69393",
          IMG: "/img/home/developer/yangli.png",
        },
        {
          NAME: "Xuzhou Zhang",
          TITLE: "",
          RANK: "Packaging Maintainer",
          MAIL_LINK: "whoisxxx@126.com",
          GITEE_LINK: "https://gitee.com/whoisxxx",
          IMG: "/img/home/developer/zhangxuzhou.png",
        },
        {
          NAME: "Rui Zhang",
          TITLE: "",
          RANK: "sig-OS-Builder-Maintainer",
          MAIL_LINK: "13851924834@139.com",
          GITEE_LINK: "https://gitee.com/anonymous_z",
          IMG: "/img/home/developer/zhangrui.png",
        },
        {
          NAME: "Yingliang Yang",
          TITLE: "",
          RANK: "Kernel  Maintainer",
          MAIL_LINK: "zjutyyl@163.com",
          GITEE_LINK: "https://gitee.com/yangyingliang",
          IMG: "/img/home/developer/yangyingliang.png",
        },
        {
          NAME: "Yandong Xu",
          TITLE: "",
          RANK: "Virt-Maintainer",
          MAIL_LINK: "gwmxyd@163.com",
          GITEE_LINK: "https://gitee.com/xydong",
          IMG: "/img/home/developer/xuyandong.png",
        },
        {
          NAME: "Senglin Xia",
          TITLE: "",
          RANK: "Desktop Maintainer",
          MAIL_LINK: "13813374731@163.com",
          GITEE_LINK: "https://gitee.com/small_leek",
          IMG: "/img/home/developer/xiasenglin.png",
        },
        {
          NAME: "Bodong Wu",
          TITLE: "",
          RANK: "CICD SIG-Maintainer",
          MAIL_LINK: "walkingwalk@163.com",
          GITEE_LINK: "https://gitee.com/walkingwalk",
          IMG: "/img/home/developer/wubodong.png",
        },
        {
          NAME: "Xiaopeng Wang",
          TITLE: "",
          RANK: "Networking SIG Maintainer",
          MAIL_LINK: "wangxp006@163.com",
          GITEE_LINK: "https://gitee.com/wangxp006",
          IMG: "/img/home/developer/wangxiaopeng.png",
        },
        {
          NAME: "Yiru Wang",
          TITLE: "",
          RANK: "System-Tool Maintainer",
          MAIL_LINK: "wangyiruapp@163.com",
          GITEE_LINK: "https://gitee.com/ruebb",
          IMG: "/img/home/developer/wangyiru.png",
        },
        {
          NAME: "Feilong Lin",
          TITLE: "",
          RANK: "Storage Maintainer",
          MAIL_LINK: "404544243@qq.com",
          GITEE_LINK: "https://gitee.com/volcanodragon",
          IMG: "/img/home/developer/linfeilong.png",
        },
        {
          NAME: "Qingqing Li",
          TITLE: "",
          RANK: "sig-RISC-V-Maintainer",
          MAIL_LINK: "solar.hu@huawei.com",
          GITEE_LINK: "https://gitee.com/solarhu",
          IMG: "/img/home/developer/liqingqing.png",
        },
        {
          NAME: "Cihua Li",
          TITLE: "",
          RANK: "Base-Service  Maintainer",
          MAIL_LINK: "lilin_0209@163.com",
          GITEE_LINK: "https://gitee.com/licihua",
          IMG: "/img/home/developer/licihua.png",
        },
        {
          NAME: "Xingke Han",
          TITLE: "",
          RANK: "Base-Service  Maintainer",
          MAIL_LINK: "1152071778@qq.com",
          GITEE_LINK: "https://gitee.com/hanxinke",
          IMG: "/img/home/developer/hanxingke.png",
        },
        {
          NAME: "Hanjun Guo",
          TITLE: "",
          RANK: "Kernel  Maintainer",
          MAIL_LINK: "dileimao@126.com",
          GITEE_LINK: "https://gitee.com/hanjun-guo",
          IMG: "/img/home/developer/guohanjun.png",
        },
        {
          NAME: "Feng Hu",
          TITLE: "Application, System-tool, ",
          RANK: "Packaging SIG Maintainer",
          MAIL_LINK: "solar.hu@huawei.com",
          GITEE_LINK: "https://gitee.com/solarhu",
          IMG: "/img/home/developer/hufen.png",
        },
        {
          NAME: "Kaitian Du",
          TITLE: "Application, CICD SIG",
          RANK: "Maintainer",
          MAIL_LINK: "dukaitian@huawei.com",
          GITEE_LINK: "https://gitee.com/jimmy_hero",
          IMG: "/img/home/developer/dukaitian.png",
        },
        {
          NAME: "Xiaowen He",
          TITLE: "Packaging SIG, Base-",
          RANK: "service SIG Maintainer",
          MAIL_LINK: "hexiaowen@huawei.com",
          GITEE_LINK: "https://gitee.com/jimmy_hero",
          IMG: "/img/home/developer/hexiaowen.png",
        },
        {
          NAME: "Chunyi Zhu",
          TITLE: "Packaging SIG, Base-",
          RANK: "service SIG Maintainer",
          MAIL_LINK: "zhuchunyi@huawei.com",
          GITEE_LINK: "https://gitee.com/zhuchunyi",
          IMG: "/img/home/developer/zhuchunyi.png",
        },
        {
          NAME: "Xiuqi Xie",
          TITLE: "Kernel SIG",
          RANK: "Maintainer",
          MAIL_LINK: "xiexiuqi@huawei.com",
          GITEE_LINK: "https://gitee.com/xiexiuqi",
          IMG: "/img/home/developer/xiexiuqi.png",
        },
        {
          NAME: "Jian Dong",
          TITLE: "Packaging SIG",
          RANK: "Maintainer",
          MAIL_LINK: "dongjian13@huawei.com",
          GITEE_LINK: "https://gitee.com/dogsheng",
          IMG: "/img/home/developer/dongjian.png",
        },
        {
          NAME: "Haomin Tsai",
          TITLE: "iSulad SIG",
          RANK: " Maintainer",
          MAIL_LINK: "caihaomin@huawei.com",
          GITEE_LINK: "https://gitee.com/caihaomin",
          IMG: "/img/home/developer/caihaomin.png",
        },
        {
          NAME: "Feng Li",
          TITLE: "Container SIG",
          RANK: "Maintainer",
          MAIL_LINK: "lifeng68@huawei.com",
          GITEE_LINK: "https://gitee.com/lifeng2221dd1",
          IMG: "/img/home/developer/lifeng.png",
        },
        {
          NAME: "Hailiang Zhang",
          TITLE: "Virt SIG",
          RANK: "Maintainer",
          MAIL_LINK: "zhang.zhanghailiang@huawei.com",
          GITEE_LINK: "https://gitee.com/zhanghailiang_lucky",
          IMG: "/img/home/developer/zhanghailiang.png",
        },
        {
          NAME: "Xuan Zheng",
          TITLE: "sig-ai-bigdata SIG",
          RANK: "Maintainer",
          MAIL_LINK: "sinever@126.com",
          GITEE_LINK: "gitee.com/sinever",
          IMG: "/img/home/developer/zhengxian.png",
        },
        {
          NAME: "Jianwei Zhu",
          TITLE: "Base-Service SIG",
          RANK: "Maintainer",
          MAIL_LINK: "zhujianwei7@huawei.com",
          GITEE_LINK: "https://gitee.com/zhujianwei001",
          IMG: "/img/home/developer/zhujianwei.png",
        },
        {
          NAME: "Zhipeng Xie",
          TITLE: "A-Tune SIG",
          RANK: "Maintainer",
          MAIL_LINK: "xiezhipeng1@huawei.com",
          GITEE_LINK: "https://gitee.com/xiezhipeng1",
          IMG: "/img/home/developer/xiezhipeng.png",
        },
        {
          NAME: "Wei Xiong",
          TITLE: "sig-perl-modules/ sig-perl-",
          RANK: "Modules SIG Maintainer",
          MAIL_LINK: "xiongwei888@huawei.com",
          GITEE_LINK: "https://gitee.com/myeuler",
          IMG: "/img/home/developer/xiongwei.png",
        },
        {
          NAME: "Yanpeng Zhu",
          TITLE: "sig-release-management",
          RANK: "SIG Maintainer",
          MAIL_LINK: "zhuyanpeng@huawei.com",
          GITEE_LINK: "https://gitee.com/zyp-rock",
          IMG: "/img/home/developer/zhuyanpeng.png",
        },
        {
          NAME: "Zhiqiang Liu",
          TITLE: "Storage SIG",
          RANK: "Maintainer",
          MAIL_LINK: "lzhq28@mail.ustc.edu.cn",
          GITEE_LINK: "https://gitee.com/liuzhiqiang26",
          IMG: "/img/home/developer/liuzhiqiang.png",
        },
        {
          NAME: "Feilong Lin",
          TITLE: "Storage SIG",
          RANK: "Maintainer",
          MAIL_LINK: "404544243@qq.com",
          GITEE_LINK: "https://gitee.com/volcanodragon",
          IMG: "/img/home/developer/linfeilong.png",
        },
      ],
    },
    HOME_SOURCE: {
      SOURCE_TITLE: "Дополнительные ресурсы",
      SOURCE_APPLY: {
        TITLE: "Применение тестовых ресурсов",
        DES: "Если нет тестовых устройств, вы можете подать",
        APPLY: "здесь заявку на их получение.",
        SPONSOR:
          "Благодарим лабораторию Peng Cheng Laboratory за спонсорскую поддержку.",
        SPONSORLINK: "https://dw.pcl.ac.cn/",
      },
      SOURCE_MAIL: {
        TITLE: "Подписка по электронной почте",
        DES: "Вы можете обсудить здесь любую тему сообщества.",
        SUBSCRIBE: "Для перехода на страницу с подписками нажмите ",
        LINK: "Списки рассылок.",
        MAIL: "community@openeuler.org",
      },
      SOURCE_PUBLISH_TITLE:
        "Поставщики с коммерческими версиями на базе openEuler",
      SOURCE_LINK_TITLE: "Ссылки",
    },
    RANK_TIP:'',
    HOME_SOURCE_EDITION: [
      {
        LINK: "https://www.xfusion.com/en/",
        PC: "/img/home/link/xfusion.png",
      },
      {
        LINK: "http://www.chinaredflag.cn/",
        PC: "/img/home/link/zhongkehongqi.png",
      },
      {
        LINK: "https://www.kyland.com.cn/",
        PC: "/img/home/link/intewell.png",
      },
      {
        LINK: "http://www.linx-info.com/#/",
        PC: "/img/home/link/linx-tech.png",
      },
      {
        LINK: "http://www.i-soft.com.cn/",
        PC: "/img/home/link/cetc.png",
      },
      {
        LINK: "https://www.kylinos.cn/",
        PC: "/img/home/link/qiling.png",
      },
      {
        LINK: "http://www.kylinsec.com.cn/",
        PC: "/img/home/link/xinan.png",
      },
      {
        LINK: "http://www.hoperun.com/",
        PC: "/img/home/link/hopeRun.png",
      },
      {
        LINK: "https://www.suse.com/",
        PC: "/img/home/link/suse.png",
      },
      {
        LINK: "https://www.turbolinux.com.cn/",
        PC: "/img/home/link/turbo.png",
      },
      {
        LINK: "http://www.tongyuanos.com/",
        PC: "/img/home/link/tongYuan.png",
      },
      {
        LINK: "https://www.uniontech.com/",
        PC: "/img/home/link/tongxin.png",
      },
      {
        LINK: "https://www.h3c.com/cn/",
        PC: "/img/home/link/hbc.png",
      },
      {
        LINK: "http://www.iscas.ac.cn/",
        PC: "/img/home/link/iscas.png",
      },
      {
        LINK: "https://www.thundersoft.com/",
        PC: "/img/home/link/zhongkechuangda.png",
      },
      {
        LINK: "http://www.nfschina.com/",
        PC: "/img/home/link/zhongkefangde.png",
      },
    ],
    FRIENDSHIP_LINK_LIST: [
      {
        LINK: "http://www.mulanos.cn/",
        PC: "/img/home/link/mulan.png",
        MOBILE: "/img/home/link/mobile-mulan.png",
      },
      {
        LINK: "https://kunpeng.huawei.com/en/",
        PC: "/img/home/link/kunpeng.png",
        MOBILE: "/img/home/link/mobile-kunpeng.png",
      },
      {
        LINK: "http://ic-openlabs.huawei.com/chat/#/",
        PC: "/img/home/link/xiaozhi.png",
        MOBILE: "/img/home/link/mobile-xiaozhi.png",
      },
      {
        LINK: "https://dw.pcl.ac.cn/",
        PC: "/img/home/link/pengcheng.png",
        MOBILE: "/img/home/link/mobile-pengcheng.png",
      },
      {
        LINK: "https://www.infoq.cn/?utm_source=openeuler&utm_medium=youlian",
        PC: "/img/home/link/infoQ.png",
        MOBILE: "/img/home/link/mobile-infoQ.png",
      },
      {
        LINK: "https://kaiyuanshe.cn/",
        PC: "/img/home/link/kaiyuanshe-logo.png",
        MOBILE: "/img/home/link/kaiyuanshe-logo-mobile.png",
      },
      {
        LINK: "http://www.vulab.com.cn/",
        PC: "/img/home/link/zhongke_pc.png",
        MOBILE: "/img/home/link/zhongke_mo.png",
      },
      {
        LINK: "https://www.authing.cn/",
        PC: "/img/home/link/Authing_pc.png",
        MOBILE: "/img/home/link/Authing_mo.png",
      },
    ],
    MORE: "Read More",
    EXPAND: "Expand All",
    RETRACT: "Collapse All",
  },
};
