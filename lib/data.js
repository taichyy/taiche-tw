import { Brush, Code2, Computer, FileDown, GalleryVerticalEnd, Hammer, LayoutGrid, ListChecks, RefreshCcw, User } from "lucide-react";

export const portfolio = [
    {
        id: 1,
        badges: [
            "接案作品",
        ],
        title: "中國鋼鐵、國立高雄科技大學",
        subtitle: "模具調教數位功能模組 + 後台內容管理系統\n前端頁面、後端系統、No-SQL資料庫規劃、後台數據管理頁面",
        languages: [
            "JavaScript",
            "Next.js",
            "No-SQL + MongoDB",
        ],
        img: [
            "/images/portfolio/nkustmde1.jpg",
            "/images/portfolio/nkustmde2.png",
            "/images/portfolio/nkustmde3.png"
        ],

        data: [
            {
                title: "系統設計概述",
                content: [
                    {
                        type: "paragraph",
                        text: "此系統提供模具調校數位功能等模具專業知識數據的轉換與計算。"
                    },
                    {
                        type: "items",
                        items: [
                            {
                                icon: <RefreshCcw className="h-3.5 w-3.5" />,
                                title: "範例圖與說明文字配置",
                                description: "系統可以依據 JSON 設定檔，產生對應的圖片與說明文字配置，讓使用者更直覺操作與理解。"
                            },
                            {
                                icon: <GalleryVerticalEnd className="h-3.5 w-3.5" />,
                                title: "三角函式與算式計算",
                                description: "使用者在頁面輸入簡單的量測值，系統自動計算出需要的角度或其他結果，並且可以在頁面上直接取得結果。"
                            },
                            {
                                icon: <ListChecks className="h-3.5 w-3.5" />,
                                title: "計算紀錄管理",
                                description: "所有計算紀錄都會透過 MongoDB 資料庫儲存，讓管理者能夠後台查看並分析資料。"
                            }
                        ]
                    }
                ]
            },
            {
                title: "開發動機",
                content: [
                    {
                        type: "paragraph",
                        text: "業主原本是使用 Excel 進行計算與紀錄，隨著資料量龐大，Excel 已無法負荷日常的計算需求。"
                    },
                    {
                        type: "items",
                        items: [
                            {
                                icon: <User className="h-3.5 w-3.5" />,
                                title: "傳統方式",
                                description: "需要人工計算、繁瑣、容易出錯，且維護不易。"
                            },
                            {
                                icon: <Computer className="h-3.5 w-3.5" />,
                                title: "系統化方式",
                                description: "自動化運算、網頁輸入快速完成、結果即時顯示，提升效率與正確率。"
                            }
                        ]
                    },
                    {
                        type: "point",
                        title: "開發重點！",
                        description: "系統算式、圖片、頁面版型，均需支援未來維護與擴充。"
                    }
                ]
            },
            {
                title: "核心功能",
                content: [
                    {
                        type: "paragraph",
                        text: "業主與我們討論後，明確定義了系統的核心功能。是能夠靈活切換不同模座需求，並避免重複開發。為此，我們採用 JSON 設定檔來統一管理範例圖、版面配置與計算公式。"
                    },
                    {
                        type: "img",
                        src: "/images/portfolio/nkustmde4.png",
                        alt: "JSON 設定檔範例",
                        caption: "JSON 設定檔範例"
                    },
                    {
                        type: "point",
                        title: "一次設計，無限延伸",
                        description: "業主只需要專注於維護 JSON，而非繁瑣的 HTML 模版。"
                    },
                ]
            }
        ],
    },

    {
        id: 2,
        title: "一番賞海報生成系統",
        badges: [
            "接案作品"
        ],
        subtitle: "一番賞海報生成 + 版型微調功能 + AI 檔案輸出\n前端頁面、後端系統、Adobe Script 串接生成",
        languages: [
            "JavaScript",
            "Next.js",
            "Adobe Illustrator Script"
        ],
        img: [
            "/images/portfolio/poster-generator1.png",
            "/images/portfolio/poster-generator2.png"
        ],
        link: "https://poster-generator-demo.vercel.app/projects/1",

        data: [
            {
                title: "什麼是一番賞？",
                content: [
                    {
                        type: "paragraph",
                        text: "一番賞是日本流行的抽獎活動，購買者透過抽選，依序獲得不同等級的獎品。每一套商品都會對應一張海報，玩家在每一抽完成之後就會將抽到的籤紙貼在海報上，以讓其他顧客知道每個獎項剩下多少數量。因此，一番賞海報的設計與更新對於店鋪來說非常重要。"
                    }
                ]
            },
            {
                title: "開發動機",
                content: [
                    {
                        type: "paragraph",
                        text: "業主原本需要人工用 Illustrator 製作每張海報，流程繁瑣又耗時。加上資料庫中已有完整的商品資訊，我們決定系統化整合，減少人工作業時間。"
                    },
                    {
                        type: "items",
                        items: [
                            {
                                icon: <Hammer className="h-3.5 w-3.5" />,
                                title: "傳統流程",
                                description: "人工從零開始設計每張海報，增加作業時間與出錯風險。"
                            },
                            {
                                icon: <Code2 className="h-3.5 w-3.5" />,
                                title: "系統化生成",
                                description: "後端程式直接產生 Illustrator 格式檔案，降低人工作業負擔，減少 80% 以上海報製作時間。"
                            }
                        ]
                    },
                    {
                        type: "point",
                        title: "開發挑戰",
                        description: "如何在 Adobe Script 中實作資料動態注入，並確保生成的海報符合業主需求。"
                    }
                ]
            },
            {
                title: "系統設計概述",
                content: [
                    {
                        type: "paragraph",
                        text: "針對業主以往需要手動使用 Illustrator 編輯海報的問題，我們開發了可自動生成海報的系統。系統可直接讀取資料庫中的商品資訊（例如獎項、價格、商品圖像），並套用到 4 種不同版型的海報設計中。"
                    },
                    {
                        type: "items",
                        items: [
                            {
                                icon: <LayoutGrid className="h-3.5 w-3.5" />,
                                title: "多版型支援",
                                description: "一次整合 4 種常見版型，滿足不同店鋪需求。"
                            },
                            {
                                icon: <Brush className="h-3.5 w-3.5" />,
                                title: "前端微調介面",
                                description: "可調整商品圖像的大小、位置，讓每張海報更符合實際需求。"
                            },
                            {
                                icon: <FileDown className="h-3.5 w-3.5" />,
                                title: "AI 檔案輸出",
                                description: "系統生成後，直接輸出可供美工使用的 AI 檔案，無需二次編輯。"
                            }
                        ]
                    }
                ]
            },
            {
                title: "核心功能",
                content: [
                    {
                        type: "paragraph",
                        text: "透過簡單 UI 操作，管理者即可選擇套用的商品與版型，自動產生對應海報。所有輸出流程皆透過 Adobe Script 實現，達到精準可印刷品質的 .ai 輸出。"
                    },
                    {
                        type: "img",
                        src: "/images/portfolio/poster-generator3.png",
                        alt: "輸出流程示意",
                        caption: "使用前端工具調整元素定位、縮放比例（已實裝）與背景圖片（未實裝）"
                    },
                    {
                        type: "point",
                        title: "DEMO 版本",
                        description: "此為系統的 DEMO 版本，使用假資料展示功能、移除實際系統 API 串接部分。"
                    }
                ]
            },
        ]
    },




    // {
    //     title : "MO-LIN Blog",
    //     subtitle : "設計師接案網站 + 後台內容管理系統^t前端、後端",
    //     language : "JavaScript + Next.js / No-SQL + MongoDB",
    //     img : [
    //         "/images/portfolio/mo-lin1.png",
    //         "/images/portfolio/mo-lin2.png",
    //         "/images/portfolio/mo-lin3.png"
    //     ],
    //     link : "https://mo-lin.vercel.app/",
    //     body : `
    //         個人設計師作品集網頁^t
    //         　^t
    //         包括：^t
    //         1、前端頁面^t
    //         2、後端Restful API^t
    //         3、MongoDB No-SQL資料庫規劃^t
    //         4、後台CMS內容管理系統
    //     `
    // },
    // {
    //     title : "華人社會企業",
    //     subtitle : "官方網站 + 後台內容管理系統^t前端、後端",
    //     language : "JavaScript + jQuery / PHP / MySQL + phpMyadmin",
    //     img : [
    //         "/images/portfolio/huaren.png",
    //         "/images/portfolio/huaren2.png",
    //         "/images/portfolio/huaren3.png",
    //         "/images/portfolio/huaren4.png"
    //     ],
    //     link : "https://huarensocial.com/",
    //     body : `
    //         華人社會企業是一家以生前契約、墓園塔位、扶助專案等項目為主營項目的公司。^t
    //         　^t
    //         包括：^t
    //         1、前端頁面^t
    //         2、後端系統^t
    //         3、關聯式資料庫規劃^t
    //         4、後台CMS內容管理系統^t
    //         （可更新網頁文字、文章、輪播圖片......等功能）
    //     `
    // },
    // {
    //     title : "國立高雄科技大學國際志工團",
    //     subtitle : "官方網站^t前端",
    //     language : "JavaScript + jQuery",
    //     img : [
    //         "/images/portfolio/internationalvolunteer.jpg"
    //     ],
    //     link : "https://international-volunteer.vercel.app/",
    //     body : `
    //         這是我接案生涯的第一個案子。並沒有太多複雜的程式技巧，但是有複雜的CSS、非常精美的畫面。^t
    //         包括：^t
    //         　^t
    //         1、前端頁面
    //     `
    // },
    // {
    //     id: 3,
    //     title: "維盛發企業有限公司",
    //     subtitle: "雲端檔案管理系統^t前端、後端",
    //     language: "JavaScript + jQuery / PHP",
    //     img: [
    //         "/images/portfolio/weishenfa.png"
    //     ],
    //     link: "",
    //     body: `
    //             提供維盛發獨立之雲端檔案管理系統。^t
    //             （如Google Drive、iCloud）^t
    //             此系統可以匯出指定檔案路徑後將該檔案路徑使用在如該企業官方網站等其他地方，^t
    //             達到一個系統管理所有系統檔案的功能。^t
    //             包括：^t
    //             　^t
    //             1、前端頁面^t
    //             2、後端系統
    //         `
    // },
    // {
    //     id: 4,
    //     title: "白燕河粉",
    //     subtitle: "官方網站^t前端",
    //     language: "TypeScript + Next.js / Tailwind CSS",
    //     img: [
    //         "/images/portfolio/white-swallow-pho_a.png",
    //         "/images/portfolio/white-swallow-pho_b.png",
    //         "/images/portfolio/white-swallow-pho_c.png"
    //     ],
    //     link: "https://white-swallow.vercel.app/",
    //     body: `
    //             高雄市區白燕河粉之官方網站^t^t
    //             純前端網頁，使用套件含：^t
    //             AOS、React-icons、React-hot-roast......
    //         `
    // },
    // {
    //     title : "福爾摩沙健康管理中心",
    //     subtitle : "官方網站 + 後台內容管理系統",
    //     language : "JavaScript + jQuery / PHP / MySQL + phpMyAdmin",
    //     img : [
    //         "/images/portfolio/formosa.png",
    //         "/images/portfolio/formosa2.png",
    //         "/images/portfolio/formosa3.png"
    //     ],
    //     link : "https://www.formosa-health.com/",
    //     body : `
    //         與華人社會企業設計內容相仿。^t
    //         包括：^t
    //         　^t
    //         1、前端頁面^t
    //         2、後端系統^t
    //         3、關聯式資料庫規劃^t
    //         4、後台CMS內容管理系統^t
    //         （可更新網頁文字、文章、輪播圖片......等功能）
    //     `
    // }
    // {
    //     id: 5,
    //     title: "密碼管理器 - Password Manager",
    //     subtitle: "Side Project^t前端、後端",
    //     language: "TypeScript + Next.js / Tailwind CSS / No-SQL + MongoDB",
    //     img: [
    //         "/images/portfolio/account-manager.png"
    //     ],
    //     link: "https://password-manager-orcin-theta.vercel.app",
    //     body: `
    //             原先為個人紀錄密碼使用的網站，^t
    //             因為在公司使用後，同事詢問是否可以提供使用，^t
    //             因此整理了一下放上了 GitHub，並且提供了 Demo 版本。^t
    //             可於 Demo 版本中進行註冊、登入、新增、修改、刪除、查詢等功能。^t
    //             也可在我的 GitHub 中找到原始碼。^t
    //             　^t
    //             登入帳密： 123 / 123 / 123
    //         `
    // }
]