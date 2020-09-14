//  Using JSON Approach

//  This is for initializing the chart first
//  It is basically a whole object so beware of the typos any one mistake will crash the whole chart
// Create chart instance
var title = "Indian Origin Academicians in Various countries";
var x_axis_title = "Countries";
var y_axis_title = "No. of Indian Origin Academicians";
var country1_name = "USA";
var country2_name = "UK";
var country3_name = "Canada";
var country4_name = "Australia";
var country5_name = "Others";

var usa_male = 10850;
var usa_female = 5070;
var uk_male = 2200;
var uk_female = 1200;
var canada_male = 2213;
var canada_female = 918;
var australia_male = 629;
var australia_female = 260;
var others_male = 149;
var others_female = 40;

AmCharts.makeChart("chart_div",
    {
        "type": "serial",
        "categoryField": "category",
        "angle": 30,
        "depth3D": 30,
        "startDuration": 2,
        "colors": [
            "#9CC3D5FF",
            "#0063B2FF",
            "#B0DE09",
            "#0D8ECF",
            "#2A0CD0",
            "#CD0D74",
            "#CC0000",
            "#00CC00",
            "#0000CC",
            "#DDDDDD",
            "#999999",
            "#333333",
            "#990000"
        ],
        "fontSize": 12,
        "categoryAxis": {
            "gridPosition": "start",
            "title": x_axis_title
        },
        "trendLines": [],
        "graphs": [
            {
                "balloonText": "[[title]]: [[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-1",
                "title": "Male",
                "type": "column",
                "valueField": "column-1"
            },
            {
                "balloonText": "[[title]]: [[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-2",
                "title": "Female",
                "type": "column",
                "valueField": "column-2"
            }
        ],
        "guides": [],
        "valueAxes": [
            {
                "id": "ValueAxis-1",
                "stackType": "regular",
                "title": y_axis_title
            }
        ],
        "allLabels": [],
        "balloon": {},
        "legend": {
            "enabled": true,
            "useGraphSettings": true
        },
        "titles": [
            {
                "id": "Title-1",
                "size": 14,
                "text": title,

            }
        ],
        "dataProvider": [
            {
                "category": country1_name,
                "column-1": usa_male,
                "column-2": usa_female
            },
            {
                "category": country2_name,
                "column-1": uk_male,
                "column-2": uk_female
            },
            {
                "category": country3_name,
                "column-1": canada_male,
                "column-2": canada_female
            },
            {
                "category": country4_name,
                "column-1": australia_male,
                "column-2": australia_female
            },
            {
                "category": country5_name,
                "column-1": others_male,
                "column-2": others_female
            }
        ],
        "responsive": {
            "enabled": true
        },
    }
);
AmCharts.makeChart("chart_div_2",
    {
        "type": "serial",
        "categoryField": "category",
        "angle": 30,
        "depth3D": 30,
        "startDuration": 2,
        "colors": [
            "#9CC3D5FF",
            "#0063B2FF",
            "#B0DE09",
            "#0D8ECF",
            "#2A0CD0",
            "#CD0D74",
            "#CC0000",
            "#00CC00",
            "#0000CC",
            "#DDDDDD",
            "#999999",
            "#333333",
            "#990000"],
            "fontSize": 12,
        "categoryAxis": {
            "gridPosition": "start",
            "title": "Disciplines",
            "autoWrap": true,
            "fontSize": 12,
            "labelRotation":25,
            
        },
        "trendLines": [],
        "graphs": [
            {
                "balloonText": "[[title]]: [[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-1",
                "title": "Male",
                "type": "column",
                "valueField": "column-1"
            },
            {
                "balloonText": "[[title]]: [[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-2",
                "title": "Female",
                "type": "column",
                "valueField": "column-2"
            }
        ],
        "guides": [],
        "valueAxes": [
            {
                "id": "ValueAxis-2",
                "maximum": 7000,
                "stackType": "regular",
                "autoGridCount": false,
                "title": "Number of Indian Origin Academicians",
                "titleFontSize": 9
            }
        ],
        "allLabels": [
           
        ],
        "balloon": {},
        "legend": {
            "enabled": true,
            "useGraphSettings": true
        },
        "titles": [
            {
                "id": "Title-2",
                "size": 15,
                "text": "Indian Origin academicians from various disciplines in USA"
            }
        ],
        "dataProvider": [
            {
                "category": "Medical Health Science",
                "column-1": "2336",
                "column-2": "3571",
                "column-3": "5907"
            },
            {
                "category": "Engineering",
                "column-1": "333",
                "column-2": "2022",
                "column-3": "2355"
            },
            {
                "category": "Social Sciences",
                "column-1": "977",
                "column-2": "1001",
                "column-3": "1978"
            },
            {
                "category": "Computer Sciences",
                "column-1": "244",
                "column-2": "1028",
                "column-3": "1272"
            },
            {
                "category": "Life Sciences",
                "column-1": "394",
                "column-2": "777",
                "column-3": "1171"
            },
            {
                "category": "Business Management",
                "column-1": "224",
                "column-2": "936",
                "column-3": "1160"
            },
            {
                "category": "Chemical Sciences",
                "column-1": "186",
                "column-2": "468",
                "column-3": "654"
            },
            {
                "category": "Physical Sciences",
                "column-1": "117",
                "column-2": "461",
                "column-3": "578"
            },
            {
                "category": "Mathematics and statistics",
                "column-1": "141",
                "column-2": "395",
                "column-3": "536"
            },
            {
                "category": "Miscellaneous",
                "column-1": "111",
                "column-2": "178",
                "column-3": "289"
            },
            {
                "category": "Philoshophy",
                "column-1": "7",
                "column-2": "13",
                "column-3": "20"
            }
        ]
    }
);
AmCharts.makeChart("chart_div_3",
    {
        "type": "serial",
        "categoryField": "category",
        "angle": 30,
        "depth3D": 30,
        "startDuration": 2,
        "colors": [
            "#9CC3D5FF",
            "#0063B2FF",
            "#B0DE09",
            "#0D8ECF",
            "#2A0CD0",
            "#CD0D74",
            "#CC0000",
            "#00CC00",
            "#0000CC",
            "#DDDDDD",
            "#999999",
            "#333333",
            "#990000"],
            "fontSize": 12,
        "categoryAxis": {
            "gridPosition": "start",
            "title": "Indian Origin Academicians in various disciplines in UK",
            "autoWrap": true,
            "fontSize": 12,
            "labelRotation":25,
            
        },
        "trendLines": [],
        "graphs": [
            {
                "balloonText": "[[title]]: [[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-1",
                "title": "Male",
                "type": "column",
                "valueField": "column-1"
            },
            {
                "balloonText": "[[title]]: [[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-2",
                "title": "Female",
                "type": "column",
                "valueField": "column-2"
            }
        ],
        "guides": [],
        "valueAxes": [
            {
                "id": "ValueAxis-1",
                "maximum": 2000,
                "stackType": "regular",
                "autoGridCount": false,
                "title": "Number of Indian Origin Academicians",
                "titleFontSize": 9
            }
        ],
       
        "balloon": {},
        "legend": {
            "enabled": true,
            "useGraphSettings": true
        },
        "titles": [
            {
                "id": "Title-1",
                "size": 15,
                "text": "Indian Origin Academicians in various disciplines in UK"
            }
        ],
        "dataProvider": [
            {
                "category": "Medical Health Science",
                "column-1": "433",
                "column-2": "684",
                "column-3": "1117"
            },
            {
                "category": "Engineering",
                "column-1": "77",
                "column-2": "357",
                "column-3": "434"
            },
            {
                "category": "Social Sciences",
                "column-1": "365",
                "column-2": "375",
                "column-3": "740"
            },
            {
                "category": "Computer Sciences",
                "column-1": "32",
                "column-2": "150",
                "column-3": "182"
            },
            {
                "category": "Life Sciences",
                "column-1": "114",
                "column-2": "177",
                "column-3": "291"
            },
            {
                "category": "Business Management",
                "column-1": "1",
                "column-2": "213",
                "column-3": "304"
            },
            {
                "category": "Chemical Sciences",
                "column-1": "35",
                "column-2": "92",
                "column-3": "127"
            },
            {
                "category": "Physical Sciences",
                "column-1": "14",
                "column-2": "62",
                "column-3": "76"
            },
            {
                "category": "Mathematics and statistics",
                "column-1": "20",
                "column-2": "63",
                "column-3": "83"
            },
            {
                "category": "Miscellaneous",
                "column-1": "16",
                "column-2": "23",
                "column-3": "39"
            },
            {
                "category": "Philoshophy",
                "column-1": "3",
                "column-2": "4",
                "column-3": "7"
            }
        ]
    }
);
AmCharts.makeChart("chart_div_4",
    {
        "type": "serial",
        "categoryField": "category",
        "angle": 30,
        "depth3D": 30,
        "startDuration": 2,
        "colors": [
            "#9CC3D5FF",
            "#0063B2FF",
            "#B0DE09",
            "#0D8ECF",
            "#2A0CD0",
            "#CD0D74",
            "#CC0000",
            "#00CC00",
            "#0000CC",
            "#DDDDDD",
            "#999999",
            "#333333",
            "#990000"],
            "fontSize": 12,
        "categoryAxis": {
            "gridPosition": "start",
            "title": "Indian Origin Academicians in various disciplines in Canada",
            "autoWrap": true,
            "fontSize": 12,
            "labelRotation": 25,
            
        },
        "trendLines": [],
        "graphs": [
            {
                "balloonText": "[[title]]: [[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-1",
                "title": "Male",
                "type": "column",
                "valueField": "column-1"
            },
            {
                "balloonText": "[[title]]: [[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-2",
                "title": "Female",
                "type": "column",
                "valueField": "column-2"
            }
        ],
        "guides": [],
        "valueAxes": [
            {
                "id": "ValueAxis-1",
                "maximum": 1500,
                "stackType": "regular",
                "autoGridCount": false,
                "title": "Number of Indian Origin Academicians",
                "titleFontSize": 9
            }
        ],
        
        "balloon": {},
        "legend": {
            "enabled": true,
            "useGraphSettings": true
        },
        "titles": [
            {
                "id": "Title-1",
                "size": 15,
                "text": "Indian Origin Academicians in various disciplines in Canada"
            }
        ],
        "dataProvider": [
            {
                "category": "Medical Health Science",
                "column-1": "432",
                "column-2": "848",
                "column-3": "1280"
            },
            {
                "category": "Engineering",
                "column-1": "18",
                "column-2": "212",
                "column-3": "230"
            },
            {
                "category": "Social Sciences",
                "column-1": "198",
                "column-2": "242",
                "column-3": "440"
            },
            {
                "category": "Computer Sciences",
                "column-1": "22",
                "column-2": "121",
                "column-3": "143"
            },
            {
                "category": "Life Sciences",
                "column-1": "79",
                "column-2": "188",
                "column-3": "267"
            },
            {
                "category": "Business Management",
                "column-1": "52",
                "column-2": "202",
                "column-3": "254"
            },
            {
                "category": "Chemical Sciences",
                "column-1": "29",
                "column-2": "80",
                "column-3": "109"
            },
            {
                "category": "Physical Sciences",
                "column-1": "36",
                "column-2": "70",
                "column-3": "106"
            },
            {
                "category": "Mathematics and statistics",
                "column-1": "22",
                "column-2": "92",
                "column-3": "114"
            },
            {
                "category": "Miscellaneous",
                "column-1": "29",
                "column-2": "48",
                "column-3": "77"
            },
            {
                "category": "Philoshophy",
                "column-1": "1",
                "column-2": "20",
                "column-3": "21"
            }
        ],
    }
);
AmCharts.makeChart("chart_div_5",
    {
        "type": "serial",
        "categoryField": "category",
        "angle": 30,
        "depth3D": 30,
        "startDuration": 2,
        "colors": [
            "#9CC3D5FF",
            "#0063B2FF",
            "#B0DE09",
            "#0D8ECF",
            "#2A0CD0",
            "#CD0D74",
            "#CC0000",
            "#00CC00",
            "#0000CC",
            "#DDDDDD",
            "#999999",
            "#333333",
            "#990000"],
            "fontSize": 12,
        "categoryAxis": {
            "gridPosition": "start",
            "title": "Indian Origin Academicians in various disciplines in Australia",
            "autoWrap": true,
            "fontSize": 12,
            "labelRotation":35,
            
        },
        "trendLines": [],
        "graphs": [
            {
                "balloonText": "[[title]]: [[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-1",
                "title": "Male",
                "type": "column",
                "valueField": "column-1"
            },
            {
                "balloonText": "[[title]]: [[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-2",
                "title": "Female",
                "type": "column",
                "valueField": "column-2"
            }
        ],
        "guides": [],
        "valueAxes": [
            {
                "id": "ValueAxis-1",
                "maximum": 300,
                "stackType": "regular",
                "autoGridCount": false,
                "title": "Number of Indian Origin Academicians",
                "titleFontSize": 9
            }
        ],
        
        "balloon": {},
        "legend": {
            "enabled": true,
            "useGraphSettings": true
        },
        "titles": [
            {
                "id": "Title-1",
                "size": 15,
                "text": "Indian Origin Academicians in various disciplines in Australia"
            }
        ],
        "dataProvider": [
            {
                "category": "Medical Health Science",
                "column-1": "74",
                "column-2": "150",
                "column-3": "224"
            },
            {
                "category": "Engineering",
                "column-1": "28",
                "column-2": "128",
                "column-3": "156"
            },
            {
                "category": "Social Sciences",
                "column-1": "53",
                "column-2": "66",
                "column-3": "119"
            },
            {
                "category": "Computer Sciences",
                "column-1": "13",
                "column-2": "70",
                "column-3": "83"
            },
            {
                "category": "Life Sciences",
                "column-1": "23",
                "column-2": "54",
                "column-3": "77"
            },
            {
                "category": "Business Management",
                "column-1": "45",
                "column-2": "97",
                "column-3": "142"
            },
            {
                "category": "Chemical Sciences",
                "column-1": "6",
                "column-2": "26",
                "column-3": "32"
            },
            {
                "category": "Physical Sciences",
                "column-1": "4",
                "column-2": "14",
                "column-3": "18"
            },
            {
                "category": "Mathematics and statistics",
                "column-1": "4",
                "column-2": "13",
                "column-3": "17"
            },
            {
                "category": "Miscellaneous",
                "column-1": "9",
                "column-2": "11",
                "column-3": "20"
            },
            {
                "category": "Philoshophy",
                "column-1": "1",
                "column-2": "0",
                "column-3": "1"
            }
        ],
    }
);
AmCharts.makeChart("chart_div_6",
    {
        "type": "serial",
        "categoryField": "category",
        "angle": 30,
        "depth3D": 30,
        "startDuration": 2,
        "colors": [
            "#9CC3D5FF",
            "#0063B2FF",
            "#B0DE09",
            "#0D8ECF",
            "#2A0CD0",
            "#CD0D74",
            "#CC0000",
            "#00CC00",
            "#0000CC",
            "#DDDDDD",
            "#999999",
            "#333333",
            "#990000"],
            "fontSize": 12,
        "categoryAxis": {
            "gridPosition": "start",
            "title": "Indian Origin Academicians in various disciplines in other countries",
            "autoWrap": true,
            "fontSize": 12,
            "labelRotation":30,
            
        },
        "trendLines": [],
        "graphs": [
            {
                "balloonText": "[[title]]: [[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-1",
                "title": "Male",
                "type": "column",
                "valueField": "column-1"
            },
            {
                "balloonText": "[[title]]: [[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-2",
                "title": "Female",
                "type": "column",
                "valueField": "column-2"
            }
        ],
        "guides": [],
        "valueAxes": [
            {
                "id": "ValueAxis-1",
                "maximum": 100,
                "stackType": "regular",
                "autoGridCount": false,
                "title": "Number of Indian Origin Academicians",
                "titleFontSize": 9
            }
        ],
        "allLabels": [
            
        ],
        "balloon": {},
        "legend": {
            "enabled": true,
            "useGraphSettings": true
        },
        "titles": [
            {
                "id": "Title-1",
                "size": 15,
                "text": "Indian Origin Academicians in various disciplines in other countries (other than Australia, Canada, UK & USA)"
            }
        ],
        "dataProvider": [
            {
                "category": "Medical Health Science",
                "column-1": "0",
                "column-2": "12",
                "column-3": "12"
            },
            {
                "category": "Engineering",
                "column-1": "8",
                "column-2": "63",
                "column-3": "71"
            },
            {
                "category": "Social Sciences",
                "column-1": "1",
                "column-2": "2",
                "column-3": "3"
            },
            {
                "category": "Computer Sciences",
                "column-1": "1",
                "column-2": "13",
                "column-3": "14"
            },
            {
                "category": "Life Sciences",
                "column-1": "7",
                "column-2": "10",
                "column-3": "17"
            },
            {
                "category": "Business Management",
                "column-1": "9",
                "column-2": "10",
                "column-3": "19"
            },
            {
                "category": "Chemical Sciences",
                "column-1": "8",
                "column-2": "26",
                "column-3": "34"
            },
            {
                "category": "Physical Sciences",
                "column-1": "3",
                "column-2": "6",
                "column-3": "9"
            },
            {
                "category": "Mathematics and statistics",
                "column-1": "3",
                "column-2": "6",
                "column-3": "9"
            },
            {
                "category": "Miscellaneous",
                "column-1": "0",
                "column-2": "1",
                "column-3": "1"
            }
        ]
    }
);
AmCharts.makeChart("chart_div_7",
    {
        "type": "serial",
        "categoryField": "category",
        "angle": 30,
        "depth3D": 30,
        "startDuration": 2,
        "colors": [
            "#9CC3D5FF",
            "#0063B2FF",
            "#B0DE09",
            "#0D8ECF",
            "#2A0CD0",
            "#CD0D74",
            "#CC0000",
            "#00CC00",
            "#0000CC",
            "#DDDDDD",
            "#999999",
            "#333333",
            "#990000"],
            "fontSize": 12,
        "categoryAxis": {
            "gridPosition": "start",
            "title": "Indian Origin Academicians in various disciplines in all Countries",
            "autoWrap": true,
            "fontSize": 12,
            "labelRotation":12,
            
        },
        "trendLines": [],
        "graphs": [
            {
                "balloonText": "[[title]]: [[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-1",
                "title": "Male",
                "type": "column",
                "valueField": "column-1"
            },
            {
                "balloonText": "[[title]]: [[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-2",
                "title": "Female",
                "type": "column",
                "valueField": "column-2"
            }
        ],
        "guides": [],
        "valueAxes": [
            {
                "id": "ValueAxis-1",
                "maximum": 9000,
                "stackType": "regular",
                "autoGridCount": false,
                "title": "Number of Indian Origin Academicians",
                "titleFontSize": 9
            }
        ],
        "allLabels": [
            
        ],
        "balloon": {},
        "legend": {
            "enabled": true,
            "useGraphSettings": true
        },
        "titles": [
            {
                "id": "Title-1",
                "size": 15,
                "text": "Indian Origin Academicians in various disciplines in all Countries"
            }
        ],
        "dataProvider": [
            {
                "category": "Medical Health Science",
                "column-1": "5265",
                "column-2": "3275",
                "column-3": "8540"
            },
            {
                "category": "Social Sciences",
                "column-1": "1686",
                "column-2": "1594",
                "column-3": "3280"
            },
            {
                "category": "Engineering",
                "column-1": "2782",
                "column-2": "464",
                "column-3": "3246"
            },
            {
                "category": "Business Management",
                "column-1": "1458",
                "column-2": "421",
                "column-3": "1879"
            },
            {
                "category": "Life Sciences",
                "column-1": "1206",
                "column-2": "617",
                "column-3": "1823"
            },
            {
                "category": "Computer Sciences",
                "column-1": "1382",
                "column-2": "312",
                "column-3": "1694"
            },
            {
                "category": "Chemical Science",
                "column-1": "692",
                "column-2": "264",
                "column-3": "956"
            },
            {
                "category": "Physical Science",
                "column-1": "613",
                "column-2": "174",
                "column-3": "787"
            },
            {
                "category": "Mathematics and Statistics",
                "column-1": "569",
                "column-2": "190",
                "column-3": "759"
            },
            {
                "category": "Miscellaneous",
                "column-1": "261",
                "column-2": "165",
                "column-3": "426"
            },
            {
                "category": "Philosophy",
                "column-1": "37",
                "column-2": "12",
                "column-3": "49"
            }
        ]
    }
);
AmCharts.makeChart("chart_div_8",
    {
        "type": "serial",
        "categoryField": "category",
        "angle": 30,
        "depth3D": 30,
        "startDuration": 2,
        "colors": [
            "#9CC3D5FF",
            "#0063B2FF",
            "#B0DE09",
            "#0D8ECF",
            "#2A0CD0",
            "#CD0D74",
            "#CC0000",
            "#00CC00",
            "#0000CC",
            "#DDDDDD",
            "#999999",
            "#333333",
            "#990000"],
            "fontSize": 12,
        "categoryAxis": {
            "gridPosition": "start",
            "title": "Major Contributors of Indian Origin Academicians in all Countries",
            "autoWrap": true,
            "fontSize": 12,
            "labelRotation":12,
            
        },
        "trendLines": [],
        "graphs": [
            {
                "balloonText": "[[title]]: [[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-1",
                "title": "Male",
                "type": "column",
                "valueField": "column-1"
            },
            {
                "balloonText": "[[title]]: [[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-2",
                "title": "Female",
                "type": "column",
                "valueField": "column-2"
            }
        ],
        "guides": [],
        "valueAxes": [
            {
                "id": "ValueAxis-1",
                "maximum": 400,
                "stackType": "regular",
                "autoGridCount": false,
                "title": "Number of Indian Origin Academicians",
                "titleFontSize": 9
            }
        ],
        "allLabels": [
            
        ],
        "balloon": {},
        "legend": {
            "enabled": true,
            "useGraphSettings": true
        },
        "titles": [
            {
                "id": "Title-1",
                "size": 15,
                "text": "Major Contributors of Indian Origin Academicians in all Countries"
            }
        ],
        "dataProvider": [
            {
                "category": "University in Delhi",
                "column-1": "173",
                "column-2": "169",
                "column-3": "342"
            },
            {
                "category": "IIT Madras",
                "column-1": "23",
                "column-2": "261",
                "column-3": "284"
            },
            {
                "category": "University of Mumbai",
                "column-1": "86",
                "column-2": "183",
                "column-3": "269"
            },
            {
                "category": "University of Calcutta",
                "column-1": "73",
                "column-2": "137",
                "column-3": "210"
            },
            {
                "category": "University of Madras",
                "column-1": "56",
                "column-2": "126",
                "column-3": "182"
            },
            {
                "category": "IIT Kanpur",
                "column-1": "15",
                "column-2": "105",
                "column-3": "120"
            },
            {
                "category": "IIT Bombay",
                "column-1": "14",
                "column-2": "104",
                "column-3": "118"
            },
            {
                "category": "IIT Kharagpur",
                "column-1": "15",
                "column-2": "93",
                "column-3": "108"
            },
            {
                "category": "BITS Pilani",
                "column-1": "10",
                "column-2": "97",
                "column-3": "107"
            },
            {
                "category": "Jadavpur University",
                "column-1": "34",
                "column-2": "71",
                "column-3": "105"
            }
        ]
    }
);
AmCharts.makeChart("chart_div_9",
    {
        "type": "serial",
        "categoryField": "category",
        "angle": 30,
        "depth3D": 30,
        "startDuration": 2,
        "colors": [
            "#9CC3D5FF",
            "#0063B2FF",
            "#B0DE09",
            "#0D8ECF",
            "#2A0CD0",
            "#CD0D74",
            "#CC0000",
            "#00CC00",
            "#0000CC",
            "#DDDDDD",
            "#999999",
            "#333333",
            "#990000"],
            "fontSize": 12,
        "categoryAxis": {
            "gridPosition": "start",
            "title": "Major Contributors of Indian Origin Academicians in USA",
            "autoWrap": true,
            "fontSize": 12,
            "labelRotation":12,
            
        },
        "trendLines": [],
        "graphs": [
            {
                "balloonText": "[[title]]: [[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-1",
                "title": "Male",
                "type": "column",
                "valueField": "column-1"
            },
            {
                "balloonText": "[[title]]: [[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-2",
                "title": "Female",
                "type": "column",
                "valueField": "column-2"
            }
        ],
        "guides": [],
        "valueAxes": [
            {
                "id": "ValueAxis-1",
                "maximum": 650,
                "stackType": "regular",
                "autoGridCount": false,
                "title": "Number of Indian Origin Academicians",
                "titleFontSize": 9
            }
        ],
        "allLabels": [
            
        ],
        "balloon": {},
        "legend": {
            "enabled": true,
            "useGraphSettings": true
        },
        "titles": [
            {
                "id": "Title-1",
                "size": 15,
                "text": "Major Contributors of Indian Origin Academicians in USA"
            }
        ],
        "dataProvider": [
            {
                "category": "Cornell University",
                "column-1": "224",
                "column-2": "381",
                "column-3": "605"
            },
            {
                "category": "Stanford University",
                "column-1": "177",
                "column-2": "275",
                "column-3": "452"
            },
            {
                "category": "Icahn School of Medicine at Mount Sinai",
                "column-1": "201",
                "column-2": "224",
                "column-3": "425"
            },
            {
                "category": "Texas A&M University",
                "column-1": "89",
                "column-2": "268",
                "column-3": "357"
            },
            {
                "category": "Carnegie Mellon University",
                "column-1": "67",
                "column-2": "269",
                "column-3": "336"
            },
            {
                "category": "Rice University",
                "column-1": "86",
                "column-2": "246",
                "column-3": "332"
            },
            {
                "category": "Duke University",
                "column-1": "124",
                "column-2": "205",
                "column-3": "329"
            },
            {
                "category": "University of Utah",
                "column-1": "90",
                "column-2": "226",
                "column-3": "316"
            },
            {
                "category": "University of Massachusetts Amherst",
                "column-1": "99",
                "column-2": "181",
                "column-3": "280"
            },
            {
                "category": "The University of Chicago",
                "column-1": "108",
                "column-2": "155",
                "column-3": "263"
            }
        ]
    }
);
AmCharts.makeChart("chart_div_10",
    {
        "type": "serial",
        "categoryField": "category",
        "angle": 30,
        "depth3D": 30,
        "startDuration": 2,
        "colors": [
            "#9CC3D5FF",
            "#0063B2FF",
            "#B0DE09",
            "#0D8ECF",
            "#2A0CD0",
            "#CD0D74",
            "#CC0000",
            "#00CC00",
            "#0000CC",
            "#DDDDDD",
            "#999999",
            "#333333",
            "#990000"],
            "fontSize": 12,
        "categoryAxis": {
            "gridPosition": "start",
            "title": "Major Contributors of Indian Origin Academicians in UK",
            "autoWrap": true,
            "fontSize": 12,
            "labelRotation":34,
            
        },
        "trendLines": [],
        "graphs": [
            {
                "balloonText": "[[title]]: [[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-1",
                "title": "Male",
                "type": "column",
                "valueField": "column-1"
            },
            {
                "balloonText": "[[title]]: [[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-2",
                "title": "Female",
                "type": "column",
                "valueField": "column-2"
            }
        ],
        "guides": [],
        "valueAxes": [
            {
                "id": "ValueAxis-1",
                "maximum": 650,
                "stackType": "regular",
                "autoGridCount": false,
                "title": "Number of Indian Origin Academicians",
                "titleFontSize": 9
            }
        ],
        "allLabels": [
            
        ],
        "balloon": {},
        "legend": {
            "enabled": true,
            "useGraphSettings": true
        },
        "titles": [
            {
                "id": "Title-1",
                "size": 15,
                "text": "Major Contributors of Indian Origin Academicians in UK"
            }
        ],
        "dataProvider": [
            {
                "category": "Imperial College London",
                "column-1": "207",
                "column-2": "435",
                "column-3": "642"
            },
            {
                "category": "University of Oxford",
                "column-1": "151",
                "column-2": "204",
                "column-3": "355"
            },
            {
                "category": "University of cambridge",
                "column-1": "124",
                "column-2": "226",
                "column-3": "350"
            },
            {
                "category": "University of East Angila",
                "column-1": "32",
                "column-2": "67",
                "column-3": "99"
            },
            {
                "category": "University of Bristol",
                "column-1": "27",
                "column-2": "61",
                "column-3": "88"
            },
            {
                "category": "University of York",
                "column-1": "37",
                "column-2": "45",
                "column-3": "82"
            },
            {
                "category": "University of Liverpool",
                "column-1": "23",
                "column-2": "45",
                "column-3": "68"
            },
            {
                "category": "University of Sussex",
                "column-1": "23",
                "column-2": "36",
                "column-3": "59"
            },
            {
                "category": "University of Kent",
                "column-1": "27",
                "column-2": "29",
                "column-3": "56"
            },
            {
                "category": "University of Birmingham",
                "column-1": "17",
                "column-2": "36",
                "column-3": "53"
            }
        ]
    }
);
AmCharts.makeChart("chart_div_11",
    {
        "type": "serial",
        "categoryField": "category",
        "angle": 30,
        "depth3D": 30,
        "startDuration": 2,
        "colors": [
            "#9CC3D5FF",
            "#0063B2FF",
            "#B0DE09",
            "#0D8ECF",
            "#2A0CD0",
            "#CD0D74",
            "#CC0000",
            "#00CC00",
            "#0000CC",
            "#DDDDDD",
            "#999999",
            "#333333",
            "#990000"],
            "fontSize": 12,
        "categoryAxis": {
            "gridPosition": "start",
            "title": "Major Contributors of Indian Origin Academicians in Canada",
            "autoWrap": true,
            "fontSize": 12,
            "labelRotation":12,
            
        },
        "trendLines": [],
        "graphs": [
            {
                "balloonText": "[[title]]: [[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-1",
                "title": "Male",
                "type": "column",
                "valueField": "column-1"
            },
            {
                "balloonText": "[[title]]: [[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-2",
                "title": "Female",
                "type": "column",
                "valueField": "column-2"
            }
        ],
        "guides": [],
        "valueAxes": [
            {
                "id": "ValueAxis-1",
                "maximum": 650,
                "stackType": "regular",
                "autoGridCount": false,
                "title": "Number of Indian Origin Academicians",
                "titleFontSize": 9
            }
        ],
        "allLabels": [
            
        ],
        "balloon": {},
        "legend": {
            "enabled": true,
            "useGraphSettings": true
        },
        "titles": [
            {
                "id": "Title-1",
                "size": 15,
                "text": "Major Contributors of Indian Origin Academicians in Canada"
            }
        ],
        "dataProvider": [
            {
                "category": "University of Toronto",
                "column-1": "235",
                "column-2": "374",
                "column-3": "609"
            },
            {
                "category": "Western University",
                "column-1": "76",
                "column-2": "161",
                "column-3": "237"
            },
            {
                "category": "University of Saskatchewan",
                "column-1": "38",
                "column-2": "137",
                "column-3": "175"
            },
            {
                "category": "McGill University",
                "column-1": "45",
                "column-2": "115",
                "column-3": "160"
            },
            {
                "category": "University of Alberta",
                "column-1": "47",
                "column-2": "111",
                "column-3": "158"
            },
            {
                "category": "McMaster University",
                "column-1": "35",
                "column-2": "93",
                "column-3": "128"
            },
            {
                "category": "University of Calgary",
                "column-1": "40",
                "column-2": "83",
                "column-3": "123"
            },
            {
                "category": "University of Ottawa",
                "column-1": "13",
                "column-2": "90",
                "column-3": "103"
            },
            {
                "category": "Dalhousie of waterloo",
                "column-1": "17",
                "column-2": "83",
                "column-3": "100"
            },
            {
                "category": "University of Waterloo",
                "column-1": "18",
                "column-2": "73",
                "column-3": "91"
            }
        ]
    }
);
AmCharts.makeChart("chart_div_12",
    {
        "type": "serial",
        "categoryField": "category",
        "angle": 30,
        "depth3D": 30,
        "startDuration": 2,
        "colors": [
            "#9CC3D5FF",
            "#0063B2FF",
            "#B0DE09",
            "#0D8ECF",
            "#2A0CD0",
            "#CD0D74",
            "#CC0000",
            "#00CC00",
            "#0000CC",
            "#DDDDDD",
            "#999999",
            "#333333",
            "#990000"],
            "fontSize": 12,
        "categoryAxis": {
            "gridPosition": "start",
            "title": "Major Contributors of Indian Origin Academicians in Australia",
            "autoWrap": true,
            "fontSize": 12,
            "labelRotation":12,
            
        },
        "trendLines": [],
        "graphs": [
            {
                "balloonText": "[[title]]: [[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-1",
                "title": "Male",
                "type": "column",
                "valueField": "column-1"
            },
            {
                "balloonText": "[[title]]: [[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-2",
                "title": "Female",
                "type": "column",
                "valueField": "column-2"
            }
        ],
        "guides": [],
        "valueAxes": [
            {
                "id": "ValueAxis-1",
                "maximum": 200,
                "stackType": "regular",
                "autoGridCount": false,
                "title": "Number of Indian Origin Academicians",
                "titleFontSize": 9
            }
        ],
        "allLabels": [
            
        ],
        "balloon": {},
        "legend": {
            "enabled": true,
            "useGraphSettings": true
        },
        "titles": [
            {
                "id": "Title-1",
                "size": 15,
                "text": "Major Contributors of Indian Origin Academicians in Australia"
            }
        ],
        "dataProvider": [
            {
                "category": "The University of Sydney",
                "column-1": "31",
                "column-2": "54",
                "column-3": "85"
            },
            {
                "category": "Australian National University",
                "column-1": "24",
                "column-2": "50",
                "column-3": "74"
            },
            {
                "category": "Monash University",
                "column-1": "12",
                "column-2": "43",
                "column-3": "55"
            },
            {
                "category": "Queensland University of Technology",
                "column-1": "13",
                "column-2": "37",
                "column-3": "50"
            },
            {
                "category": "The University of Newcastle, Australia",
                "column-1": "14",
                "column-2": "30",
                "column-3": "44"
            },
            {
                "category": "RMIT University",
                "column-1": "13",
                "column-2": "28",
                "column-3": "41"
            },
            {
                "category": "The University of New South Wales",
                "column-1": "9",
                "column-2": "31",
                "column-3": "40"
            },
            {
                "category": "Curtin University",
                "column-1": "8",
                "column-2": "29",
                "column-3": "37"
            },
            {
                "category": "Macquarie University",
                "column-1": "11",
                "column-2": "22",
                "column-3": "33"
            },
            {
                "category": "The University of Western Australia",
                "column-1": "7",
                "column-2": "23",
                "column-3": "30"
            }
        ]
    }
);
AmCharts.makeChart("chart_div_13",
    {
        "type": "serial",
        "categoryField": "category",
        "angle": 30,
        "depth3D": 30,
        "startDuration": 2,
        "colors": [
            "#9CC3D5FF",
            "#0063B2FF",
            "#B0DE09",
            "#0D8ECF",
            "#2A0CD0",
            "#CD0D74",
            "#CC0000",
            "#00CC00",
            "#0000CC",
            "#DDDDDD",
            "#999999",
            "#333333",
            "#990000"],
            "fontSize": 12,
        "categoryAxis": {
            "gridPosition": "start",
            "title": "Different Professionals of Indian Origin Academicians in various countries",
            "autoWrap": true,
            "fontSize": 12,
            "labelRotation":12,
            
        },
        "trendLines": [],
        "graphs": [
            {
                "balloonText": "[[title]]: [[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-1",
                "title": "Male",
                "type": "column",
                "valueField": "column-1"
            },
            {
                "balloonText": "[[title]]: [[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-2",
                "title": "Female",
                "type": "column",
                "valueField": "column-2"
            }
        ],
        "guides": [],
        "valueAxes": [
            {
                "id": "ValueAxis-1",
                "maximum": 5500,
                "stackType": "regular",
                "autoGridCount": false,
                "title": "Number of Indian Origin Academicians",
                "titleFontSize": 9
            }
        ],
        "allLabels": [
            
        ],
        "balloon": {},
        "legend": {
            "enabled": true,
            "useGraphSettings": true
        },
        "titles": [
            {
                "id": "Title-1",
                "size": 15,
                "text": "Different Professionals of Indian Origin Academicians in various countries"
            }
        ],
        "dataProvider": [
            {
                "category": "Professor",
                "column-1": "956",
                "column-2": "4128",
                "column-3": "5084"
            },
            {
                "category": "Associate Professor",
                "column-1": "864",
                "column-2": "1931",
                "column-3": "2795"
            },
            {
                "category": "Assistant Professor",
                "column-1": "1740",
                "column-2": "2780",
                "column-3": "4520"
            },
            {
                "category": "Lecturer",
                "column-1": "729",
                "column-2": "1287",
                "column-3": "2016"
            },
            {
                "category": "Scientist",
                "column-1": "54",
                "column-2": "153",
                "column-3": "207"
            },
            {
                "category": "Research Scholar",
                "column-1": "1738",
                "column-2": "3447",
                "column-3": "5185"
            },
            {
                "category": "other",
                "column-1": "1407",
                "column-2": "2225",
                "column-3": "3632"
            }
        ]
    }
);
function top5() {
    document.getElementById("var_disc_data").scrollIntoView(true);    
}