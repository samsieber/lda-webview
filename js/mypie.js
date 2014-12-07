my_pie = (function(){
    var base_pie = {
        "header": {
            "title": {
                "text": "myTitle",
                "fontSize": 24,
                "font": "open sans"
            },
            "subtitle": {
                "text": "mySubtitle",
                "color": "#999999",
                "fontSize": 12,
                "font": "open sans"
            },
            "titleSubtitlePadding": 9
        },
        "footer": {
            "color": "#999999",
            "fontSize": 10,
            "font": "open sans",
            "location": "bottom-left"
        },
        "size": {
            "canvasWidth": 590
        },
        "data": {
            "sortOrder": "value-desc",
            "content": []
        },
        "labels": {
            "outer": {
                "pieDistance": 32
            },
            "inner": {
                "hideWhenLessThanPercentage": 3
            },
            "mainLabel": {
                "fontSize": 11
            },
            "percentage": {
                "color": "#ffffff",
                "decimalPlaces": 0
            },
            "value": {
                "color": "#adadad",
                "fontSize": 11
            },
            "lines": {
                "enabled": true
            }
        },
        "effects": {
            "pullOutSegmentOnClick": {
                "effect": "linear",
                "speed": 400,
                "size": 8
            }
        },
        "misc": {
            "gradient": {
                "enabled": true,
                "percentage": 100
            }
        }
    }

    var colors = [
        "#2484c1", "#0c6197", "#4daa4b", "#90c469", "#daca61", 
        "#e4a14b", "#e98125", "#cb2121", "#830909", "#923e99", 
        "#bf273e", "#ce2aeb", "#bca44a", "#618d1b", "#1ee67b",  
        "#a4a0c9", "#322849", "#86f71a", "#d1c87f", "#7d9058"]
 
    function make_pie_data(title, subtitle, points){
        var my_data_points = points.map(function(p,i){
            return {
                label:p.label,
                value:p.value,
                color:colors[i]
            }
        });
        return $.extend(true,{},base_pie,{
            header: {
                title:{text:title},
                subtitle:{text:title}
            }, data:{content:my_data_points}}
        );
    }
    
    function make_my_pie(tag,title,subtitle,points){
        return new d3pie(tag,make_pie_data(title, subtitle, points));
    }
    
    return make_my_pie
}());
