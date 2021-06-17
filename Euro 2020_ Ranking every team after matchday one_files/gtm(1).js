
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"634",
  
  "macros":[{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"siteName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"language"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"platform"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"pageType"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_stripWww":true,
      "vtp_component":"HOST"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",5],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":"no",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","bleacherreport.","value","yes"],["map","key","onefootball.","value","yes"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":["macro",6],
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\/posts\/6296514-greatest-stories","value","yes"],["map","key","\/posts\/6296515-amazing-stories","value","yes"],["map","key","\/posts\/6296517-fun-stories","value","yes"],["map","key","\/posts\/6296519-another-story","value","yes"],["map","key","\/posts\/6296521-daily-article","value","yes"],["map","key","\/posts\/6296525-weekly-article","value","yes"],["map","key","\/posts\/6296532-daily-post","value","yes"],["map","key","\/posts\/6296536-weekly-post","value","yes"],["map","key","\/posts\/6296537-daily-editorial","value","yes"],["map","key","\/posts\/6296540-weekly-editorial","value","yes"],["map","key","\/posts\/6296544-greatest-stories","value","yes"],["map","key","\/posts\/6296549-amazing-stories","value","yes"],["map","key","\/posts\/6296551-fun-stories","value","yes"],["map","key","\/posts\/6296562-another-story","value","yes"],["map","key","\/posts\/6296565-daily-article","value","yes"],["map","key","\/posts\/6296566-weekly-article","value","yes"],["map","key","\/posts\/6296568-daily-post","value","yes"],["map","key","\/posts\/6296572-weekly-post","value","yes"],["map","key","\/posts\/6296574-daily-editorial","value","yes"],["map","key","\/posts\/6296576-weekly-editorial","value","yes"],["map","key","\/posts\/6296578-greatest-stories","value","yes"],["map","key","\/posts\/6296580-amazing-stories","value","yes"],["map","key","\/posts\/6296583-fun-stories","value","yes"],["map","key","\/posts\/6296586-another-story","value","yes"],["map","key","\/posts\/6296587-daily-article","value","yes"],["map","key","\/posts\/6296588-weekly-article","value","yes"],["map","key","\/posts\/6296590-daily-post","value","yes"],["map","key","\/posts\/6296592-weekly-post","value","yes"],["map","key","\/posts\/6296593-daily-editorial","value","yes"],["map","key","\/posts\/6296594-weekly-editorial","value","yes"],["map","key","\/posts\/6226233-greatest-stories","value","yes"],["map","key","\/posts\/6242836-greatest-stories","value","yes"],["map","key","\/rcA01\/","value","yes"]]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"article",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"geoDetected"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",9],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"no",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","^TEST$|^TEST2$|^VN$","value","yes"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"yes\"==",["escape",["macro",7],8,16],"?\"yes\":\"listicle\"==",["escape",["macro",8],8,16],"?\"yes\":\"yes\"==",["escape",["macro",10],8,16],"?\"yes\":\"no\"})();"]
    },{
      "function":"__e"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=window.location.href,a=\"MontiDisable\";a=new RegExp(\"[?\\x26]\"+a+\"(\\x3d([^\\x26#]*)|\\x26|#|$)\");return(b=a.exec(b))?!0:!1})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"articleId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"articleTemplate"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_medium",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"articleTitle"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=window.location.href,b=\"utm_source\".replace(\/[\\[\\]]\/g,\"\\\\$\\x26\");b=new RegExp(\"[?\\x26]\"+b+\"(\\x3d([^\\x26#]*)|\\x26|#|$)\");return(a=b.exec(a))\u0026\u0026a[2]?decodeURIComponent(a[2].replace(\/\\+\/g,\" \")):\"\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"commercialTags"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"99",
      "vtp_name":"mmUserIdentifier"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"behaviorLabels"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"distributionChannels"
    },{
      "function":"__c",
      "vtp_value":["template",["macro",23],","]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"mainMedia"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=window.location.href,a=\"noAds\",c=\"noads\";a=new RegExp(\"[?\\x26](\"+a+\"|\"+c+\")(\\x3d([^\\x26#]*)|\\x26|#|$)\");return(b=a.exec(b))?!0:!1})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"affiliateId"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",16],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":"organic",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","fbads|cpc|mlbfbcm|ncrave|fbads_dyn|tr_partner","value","paid"]]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"paid\"==",["escape",["macro",28],8,16],"?\"paid\":\"42964\"==",["escape",["macro",27],8,16],"?\"paid\":",["escape",["macro",27],8,16],"?\"organic\":\"community\"==",["escape",["macro",16],8,16],"?\"organic\":-1!==",["escape",["macro",5],8,16],".indexOf(\"facebook\")?\"direct\":",["escape",["macro",5],8,16],"?-1!==",["escape",["macro",29],8,16],".indexOf(",["escape",["macro",5],8,16],")?\"direct\":\"organic\":",["escape",["macro",18],8,16],"?\"organic\":",["escape",["macro",16],8,16],"?\"organic\":\"direct\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"contentTags"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"mmPlusGA_event_action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"mmPlusConfigName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=window.location.href,a=\"disableForensiq\";a=new RegExp(\"[?\\x26]\"+a+\"(\\x3d([^\\x26#]*)|\\x26|#|$)\");return(b=a.exec(b))?!0:!1})();"]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"_ga"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",35],8,16],".split(\".\");return a[2]+\".\"+a[3]}catch(b){return\"\"}})();"]
    },{
      "function":"__c",
      "vtp_value":"no"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"mmPlusGA_event_category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"mmPlusUnitOrderNumber"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=window.location.href,a=\"MontyScriptForAutomationTesting\";a=new RegExp(\"[?\\x26]\"+a+\"(\\x3d([^\\x26#]*)|\\x26|#|$)\");return(b=a.exec(b))?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=window.location.href,a=\"MontyScriptForTesting\";a=new RegExp(\"[?\\x26]\"+a+\"(\\x3d([^\\x26#]*)|\\x26|#|$)\");return(b=a.exec(b))?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=window.location.href,a=\"Team5ScriptForTesting\";a=new RegExp(\"[?\\x26]\"+a+\"(\\x3d([^\\x26#]*)|\\x26|#|$)\");return(b=a.exec(b))?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=window.location.href,a=\"MontyScriptForOfir\";a=new RegExp(\"[?\\x26]\"+a+\"(\\x3d([^\\x26#]*)|\\x26|#|$)\");return(b=a.exec(b))?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=window.location.href,a=\"MontyScriptForAvihay\";a=new RegExp(\"[?\\x26]\"+a+\"(\\x3d([^\\x26#]*)|\\x26|#|$)\");return(b=a.exec(b))?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=window.location.href,a=\"MontyScriptForDenis\";a=new RegExp(\"[?\\x26]\"+a+\"(\\x3d([^\\x26#]*)|\\x26|#|$)\");return(b=a.exec(b))?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=window.location.href,a=\"ShaniTesting\";a=new RegExp(\"[?\\x26]\"+a+\"(\\x3d([^\\x26#]*)|\\x26|#|$)\");return(b=a.exec(b))?!0:!1})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",22],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_defaultValue":"Default",
      "vtp_map":["list",["map","key","reignoftroy","value","reignoftroy.com"],["map","key","theplayerstribune","value","theplayerstribune.com"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",29],
      "vtp_defaultValue":["macro",47],
      "vtp_map":["list",["map","key","www.90min.com","value","90min.com"],["map","key","www.12up.com","value","12up.com"],["map","key","www.ftb90.com","value","90min.com"],["map","key","www.90min.de","value","90min.de"],["map","key","www.90min.in","value","90min.in"],["map","key","www.dbltap.com","value","dbltap.com"],["map","key","www.floor8.com","value","floor8.com"],["map","key","www.mentalfloss.com","value","mentalfloss.com"],["map","key","www.fanduel.com","value","fanduel.com"],["map","key","www.theduel.com","value","theduel.com"],["map","key","www.thebiglead.com","value","thebiglead.com"],["map","key","www.theplayerstribune.com","value","theplayerstribune.com"],["map","key","www.poppicante.com","value","Fansided.com\/PopPicante"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"markupFormat"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"trafficSource"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"trafficSourceAndId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gdprApplies"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"GA_event_cookieConsent"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",36],8,16],".match(\"\/([0-2][0-9]$)|([3][0-2]$)\/g\")?\"AutoPlay\":",["escape",["macro",36],8,16],".match(\"\/([3][3-9]$)|([4-5][0-9]$)|([6][0-6]$)\/g\")?\"ClickToPlay\":\"ControlGroup\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(new URLSearchParams(window.location.search)).get(\"monti_id\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=window.location.href,a=\"allowAdBlock\";a=new RegExp(\"[?\\x26]\"+a+\"(\\x3d([^\\x26#]*)|\\x26|#|$)\");return(b=a.exec(b))?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return(new URLSearchParams(window.location.search)).get(\"monti_env\")})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",22],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_defaultValue":"UA-23669758-10",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","reignoftroy","value","UA-23669758-41"],["map","key","theplayerstribune","value","UA-55133534-1"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",29],
      "vtp_defaultValue":["macro",59],
      "vtp_map":["list",["map","key","www.90min.com","value","UA-23669758-5"],["map","key","www.12up.com","value","UA-23669758-6"],["map","key","www.ftb90.com","value","UA-23669758-7"],["map","key","www.90min.de","value","UA-23669758-8"],["map","key","www.90min.in","value","UA-23669758-9"],["map","key","www.dbltap.com","value","UA-23669758-12"],["map","key","www.floor8.com","value","UA-23669758-16"],["map","key","www.thebiglead.com","value","UA-1004517-1"],["map","key","www.fanduel.com","value","UA-23669758-23"],["map","key","www.theplayerstribune.com","value","UA-55133534-1"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"GA_event_action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"GA_event_category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"GA_event_label"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"GA_event_sub_label"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",61],
      "vtp_map":["list",["map","key","article click","value","2"],["map","key","article share click","value","3"],["map","key","article like click","value","4"],["map","key","article comment click","value","4"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"articleAuthor"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"articlePublicationTime"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",27],8,16],"?",["escape",["macro",27],8,16],":void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",27],8,16],"?",["escape",["macro",5],8,16],"?",["escape",["macro",5],8,16],":\"(direct)\":void 0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",27],8,16],"?\"affiliate\":void 0})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"cid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"isAdBlock"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",3],
      "vtp_map":["list",["map","key","post","value","1"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userIsConnected"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",74],
      "vtp_defaultValue":"no attempt",
      "vtp_map":["list",["map","key","true","value","true"],["map","key","false","value","logged out"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"cid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"mmPlusDomain"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"mmPlusGA_event_label"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"mmPlusGA_event_sub_label"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"mmPlusPageId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"mmPlusPrePvConfigId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"mmPlusPrePvEmbedUnitsAmount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"mmPlusPrePvTimeInProcess"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"mmPlusPrePvUnitId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"mmPlusPrePvUserConnectionType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"mmPlusUnitId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"mmPlusUnitRatio"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"mmPlusUnitSize"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"mmPlusUnitTags"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"mmPlusUnitTitle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"mmPlusUnitType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"mmPlusUserConnectionType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"mmPlusVideoAutoplay"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"mmPlusVideoClosedCaptionsOn"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"mmPlusVideoDuration"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"mmPlusVideoMuted"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"mmPlusVideoPlayerId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"mmPlusVideoPlayerType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"mmPlusVideoPlaylistId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"mmPlusVideoRecommendationsVisible"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"mmPlusVideoStreamType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"mmPlusVideoThumbnailsOn"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"mmPlusUnitTags"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date,b=\"\"+a.getFullYear(),c=10\u003Ea.getMonth()+1?\"0\"+(a.getMonth()+1):\"\"+(a.getMonth()+1),d=10\u003Ea.getDate()+1?\"0\"+a.getDate():\"\"+a.getDate(),e=10\u003Ea.getHours()+1?\"0\"+a.getHours():\"\"+a.getHours();a=10\u003Ea.getMinutes()+1?\"0\"+a.getMinutes():\"\"+a.getMinutes();b=b+c+d+e+a;return parseInt(b,10)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"pageIdentifier"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",18],
      "vtp_defaultValue":["macro",18],
      "vtp_map":["list",["map","key","mlbfbcs","value","Facebook"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_map":["list",["map","key","mlbfbcm","value","FBADS"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var a=",["escape",["macro",35],8,16],".split(\".\");return a[a.length-1]%100}catch(b){return\"\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",108],8,16],";switch(!0){case 0\u003C=a\u0026\u002650\u003Ea:return!0;default:return!1}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","ga(function(a){return a=a.get(\"clientId\")})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",22],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_defaultValue":"no",
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key",".*partner=760977.*","value","yes"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"jgroup\"==",["escape",["macro",18],8,16],"?\"yes\":\"42964\"==",["escape",["macro",27],8,16],"?\"yes\":\"no\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"mmPlusCheckValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"none",
      "vtp_name":"mmPlusPlayerRemoved"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"direct\"==",["escape",["macro",30],8,16],"?-1!==",["escape",["macro",5],8,16],".indexOf(\"facebook\")?\"yes\":\"no\":\"organic\"==",["escape",["macro",30],8,16],"\u0026\u0026\"facebook.com\"==",["escape",["macro",18],8,16],"\u0026\u0026\"referral\"==",["escape",["macro",16],8,16],"?\"yes\":\"organic\"==",["escape",["macro",30],8,16],"\u0026\u0026-1!==",["escape",["macro",5],8,16],".indexOf(\"t.co\")?",["escape",["macro",27],8,16],"?\"no\":\"yes\":\"no\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"property"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ABTestGroups"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__e"
    },{
      "function":"__r"
    }],
  "tags":[{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":48
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":63
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":96
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":97
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":101
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":102
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":103
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":104
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":176
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":178
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":194
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":195
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":209
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":247
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":248
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":265
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":268
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":271
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":273
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":275
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":276
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":306
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":717
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":718
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":737
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":738
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":739
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":772
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":773
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":795
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":851
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":855
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":856
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":857
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":859
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":860
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":892
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":900
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":901
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":910
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":927
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":928
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":931
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":952
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/bucket1.mm-syringe.com\/qa\/configs\/70e78e44-eaa9-7127-d70e-2d267cb210ba.js\";s2.src=\"https:\/\/bucket1.mm-syringe.com\/qa\/injector\/injector.1.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":46
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){var a=document.createElement(\"script\"),b=document.createElement(\"script\");a.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/3acec8f8-59c1-43bb-b12b-78cdd2a1f943.js\";b.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(a);document.body.appendChild(b)},1E3);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":72
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/bucket1.mm-syringe.com\/qa\/configs\/6ca23dc3-5a14-fa22-3a1c-de0eecfd3ccb.js\";s2.src=\"https:\/\/bucket1.mm-syringe.com\/qa\/injector\/injector.1.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":73
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/qa\/configs\/4738f407-2ac0-0a96-4ed4-db8f0c798842.js\";s2.src=\"https:\/\/www.oo-syringe.com\/qa\/injector\/injector.1.1.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":81
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"    \u003Cscript type=\"text\/gtmscript\"\u003Evar appendTo=document.getElementsByTagName(\"body\")[0],element=document.createElement(\"a\");element.id=\"test-page-btn\";element.target=\"_blank\";var linkText=document.createTextNode(\"test link\");element.appendChild(linkText);element.title=\"test link\";element.href=\"https:\/\/www.90min.com\/seo-test\/scenario-4-test-destination.html\";appendTo.insertBefore(element,null);var s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/bucket1.mm-syringe.com\/prod\/configs\/0fd7915f-695a-4602-a7a7-a26728de8e6e.js\";\ns2.src=\"https:\/\/bucket1.mm-syringe.com\/prod\/injector\/injector.1.3.js\";s1.onload=function(){console.log(1);var a=document.getElementById(\"test-page-btn\");a.style.display=\"none\"};document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":84
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/9190e198-5a7c-e556-6989-ab11698a9cd4.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":89
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/911e440d-f3f2-9b4b-2ee9-c0f4acd45014.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":90
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/bucket1.mm-syringe.com\/qa\/configs\/0c87cbf1-6f4e-7f4f-c3aa-f5a8f8380414.js\";s2.src=\"https:\/\/bucket1.mm-syringe.com\/qa\/injector\/injector.1.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":92
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/bucket1.mm-syringe.com\/qa\/configs\/0c87cbf1-6f4e-7f4f-c3aa-f5a8f8380414.js\";s2.src=\"https:\/\/bucket1.mm-syringe.com\/qa\/injector\/injector.1.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":93
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/ab59b82c-238a-13cb-4f3a-0d0eacba5856.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":99
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/140566a9-5678-44a6-26f8-014cbe6bc8ba.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":100
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/ab59b82c-238a-13cb-4f3a-0d0eacba5856.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":107
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/140566a9-5678-44a6-26f8-014cbe6bc8ba.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":108
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/bucket1.mm-syringe.com\/qa\/configs\/e4397fc6-a2be-5b94-e881-938ef142a447.js\";s2.src=\"https:\/\/bucket1.mm-syringe.com\/qa\/injector\/injector.1.5.1.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":154
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/qa\/configs\/90fbe437-533b-6b66-dd7f-273d67e4f3d8.js\";s2.src=\"https:\/\/www.oo-syringe.com\/qa\/injector\/injector.1.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":155
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/bucket1.mm-syringe.com\/qa\/configs\/70e78e44-eaa9-7127-d70e-2d267cb210ba.js\";s2.src=\"https:\/\/bucket1.mm-syringe.com\/qa\/injector\/injector.1.5.1.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":156
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/c5178299-98da-a795-2eec-094213dbc5ea.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":174
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/43729f2e-c7f2-b809-7055-c0bd9be2aa6a.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":175
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/403490e5-a925-4480-08e7-14be8dd8733e.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":183
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/a7b7c32d-2706-2514-43c1-e80cd8619b1d.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":184
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/3a46461d-48cb-40aa-4e1b-2cda2cc263b0.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":185
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/fee789f4-9b9d-b1cd-2d4b-8b26bcc86ad2.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":186
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/4d442dde-0764-ae02-4413-c03d9bdc2876.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":187
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/3990dfeb-3111-a9ef-ab76-9794422ff3b1.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":188
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/aa9ff601-22ec-3670-f595-54aca0603f5e.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":192
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){var a=document.createElement(\"script\"),b=document.createElement(\"script\");a.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/809b4c74-f980-0182-01da-b61fca9edfdc.js\";b.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.7.1.js\";document.body.appendChild(a);document.body.appendChild(b)},1E3);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":211
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){var a=document.createElement(\"script\"),b=document.createElement(\"script\");a.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/853f088a-af9b-2a29-7db6-ace56142ff4c.js\";b.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.7.1.js\";document.body.appendChild(a);document.body.appendChild(b)},1E3);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":213
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){var a=document.createElement(\"script\"),b=document.createElement(\"script\");a.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/2c2fdcd3-2168-1fbc-7cae-2513aca9c56c.js\";b.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.7.1.js\";document.body.appendChild(a);document.body.appendChild(b)},1E3);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":214
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){var a=document.createElement(\"script\"),b=document.createElement(\"script\");a.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/e37fcef1-a40d-9b32-baba-ab6ea20a0c04.js\";b.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.3.js\";document.body.appendChild(a);document.body.appendChild(b)},1E3);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":215
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){var a=document.createElement(\"script\"),b=document.createElement(\"script\");a.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/64030123-d16a-a088-9715-8db97a0908e9.js\";b.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(a);document.body.appendChild(b)},1E3);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":217
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){var a=document.createElement(\"script\"),b=document.createElement(\"script\");a.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/56256923-56ba-3348-dd71-bcd2e3af42ec.js\";b.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.7.1.js\";document.body.appendChild(a);document.body.appendChild(b)},1E3);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":218
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){var a=document.createElement(\"script\"),b=document.createElement(\"script\");a.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/1fde1340-802c-d0e9-abda-dc023e0a6481.js\";b.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.7.1.js\";document.body.appendChild(a);document.body.appendChild(b)},1E3);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":220
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){var a=document.createElement(\"script\"),b=document.createElement(\"script\");a.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/1817b10a-4e38-ecc2-0fee-68b6cdcfa920.js\";b.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.3.js\";document.body.appendChild(a);document.body.appendChild(b)},1E3);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":222
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/e69d0a09-01c0-6605-ac6f-8e3e16efa397.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.6.1.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":242
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/8ac96614-ba52-b939-860d-482c0ff1e254.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.7.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":246
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/3be77ffc-7695-27d5-e70f-795187986bd8.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.7.1.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":250
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/9a2fec07-1e20-2076-ba2c-b8288299eecf.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.7.1.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":251
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/qa\/configs\/00cd1ec2-9999-41b8-36ec-1b46aa1bc174.js\";s2.src=\"https:\/\/www.oo-syringe.com\/qa\/injector\/injector.1.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":266
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window.getVideoTag=function(b,a){b=\"https:\/\/pubads.g.doubleclick.net\/gampad\/ads?sz\\x3d640x360|480x270|400x300|640x480\\x26iu\\x3d\/175840252\/\"+",["escape",["macro",48],8,16],"+\"\/Index\/Article\/Video\\x26impl\\x3ds\\x26gdfp_req\\x3d1\\x26env\\x3dvp\\x26output\\x3dvast\\x26unviewed_position_start\\x3d1\\x26url\\x3d\"+window.location.href+\"\\x26description_url\\x3d\"+(b||window.location.href)+\"\\x26correlator\\x3d\"+Date.now()+\"\\x26cmsid\\x3d2555788\\x26vid\\x3d##VIDEO_ID##\\x26cust_params\\x3d\";var e=encodeURIComponent,f=\"language\\x3d\"+\n",["escape",["macro",1],8,16],"+\"\\x26platform\\x3d\"+",["escape",["macro",2],8,16],"+\"\\x26articleId\\x3d\"+",["escape",["macro",14],8,16],"+\"\\x26articleTemplate\\x3d\"+",["escape",["macro",15],8,16],"+\"\\x26adUnitPath\\x3d\/175840252\/\"+",["escape",["macro",48],8,16],"+\"\/Index\/Article\/Video\\x26countryCode\\x3d\"+",["escape",["macro",9],8,16],"+\"\\x26markupFormat\\x3d\"+",["escape",["macro",49],8,16],"+\"\\x26userIdentifier\\x3d\"+",["escape",["macro",20],8,16],"+\"\\x26affiliateId\\x3d\"+",["escape",["macro",27],8,16],"+\"\\x26property\\x3d\"+",["escape",["macro",0],8,16],"+\"\\x26channel\\x3d\"+",["escape",["macro",50],8,16],"+\"\\x26pageType\\x3d\"+\n",["escape",["macro",3],8,16],"+\"\\x26trafficSource\\x3d\"+",["escape",["macro",51],8,16],"+\"\\x26trafficSourceAndId\\x3d\"+",["escape",["macro",52],8,16],",c=\"preroll\",d=\"midroll\";a=a\u0026\u0026a.startsWith(c)?\"\\x26mm_preroll\\x3d\"+a.substring(c.length):a\u0026\u0026a.startsWith(d)?\"\\x26mm_midroll\\x3d\"+a.substring(d.length):\"\";return b+e(f+a+(\"function\"!==typeof window.__tcfapi?\"\\x26gdpr\\x3d\"+",["escape",["macro",53],8,16],"+\"\\x26gdpr_consent\\x3d\"+",["escape",["macro",54],8,16],":\"\")+\"\\x26contentTags\\x3d\"+",["escape",["macro",31],8,16],"+\"\\x26commercialTags\\x3d\"+",["escape",["macro",19],8,16],"+\n\"\\x26video_id\\x3d##VIDEO_ID##\")}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":290
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s4=document.createElement(\"script\");s4=document.createElement(\"script\");s4.src=\"https:\/\/cdn.mmctsvc.com\/real-time\/index.prod.latest.js\";document.body.appendChild(s4);var s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/354b297f-b99a-5a71-aaf0-4601e8ee2f7d.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":294
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){var a=document.createElement(\"script\"),b=document.createElement(\"script\");a.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/40e2fb8e-a529-6689-c47a-4220a1b8ff7a.js\";b.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.3.js\";document.body.appendChild(a);document.body.appendChild(b)},1E3);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":296
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){var a=document.createElement(\"script\"),b=document.createElement(\"script\");a.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/daa58063-ef7c-9b84-44cf-be3ed489e9c6.js\";b.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.3.js\";document.body.appendChild(a);document.body.appendChild(b)},1E3);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":297
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/bucket1.mm-syringe.com\/prod\/configs\/056f43ee-44ec-bb59-6ba2-78182f7af38e.js\";s2.src=\"https:\/\/bucket1.mm-syringe.com\/prod\/injector\/injector.1.5.2.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":315
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/bucket1.mm-syringe.com\/prod\/configs\/4a332cb7-11d1-e125-3c81-5e416a997681.js\";s2.src=\"https:\/\/bucket1.mm-syringe.com\/prod\/injector\/injector.1.5.2.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":316
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/bucket1.mm-syringe.com\/prod\/configs\/23b81f9a-101d-7e01-399d-fb7e3d1c4127.js\";s2.src=\"https:\/\/bucket1.mm-syringe.com\/prod\/injector\/injector.1.5.2.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":317
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar img=document.createElement(\"img\"),baseSrc=\"https:\/\/bcp.crwdcntrl.net\/5\/c\\x3d14984\/\",actionKey=\"act\\x3d\",tagKey=\"int\\x3d\",tags=\"\";img.width=\"1\";img.height=\"1\";document.body.appendChild(img);\nregisterToPlayerEvents=function(b){b.on(\"play\",function(){var a=actionKey+\"play_video\/\";tags=\"\";var c=b.getCurrentVideoItem().tags.split(\",\");c.forEach(function(a){tags+=tagKey+a.trim()+\"\/\"});img.src=baseSrc+a+tags});b.on(\"complete\",function(){var a=actionKey+\"complete_video\/\";img.src=baseSrc+a+tags;document.body.appendChild(img)});b.on(\"pause\",function(){var a=actionKey+\"pause_video\/\";img.src=baseSrc+a+tags})};\nwindow.monti\u0026\u0026monti.dataset\u0026\u0026monti.dataset.players?registerToPlayerEvents(monti.dataset.players[Object.keys(monti.dataset.players)[0]]):window.addEventListener(\"montiConfigLoaded\",function(){registerToPlayerEvents(monti.dataset.players[Object.keys(monti.dataset.players)[0]])});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":322
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/bucket1.mm-syringe.com\/prod\/configs\/211016ba-cd0f-6ad5-988b-cf549e3eabcd.js\";s2.src=\"https:\/\/bucket1.mm-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":721
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/bucket1.mm-syringe.com\/prod\/configs\/858a979c-58ce-6b6e-bdcb-2354d202526f.js\";s2.src=\"https:\/\/bucket1.mm-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":723
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/dd38917d-744f-d6f2-10ad-9b77f8294d0e.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":758
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/71ff6a30-4a33-0d05-8077-dc7ef1983598.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":759
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/bucket1.mm-syringe.com\/prod\/configs\/a6ee4470-37a5-f104-25dd-80f5b44c9d69.js\";s2.src=\"https:\/\/bucket1.mm-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":777
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/f0a86402-79d7-f6a7-b5d6-ee76164d57e3.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.7.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":779
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/0af84835-47f7-1cb1-4f28-a7511525f764.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":783
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/27a3486c-c263-71e7-6594-0706403b9fea.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":785
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/d444c911-a46a-c154-813b-4a01e630edc6.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.7.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":787
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/831f1df0-aff7-45b5-5313-cd3e48fd939f.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":789
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){var a=document.createElement(\"script\"),b=document.createElement(\"script\");a.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/2229862a-af49-5d96-4215-71669ded842a.js\";b.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(a);document.body.appendChild(b)},1E3);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":803
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/c32b1d2b-6fe3-eafe-8836-9e6497349888.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":805
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){var a=document.createElement(\"script\"),b=document.createElement(\"script\");a.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/9fa539b7-6162-2d09-43e2-b94698fca952.js\";b.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(a);document.body.appendChild(b)},1E3);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":813
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/25426af2-8c9b-372f-d9bc-e08a160508d5.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":817
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/dbb8bec5-b7e9-122a-b9d3-8393e20da684.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":819
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){var a=document.createElement(\"script\"),b=document.createElement(\"script\");a.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/030ae600-4363-1292-6d7d-77d9285680ec.js\";b.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(a);document.body.appendChild(b)},1E3);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":821
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/b5103427-54cf-6da4-93fd-f356cd02f08d.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.7.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":824
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/b9186f8a-5c02-2acd-1038-5c34a5804375.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":827
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/2b654081-12d5-2543-0d2f-93963e15c23f.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":831
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/1e814c09-357e-8500-2c53-ff63138dbdee.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":835
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/b18ff6f8-692c-2685-6927-d5b9b5821f7b.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":837
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/b41ea010-15eb-be70-f08f-9a9a1bfb9332.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":843
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/fd7d6c26-3efb-e3d7-b8e1-f9d122896460.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":845
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.monti.dataset.players[Object.keys(window.monti.dataset.players)[0]].on(\"time\",function(a){30\u003Ca.position\u0026\u0026window.monti.dataset.players[Object.keys(window.monti.dataset.players)[0]].playNextVideo()});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":852
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar domain=",["escape",["macro",57],8,16],"?\"https:\/\/www.oo-syringe.com\/\":\"https:\/\/bucket1.mm-syringe.com\/\",env=",["escape",["macro",58],8,16],"?",["escape",["macro",58],8,16],":\"prod\",s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=domain+env+\"\/configs\/",["escape",["macro",56],7],".js\";s2.src=domain+env+\"\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":875
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/16cb9271-38ac-c94c-76c2-b42327952457.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":880
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/47d6f117-ecfd-0bae-d2fb-59e52fde1abf.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":882
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/13eb615e-ad39-78f5-bb17-1fc1e20f8c63.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":894
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/c0fd8e5c-964d-99a1-1716-c0da9564f881.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":895
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){var a=document.createElement(\"script\"),b=document.createElement(\"script\");a.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/23092cc2-dd65-43dd-4fa7-29beb6fc5629.js\";b.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(a);document.body.appendChild(b)},1E3);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":904
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){var a=document.createElement(\"script\"),b=document.createElement(\"script\");a.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/1add5fae-69fe-48fa-1893-0e7f3f143013.js\";b.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(a);document.body.appendChild(b)},1E3);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":905
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/be20dd05-4a1a-d756-cc10-377f4a585d82.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":906
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/4322e81a-fb31-384e-1f2e-da83ad9b2e64.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":908
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/e16ee099-fbb1-3959-ca12-8841c457dc22.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":914
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/f0a86402-79d7-f6a7-b5d6-ee76164d57e3.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.7.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":915
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/qa\/configs\/cbf05341-38d0-77a4-65bc-ba06e8b5f11d.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":917
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/qa\/configs\/ee0eaee3-ccc3-8295-a323-6aa6a82ec433.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":919
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){var a=document.createElement(\"script\"),b=document.createElement(\"script\");a.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/7d35222f-2f06-f208-9465-ebe8ee52c4e3.js\";b.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(a);document.body.appendChild(b)},1E3);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":920
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){var a=document.createElement(\"script\"),b=document.createElement(\"script\");a.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/b7e3509c-fe0f-4d4c-e95c-94841a9f7887.js\";b.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(a);document.body.appendChild(b)},1E3);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":922
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EsetTimeout(function(){var a=document.createElement(\"script\"),b=document.createElement(\"script\");a.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/921852cd-b7a3-8be7-b92f-1aa34fb070e8.js\";b.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(a);document.body.appendChild(b)},1E3);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":924
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar PWT={},mmAPSusedVideoIDS={},pmBid={},mmHeaderBiddingProviders={APS:\"apstag\",PREBID:\"prebid\"};window.mmVideoBidsManager={prebid:{ready:!1,inProgress:!1,bids:null},apstag:{ready:!1,inProgress:!1,bids:null}};\nfunction buildVideoUrlParams(a){var b=\"\";a.forEach(function(c){c\u0026\u0026c.hasOwnProperty(\"pwtbst\")\u0026\u0026(b+=encodeURIComponent([\"pwtbst\\x3d\",pmBid.pwtbst,\"\\x26pwtecp\\x3d\",pmBid.pwtecp,\"\\x26pwtpid\\x3d\",pmBid.pwtpid,\"\\x26pwtplt\\x3d\",pmBid.pwtplt,\"\\x26pwtcid\\x3d\",pmBid.pwtcid].join(\"\")));b=c\u0026\u00260\u003Cc.length?b+c[0].encodedQsParams:b+\"\\x26noAPSbids\"});\"\\x26\"===b[0]\u0026\u0026(b=b.substr(1));window.mmPrebidVideoBids=b}\nfunction handleVideoBidsByProvider(a,b){\"prebid\"==a?(window.mmVideoBidsManager.prebid.inProgress=!1,window.mmVideoBidsManager.prebid.bids=b):(window.mmVideoBidsManager.apstag.inProgress=!1,window.mmVideoBidsManager.apstag.bids=b);a=Object.values(window.mmVideoBidsManager);a.every(function(c){return!c.inProgress})\u0026\u0026buildVideoUrlParams(a.map(function(c){return c.bids}))}\n(function(){var a=window.location.href,b=\"\/\/ads.pubmatic.com\/AdServer\/js\/pwt\/159660\/2614\",c=\"\";if(0\u003Ca.indexOf(\"pwtv\\x3d\")){var d=\/pwtv=(.*?)(\u0026|$)\/g;(a=d.exec(a))\u0026\u00262\u003C=a.length\u0026\u00260\u003Ca[1].length\u0026\u0026(c=\"\/\"+a[1])}a=document.createElement(\"script\");a.type=\"text\/javascript\";a.src=b+c+\"\/pwt.js\";b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\nwindow.apstag||window.apstag||(!function(a,b,c,d,g,e,f){b[a]||(b[a]={init:function(){b[a]._Q.push([\"i\",arguments])},fetchBids:function(){b[a]._Q.push([\"f\",arguments])},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]},e=c.createElement(d),e.async=!0,e.src=g,f=c.getElementsByTagName(d)[0],f.parentNode.insertBefore(e,f))}(\"apstag\",window,document,\"script\",\"\/\/c.amazon-adsystem.com\/aax2\/apstag.js\"),apstag.init({pubID:\"3777\",videoAdServer:\"DFP\"}));\nPWT.jsLoaded=function(){var a=[{adUnitId:\"\/175840252\/90min.com\/index\/article\/video\",adUnitIndex:\"0\",code:\"\/175840252\/90min.com\/index\/article\/video\",divId:\"DIV_01\",mediaTypes:{video:{mimes:[\"video\/x-flv\",\"video\/mp4\",\"video\/webm\",\"application\/javascript\"],w:640,h:480}},sizes:[[640,480]]}];window.mmVideoBidsManager.prebid.videoSlot=a;window.mmVideoBidsManager.prebid.ready=!0};\nfunction fetchMMAPSBids(){window.apstag.fetchBids({slots:[{slotID:\"videoSlot\",mediaType:\"video\"}]},function(a){handleVideoBidsByProvider(\"apstag\",a)})}function fetchMMPrebidBids(){window.mmVideoBidsManager.prebid.inProgress=!0;PWT.requestBids(window.mmVideoBidsManager.prebid.videoSlot,function(a){pmBid=a[0].bidData.kvp;handleVideoBidsByProvider(\"prebid\",pmBid)})}function fetchMMBids(){fetchMMAPSBids();fetchMMPrebidBids()}\nfunction registerForBidsFetching(a){a.on(\"time\",function(b){var c=a.getCurrentVideoItem().mediaid||a.getCurrentVideoItem().mediaId;!mmAPSusedVideoIDS[c]\u0026\u00260\u003Cb.duration\u0026\u00263\u003Eb.duration-b.position\u0026\u00260\u003Cb.duration-b.position\u0026\u0026(mmAPSusedVideoIDS[c]=1,fetchMMBids())})}\nfunction startInitalBid(){var a=setInterval(function(){window.apstag._getSlotIdToNameMapping\u0026\u00260\u003CObject.keys(window.apstag._getSlotIdToNameMapping()).length\u0026\u0026(window.mmVideoBidsManager.apstag.ready=!0);Object.values(window.mmVideoBidsManager).every(function(b){return!0===b.ready})\u0026\u0026(fetchMMBids(),clearTimeout(a))},1E3)}\nwindow.monti\u0026\u0026window.monti.dataset\u0026\u0026window.monti.dataset.players?registerForBidsFetching(window.monti.dataset.players[Object.keys(window.monti.dataset.players)[0]]):window.addEventListener(\"montiConfigLoaded\",function(){registerForBidsFetching(window.monti.dataset.players[Object.keys(window.monti.dataset.players)[0]])});startInitalBid();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":935
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s4=document.createElement(\"script\");s4=document.createElement(\"script\");s4.src=\"https:\/\/cdn.mmctsvc.com\/real-time\/index.prod.latest.js\";document.body.appendChild(s4);var s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/48639353-86f5-9994-192b-463733ef0c79.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":937
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar PWT={},mmAPSusedVideoIDS={},pmBid={},mmHeaderBiddingProviders={APS:\"apstag\",PREBID:\"prebid\"};window.mmVideoBidsManager={prebid:{ready:!1,inProgress:!1,bids:null},apstag:{ready:!1,inProgress:!1,bids:null}};\nfunction buildVideoUrlParams(a){var b=\"\";a.forEach(function(c){c\u0026\u0026c.hasOwnProperty(\"pwtbst\")\u0026\u0026(b+=encodeURIComponent([\"pwtbst\\x3d\",pmBid.pwtbst,\"\\x26pwtecp\\x3d\",pmBid.pwtecp,\"\\x26pwtpid\\x3d\",pmBid.pwtpid,\"\\x26pwtplt\\x3d\",pmBid.pwtplt,\"\\x26pwtcid\\x3d\",pmBid.pwtcid].join(\"\")));b=c\u0026\u00260\u003Cc.length?b+c[0].encodedQsParams:b+\"\\x26noAPSbids\"});\"\\x26\"===b[0]\u0026\u0026(b=b.substr(1));window.mmPrebidVideoBids=b}\nfunction handleVideoBidsByProvider(a,b){\"prebid\"==a?(window.mmVideoBidsManager.prebid.inProgress=!1,window.mmVideoBidsManager.prebid.bids=b):(window.mmVideoBidsManager.apstag.inProgress=!1,window.mmVideoBidsManager.apstag.bids=b);a=Object.values(window.mmVideoBidsManager);a.every(function(c){return!c.inProgress})\u0026\u0026buildVideoUrlParams(a.map(function(c){return c.bids}))}\n(function(){var a=window.location.href,b=\"\/\/ads.pubmatic.com\/AdServer\/js\/pwt\/159660\/2614\",c=\"\";if(0\u003Ca.indexOf(\"pwtv\\x3d\")){var d=\/pwtv=(.*?)(\u0026|$)\/g;(a=d.exec(a))\u0026\u00262\u003C=a.length\u0026\u00260\u003Ca[1].length\u0026\u0026(c=\"\/\"+a[1])}a=document.createElement(\"script\");a.type=\"text\/javascript\";a.src=b+c+\"\/pwt.js\";b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\nwindow.apstag||window.apstag||(!function(a,b,c,d,g,e,f){b[a]||(b[a]={init:function(){b[a]._Q.push([\"i\",arguments])},fetchBids:function(){b[a]._Q.push([\"f\",arguments])},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]},e=c.createElement(d),e.async=!0,e.src=g,f=c.getElementsByTagName(d)[0],f.parentNode.insertBefore(e,f))}(\"apstag\",window,document,\"script\",\"\/\/c.amazon-adsystem.com\/aax2\/apstag.js\"),apstag.init({pubID:\"3777\",videoAdServer:\"DFP\"}));\nPWT.jsLoaded=function(){var a=[{adUnitId:\"\/175840252\/12up.com\/index\/article\/video\",adUnitIndex:\"0\",code:\"\/175840252\/12up.com\/index\/article\/video\",divId:\"DIV_01\",mediaTypes:{video:{mimes:[\"video\/x-flv\",\"video\/mp4\",\"video\/webm\",\"application\/javascript\"],w:640,h:480}},sizes:[[640,480]]}];window.mmVideoBidsManager.prebid.videoSlot=a;window.mmVideoBidsManager.prebid.ready=!0};\nfunction fetchMMAPSBids(){window.apstag.fetchBids({slots:[{slotID:\"videoSlot\",mediaType:\"video\"}]},function(a){handleVideoBidsByProvider(\"apstag\",a)})}function fetchMMPrebidBids(){window.mmVideoBidsManager.prebid.inProgress=!0;PWT.requestBids(window.mmVideoBidsManager.prebid.videoSlot,function(a){pmBid=a[0].bidData.kvp;handleVideoBidsByProvider(\"prebid\",pmBid)})}function fetchMMBids(){fetchMMAPSBids();fetchMMPrebidBids()}\nfunction registerForBidsFetching(a){a.on(\"time\",function(b){var c=a.getCurrentVideoItem().mediaid||a.getCurrentVideoItem().mediaId;!mmAPSusedVideoIDS[c]\u0026\u00260\u003Cb.duration\u0026\u00263\u003Eb.duration-b.position\u0026\u00260\u003Cb.duration-b.position\u0026\u0026(mmAPSusedVideoIDS[c]=1,fetchMMBids())})}\nfunction startInitalBid(){var a=setInterval(function(){window.apstag._getSlotIdToNameMapping\u0026\u00260\u003CObject.keys(window.apstag._getSlotIdToNameMapping()).length\u0026\u0026(window.mmVideoBidsManager.apstag.ready=!0);Object.values(window.mmVideoBidsManager).every(function(b){return!0===b.ready})\u0026\u0026(fetchMMBids(),clearTimeout(a))},1E3)}\nwindow.monti\u0026\u0026window.monti.dataset\u0026\u0026window.monti.dataset.players?registerForBidsFetching(window.monti.dataset.players[Object.keys(window.monti.dataset.players)[0]]):window.addEventListener(\"montiConfigLoaded\",function(){registerForBidsFetching(window.monti.dataset.players[Object.keys(window.monti.dataset.players)[0]])});startInitalBid();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":939
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar PWT={},mmAPSusedVideoIDS={},pmBid={},mmHeaderBiddingProviders={APS:\"apstag\",PREBID:\"prebid\"};window.mmVideoBidsManager={prebid:{ready:!1,inProgress:!1,bids:null},apstag:{ready:!1,inProgress:!1,bids:null}};\nfunction buildVideoUrlParams(a){var b=\"\";a.forEach(function(c){c\u0026\u0026c.hasOwnProperty(\"pwtbst\")\u0026\u0026(b+=encodeURIComponent([\"pwtbst\\x3d\",pmBid.pwtbst,\"\\x26pwtecp\\x3d\",pmBid.pwtecp,\"\\x26pwtpid\\x3d\",pmBid.pwtpid,\"\\x26pwtplt\\x3d\",pmBid.pwtplt,\"\\x26pwtcid\\x3d\",pmBid.pwtcid].join(\"\")));b=c\u0026\u00260\u003Cc.length?b+c[0].encodedQsParams:b+\"\\x26noAPSbids\"});\"\\x26\"===b[0]\u0026\u0026(b=b.substr(1));window.mmPrebidVideoBids=b}\nfunction handleVideoBidsByProvider(a,b){\"prebid\"==a?(window.mmVideoBidsManager.prebid.inProgress=!1,window.mmVideoBidsManager.prebid.bids=b):(window.mmVideoBidsManager.apstag.inProgress=!1,window.mmVideoBidsManager.apstag.bids=b);a=Object.values(window.mmVideoBidsManager);a.every(function(c){return!c.inProgress})\u0026\u0026buildVideoUrlParams(a.map(function(c){return c.bids}))}\n(function(){var a=window.location.href,b=\"\/\/ads.pubmatic.com\/AdServer\/js\/pwt\/159660\/2614\",c=\"\";if(0\u003Ca.indexOf(\"pwtv\\x3d\")){var d=\/pwtv=(.*?)(\u0026|$)\/g;(a=d.exec(a))\u0026\u00262\u003C=a.length\u0026\u00260\u003Ca[1].length\u0026\u0026(c=\"\/\"+a[1])}a=document.createElement(\"script\");a.type=\"text\/javascript\";a.src=b+c+\"\/pwt.js\";b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\nwindow.apstag||window.apstag||(!function(a,b,c,d,g,e,f){b[a]||(b[a]={init:function(){b[a]._Q.push([\"i\",arguments])},fetchBids:function(){b[a]._Q.push([\"f\",arguments])},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]},e=c.createElement(d),e.async=!0,e.src=g,f=c.getElementsByTagName(d)[0],f.parentNode.insertBefore(e,f))}(\"apstag\",window,document,\"script\",\"\/\/c.amazon-adsystem.com\/aax2\/apstag.js\"),apstag.init({pubID:\"3777\",videoAdServer:\"DFP\"}));\nPWT.jsLoaded=function(){var a=[{adUnitId:\"\/175840252\/floor8.com\/index\/article\/video\",adUnitIndex:\"0\",code:\"\/175840252\/floor8.com\/index\/article\/video\",divId:\"DIV_01\",mediaTypes:{video:{mimes:[\"video\/x-flv\",\"video\/mp4\",\"video\/webm\",\"application\/javascript\"],w:640,h:480}},sizes:[[640,480]]}];window.mmVideoBidsManager.prebid.videoSlot=a;window.mmVideoBidsManager.prebid.ready=!0};\nfunction fetchMMAPSBids(){window.apstag.fetchBids({slots:[{slotID:\"videoSlot\",mediaType:\"video\"}]},function(a){handleVideoBidsByProvider(\"apstag\",a)})}function fetchMMPrebidBids(){window.mmVideoBidsManager.prebid.inProgress=!0;PWT.requestBids(window.mmVideoBidsManager.prebid.videoSlot,function(a){pmBid=a[0].bidData.kvp;handleVideoBidsByProvider(\"prebid\",pmBid)})}function fetchMMBids(){fetchMMAPSBids();fetchMMPrebidBids()}\nfunction registerForBidsFetching(a){a.on(\"time\",function(b){var c=a.getCurrentVideoItem().mediaid||a.getCurrentVideoItem().mediaId;!mmAPSusedVideoIDS[c]\u0026\u00260\u003Cb.duration\u0026\u00263\u003Eb.duration-b.position\u0026\u00260\u003Cb.duration-b.position\u0026\u0026(mmAPSusedVideoIDS[c]=1,fetchMMBids())})}\nfunction startInitalBid(){var a=setInterval(function(){window.apstag._getSlotIdToNameMapping\u0026\u00260\u003CObject.keys(window.apstag._getSlotIdToNameMapping()).length\u0026\u0026(window.mmVideoBidsManager.apstag.ready=!0);Object.values(window.mmVideoBidsManager).every(function(b){return!0===b.ready})\u0026\u0026(fetchMMBids(),clearTimeout(a))},1E3)}\nwindow.monti\u0026\u0026window.monti.dataset\u0026\u0026window.monti.dataset.players?registerForBidsFetching(window.monti.dataset.players[Object.keys(window.monti.dataset.players)[0]]):window.addEventListener(\"montiConfigLoaded\",function(){registerForBidsFetching(window.monti.dataset.players[Object.keys(window.monti.dataset.players)[0]])});startInitalBid();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":941
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar PWT={},mmAPSusedVideoIDS={},pmBid={},mmHeaderBiddingProviders={APS:\"apstag\",PREBID:\"prebid\"};window.mmVideoBidsManager={prebid:{ready:!1,inProgress:!1,bids:null},apstag:{ready:!1,inProgress:!1,bids:null}};\nfunction buildVideoUrlParams(a){var b=\"\";a.forEach(function(c){c\u0026\u0026c.hasOwnProperty(\"pwtbst\")\u0026\u0026(b+=encodeURIComponent([\"pwtbst\\x3d\",pmBid.pwtbst,\"\\x26pwtecp\\x3d\",pmBid.pwtecp,\"\\x26pwtpid\\x3d\",pmBid.pwtpid,\"\\x26pwtplt\\x3d\",pmBid.pwtplt,\"\\x26pwtcid\\x3d\",pmBid.pwtcid].join(\"\")));b=c\u0026\u00260\u003Cc.length?b+c[0].encodedQsParams:b+\"\\x26noAPSbids\"});\"\\x26\"===b[0]\u0026\u0026(b=b.substr(1));window.mmPrebidVideoBids=b}\nfunction handleVideoBidsByProvider(a,b){\"prebid\"==a?(window.mmVideoBidsManager.prebid.inProgress=!1,window.mmVideoBidsManager.prebid.bids=b):(window.mmVideoBidsManager.apstag.inProgress=!1,window.mmVideoBidsManager.apstag.bids=b);a=Object.values(window.mmVideoBidsManager);a.every(function(c){return!c.inProgress})\u0026\u0026buildVideoUrlParams(a.map(function(c){return c.bids}))}\n(function(){var a=window.location.href,b=\"\/\/ads.pubmatic.com\/AdServer\/js\/pwt\/159660\/2614\",c=\"\";if(0\u003Ca.indexOf(\"pwtv\\x3d\")){var d=\/pwtv=(.*?)(\u0026|$)\/g;(a=d.exec(a))\u0026\u00262\u003C=a.length\u0026\u00260\u003Ca[1].length\u0026\u0026(c=\"\/\"+a[1])}a=document.createElement(\"script\");a.type=\"text\/javascript\";a.src=b+c+\"\/pwt.js\";b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\nwindow.apstag||window.apstag||(!function(a,b,c,d,g,e,f){b[a]||(b[a]={init:function(){b[a]._Q.push([\"i\",arguments])},fetchBids:function(){b[a]._Q.push([\"f\",arguments])},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]},e=c.createElement(d),e.async=!0,e.src=g,f=c.getElementsByTagName(d)[0],f.parentNode.insertBefore(e,f))}(\"apstag\",window,document,\"script\",\"\/\/c.amazon-adsystem.com\/aax2\/apstag.js\"),apstag.init({pubID:\"3777\",videoAdServer:\"DFP\"}));\nPWT.jsLoaded=function(){var a=[{adUnitId:\"\/175840252\/dbltap.com\/index\/article\/video\",adUnitIndex:\"0\",code:\"\/175840252\/dbltap.com\/index\/article\/video\",divId:\"DIV_01\",mediaTypes:{video:{mimes:[\"video\/x-flv\",\"video\/mp4\",\"video\/webm\",\"application\/javascript\"],w:640,h:480}},sizes:[[640,480]]}];window.mmVideoBidsManager.prebid.videoSlot=a;window.mmVideoBidsManager.prebid.ready=!0};\nfunction fetchMMAPSBids(){window.apstag.fetchBids({slots:[{slotID:\"videoSlot\",mediaType:\"video\"}]},function(a){handleVideoBidsByProvider(\"apstag\",a)})}function fetchMMPrebidBids(){window.mmVideoBidsManager.prebid.inProgress=!0;PWT.requestBids(window.mmVideoBidsManager.prebid.videoSlot,function(a){pmBid=a[0].bidData.kvp;handleVideoBidsByProvider(\"prebid\",pmBid)})}function fetchMMBids(){fetchMMAPSBids();fetchMMPrebidBids()}\nfunction registerForBidsFetching(a){a.on(\"time\",function(b){var c=a.getCurrentVideoItem().mediaid||a.getCurrentVideoItem().mediaId;!mmAPSusedVideoIDS[c]\u0026\u00260\u003Cb.duration\u0026\u00263\u003Eb.duration-b.position\u0026\u00260\u003Cb.duration-b.position\u0026\u0026(mmAPSusedVideoIDS[c]=1,fetchMMBids())})}\nfunction startInitalBid(){var a=setInterval(function(){window.apstag._getSlotIdToNameMapping\u0026\u00260\u003CObject.keys(window.apstag._getSlotIdToNameMapping()).length\u0026\u0026(window.mmVideoBidsManager.apstag.ready=!0);Object.values(window.mmVideoBidsManager).every(function(b){return!0===b.ready})\u0026\u0026(fetchMMBids(),clearTimeout(a))},1E3)}\nwindow.monti\u0026\u0026window.monti.dataset\u0026\u0026window.monti.dataset.players?registerForBidsFetching(window.monti.dataset.players[Object.keys(window.monti.dataset.players)[0]]):window.addEventListener(\"montiConfigLoaded\",function(){registerForBidsFetching(window.monti.dataset.players[Object.keys(window.monti.dataset.players)[0]])});startInitalBid();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":944
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s3=document.createElement(\"script\");s3=document.createElement(\"script\");s3.src=\" https:\/\/mm-platform-assets.s3-us-west-2.amazonaws.com\/prebid\/90min-pm-dev.js\";document.body.appendChild(s3);var s4=document.createElement(\"script\");s4=document.createElement(\"script\");s4.src=\"https:\/\/cdn.mmctsvc.com\/real-time\/index.prod.latest.js\";document.body.appendChild(s4);var s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/49eaa376-21ae-807e-0a39-577017d8c680.js\";\ns2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":946
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/bucket1.mm-syringe.com\/prod\/configs\/1a385b5b-1bf2-1c13-088b-266c2811ba1a.js\";s2.src=\"https:\/\/bucket1.mm-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":949
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/bucket1.mm-syringe.com\/prod\/configs\/faaf9b41-1009-a99b-8072-3f8395417ad2.js\";s2.src=\"https:\/\/bucket1.mm-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":950
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar PWT={},mmAPSusedVideoIDS={},pmBid={},mmHeaderBiddingProviders={APS:\"apstag\",PREBID:\"prebid\"};window.mmVideoBidsManager={prebid:{ready:!1,inProgress:!1,bids:null},apstag:{ready:!1,inProgress:!1,bids:null}};\nfunction buildVideoUrlParams(a){var b=\"\";a.forEach(function(c){c\u0026\u0026c.hasOwnProperty(\"pwtbst\")\u0026\u0026(b+=encodeURIComponent([\"pwtbst\\x3d\",pmBid.pwtbst,\"\\x26pwtecp\\x3d\",pmBid.pwtecp,\"\\x26pwtpid\\x3d\",pmBid.pwtpid,\"\\x26pwtplt\\x3d\",pmBid.pwtplt,\"\\x26pwtcid\\x3d\",pmBid.pwtcid].join(\"\")));b=c\u0026\u00260\u003Cc.length?b+c[0].encodedQsParams:b+\"\\x26noAPSbids\"});\"\\x26\"===b[0]\u0026\u0026(b=b.substr(1));window.mmPrebidVideoBids=b}\nfunction handleVideoBidsByProvider(a,b){\"prebid\"==a?(window.mmVideoBidsManager.prebid.inProgress=!1,window.mmVideoBidsManager.prebid.bids=b):(window.mmVideoBidsManager.apstag.inProgress=!1,window.mmVideoBidsManager.apstag.bids=b);a=Object.values(window.mmVideoBidsManager);a.every(function(c){return!c.inProgress})\u0026\u0026buildVideoUrlParams(a.map(function(c){return c.bids}))}\n(function(){var a=window.location.href,b=\"\/\/ads.pubmatic.com\/AdServer\/js\/pwt\/159660\/3378\",c=\"\";if(0\u003Ca.indexOf(\"pwtv\\x3d\")){var d=\/pwtv=(.*?)(\u0026|$)\/g;(a=d.exec(a))\u0026\u00262\u003C=a.length\u0026\u00260\u003Ca[1].length\u0026\u0026(c=\"\/\"+a[1])}a=document.createElement(\"script\");a.type=\"text\/javascript\";a.src=b+c+\"\/pwt.js\";b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\nwindow.apstag||window.apstag||(!function(a,b,c,d,g,e,f){b[a]||(b[a]={init:function(){b[a]._Q.push([\"i\",arguments])},fetchBids:function(){b[a]._Q.push([\"f\",arguments])},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]},e=c.createElement(d),e.async=!0,e.src=g,f=c.getElementsByTagName(d)[0],f.parentNode.insertBefore(e,f))}(\"apstag\",window,document,\"script\",\"\/\/c.amazon-adsystem.com\/aax2\/apstag.js\"),apstag.init({pubID:\"3777\",videoAdServer:\"DFP\"}));\nPWT.jsLoaded=function(){var a=[{adUnitId:\"\/175840252\/90min.com\/index\/article\/video\",adUnitIndex:\"0\",code:\"\/175840252\/90min.com\/index\/article\/video\",divId:\"DIV_01\",mediaTypes:{video:{mimes:[\"video\/x-flv\",\"video\/mp4\",\"video\/webm\",\"application\/javascript\"],w:640,h:480}},sizes:[[640,480]]}];window.mmVideoBidsManager.prebid.videoSlot=a;window.mmVideoBidsManager.prebid.ready=!0};\nfunction fetchMMAPSBids(){window.apstag.fetchBids({slots:[{slotID:\"videoSlot\",mediaType:\"video\"}]},function(a){handleVideoBidsByProvider(\"apstag\",a)})}function fetchMMPrebidBids(){window.mmVideoBidsManager.prebid.inProgress=!0;PWT.requestBids(window.mmVideoBidsManager.prebid.videoSlot,function(a){pmBid=a[0].bidData.kvp;handleVideoBidsByProvider(\"prebid\",pmBid)})}function fetchMMBids(){fetchMMAPSBids();fetchMMPrebidBids()}\nfunction registerForBidsFetching(a){a.on(\"time\",function(b){var c=a.getCurrentVideoItem().mediaid||a.getCurrentVideoItem().mediaId;!mmAPSusedVideoIDS[c]\u0026\u00260\u003Cb.duration\u0026\u00263\u003Eb.duration-b.position\u0026\u00260\u003Cb.duration-b.position\u0026\u0026(mmAPSusedVideoIDS[c]=1,fetchMMBids())})}\nfunction startInitalBid(){var a=setInterval(function(){window.apstag._getSlotIdToNameMapping\u0026\u00260\u003CObject.keys(window.apstag._getSlotIdToNameMapping()).length\u0026\u0026(window.mmVideoBidsManager.apstag.ready=!0);Object.values(window.mmVideoBidsManager).every(function(b){return!0===b.ready})\u0026\u0026(fetchMMBids(),clearTimeout(a))},1E3)}\nwindow.monti\u0026\u0026window.monti.dataset\u0026\u0026window.monti.dataset.players?registerForBidsFetching(window.monti.dataset.players[Object.keys(window.monti.dataset.players)[0]]):window.addEventListener(\"montiConfigLoaded\",function(){registerForBidsFetching(window.monti.dataset.players[Object.keys(window.monti.dataset.players)[0]])});startInitalBid();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":953
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s3=document.createElement(\"script\");s3=document.createElement(\"script\");s3.src=\" https:\/\/mm-platform-assets.s3-us-west-2.amazonaws.com\/prebid\/90min-pm-dev.js\";document.body.appendChild(s3);var s4=document.createElement(\"script\");s4=document.createElement(\"script\");s4.src=\"https:\/\/cdn.mmctsvc.com\/real-time\/index.prod.latest.js\";document.body.appendChild(s4);var s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/354b297f-b99a-5a71-aaf0-4601e8ee2f7d.js\";\ns2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":957
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s4=document.createElement(\"script\");s4=document.createElement(\"script\");s4.src=\"https:\/\/cdn.mmctsvc.com\/real-time\/index.prod.latest.js\";document.body.appendChild(s4);var s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/ace25ace-2360-ed5e-9abc-06df18033527.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":959
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s4=document.createElement(\"script\");s4=document.createElement(\"script\");s4.src=\"https:\/\/cdn.mmctsvc.com\/real-time\/index.prod.latest.js\";document.body.appendChild(s4);var s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/a568642d-7228-55cd-537a-eaf603861231.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":961
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s4=document.createElement(\"script\");s4=document.createElement(\"script\");s4.src=\"https:\/\/cdn.mmctsvc.com\/real-time\/index.prod.latest.js\";document.body.appendChild(s4);var s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/d9569ee5-051e-a071-f898-51e9ec57a91d.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":963
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s4=document.createElement(\"script\");s4=document.createElement(\"script\");s4.src=\"https:\/\/cdn.mmctsvc.com\/real-time\/index.prod.latest.js\";document.body.appendChild(s4);var s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/87873120-2ad1-ac4c-8948-67dbb269b5ce.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":965
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar PWT={},mmAPSusedVideoIDS={},pmBid={},mmHeaderBiddingProviders={APS:\"apstag\",PREBID:\"prebid\"};window.mmVideoBidsManager={prebid:{ready:!1,inProgress:!1,bids:null},apstag:{ready:!1,inProgress:!1,bids:null}};\nfunction buildVideoUrlParams(a){var b=\"\";a.forEach(function(c){c\u0026\u0026c.hasOwnProperty(\"pwtbst\")\u0026\u0026(b+=encodeURIComponent([\"pwtbst\\x3d\",pmBid.pwtbst,\"\\x26pwtecp\\x3d\",pmBid.pwtecp,\"\\x26pwtpid\\x3d\",pmBid.pwtpid,\"\\x26pwtplt\\x3d\",pmBid.pwtplt,\"\\x26pwtcid\\x3d\",pmBid.pwtcid].join(\"\")));b=c\u0026\u00260\u003Cc.length?b+c[0].encodedQsParams:b+\"\\x26noAPSbids\"});\"\\x26\"===b[0]\u0026\u0026(b=b.substr(1));window.mmPrebidVideoBids=b}\nfunction handleVideoBidsByProvider(a,b){\"prebid\"==a?(window.mmVideoBidsManager.prebid.inProgress=!1,window.mmVideoBidsManager.prebid.bids=b):(window.mmVideoBidsManager.apstag.inProgress=!1,window.mmVideoBidsManager.apstag.bids=b);a=Object.values(window.mmVideoBidsManager);a.every(function(c){return!c.inProgress})\u0026\u0026buildVideoUrlParams(a.map(function(c){return c.bids}))}\n(function(){var a=window.location.href,b=\"\/\/ads.pubmatic.com\/AdServer\/js\/pwt\/159660\/3378\",c=\"\";if(0\u003Ca.indexOf(\"pwtv\\x3d\")){var d=\/pwtv=(.*?)(\u0026|$)\/g;(a=d.exec(a))\u0026\u00262\u003C=a.length\u0026\u00260\u003Ca[1].length\u0026\u0026(c=\"\/\"+a[1])}a=document.createElement(\"script\");a.type=\"text\/javascript\";a.src=b+c+\"\/pwt.js\";b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\nwindow.apstag||window.apstag||(!function(a,b,c,d,g,e,f){b[a]||(b[a]={init:function(){b[a]._Q.push([\"i\",arguments])},fetchBids:function(){b[a]._Q.push([\"f\",arguments])},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]},e=c.createElement(d),e.async=!0,e.src=g,f=c.getElementsByTagName(d)[0],f.parentNode.insertBefore(e,f))}(\"apstag\",window,document,\"script\",\"\/\/c.amazon-adsystem.com\/aax2\/apstag.js\"),apstag.init({pubID:\"3777\",videoAdServer:\"DFP\"}));\nPWT.jsLoaded=function(){var a=[{adUnitId:\"\/175840252\/12up.com\/index\/article\/video\",adUnitIndex:\"0\",code:\"\/175840252\/12up.com\/index\/article\/video\",divId:\"DIV_01\",mediaTypes:{video:{mimes:[\"video\/x-flv\",\"video\/mp4\",\"video\/webm\",\"application\/javascript\"],w:640,h:480}},sizes:[[640,480]]}];window.mmVideoBidsManager.prebid.videoSlot=a;window.mmVideoBidsManager.prebid.ready=!0};\nfunction fetchMMAPSBids(){window.apstag.fetchBids({slots:[{slotID:\"videoSlot\",mediaType:\"video\"}]},function(a){handleVideoBidsByProvider(\"apstag\",a)})}function fetchMMPrebidBids(){window.mmVideoBidsManager.prebid.inProgress=!0;PWT.requestBids(window.mmVideoBidsManager.prebid.videoSlot,function(a){pmBid=a[0].bidData.kvp;handleVideoBidsByProvider(\"prebid\",pmBid)})}function fetchMMBids(){fetchMMAPSBids();fetchMMPrebidBids()}\nfunction registerForBidsFetching(a){a.on(\"time\",function(b){var c=a.getCurrentVideoItem().mediaid||a.getCurrentVideoItem().mediaId;!mmAPSusedVideoIDS[c]\u0026\u00260\u003Cb.duration\u0026\u00263\u003Eb.duration-b.position\u0026\u00260\u003Cb.duration-b.position\u0026\u0026(mmAPSusedVideoIDS[c]=1,fetchMMBids())})}\nfunction startInitalBid(){var a=setInterval(function(){window.apstag._getSlotIdToNameMapping\u0026\u00260\u003CObject.keys(window.apstag._getSlotIdToNameMapping()).length\u0026\u0026(window.mmVideoBidsManager.apstag.ready=!0);Object.values(window.mmVideoBidsManager).every(function(b){return!0===b.ready})\u0026\u0026(fetchMMBids(),clearTimeout(a))},1E3)}\nwindow.monti\u0026\u0026window.monti.dataset\u0026\u0026window.monti.dataset.players?registerForBidsFetching(window.monti.dataset.players[Object.keys(window.monti.dataset.players)[0]]):window.addEventListener(\"montiConfigLoaded\",function(){registerForBidsFetching(window.monti.dataset.players[Object.keys(window.monti.dataset.players)[0]])});startInitalBid();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":968
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar newDiv=document.createElement(\"div\");newDiv.setAttribute(\"id\",\"voltax-player-container\");newDiv.style.position=\"absolute\";newDiv.style.top=\"-16px\";newDiv.style.left=\"0\";newDiv.style.bottom=\"0\";newDiv.style.minWidth=\"100%\";newDiv.style.maxWidth=\"100%\";newDiv.style.maxHeight=\"100%\";document.querySelector(\"div \\x3e main \\x3e div:nth-child(2) \\x3e div \\x3e article \\x3e header \\x3e :last-child \\x3e figure \\x3e div\").appendChild(newDiv);var s1=document.createElement(\"script\"),s2=document.createElement(\"script\");\ns1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/7885f9b9-a900-4d74-1b2f-660bd4c7b1bd.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E\n\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":973
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar newDiv=document.createElement(\"div\");newDiv.setAttribute(\"id\",\"voltax-player-container\");newDiv.style.position=\"absolute\";newDiv.style.top=\"-16px\";newDiv.style.left=\"0\";newDiv.style.bottom=\"0\";newDiv.style.minWidth=\"100%\";newDiv.style.maxWidth=\"100%\";newDiv.style.maxHeight=\"100%\";document.querySelector(\"div \\x3e main \\x3e div:nth-child(2) \\x3e div \\x3e article \\x3e header \\x3e :last-child \\x3e figure \\x3e div\").appendChild(newDiv);var s1=document.createElement(\"script\"),s2=document.createElement(\"script\");\ns1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/5087c9ad-88d1-2ebf-8979-ebf238e6f851.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":974
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar newDiv=document.createElement(\"div\");newDiv.setAttribute(\"id\",\"voltax-player-container\");newDiv.style.position=\"absolute\";newDiv.style.top=\"-16px\";newDiv.style.left=\"0\";newDiv.style.bottom=\"0\";newDiv.style.minWidth=\"100%\";newDiv.style.maxWidth=\"100%\";newDiv.style.maxHeight=\"100%\";document.querySelector(\"div \\x3e main \\x3e div:nth-child(2) \\x3e div \\x3e article \\x3e header \\x3e :last-child \\x3e figure \\x3e div\").appendChild(newDiv);var s1=document.createElement(\"script\"),s2=document.createElement(\"script\");\ns1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/b5c67808-4146-af44-ec19-8effb2cec26c.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":975
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar newDiv=document.createElement(\"div\");newDiv.setAttribute(\"id\",\"voltax-player-container\");newDiv.style.position=\"absolute\";newDiv.style.top=\"-16px\";newDiv.style.left=\"0\";newDiv.style.bottom=\"0\";newDiv.style.minWidth=\"100%\";newDiv.style.maxWidth=\"100%\";newDiv.style.maxHeight=\"100%\";document.querySelector(\"div \\x3e main \\x3e div:nth-child(2) \\x3e div \\x3e article \\x3e header \\x3e :last-child \\x3e figure \\x3e div\").appendChild(newDiv);var s1=document.createElement(\"script\"),s2=document.createElement(\"script\");\ns1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/cf96ecc0-5b3a-43ce-8e38-130b33dcc930.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":976
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/bucket1.mm-syringe.com\/prod\/configs\/6679d8c5-9e78-cf21-b332-63a88cd27042.js\";s2.src=\"https:\/\/bucket1.mm-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":989
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/bucket1.mm-syringe.com\/prod\/configs\/6688a6ad-ca10-9813-d427-7e799e9281c6.js\";s2.src=\"https:\/\/bucket1.mm-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":990
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/bucket1.mm-syringe.com\/prod\/configs\/\/b555ca4e-19f0-72f6-d035-8c6709885250.js\";s2.src=\"https:\/\/bucket1.mm-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":991
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/bucket1.mm-syringe.com\/prod\/configs\/9af6a797-2877-528a-583e-2c06e651563b.js\";s2.src=\"https:\/\/bucket1.mm-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":992
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/d07da8a5-2608-b5ea-0152-cbd3ea01fdf7.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":993
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/8620eba4-dfe7-fca9-ba51-89cb51eec827.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":994
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/c42e44db-20a4-2dd6-a175-8c5e7990b900.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1005
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/401a3eca-ead1-b462-c897-eda9c9da8d8b.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1006
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/www.oo-syringe.com\/prod\/configs\/f85847d0-be78-9537-2cce-a6a54b727f68.js\";s2.src=\"https:\/\/www.oo-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1007
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/bucket1.mm-syringe.com\/prod\/configs\/59c71ec6-34e2-0275-7fbf-48ead7dafe67.js\";s2.src=\"https:\/\/bucket1.mm-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1008
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/bucket1.mm-syringe.com\/prod\/configs\/1195b035-7f4c-6d74-7c71-5c2fb6a55cb5.js\";s2.src=\"https:\/\/bucket1.mm-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1009
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",82,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar s1=document.createElement(\"script\"),s2=document.createElement(\"script\");s1.src=\"https:\/\/bucket1.mm-syringe.com\/prod\/configs\/162f69a2-5e0c-b343-957e-37ecc36f43d7.js\";s2.src=\"https:\/\/bucket1.mm-syringe.com\/prod\/injector\/injector.1.5.3.js\";document.body.appendChild(s1);document.body.appendChild(s2);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1015
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window.getVideoTag=function(e,a){var c=window.location.host,b=c.indexOf(\".\");c=c.substring(0,b);e=\"https:\/\/pubads.g.doubleclick.net\/gampad\/ads?sz\\x3d640x360|480x270|400x300|640x480\\x26iu\\x3d\/175840252\/fansided.com\/\"+c.toString()+\"\/Video\\x26impl\\x3ds\\x26gdfp_req\\x3d1\\x26env\\x3dvp\\x26output\\x3dvast\\x26unviewed_position_start\\x3d1\\x26url\\x3d\"+window.location.href+\"\\x26description_url\\x3d\"+(e||window.location.href)+\"\\x26correlator\\x3d\"+Date.now()+\"\\x26cmsid\\x3d2555788\\x26vid\\x3d##VIDEO_ID##\\x26cust_params\\x3d\";\nc=encodeURIComponent;b=a;a=window.location.host;var d=a.indexOf(\".\");a=a.substring(0,d);a=\"language\\x3d\"+",["escape",["macro",1],8,16],"+\"\\x26platform\\x3d\"+",["escape",["macro",2],8,16],"+\"\\x26articleId\\x3d\"+",["escape",["macro",14],8,16],"+\"\\x26articleTemplate\\x3d\"+",["escape",["macro",15],8,16],"+\"\\x26adUnitPath\\x3d\/175840252\/fansided.com\/\"+a.toString()+\"\/Video\\x26countryCode\\x3d\"+",["escape",["macro",9],8,16],"+\"\\x26markupFormat\\x3d\"+",["escape",["macro",49],8,16],"+\"\\x26userIdentifier\\x3d\"+",["escape",["macro",20],8,16],"+\"\\x26affiliateId\\x3d\"+",["escape",["macro",27],8,16],"+\n\"\\x26property\\x3d\"+",["escape",["macro",0],8,16],"+\"\\x26channel\\x3d\"+",["escape",["macro",50],8,16],"+\"\\x26pageType\\x3d\"+",["escape",["macro",3],8,16],"+\"\\x26trafficSource\\x3d\"+",["escape",["macro",51],8,16],"+\"\\x26trafficSourceAndId\\x3d\"+",["escape",["macro",52],8,16],";d=\"preroll\";var f=\"midroll\";b=b\u0026\u0026b.startsWith(d)?\"\\x26mm_preroll\\x3d\"+b.substring(d.length):b\u0026\u0026b.startsWith(f)?\"\\x26mm_midroll\\x3d\"+b.substring(f.length):\"\";a=a+b+(\"function\"!==typeof window.__tcfapi?\"\\x26gdpr\\x3d\"+",["escape",["macro",53],8,16],"+\"\\x26gdpr_consent\\x3d\"+",["escape",["macro",54],8,16],":\n\"\")+\"\\x26contentTags\\x3d\"+",["escape",["macro",31],8,16],"+\"\\x26commercialTags\\x3d\"+",["escape",["macro",19],8,16],"+\"\\x26video_id\\x3d##VIDEO_ID##\";return e+c(a)}})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1016
    }],
  "predicates":[{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"floor8.com"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"es"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"desktop"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"PostPage"
    },{
      "function":"_eq",
      "arg0":["macro",11],
      "arg1":"no"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"GTM data ready to GA"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"mobile"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"90min.com"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"categories|leagues",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"fr"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"GTM late data to GA"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"pt-BR"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"it"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"floor8.com"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"en"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"01dz79bt281t",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"slideshow"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"cpc",
      "ignore_case":true
    },{
      "function":"_sw",
      "arg0":["macro",17],
      "arg1":"Quiz:"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"ncrave"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"ncrave"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"no-video-player"
    },{
      "function":"_re",
      "arg0":["macro",20],
      "arg1":"[0-4][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]"
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"sponsored;"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"7372|7176|7434|5540|01dz79bt281t",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",20],
      "arg1":"[5-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"12up.com"
    },{
      "function":"_cn",
      "arg0":["macro",19],
      "arg1":"no-video-player|sponsored"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"CPC_LONGFORM",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"01ea85w7r386|01ea0drwr8sf",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"\/posts\/6226233-greatest-stories"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"dbltap.com"
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"counter-strike-global-offensive,",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"league-of-legends,|overwatch,|dota-2,",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"mmPlayer"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"https:\/\/www.dbltap.com\/posts\/blast-reportedly-ends-partnership-with-saudi-arabian-planned-city-neom-01efhw4q6h1g?MontiDisable\u0026aps_test=1\u0026disableForensiq"
    },{
      "function":"_sw",
      "arg0":["macro",17],
      "arg1":"VIDEO:"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"post"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"90min.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"pt-BR",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",27],
      "arg1":"41584"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"fotmob"
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"\/embed\/"
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"paid"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"teams"
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"nfl;|mls;|mlb;|nba;|ncaa-football;|ncaa-basketball;|golf;|wwe;|tennis;",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"nhl;",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"organic"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"6234267",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"listicle"
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"mplayer video player embed",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",33],
      "arg1":"O\u0026O"
    },{
      "function":"_eq",
      "arg0":["macro",34],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"mmPlus GTM event to GA"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"6159727"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"7372|7176|7434|5540",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"LavidaBaseball",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"mplayer video player embed"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"HomePage",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"sponsored|wirewax",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"pt",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"direct"
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"\/posts\/6242836-greatest-stories"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"90min.com|The Big Lead|12up.com|floor8.com|dbltap.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"PostPage|categories|teams|leagues",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",20],
      "arg1":"^([5-6][0-9]|7[0-4])[0-9]{28}$"
    },{
      "function":"_re",
      "arg0":["macro",20],
      "arg1":"^([8-9][0-9]|7[5-9])[0-9]{28}$"
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"counter-strike-global-offensive,"
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"dota-2,",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"league-of-legends,|overwatch,|counter-strike-global-offensive,",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"league-of-legends,|overwatch,|counter-strike-global-offensive,|dota-2,",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"01e0qwag45hc",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"native"
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"league-of-legends,",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"overwatch,|counter-strike-global-offensive,|dota-2,",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"overwatch,",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"league-of-legends,|counter-strike-global-offensive,|dota-2,",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"cpc_longform",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"90min.de",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",19],
      "arg1":"no-video-player|wirewax|sponsored",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"cpc_pm",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"The Big Lead",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"01e3qjtgkaja|01e3pphy591h|01ea08h19szq|01e5549060sr|01etzydnnre3|01evwb1kj1cb|01f85f96n843|01f85xwqxt1v|01f85r21y33f|01f85kzac8nw|01f85wttzken|01f85r21y33f|01f85xwqxt1v|01f8agf91gm9|01f888jp3xag",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",19],
      "arg1":"sponsored|no-video-player",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"IL"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"01e5549060sr|01e3qjtgkaja|01e3pphy591h|01ea08h19szq|01etzydnnre3|01evwb1kj1cb|01ewazkck35j|01f85f96n843|01f85xwqxt1v|01f85r21y33f|01f85kzac8nw|01f85wttzken|01f85r21y33f|01f85xwqxt1v|01f8agf91gm9|01f888jp3xag",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Fansided ES"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"Fansided ES"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"90min.de"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"de"
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"deutschebahn"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"7372|7176|7434",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",9],
      "arg1":"GB"
    },{
      "function":"_re",
      "arg0":["macro",35],
      "arg1":"49$|48$|47$|46$|45$|44$|43$|42$|41$|40$|39$|38$|37$|36$|35$|34$|33$|32$|31$|30$|29$|28$|27$|26$|25$|24$|23$|22$|21$|20$|19$|18$|17$|16$|15$|14$|13$|12$|11$|10$|09$|08$|07$|06$|05$|04$|03$|02$|01$|00$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",36],
      "arg1":"49$|48$|47$|46$|45$|44$|43$|42$|41$|40$|39$|38$|37$|36$|35$|34$|33$|32$|31$|30$|29$|28$|27$|26$|25$|24$|23$|22$|21$|20$|19$|18$|17$|16$|15$|14$|13$|12$|11$|10$|09$|08$|07$|06$|05$|04$|03$|02$|01$|00$",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"lavidabaseball"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"mmPlayer"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"90min.com|ftb90.com",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"id"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"it",
      "ignore_case":true
    },{
      "function":"_sw",
      "arg0":["macro",17],
      "arg1":"VIDEO"
    },{
      "function":"_re",
      "arg0":["macro",19],
      "arg1":"wirewax"
    },{
      "function":"_re",
      "arg0":["macro",19],
      "arg1":"wirewax",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"fanduel.com|theduel.com|The Duel",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"sports-betting,",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"videos,",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"no"
    },{
      "function":"_re",
      "arg0":["macro",19],
      "arg1":"no-video-player",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"auto_host.com\/"
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"buzz,",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"sports-betting,|videos,",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",19],
      "arg1":"no-ads|no-video-player",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"fantasy,",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"buzz,|sports-betting,|videos,",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"fantasy,|buzz,|sports-betting,|videos,",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",19],
      "arg1":"no-ads|no-video-player"
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"auto_host.com"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"6234301"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"qa2-newsight.minutemediaservices"
    },{
      "function":"_re",
      "arg0":["macro",24],
      "arg1":"videos;",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"90min.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"master",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",38],
      "arg1":"mmvideo",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"video ad impression",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Fansided 2030"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"floor8.com|12up.com|poppicante.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"dbltap.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",32],
      "arg1":"vplayer video first play",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",39],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",40],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"www"
    },{
      "function":"_eq",
      "arg0":["macro",41],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",42],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"90min.com\/seo-test\/scenario-4-test-referrer.html"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"categories|leagues|teams",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"https:\/\/www.12up.com\/posts\/5930000-thunder-unveil-awesome-new-city-edition-jerseys"
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"https:\/\/www.90min.com\/posts\/5075237-tottenham-set-to-miss-out-on-galatasaray-winger-as-15m-move-to-bundesliga-challengers-approaches"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"6262965"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"6054531"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"6047948|5864377",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",43],
      "arg1":"true"
    },{
      "function":"_sw",
      "arg0":["macro",22],
      "arg1":"www"
    },{
      "function":"_cn",
      "arg0":["macro",44],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",45],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"footballaddict"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"6395209"
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"cpc_pm",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"90min"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"utm_source=facebook",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"\/es\/posts"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"en",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"partner=484476"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"es",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"01egqh0cp37v|01e9tky2jzc8|01ea730vwmqe|01e9v9kmh7dj|01e9tkv5x3cq|01ep9wncjtva|01ejrj65fpq8|660bd4c7b1bd|ebf238e6f851|660bd4c7b1bd|ebf238e6f851|01ezf2v0wp5s|01ez9x54h355",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",20],
      "arg1":"^([0-4])[0-9]{29}$"
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"audit=yes"
    },{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"ControlGroup"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"01ejrj65fpq8|01ez9x54h355|01ep9wncjtva|01ezf2v0wp5s",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"desktop"
    },{
      "function":"_re",
      "arg0":["macro",19],
      "arg1":"no-video-player|sponsored",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"01egqh0cp37v|01e9tky2jzc8|01ea730vwmqe|01e9v9kmh7dj|01e9tkv5x3cq|01ep9wncjtva|01ejrj65fpq8|660bd4c7b1bd|ebf238e6f851|01ezf2v0wp5s|01ez9x54h355",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"audit=yes"
    },{
      "function":"_re",
      "arg0":["macro",19],
      "arg1":"no-video-player|wirewax",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"01e9tky2jzc8|01ea730vwmqe|01e9v9kmh7dj|01e9tkv5x3cq|01ep9w00ncjtva|01ejrj65fpq8",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"vn"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"th",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"id",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"mplayer video first play"
    },{
      "function":"_eq",
      "arg0":["macro",56],
      "arg1":"null"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"fr",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",20],
      "arg1":"^([0-9])[0-9]{29}$"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"01egqh0cp37v",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"tr",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"01egqh0cp37v|01e9tky2jzc8|01ea730vwmqe|01e9v9kmh7dj|01e9tkv5x3cq",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",20],
      "arg1":"^([a])[0-9]{29}$"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"01egqh0cp37v|01e9tky2jzc8|01ea730vwmqe|01e9v9kmh7dj|01e9tkv5x3cq|01ep9wncjtva|01ejrj65fpq8|660bd4c7b1bd|ebf238e6f851",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"90min.com",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"OneVideo"
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"pmqa"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"12up.com\/posts|www.12up.com\/es\/posts\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"verizonPrebidTestPage",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"floor8.com\/posts|www.floor8.com\/es\/posts\/",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"dbltap.com\/posts",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"90min."
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"utm_source=twitter",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Reign of Troy"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"\/app\/",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"90min.de"
    },{
      "function":"_cn",
      "arg0":["macro",22],
      "arg1":"90min.com"
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"12up.com",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"ClickToPlay"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"01ep9wncjtva|01ezf2v0wp5s",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",55],
      "arg1":"AutoPlay"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"01ejrj65fpq8|01ez9x54h355",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"The Jet Press"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"Bolt Beat"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"Betsided",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",20],
      "arg1":"^([5-9])[0-9]{29}$"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"01f85f96n843|01f85xwqxt1v|01f85r21y33f|01f85kzac8nw|01f85wttzken|01f85r21y33f|01f85xwqxt1v|01f8agf91gm9|01f888jp3xag",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"airalamo.com|poppicante.com|fansided.com\/es|thejetpress.com",
      "ignore_case":true
    }],
  "rules":[
    [["if",0,1,2,3,4,5],["add",0,36]],
    [["if",0,1,3,4,5,6],["add",1,36]],
    [["if",2,4,7,8,9,10,11],["add",2]],
    [["if",4,6,7,8,9,10,11],["add",3]],
    [["if",2,4,7,8,10,11,12],["add",4]],
    [["if",4,6,7,8,10,11,12],["add",5]],
    [["if",2,4,7,8,10,11,13],["add",6]],
    [["if",4,6,7,8,10,11,13],["add",7]],
    [["if",3,4,5,6,10,14,15,23],["unless",16,17,18,19,20,21,22],["add",8,36]],
    [["if",2,3,4,5,10,14,15,26],["unless",17,18,19,20,21,22,24,25],["add",9,36]],
    [["if",2,3,5,15,27],["unless",17,28,29,30],["add",10,36]],
    [["if",3,5,6,15,27],["unless",17,22,29,30,31],["add",11,36]],
    [["if",2,3,5,10,15,32,33],["unless",17,22,34,35,36],["add",12,36]],
    [["if",2,4,10,11,38,39,40,41],["unless",17,24,37,42,43,44],["add",13]],
    [["if",4,6,10,11,38,39,40,41],["unless",17,24,37,42,43,44,45],["add",14]],
    [["if",4,6,7,10,11,46],["add",15]],
    [["if",3,5,10,15,27,48,49,50],["unless",17,20,22,47],["add",16]],
    [["if",2,7,11,51],["unless",24],["add",17]],
    [["if",6,7,11,51],["unless",24],["add",18]],
    [["if",11,14,15,51],["unless",6,24],["add",19,36]],
    [["if",6,11,14,15,51],["unless",24],["add",20,36]],
    [["if",52,53,54,55],["add",21]],
    [["if",2,5,15,27,38],["unless",17,22,29,56],["add",22,36]],
    [["if",5,6,15,27,38],["unless",17,22,29,56],["add",23,36]],
    [["if",2,3,4,5,10,14,15,19],["unless",17,18,20,21,22,24,25,37],["add",24,36]],
    [["if",3,4,5,6,10,14,15,19],["unless",17,18,20,21,24,37,57],["add",25,36]],
    [["if",55,58,59],["add",26]],
    [["if",55,58,60],["add",26]],
    [["if",2,3,4,5,10,14,15,23],["unless",17,18,19,20,21,22,24,25],["add",27,36]],
    [["if",3,4,5,6,10,14,15,23],["unless",17,18,19,20,21,24,37,57],["add",28,36]],
    [["if",2,5,10,38,39,62],["unless",17,22,29,43,44,61,63,64],["add",29,99]],
    [["if",5,65,66],["add",30]],
    [["if",3,4,5,6,10,14,15,67],["unless",16,17,18,19,20,21,22],["add",31,36]],
    [["if",3,4,5,6,10,14,15,68],["unless",16,17,18,19,20,21,22],["add",32,36]],
    [["if",2,3,4,5,10,14,15,23],["unless",16,17,18,19,20,21,22],["add",33]],
    [["if",2,3,4,5,10,14,15,67],["unless",16,17,18,19,20,21,22],["add",34]],
    [["if",2,3,4,5,10,14,15,68],["unless",16,17,18,19,20,21,22],["add",35]],
    [["if",3,5,6,10,15,32,69],["unless",22,34,35],["add",36]],
    [["if",2,3,5,10,15,32,70],["unless",17,22,35,71],["add",36,73]],
    [["if",3,5,6,10,15,32,70],["unless",17,22,35,71],["add",36,74]],
    [["if",2,3,5,10,15,32],["unless",17,22,35,72,73],["add",36,69]],
    [["if",3,5,6,10,15,32],["unless",17,22,35,72,74],["add",36,70]],
    [["if",2,3,5,10,15,32,75],["unless",17,22,35,76],["add",36,71]],
    [["if",3,5,6,10,15,32,75],["unless",17,22,35,76],["add",36,72]],
    [["if",2,3,5,10,15,32,77],["unless",17,22,35,78],["add",36,76]],
    [["if",3,5,6,10,15,32,77],["unless",17,22,35,78],["add",36,75]],
    [["if",2,5,27,79],["add",36,92]],
    [["if",5,6,27,79],["add",36,93]],
    [["if",2,3,5,10,80],["unless",17,43,44,61,64,81,82],["add",36,98]],
    [["if",3,5,6,10,80],["unless",17,43,44,61,64,81,82],["add",36,106]],
    [["if",2,3,4,5,10,14,15],["unless",16,17,18,19,20,21,22],["add",36,37]],
    [["if",3,4,5,6,10,14,15],["unless",16,17,18,19,20,21,22],["add",36,38]],
    [["if",2,3,5,10,83],["unless",84,85,86],["add",36,117]],
    [["if",3,5,6,10,83],["unless",85,87],["add",36,118]],
    [["if",2,3,5,88],["add",36,120]],
    [["if",3,5,6,89],["add",36,119]],
    [["if",2,4,8,10,11,90,91],["unless",92],["add",36]],
    [["if",4,6,8,10,11,90,91],["unless",92],["add",36]],
    [["if",2,4,10,11,14,15,17,38,41],["unless",24],["add",36]],
    [["if",3,4,5,6,10,14,15,26],["unless",17,18,19,20,21,24,25,37],["add",36]],
    [["if",4,6,10,11,14,15,17,38,41],["unless",24],["add",36]],
    [["if",4,6,10,11,14,15,38,41,95],["unless",17,24,93,94],["add",36]],
    [["if",3,4,6,10,11,14,15,41,94,96],["unless",17,24,57],["add",36]],
    [["if",2,3,5,15,97],["unless",17,22,35,98],["add",36,90]],
    [["if",3,5,6,15,97],["unless",17,22,35,98],["add",36,91]],
    [["if",2,4,10,11,38,41,99,100],["unless",17,24,42,43,44,74],["add",36]],
    [["if",2,4,10,11,38,39,41,101],["unless",17,24,37,42,43],["add",36]],
    [["if",2,4,10,11,38,41,90],["unless",17,43,44,61,92,102,103],["add",36,79]],
    [["if",6,10,11,38,41,90],["unless",17,43,44,61,92,102,104],["add",36,80]],
    [["if",2,3,4,5,105,106,108],["unless",107,109,110],["add",36,67]],
    [["if",2,3,4,5,105,108,111],["unless",110,112,113],["add",36,66]],
    [["if",2,3,4,5,105,108,114],["unless",110,113,115],["add",36,65]],
    [["if",2,3,4,5,105,108],["unless",116,117,118],["add",36,61]],
    [["if",2,3,4,5,105,108,114],["unless",110,113,115,119],["add",36,82]],
    [["if",3,5,120],["unless",110,113,121],["add",36]],
    [["if",3,4,5,6,105,108,111],["unless",110,112,113],["add",36,63]],
    [["if",3,4,5,6,105,108,114],["unless",110,113,115],["add",36,62]],
    [["if",3,4,5,6,105,106,108],["unless",107,110,113],["add",36,64]],
    [["if",3,4,5,6,105,108],["unless",110,113,116],["add",36,60]],
    [["if",55,122,123,124,125],["add",39]],
    [["if",2,3,5,126],["unless",17,28,29],["add",40]],
    [["if",3,5,6,126],["unless",17,22,29],["add",41]],
    [["if",5,10,127],["add",42]],
    [["if",55,128,129,130],["add",43]],
    [["if",11,131],["unless",132],["add",44]],
    [["if",2,5,14,16],["add",45]],
    [["if",11,133],["unless",132],["add",46]],
    [["if",11,134],["unless",132],["add",47]],
    [["if",135,136],["add",48]],
    [["if",4,6,7,11,137],["add",49]],
    [["if",2,7,10,11,137],["add",50]],
    [["if",5,27,138],["add",51]],
    [["if",136,139],["add",52]],
    [["if",2,5,7,140],["add",53]],
    [["if",5,6,27,141],["add",54]],
    [["if",2,5,7,142],["add",55]],
    [["if",5,6,7,142],["add",56]],
    [["if",5,143],["unless",144],["add",57]],
    [["if",4,5,145],["unless",144],["add",58,89]],
    [["if",4,5,146],["unless",144],["add",59]],
    [["if",4,5,6,10,38,41,147],["unless",17,24,37],["add",68]],
    [["if",1,4,5,6,7,10,38,41],["unless",17,24,29,42,43,44,104,148],["add",77]],
    [["if",6,10,11,38,39,41,101],["unless",17,24,37,42,43,44],["add",78]],
    [["if",4,11,149],["unless",132],["add",81]],
    [["if",5,6,150,151,152,153],["add",83]],
    [["if",2,5,14,18],["add",84]],
    [["if",5,6,14,18],["add",85]],
    [["if",11,39,154,155],["add",86]],
    [["if",11,39,155,156],["add",87]],
    [["if",11,39,40,155],["add",88]],
    [["if",5,15,27,38,56],["unless",17,22,29],["add",94]],
    [["if",2,3,5,10,99,154,158],["unless",17,29,43,44,61,64,81,157,159],["add",95]],
    [["if",2,5,10,38,99,154],["unless",17,29,43,44,61,64,81,159],["add",95]],
    [["if",5,160,161,162],["unless",159],["add",95]],
    [["if",2,3,5,7,10,156],["unless",29,43,44,64,81],["add",96]],
    [["if",2,5,7,10,38,156],["unless",29,43,44,64,81],["add",96]],
    [["if",2,3,5,10,39,101],["unless",17,29,43,44,61,64,163],["add",97]],
    [["if",2,5,10,38,39,101],["unless",17,29,43,44,61,64,163],["add",97]],
    [["if",2,3,5,10,39,62],["unless",17,29,43,44,61,163],["add",99]],
    [["if",3,5,6,10,63,99,154,158],["unless",17,29,43,44,61,64,81,159,164],["add",100]],
    [["if",5,63,160,161],["unless",162,165],["add",100]],
    [["if",5,6,10,38,99,154],["unless",17,29,43,44,61,63,64,166,167],["add",101]],
    [["if",3,5,6,10,39,63,156],["unless",17,29,43,44,61,64,81],["add",102]],
    [["if",3,5,6,10,39,101],["unless",17,29,43,44,61,64,163],["add",103]],
    [["if",5,6,10,38,39,40],["unless",17,22,29,43,44,61,63,64],["add",104]],
    [["if",3,5,6,10,39,62,63],["unless",17,29,43,44,61,163],["add",105]],
    [["if",2,3,5,10,39,168],["unless",17,29,43,44,61,64,163],["add",107]],
    [["if",3,5,6,10,39,168],["unless",17,29,43,44,61,64,163],["add",108]],
    [["if",3,5,6,10,39,169],["unless",17,29,43,44,61,64,81],["add",109]],
    [["if",2,3,5,10,39,169],["unless",17,29,43,44,61,64,81],["add",110]],
    [["if",3,5,6,10,39,170],["unless",17,29,43,44,61,64,163],["add",111]],
    [["if",2,3,5,10,39,170],["unless",17,29,43,44,61,64,163],["add",112]],
    [["if",14,55,171],["add",113]],
    [["if",5],["unless",172],["add",114]],
    [["if",2,3,5,10,39,173,174],["unless",17,29,43,44,61,64,166],["add",115]],
    [["if",3,5,6,10,39,173,174],["unless",17,29,43,44,61,64,166],["add",116]],
    [["if",2,3,5,10,99,154,175],["unless",17,29,43,44,61,64,81,159],["add",121]],
    [["if",3,5,6,10,99,154,175],["unless",17,29,43,44,61,64,81,159],["add",122]],
    [["if",3,5,6,10,99,176],["unless",17,29,43,44,61,64,81,177],["add",123]],
    [["if",2,3,5,10,99,176],["unless",17,29,43,44,61,64,81,177],["add",124]],
    [["if",2,3,5,10,39,173,178],["unless",17,29,43,44,61,64,166],["add",125]],
    [["if",3,5,6,10,39,173,178],["unless",17,29,43,44,61,64,166],["add",126]],
    [["if",3,5,6,10,99,154,158],["unless",17,29,43,44,61,63,64,81,159,179],["add",127]],
    [["if",5,160,161],["unless",63,159,162],["add",127]],
    [["if",3,5,6,10,39,156],["unless",17,29,43,44,61,63,64,81],["add",128]],
    [["if",3,5,6,10,39,62],["unless",17,29,43,44,61,63,163],["add",129]],
    [["if",5,180],["unless",181],["add",130]],
    [["if",2,5,150,151,152,153],["unless",182],["add",131]],
    [["if",5,183],["unless",184],["add",132]],
    [["if",5,185],["add",133]],
    [["if",5,186],["add",134]],
    [["if",5,150,187,188],["add",135]],
    [["if",3,5,6,189],["unless",17,29,109,190],["add",136]],
    [["if",2,3,5,189],["unless",17,29,163,190],["add",137]],
    [["if",5,180,181],["add",138]],
    [["if",5,150,151,182],["add",139]],
    [["if",2,5,150,152,191],["unless",182],["add",140]],
    [["if",5,6,150,152,191],["unless",182],["add",141]],
    [["if",2,5,150,152,192],["unless",153,182],["add",142]],
    [["if",5,6,150,152,192],["unless",153,182],["add",143]],
    [["if",5,184,193],["add",144]],
    [["if",5,194,195],["add",145]],
    [["if",5,195,196],["add",146]],
    [["if",5,194,197],["add",147]],
    [["if",5,196,197],["add",148]],
    [["if",3,5,6,198],["unless",17,29,109,190],["add",149]],
    [["if",2,3,5,199],["unless",17,29,163,190],["add",150]],
    [["if",2,3,5,198],["unless",17,29,163,190],["add",151]],
    [["if",3,5,6,199],["unless",17,29,109,190],["add",152]],
    [["if",2,3,5,200],["unless",17,28,29],["add",153]],
    [["if",3,5,6,200],["unless",17,22,29],["add",154]],
    [["if",3,5,6,10,99,154,201],["unless",17,29,43,44,61,63,64,81,159,179],["add",155]],
    [["if",2,3,5,10,99,154,201],["unless",17,29,43,44,61,64,81,157,159],["add",156]],
    [["if",3,5,6,10,63,99,154,201],["unless",17,29,43,44,61,64,81,159,164],["add",157]],
    [["if",2,3,5,10,99,154,159],["unless",17,29,43,44,61,64,81],["add",158]],
    [["if",3,5,6,10,99,154,159],["unless",17,29,43,44,61,64,81],["add",159]],
    [["if",3,5,6,10,83,202],["unless",85],["add",160]],
    [["if",5,203],["add",161]]]
},
"runtime":[]




};

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var ba,ca=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},da=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:ca(a)}},ea="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},fa;
if("function"==typeof Object.setPrototypeOf)fa=Object.setPrototypeOf;else{var ha;a:{var ja={a:!0},ka={};try{ka.__proto__=ja;ha=ka.a;break a}catch(a){}ha=!1}fa=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var la=fa,ma=function(a,b){a.prototype=ea(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Ai=b.prototype},pa=this||self,qa=function(a){return a};var ra={},sa=function(a,b){ra[a]=ra[a]||[];ra[a][b]=!0},ta=function(a){for(var b=[],c=ra[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var ua=function(){},va=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},wa=function(a){return"number"==typeof a&&!isNaN(a)},xa=function(a){var b="[object Array]"==Object.prototype.toString.call(Object(a));Array.isArray?Array.isArray(a)!==b&&sa("TAGGING",4):sa("TAGGING",5);return b},ya=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ba=function(a,b){if(a&&xa(a))for(var c=
0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ca=function(a,b){if(!wa(a)||!wa(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ea=function(a,b){for(var c=new Da,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Fa=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Ia=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Ka=
function(a){return Math.round(Number(a))||0},La=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ma=function(a){var b=[];if(xa(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Qa=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},Ra=function(){return(new Date).getTime()},Da=function(){this.prefix="gtm.";this.values={}};Da.prototype.set=function(a,b){this.values[this.prefix+a]=b};Da.prototype.get=function(a){return this.values[this.prefix+a]};
var Sa=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ta=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},Va=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Wa=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Xa=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},Ya=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Za=/^\w{1,9}$/,
$a=function(a){var b=[];Fa(a,function(c,d){Za.test(c)&&d&&b.push(c)});return b.join(",")};var ab,bb=function(){if(void 0===ab){var a=null,b=pa.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:qa,createScript:qa,createScriptURL:qa})}catch(c){pa.console&&pa.console.error(c.message)}ab=a}else ab=a}return ab};var db=function(a,b){this.o=b===cb?a:""};db.prototype.toString=function(){return this.o+""};var cb={};var eb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var hb;a:{var ib=pa.navigator;if(ib){var jb=ib.userAgent;if(jb){hb=jb;break a}}hb=""}var nb=function(a){return-1!=hb.indexOf(a)};var pb=function(a,b,c){this.o=c===ob?a:""};pb.prototype.toString=function(){return this.o.toString()};var qb=function(a){return a instanceof pb&&a.constructor===pb?a.o:"type_error:SafeHtml"},ob={},rb=function(a){var b=bb(),c=b?b.createHTML(a):a;return new pb(c,null,ob)},sb=new pb(pa.trustedTypes&&pa.trustedTypes.emptyHTML||"",0,ob);var tb=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},ub=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var vb=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);var c=a.firstChild.firstChild;a.innerHTML=qb(sb);return!c.parentElement}),wb=function(a,b){if(vb())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=qb(b)};var m=window,B=document,xb=navigator,yb=B.currentScript&&B.currentScript.src,zb=function(a,b){var c=m[a];m[a]=void 0===c?b:c;return m[a]},Ab=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},Bb=function(a,b,c){var d=B.createElement("script");d.type="text/javascript";d.async=!0;var e,f=bb(),h=f?f.createScriptURL(a):a;e=new db(h,cb);d.src=e instanceof db&&e.constructor===db?e.o:"type_error:TrustedResourceUrl";
var k,l,n=(d.ownerDocument&&d.ownerDocument.defaultView||window).document,q=null===(l=n.querySelector)||void 0===l?void 0:l.call(n,"script[nonce]");(k=q?q.nonce||q.getAttribute("nonce")||"":"")&&d.setAttribute("nonce",k);Ab(d,b);c&&(d.onerror=c);var p=B.getElementsByTagName("script")[0]||B.body||B.head;p.parentNode.insertBefore(d,p);return d},Eb=function(){if(yb){var a=yb.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},Fb=function(a,b){var c=B.createElement("iframe");
c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=B.body&&B.body.lastChild||B.body||B.head;d.parentNode.insertBefore(c,d);Ab(c,b);void 0!==a&&(c.src=a);return c},Gb=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},Hb=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},Ib=function(a,b,c){a.removeEventListener?a.removeEventListener(b,
c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},D=function(a){m.setTimeout(a,0)},Jb=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},Kb=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},Lb=function(a){var b=B.createElement("div"),c=rb("A<div>"+a+"</div>");wb(b,c);b=b.lastChild;for(var d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},Mb=function(a,
b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},Qb=function(a){xb.sendBeacon&&xb.sendBeacon(a)||Gb(a)},Rb=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Sb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Tb=function(a){if(null==a)return String(a);var b=Sb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ub=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Vb=function(a){if(!a||"object"!=Tb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ub(a,"constructor")&&!Ub(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ub(a,b)},G=function(a,b){var c=b||("array"==Tb(a)?[]:{}),d;for(d in a)if(Ub(a,d)){var e=a[d];"array"==Tb(e)?("array"!=Tb(c[d])&&(c[d]=[]),c[d]=G(e,c[d])):Vb(e)?(Vb(c[d])||(c[d]={}),c[d]=G(e,c[d])):c[d]=e}return c};var Wb=function(a){if(void 0===a||xa(a)||Vb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Xb=function(){var a=function(b){return{toString:function(){return b}}};return{ag:a("consent"),bg:a("consent_always_fire"),we:a("convert_case_to"),xe:a("convert_false_to"),ye:a("convert_null_to"),ze:a("convert_true_to"),Ae:a("convert_undefined_to"),gi:a("debug_mode_metadata"),Za:a("function"),Lg:a("instance_name"),Ng:a("live_only"),Og:a("malware_disabled"),Pg:a("metadata"),ji:a("original_activity_id"),ki:a("original_vendor_template_id"),Rg:a("once_per_event"),af:a("once_per_load"),mi:a("priority_override"),
ni:a("respected_consent_types"),jf:a("setup_tags"),lf:a("tag_id"),nf:a("teardown_tags")}}();
var Yb=[],Zb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},$b=function(a){return Zb[a]},ac=/[\x00\x22\x26\x27\x3c\x3e]/g;var ec=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,gc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},hc=function(a){return gc[a]};Yb[7]=function(a){return String(a).replace(ec,hc)};
Yb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(ec,hc)+"'"}};var pc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,sc={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},tc=function(a){return sc[a]};Yb[16]=function(a){return a};var vc;
var wc=[],xc=[],yc=[],zc=[],Ac=[],Bc={},Cc,Dc,Ec,Fc=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Bc[c],e={},f;for(f in a)if(a.hasOwnProperty(f))if(0===f.indexOf("vtp_"))d&&b&&b.uf&&b.uf(a[f]),e[void 0!==d?f:f.substr(4)]=a[f];else if(f===Xb.bg.toString()&&a[f]){}
d&&b&&b.tf&&(e.vtp_gtmCachedValues=b.tf);return void 0!==d?d(e):vc(c,e,b)},Hc=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Gc(a[e],b,c));return d},Gc=function(a,b,c){if(xa(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Gc(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=wc[f];if(!h||b.Xd(h))return;c[f]=!0;try{var k=Hc(h,b,c);k.vtp_gtmEventId=b.id;
d=Fc(k,b);Ec&&(d=Ec.gh(d,k))}catch(z){b.Gf&&b.Gf(z,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Gc(a[l],b,c)]=Gc(a[l+1],b,c);return d;case "template":d=[];for(var n=!1,q=1;q<a.length;q++){var p=Gc(a[q],b,c);Dc&&(n=n||p===Dc.Cc);d.push(p)}return Dc&&n?Dc.jh(d):d.join("");case "escape":d=Gc(a[1],b,c);if(Dc&&xa(a[1])&&"macro"===a[1][0]&&Dc.Bh(a))return Dc.Ph(d);d=String(d);for(var r=2;r<a.length;r++)Yb[a[r]]&&(d=Yb[a[r]](d));return d;case "tag":var t=a[1];if(!zc[t])throw Error("Unable to resolve tag reference "+
t+".");return d={Bf:a[2],index:t};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=Ic(u,b,c),x=!!a[4];return x||2!==v?x!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Ic=function(a,b,c){try{return Cc(Hc(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Lc=function(a){function b(r){for(var t=0;t<r.length;t++)d[r[t]]=!0}for(var c=[],d=[],e=Jc(a),f=0;f<xc.length;f++){var h=xc[f],k=Kc(h,e);if(k){for(var l=h.add||[],n=0;n<l.length;n++)c[l[n]]=!0;b(h.block||[])}else null===k&&b(h.block||[]);}for(var q=[],p=0;p<zc.length;p++)c[p]&&!d[p]&&(q[p]=!0);return q},Kc=function(a,b){for(var c=a["if"]||[],d=0;d<c.length;d++){var e=b(c[d]);if(0===e)return!1;if(2===e)return null}for(var f=
a.unless||[],h=0;h<f.length;h++){var k=b(f[h]);if(2===k)return null;if(1===k)return!1}return!0},Jc=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Ic(yc[c],a));return b[c]}};var Mc={gh:function(a,b){b[Xb.we]&&"string"===typeof a&&(a=1==b[Xb.we]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Xb.ye)&&null===a&&(a=b[Xb.ye]);b.hasOwnProperty(Xb.Ae)&&void 0===a&&(a=b[Xb.Ae]);b.hasOwnProperty(Xb.ze)&&!0===a&&(a=b[Xb.ze]);b.hasOwnProperty(Xb.xe)&&!1===a&&(a=b[Xb.xe]);return a}};var I={Lb:"_ee",Hc:"_syn_or_mod",oi:"_uei",zd:"_eu",li:"_pci",qd:"event_callback",oc:"event_timeout",sa:"gtag.config",Fa:"gtag.get",ja:"purchase",ob:"refund",Ta:"begin_checkout",mb:"add_to_cart",nb:"remove_from_cart",kg:"view_cart",Ee:"add_to_wishlist",Ea:"view_item",De:"view_promotion",Ce:"select_promotion",cd:"select_item",ic:"view_item_list",Be:"add_payment_info",jg:"add_shipping_info",Pa:"value_key",Oa:"value_callback",va:"allow_ad_personalization_signals",Ib:"restricted_data_processing",Fb:"allow_google_signals",
ya:"cookie_expires",Gb:"cookie_update",Kb:"session_duration",vc:"session_engaged_time",Ia:"user_properties",da:"transport_url",O:"ads_data_redaction",vb:"user_data",pb:"first_party_collection",D:"ad_storage",F:"analytics_storage",ue:"region",ve:"wait_for_update",xa:"conversion_linker",wa:"conversion_cookie_prefix",aa:"value",Z:"currency",Ve:"trip_type",U:"items",Oe:"passengers",dd:"allow_custom_scripts",ub:"session_id",Te:"quantity",Ya:"transaction_id",Wa:"language",nc:"country",kc:"allow_enhanced_conversions",
jd:"aw_merchant_id",gd:"aw_feed_country",hd:"aw_feed_language",fd:"discount",Ie:"developer_id",xc:"delivery_postal_code",pd:"estimated_delivery_date",nd:"shipping",xd:"new_customer",kd:"customer_lifetime_value",od:"enhanced_conversions"};
I.Ye=[I.ja,I.ob,I.Ta,I.mb,I.nb,I.kg,I.Ee,I.Ea,I.De,I.Ce,I.ic,I.cd,I.Be,I.jg];I.Xe=[I.va,I.Fb,I.Gb];I.Ze=[I.ya,I.oc,I.Kb,I.vc];var ld=function(a){sa("GTM",a)};var md=function(a,b){this.o=a;this.defaultValue=void 0===b?!1:b};var nd=new md(1936,!0),od=new md(1933),pd=new md(373442741);var vd=function(){var a={};this.o=function(b,c){return null!=a[b]?a[b]:c};this.s=function(){a[od.o]=!0}};vd.o=void 0;vd.s=function(){return vd.o?vd.o:vd.o=new vd};var wd=function(a){return vd.s().o(a.o,a.defaultValue)};var xd=[];function yd(){var a=zb("google_tag_data",{});a.ics||(a.ics={entries:{},set:zd,update:Ad,addListener:Bd,notifyListeners:Cd,active:!1,usedDefault:!1});return a.ics}
function zd(a,b,c,d,e,f){var h=yd();h.active=!0;h.usedDefault=!0;if(void 0!=b){var k=h.entries,l=k[a]||{},n=l.region,q=c&&g(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(""===d||q===e||(q===d?n!==e:!q&&!n)){var p=!!(f&&0<f&&void 0===l.update),r={region:q,initial:"granted"===b,update:l.update,quiet:p};if(""!==d||!1!==l.initial)k[a]=r;p&&m.setTimeout(function(){k[a]===r&&r.quiet&&(r.quiet=!1,Dd(a),Cd(),sa("TAGGING",2))},f)}}}
function Ad(a,b){var c=yd();c.active=!0;if(void 0!=b){var d=Ed(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var h=Ed(a);f.quiet?(f.quiet=!1,Dd(a)):h!==d&&Dd(a)}}function Bd(a,b){xd.push({Nd:a,rh:b})}function Dd(a){for(var b=0;b<xd.length;++b){var c=xd[b];xa(c.Nd)&&-1!==c.Nd.indexOf(a)&&(c.Jf=!0)}}function Cd(a){for(var b=0;b<xd.length;++b){var c=xd[b];if(c.Jf){c.Jf=!1;try{c.rh({fh:a})}catch(d){}}}}
var Ed=function(a){var b=yd().entries[a]||{};return void 0!==b.update?b.update:b.initial},Fd=function(a){return(yd().entries[a]||{}).initial},Gd=function(a){return!(yd().entries[a]||{}).quiet},Hd=function(){return wd(od)?yd().active:!1},Id=function(){return yd().usedDefault},Jd=function(a,b){yd().addListener(a,b)},Kd=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!Gd(b[e]))return!0;return!1}if(c()){var d=!1;Jd(b,function(e){d||c()||(d=!0,a(e))})}else a({})},Ld=function(a,b){function c(){for(var f=
[],h=0;h<d.length;h++){var k=d[h];!1===Ed(k)||e[k]||(f.push(k),e[k]=!0)}return f}var d=g(b)?[b]:b,e={};c().length!==d.length&&Jd(d,function(f){var h=c();0<h.length&&(f.Nd=h,a(f))})};function Md(a){for(var b=[],c=0;c<Nd.length;c++){var d=a(Nd[c]);b[c]=!0===d?"1":!1===d?"0":"-"}return b.join("")}
var Nd=[I.D,I.F],Od=function(a){var b=a[I.ue];b&&ld(40);var c=a[I.ve];c&&ld(41);for(var d=xa(b)?b:[b],e=0;e<d.length;++e)for(var f in a)if(a.hasOwnProperty(f)&&f!==I.ue&&f!==I.ve)if(-1<ya(Nd,f)){var h=f,k=a[f],l=d[e];yd().set(h,k,l,"RO","RO-B",c)}else{var n=f,q=a[f],p=d[e];yd().set(n,q,p,"RO","RO-B",c);}},Pd=function(a,
b){for(var c in a)if(a.hasOwnProperty(c))if(-1<ya(Nd,c)){var d=c,e=a[c];yd().update(d,e)}else{var f=c,h=a[c];yd().update(f,h);}yd().notifyListeners(b)},J=function(a){var b=Ed(a);return void 0!=b?b:!0},Qd=function(){return"G1"+Md(Ed)},Rd=function(a,b){Ld(a,b)},Sd=function(a,b){Kd(a,b)};var Ud=function(a){return Td?B.querySelectorAll(a):null},Vd=function(a,b){if(!Td)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!B.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Wd=!1;if(B.querySelectorAll)try{var Xd=B.querySelectorAll(":root");Xd&&1==Xd.length&&Xd[0]==B.documentElement&&(Wd=!0)}catch(a){}var Td=Wd;var Yd=function(a){if(B.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!m.getComputedStyle)return!0;var c=m.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-1)),f=Math.min(h,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=m.getComputedStyle(d,
null))}return!1};var ge=/:[0-9]+$/,he=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},ke=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=ie(a.protocol)||ie(m.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:m.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||m.location.hostname).replace(ge,"").toLowerCase());return je(a,b,c,d,e)},je=function(a,b,c,d,e){var f,h=ie(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=le(a);break;case "protocol":f=h;break;case "host":f=a.hostname.replace(ge,"").toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(Number(a.port)||("http"==h?80:"https"==h?443:""));break;case "path":a.pathname||a.hostname||sa("TAGGING",
1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=ya(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=he(f,e,void 0));break;case "extension":var n=a.pathname.split(".");f=1<n.length?n[n.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},ie=function(a){return a?a.replace(":","").toLowerCase():""},le=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");
b=0>c?a.href:a.href.substr(0,c)}return b},me=function(a){var b=B.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||sa("TAGGING",1),c="/"+c);var d=b.hostname.replace(ge,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},ne=function(a){function b(n){var q=n.split("=")[0];return 0>d.indexOf(q)?n:q+"=0"}function c(n){return n.split("&").map(b).filter(function(q){return void 0!=q}).join("&")}var d="gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),
e=me(a),f=a.split(/[?#]/)[0],h=e.search,k=e.hash;"?"===h[0]&&(h=h.substring(1));"#"===k[0]&&(k=k.substring(1));h=c(h);k=c(k);""!==h&&(h="?"+h);""!==k&&(k="#"+k);var l=""+f+h+k;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var oe={te:""},pe=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),qe=new RegExp(/@(gmail|googlemail)\./i),re=new RegExp(/support|noreply/i),se="SCRIPT STYLE IMG SVG PATH BR".split(" "),ve=["BR"];
function we(a){var b;if(a===B.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var h=0;h<f.childElementCount;h++)if(f.children[h]===a){e=h+1;break a}e=-1}else e=1}d=we(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}function xe(a,b){if(1>=a.length)return a;var c=a.filter(b);return 0==c.length?a:c}
function ye(a){if(0==a.length)return null;var b;b=xe(a,function(c){return!re.test(c.ra)});b=xe(b,function(c){return"INPUT"===c.element.tagName.toUpperCase()});b=xe(b,function(c){return!Yd(c.element)});return b[0]}
var ze=function(){var a;var b=[],c=B.body;if(c){for(var d=c.querySelectorAll("*"),e=0;e<d.length&&1E4>e;e++){var f=d[e];if(!(0<=se.indexOf(f.tagName.toUpperCase()))){for(var h=!1,k=0;k<f.childElementCount&&1E4>k;k++)if(!(0<=ve.indexOf(f.children[k].tagName.toUpperCase()))){h=!0;break}h||b.push(f)}}a={elements:b,status:1E4<d.length?"2":"1"}}else a={elements:b,status:"4"};for(var l=a,n=l.elements,q=[],p=0;p<n.length;p++){var r=n[p],t=r.textContent;r.value&&(t=r.value);if(t){var u=t.match(pe);if(u){var v=
u[0],x;if(m.location){var z=je(m.location,"host",!0);x=0<=v.toLowerCase().indexOf(z)}else x=!1;x||q.push({element:r,ra:v})}}}var w=ye(q),y=[];if(w){var A=w.element,C={ra:w.ra,tagName:A.tagName,type:1};C.querySelector=we(A);C.isVisible=!Yd(A);y.push(C)}return{elements:y,status:10<q.length?"3":l.status}},Ae=function(a){return a.tagName+":"+a.isVisible+":"+a.ra.length+":"+qe.test(a.ra)};var Te={},Ue=null,Ve=Math.random();Te.M="GTM-524LTF9";Te.Gc="690";Te.ii="";Te.dg="ChAI8OWrhgYQ3PWlmPmdjJh/EiQADr7NfxutQDE2d9rAmGtcTIraoEoyJmzGJSFATEBISKbg/PQaArUG";var We={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Xe={__paused:!0,__tg:!0},Ye;for(Ye in We)We.hasOwnProperty(Ye)&&(Xe[Ye]=!0);var Ze="www.googletagmanager.com/gtm.js";
var $e=Ze,af=La(""),bf=null,cf=null,df="https://www.googletagmanager.com/a?id="+Te.M+"&cv=634",ef={},ff={},gf=function(){var a=Ue.sequence||1;Ue.sequence=a+1;return a};Te.cg="";var hf={},jf=new Da,kf={},lf={},of={name:"dataLayer",set:function(a,b){G(Ya(a,b),kf);mf()},get:function(a){return nf(a,2)},reset:function(){jf=new Da;kf={};mf()}},nf=function(a,b){return 2!=b?jf.get(a):pf(a)},pf=function(a){var b,c=a.split(".");b=b||[];for(var d=kf,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==ya(b,d))return}return d},qf=function(a,b){lf.hasOwnProperty(a)||(jf.set(a,b),G(Ya(a,b),kf),mf())},mf=function(a){Fa(lf,function(b,c){jf.set(b,c);G(Ya(b,
void 0),kf);G(Ya(b,c),kf);a&&delete lf[b]})},sf=function(a,b,c){hf[a]=hf[a]||{};hf[a][b]=rf(b,c)},rf=function(a,b){var c,d=1!==(void 0===b?2:b)?pf(a):jf.get(a);"array"===Tb(d)||"object"===Tb(d)?c=G(d):c=d;return c},tf=function(a,b){if(hf[a])return hf[a][b]},uf=function(a,b){hf[a]&&delete hf[a][b]};var xf={},yf=function(a,b){if(m._gtmexpgrp&&m._gtmexpgrp.hasOwnProperty(a))return m._gtmexpgrp[a];void 0===xf[a]&&(xf[a]=Math.floor(Math.random()*b));return xf[a]};function zf(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};function Af(a){return wd(pd)&&!a.navigator.cookieEnabled?!1:"null"!==a.origin};var Df=function(a,b,c,d){return Bf(d)?zf(a,String(b||Cf()),c):[]},Gf=function(a,b,c,d,e){if(Bf(e)){var f=Ef(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Ff(f,function(h){return h.Nc},b);if(1===f.length)return f[0].id;f=Ff(f,function(h){return h.Xb},c);return f[0]?f[0].id:void 0}}};function Hf(a,b,c,d){var e=Cf(),f=window;Af(f)&&(f.document.cookie=a);var h=Cf();return e!=h||void 0!=c&&0<=Df(b,h,!1,d).indexOf(c)}
var Lf=function(a,b,c){function d(t,u,v){if(null==v)return delete h[u],t;h[u]=v;return t+"; "+u+"="+v}function e(t,u){if(null==u)return delete h[u],t;h[u]=!0;return t+"; "+u}if(!Bf(c.Ma))return 2;var f;void 0==b?f=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=If(b),f=a+"="+b);var h={};f=d(f,"path",c.path);var k;c.expires instanceof Date?k=c.expires.toUTCString():null!=c.expires&&(k=""+c.expires);f=d(f,"expires",k);f=d(f,"max-age",c.xi);f=d(f,"samesite",
c.zi);c.$h&&(f=e(f,"secure"));var l=c.domain;if("auto"===l){for(var n=Jf(),q=0;q<n.length;++q){var p="none"!==n[q]?n[q]:void 0,r=d(f,"domain",p);r=e(r,c.flags);if(!Kf(p,c.path)&&Hf(r,a,b,c.Ma))return 0}return 1}l&&"none"!==l&&(f=d(f,"domain",l));f=e(f,c.flags);return Kf(l,c.path)?1:Hf(f,a,b,c.Ma)?0:1},Mf=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Lf(a,b,c)};
function Ff(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}function Ef(a,b,c){for(var d=[],e=Df(a,void 0,void 0,c),f=0;f<e.length;f++){var h=e[f].split("."),k=h.shift();if(!b||-1!==b.indexOf(k)){var l=h.shift();l&&(l=l.split("-"),d.push({id:h.join("."),Nc:1*l[0]||1,Xb:1*l[1]||1}))}}return d}
var If=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Nf=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Of=/(^|\.)doubleclick\.net$/i,Kf=function(a,b){return Of.test(window.document.location.hostname)||"/"===b&&Nf.test(a)},Cf=function(){return Af(window)?window.document.cookie:""},Jf=function(){var a=[],b=window.document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));
var e=window.document.location.hostname;Of.test(e)||Nf.test(e)||a.push("none");return a},Bf=function(a){if(!wd(od)||!a||!Hd())return!0;if(!Gd(a))return!1;var b=Ed(a);return null==b?!0:!!b};var Pf=function(){return[Math.round(2147483647*Math.random()),Math.round(Ra()/1E3)].join(".")},Uf=function(a,b,c,d,e){var f=Qf(b);return Gf(a,f,Rf(c),d,e)},Vf=function(a,b,c,d){var e=""+Qf(c),f=Rf(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Qf=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Rf=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Wf(a,b,c){var d,e=Number(null!=a.eb?a.eb:void 0);0!==e&&(d=new Date((b||Ra())+1E3*(e||7776E3)));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var Xf=["1"],Yf={},bg=function(a){var b=Zf(a.prefix);if(!Yf[b]&&!$f(b,a.path,a.domain)){var c=Pf();if(0===ag(b,c,a)){var d=zb("google_tag_data",{});d._gcl_au?sa("GTM",57):d._gcl_au=c}$f(b,a.path,a.domain)}};function ag(a,b,c){var d=Vf(b,"1",c.domain,c.path),e=Wf(c);e.Ma="ad_storage";return Mf(a,d,e)}function $f(a,b,c){var d=Uf(a,b,c,Xf,"ad_storage");d&&(Yf[a]=d);return d}function Zf(a){return(a||"_gcl")+"_au"};var cg=function(a){for(var b=[],c=B.cookie.split(";"),d=new RegExp("^\\s*"+(a||"_gac")+"_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({ne:f[1],value:f[2],timestamp:Number(f[2].split(".")[1])||0})}b.sort(function(h,k){return k.timestamp-h.timestamp});return b};
function dg(a,b){var c=cg(a),d={};if(!c||!c.length)return d;for(var e=0;e<c.length;e++){var f=c[e].value.split(".");if(!("1"!==f[0]||b&&3>f.length||!b&&3!==f.length)&&Number(f[1])){d[c[e].ne]||(d[c[e].ne]=[]);var h={version:f[0],timestamp:1E3*Number(f[1]),na:f[2]};b&&3<f.length&&(h.labels=f.slice(3));d[c[e].ne].push(h)}}return d};function eg(){for(var a=fg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function gg(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var fg,hg;
function ig(a){function b(l){for(;d<a.length;){var n=a.charAt(d++),q=hg[n];if(null!=q)return q;if(!/^[\s\xa0]*$/.test(n))throw Error("Unknown base64 encoding at char: "+n);}return l}fg=fg||gg();hg=hg||eg();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var jg;var ng=function(){var a=kg,b=lg,c=mg(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){Hb(B,"mousedown",d);Hb(B,"keyup",d);Hb(B,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},og=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};mg().decorators.push(f)},pg=function(a,b,c){for(var d=mg().decorators,e={},f=0;f<d.length;++f){var h=
d[f],k;if(k=!c||h.forms)a:{var l=h.domains,n=a,q=!!h.sameHost;if(l&&(q||n!==B.location.hostname))for(var p=0;p<l.length;p++)if(l[p]instanceof RegExp){if(l[p].test(n)){k=!0;break a}}else if(0<=n.indexOf(l[p])||q&&0<=l[p].indexOf(n)){k=!0;break a}k=!1}if(k){var r=h.placement;void 0==r&&(r=h.fragment?2:1);r===b&&Va(e,h.callback())}}return e},mg=function(){var a=zb("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var qg=/(.*?)\*(.*?)\*(.*)/,rg=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,sg=/^(?:www\.|m\.|amp\.)+/,tg=/([^?#]+)(\?[^#]*)?(#.*)?/;function ug(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var wg=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,h,k=String(d);fg=fg||gg();hg=hg||eg();for(var l=[],n=0;n<k.length;n+=3){var q=n+1<k.length,p=n+2<k.length,r=k.charCodeAt(n),t=q?k.charCodeAt(n+1):0,u=p?k.charCodeAt(n+2):0,v=r>>2,x=(r&3)<<4|t>>4,z=(t&15)<<2|u>>6,w=u&63;p||(w=64,q||(z=64));l.push(fg[v],fg[x],fg[z],fg[w])}h=l.join("");f.call(e,h)}}var y=b.join("*");return["1",vg(y),
y].join("*")},vg=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=jg)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}jg=d;for(var l=4294967295,n=0;n<c.length;n++)l=l>>>8^jg[(l^c.charCodeAt(n))&255];return((l^-1)>>>0).toString(36)},yg=function(){return function(a){var b=me(m.location.href),
c=b.search.replace("?",""),d=he(c,"_gl",!0)||"";a.query=xg(d)||{};var e=ke(b,"fragment").match(ug("_gl"));a.fragment=xg(e&&e[3]||"")||{}}},zg=function(a){var b=yg(),c=mg();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(Va(d,e.query),a&&Va(d,e.fragment));return d},xg=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=qg.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var n=h[2],q=0;q<
b;++q)if(n===vg(k,q)){l=!0;break a}l=!1}if(l){for(var p={},r=k?k.split("*"):[],t=0;t<r.length;t+=2)p[r[t]]=ig(r[t+1]);return p}}}}catch(u){}};function Ag(a,b,c,d){function e(q){var p=q,r=ug(a).exec(p),t=p;if(r){var u=r[2],v=r[4];t=r[1];v&&(t=t+u+v)}q=t;var x=q.charAt(q.length-1);q&&"&"!==x&&(q+="&");return q+n}d=void 0===d?!1:d;var f=tg.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",n=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function Bg(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=pg(b,1,c),e=pg(b,2,c),f=pg(b,3,c);if(Wa(d)){var h=wg(d);c?Cg("_gl",h,a):Dg("_gl",h,a,!1)}if(!c&&Wa(e)){var k=wg(e);Dg("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var n=l,q=f[l],p=a;if(p.tagName){if("a"===p.tagName.toLowerCase()){Dg(n,q,p,void 0);break a}if("form"===p.tagName.toLowerCase()){Cg(n,q,p);break a}}"string"==typeof p&&Ag(n,q,p,void 0)}}
function Dg(a,b,c,d){if(c.href){var e=Ag(a,b,c.href,void 0===d?!1:d);eb.test(e)&&(c.href=e)}}
function Cg(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=B.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var n=Ag(a,b,c.action);eb.test(n)&&(c.action=n)}}}
var kg=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Bg(e,e.hostname)}}catch(h){}},lg=function(a){try{if(a.action){var b=ke(me(a.action),"host");Bg(a,b)}}catch(c){}},Eg=function(a,b,c,d){ng();og(a,b,"fragment"===c?2:1,!!d,!1)},Fg=function(a,b){ng();og(a,[je(m.location,"host",!0)],b,!0,!0)},Gg=function(){var a=B.location.hostname,b=rg.exec(B.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(sg,""),l=e.replace(sg,""),n;if(!(n=k===l)){var q="."+l;n=k.substring(k.length-q.length,k.length)===q}return n},Hg=function(a,b){return!1===a?!1:a||b||Gg()};var Ig={};var Jg=/^\w+$/,Kg=/^[\w-]+$/,Lg={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp",gb:"_gb"},Mg=function(){if(!wd(od)||!Hd())return!0;var a=Ed("ad_storage");return null==a?!0:!!a},Ng=function(a,b){Gd("ad_storage")?Mg()?a():Ld(a,"ad_storage"):b?sa("TAGGING",3):Kd(function(){Ng(a,!0)},["ad_storage"])},Pg=function(a){return Og(a).map(function(b){return b.na})},Og=function(a){var b=[];if(!Af(m)||!B.cookie)return b;var c=Df(a,B.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d={},e=0;e<c.length;d=
{cc:d.cc},e++){var f=Qg(c[e]);if(null!=f){var h=f,k=h.version;d.cc=h.na;var l=h.timestamp,n=h.labels,q=Ba(b,function(p){return function(r){return r.na===p.cc}}(d));q?(q.timestamp=Math.max(q.timestamp,l),q.labels=Rg(q.labels,n||[])):b.push({version:k,na:d.cc,timestamp:l,labels:n})}}b.sort(function(p,r){return r.timestamp-p.timestamp});return Sg(b)};function Rg(a,b){for(var c={},d=[],e=0;e<a.length;e++)c[a[e]]=!0,d.push(a[e]);for(var f=0;f<b.length;f++)c[b[f]]||d.push(b[f]);return d}
function Tg(a){return a&&"string"==typeof a&&a.match(Jg)?a:"_gcl"}
var Vg=function(){var a=me(m.location.href),b=ke(a,"query",!1,void 0,"gclid"),c=ke(a,"query",!1,void 0,"gclsrc"),d=ke(a,"query",!1,void 0,"wbraid"),e=ke(a,"query",!1,void 0,"dclid");if(!b||!c||!d){var f=a.hash.replace("#","");b=b||he(f,"gclid",void 0);c=c||he(f,"gclsrc",void 0);d=d||he(f,"wbraid",void 0)}return Ug(b,c,e,d)},Ug=function(a,b,c,d){var e={},f=function(h,k){e[k]||(e[k]=[]);e[k].push(h)};e.gclid=a;e.gclsrc=b;e.dclid=c;void 0!==d&&Kg.test(d)&&(e.gbraid=d,f(d,"gb"));if(void 0!==a&&a.match(Kg))switch(b){case void 0:f(a,
"aw");break;case "aw.ds":f(a,"aw");f(a,"dc");break;case "ds":f(a,"dc");break;case "3p.ds":f(a,"dc");break;case "gf":f(a,"gf");break;case "ha":f(a,"ha")}c&&f(c,"dc");return e},Wg=function(a,b){switch(a){case void 0:case "aw":return"aw"===b;case "aw.ds":return"aw"===b||"dc"===b;case "ds":case "3p.ds":return"dc"===b;case "gf":return"gf"===b;case "ha":return"ha"===b}return!1},Yg=function(a){var b=Vg();Ng(function(){Xg(b,a)})};
function Xg(a,b,c,d){function e(q,p){var r=Zg(q,f);r&&(Mf(r,p,h),k=!0)}b=b||{};d=d||[];var f=Tg(b.prefix);c=c||Ra();var h=Wf(b,c,!0);h.Ma="ad_storage";var k=!1,l=Math.round(c/1E3),n=function(q){var p=["GCL",l,q];0<d.length&&p.push(d.join("."));return p.join(".")};a.aw&&e("aw",n(a.aw[0]));a.dc&&e("dc",n(a.dc[0]));a.gf&&e("gf",n(a.gf[0]));a.ha&&e("ha",n(a.ha[0]));a.gp&&e("gp",n(a.gp[0]));(void 0==Ig.enable_gbraid_cookie_write?0:Ig.enable_gbraid_cookie_write)&&!k&&a.gb&&e("gb",n(a.gb[0]))}
var ah=function(a,b){var c=zg(!0);Ng(function(){for(var d=Tg(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Lg[f]){var h=Zg(f,d),k=c[h];if(k){var l=Math.min($g(k),Ra()),n;b:{var q=l,p=h;if(Af(m))for(var r=Df(p,B.cookie,void 0,"ad_storage"),t=0;t<r.length;++t)if($g(r[t])>q){n=!0;break b}n=!1}if(!n){var u=Wf(b,l,!0);u.Ma="ad_storage";Mf(h,k,u)}}}}Xg(Ug(c.gclid,c.gclsrc),b)})},Zg=function(a,b){var c=Lg[a];if(void 0!==c)return b+c},$g=function(a){return 0!==bh(a.split(".")).length?1E3*(Number(a.split(".")[1])||
0):0};function Qg(a){var b=bh(a.split("."));return 0===b.length?null:{version:b[0],na:b[2],timestamp:1E3*(Number(b[1])||0),labels:b.slice(3)}}function bh(a){return 3>a.length||"GCL"!==a[0]&&"1"!==a[0]||!/^\d+$/.test(a[1])||!Kg.test(a[2])?[]:a}
var ch=function(a,b,c,d,e){if(xa(b)&&Af(m)){var f=Tg(e),h=function(){for(var k={},l=0;l<a.length;++l){var n=Zg(a[l],f);if(n){var q=Df(n,B.cookie,void 0,"ad_storage");q.length&&(k[n]=q.sort()[q.length-1])}}return k};Ng(function(){Eg(h,b,c,d)})}},Sg=function(a){return a.filter(function(b){return Kg.test(b.na)})},dh=function(a,b){if(Af(m)){for(var c=Tg(b.prefix),d={},e=0;e<a.length;e++)Lg[a[e]]&&(d[a[e]]=Lg[a[e]]);Ng(function(){Fa(d,function(f,h){var k=Df(c+h,B.cookie,void 0,"ad_storage");k.sort(function(t,
u){return $g(u)-$g(t)});if(k.length){var l=k[0],n=$g(l),q=0!==bh(l.split(".")).length?l.split(".").slice(3):[],p={},r;r=0!==bh(l.split(".")).length?l.split(".")[2]:void 0;p[f]=[r];Xg(p,b,n,q)}})})}};function eh(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var fh=function(a){function b(e,f,h){h&&(e[f]=h)}if(Hd()){var c=Vg();if(eh(c,a)){var d={};b(d,"gclid",c.gclid);b(d,"dclid",c.dclid);b(d,"gclsrc",c.gclsrc);b(d,"wbraid",c.gbraid);Fg(function(){return d},3);Fg(function(){var e={};return e._up="1",e},1)}}};function gh(a,b){var c=Tg(b),d=Zg(a,c);if(!d)return 0;for(var e=Og(d),f=0,h=0;h<e.length;h++)f=Math.max(f,e[h].timestamp);return f}
function hh(a){var b=0,c;for(c in a)for(var d=a[c],e=0;e<d.length;e++)b=Math.max(b,Number(d[e].timestamp));return b};var ih=/^\d+\.fls\.doubleclick\.net$/;function jh(a,b){Gd(I.D)?J(I.D)?a():Ld(a,I.D):b?ld(42):Sd(function(){jh(a,!0)},[I.D])}function kh(a){var b=me(m.location.href),c=ke(b,"host",!1);if(c&&c.match(ih)){var d=ke(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function lh(a,b,c){if("aw"===a||"dc"===a||"gb"===a){var d=kh("gcl"+a);if(d)return d.split(".")}var e=Tg(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!J(I.D)&&c,h;h=Vg()[a]||[];if(0<h.length)return f?["0"]:h}var k=Zg(a,e);return k?Pg(k):[]}function mh(a){var b=[];Fa(a,function(c,d){d=Sg(d);for(var e=[],f=0;f<d.length;f++)e.push(d[f].na);e.length&&b.push(c+":"+e.join(","))});return b.join(";")}
var nh=function(a){var b=kh("gac");return b?!J(I.D)&&a?"0":decodeURIComponent(b):mh(Mg()?dg():{})},oh=function(a){var b=kh("gacgb");return b?!J(I.D)&&a?"0":decodeURIComponent(b):mh(Mg()?dg("_gac_gb",!0):{})},ph=function(a,b,c){var d=Vg(),e=[],f=d.gclid,h=d.dclid,k=d.gclsrc||"aw";!f||"aw.ds"!==k&&"aw"!==k&&"ds"!==k||c&&!Wg(k,c)||e.push({na:f,Rd:k});!h||c&&"dc"!==c||e.push({na:h,Rd:"ds"});jh(function(){bg(b);var l=Yf[Zf(b.prefix)],n=!1;if(l&&0<e.length)for(var q=Ue.joined_auid=Ue.joined_auid||{},p=0;p<e.length;p++){var r=e[p],t=r.na,u=r.Rd,v=(b.prefix||"_gcl")+"."+u+"."+t;if(!q[v]){var x="https://adservice.google.com/pagead/regclk";x="gb"===u?x+"?gbraid="+t+"&auid="+l:x+"?gclid="+t+"&auid="+l+"&gclsrc="+u;Qb(x);n=q[v]=!0}}null==a&&(a=n);
if(a&&l){var z=Zf(b.prefix),w=Yf[z];w&&ag(z,w,b)}})},qh=function(a){var b;if(kh("gclaw")||kh("gac")||0<(Vg().aw||[]).length)b=!1;else{var c;if(0<(Vg().gb||[]).length)c=!0;else{var d=Math.max(gh("aw",a),hh(Mg()?dg():{}));c=Math.max(gh("gb",a),hh(Mg()?dg("_gac_gb",!0):{}))>d}b=c}return b};var rh=/[A-Z]+/,sh=/\s/,th=function(a){if(g(a)&&(a=Qa(a),!sh.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(rh.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],L:d}}}}},vh=function(a){for(var b={},c=0;c<a.length;++c){var d=th(a[c]);d&&(b[d.id]=d)}uh(b);var e=[];Fa(b,function(f,h){e.push(h)});return e};
function uh(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.L[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var wh=function(){var a=!1;return a};var yh=function(a,b,c,d){return(2===xh()||d||"http:"!=m.location.protocol?a:b)+c},xh=function(){var a=Eb(),b;if(1===a)a:{var c=$e;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=B.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Lh=function(a){if(J(I.D))return a;a=a.replace(/&url=([^&#]+)/,function(b,c){var d=ne(decodeURIComponent(c));return"&url="+encodeURIComponent(d)});a=a.replace(/&ref=([^&#]+)/,function(b,c){var d=ne(decodeURIComponent(c));return"&ref="+encodeURIComponent(d)});return a},Mh=function(){var a;if(!(a=af)){var b;if(!0===m._gtmdgs)b=!0;else{var c=xb&&xb.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||
11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Ka("1");return yf(1,100)<d?yf(2,2):-1},Nh=function(a){var b;if(!a||!a.length)return;for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&e.estimated_delivery_date?c.push(""+e.estimated_delivery_date):c.push("")}b=c.join(",");return b};var Oh=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Ph={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Qh={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Rh="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Sh=function(){var a=!1;return a},Uh=function(a){var b=nf("gtm.allowlist")||nf("gtm.whitelist");b&&ld(9);Sh()&&(b="google gtagfl lcl zone oid op".split(" "));var c=b&&Xa(Ma(b),Ph),d=nf("gtm.blocklist")||
nf("gtm.blacklist");d||(d=nf("tagTypeBlacklist"))&&ld(3);d?ld(8):d=[];Th()&&(d=Ma(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=ya(Ma(d),"google")&&ld(2);var e=d&&Xa(Ma(d),Qh),f={};return function(h){var k=h&&h[Xb.Za];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=ff[k]||[],n=a(k,l);if(b){var q;if(q=
n)a:{if(0>ya(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>ya(c,l[p])){ld(11);q=!1;break a}}else{q=!1;break a}q=!0}n=q}var r=!1;if(d){var t=0<=ya(e,k);if(t)r=t;else{var u=Ea(e,l||[]);u&&ld(10);r=u}}var v=!n||r;v||!(0<=ya(l,"sandboxedScripts"))||c&&-1!==ya(c,"sandboxedScripts")||(v=Ea(e,Rh));return f[k]=v}},Th=function(){return Oh.test(m.location&&m.location.hostname)};var Vh={active:!0,isAllowed:function(){return!0}},Wh=function(a){var b=Ue.zones;return b?b.checkState(Te.M,a):Vh},Xh=function(a){var b=Ue.zones;!b&&a&&(b=Ue.zones=a());return b};var Yh=function(){},Zh=function(){};var $h=!1,ai=0,bi=[];function ci(a){if(!$h){var b=B.createEventObject,c="complete"==B.readyState,d="interactive"==B.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){$h=!0;for(var e=0;e<bi.length;e++)D(bi[e])}bi.push=function(){for(var f=0;f<arguments.length;f++)D(arguments[f]);return 0}}}function di(){if(!$h&&140>ai){ai++;try{B.documentElement.doScroll("left"),ci()}catch(a){m.setTimeout(di,50)}}}var ei=function(a){$h?a():bi.push(a)};var gi=function(a,b){this.o=!1;this.H=[];this.W={tags:[]};this.Y=!1;this.s=this.C=0;fi(this,a,b)},hi=function(a,b,c,d){if(Xe.hasOwnProperty(b)||"__zone"===b)return-1;var e={};Vb(d)&&(e=G(d,e));e.id=c;e.status="timeout";return a.W.tags.push(e)-1},ii=function(a,b,c,d){var e=a.W.tags[b];e&&(e.status=c,e.executionTime=d)},ji=function(a){if(!a.o){for(var b=a.H,c=0;c<b.length;c++)b[c]();a.o=!0;a.H.length=0}},fi=function(a,b,c){va(b)&&ki(a,b);c&&m.setTimeout(function(){return ji(a)},Number(c))},ki=function(a,
b){var c=Ta(function(){return D(function(){b(Te.M,a.W)})});a.o?c():a.H.push(c)},li=function(a){a.C++;return Ta(function(){a.s++;a.Y&&a.s>=a.C&&ji(a)})};var mi=function(){function a(d){return!wa(d)||0>d?0:d}if(!Ue._li&&m.performance&&m.performance.timing){var b=m.performance.timing.navigationStart,c=wa(of.get("gtm.start"))?of.get("gtm.start"):0;Ue._li={cst:a(c-b),cbt:a(cf-b)}}},ni=function(a){m.performance&&m.performance.mark(Te.M+"_"+a+"_start")},oi=function(a){if(m.performance){var b=Te.M+"_"+a+"_start",c=Te.M+"_"+a+"_duration";m.performance.measure(c,b);var d=m.performance.getEntriesByName(c)[0];m.performance.clearMarks(b);m.performance.clearMeasures(c);
var e=Ue._p||{};void 0===e[a]&&(e[a]=d.duration,Ue._p=e);return d.duration}},pi=function(){if(m.performance&&m.performance.now){var a=Ue._p||{};a.PAGEVIEW=m.performance.now();Ue._p=a}};var qi={},ri=function(){return m.GoogleAnalyticsObject&&m[m.GoogleAnalyticsObject]},si=!1;
var Di=function(a){},Ci=function(){return m.GoogleAnalyticsObject||"ga"},Ei=function(a,b){return function(){var c=ri(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var h=f.get("hitPayload"),k=f.get("hitCallback"),l=0>h.indexOf("&tid="+b);l&&(f.set("hitPayload",h.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",h,!0),f.set("hitCallback",k,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var Mi=function(a){},Ni=function(){return"&tc="+zc.filter(function(a){return a}).length},Qi=function(){2022<=Oi().length&&Pi()},Si=function(){Ri||(Ri=m.setTimeout(Pi,500))},Pi=function(){Ri&&(m.clearTimeout(Ri),Ri=void 0);void 0===Ti||Ui[Ti]&&!Vi&&!Wi||(Xi[Ti]||Yi.Ch()||
0>=Zi--?(ld(1),Xi[Ti]=!0):(Yi.Uh(),Gb(Oi(!0)),Ui[Ti]=!0,$i=aj=bj=Wi=Vi=""))},Oi=function(a){var b=Ti;if(void 0===b)return"";var c=ta("GTM"),d=ta("TAGGING");return[cj,Ui[b]?"":"&es=1",dj[b],c?"&u="+c:"",d?"&ut="+d:"",Ni(),Vi,Wi,bj,aj,Mi(a),$i,"&z=0"].join("")},fj=function(){cj=ej()},ej=function(){return[df,"&v=3&t=t","&pid="+Ca(),"&rv="+Te.Gc].join("")},Li=["L","S","Y"],gj="0.005000">Math.random(),cj=ej(),Ui={},Vi="",Wi="",$i="",aj="",Ki={},Ji=!1,bj="",Ti=void 0,dj={},Xi={},Ri=void 0,
Yi=function(a,b){var c=0,d=0;return{Ch:function(){if(c<a)return!1;Ra()-d>=b&&(c=0);return c>=a},Uh:function(){Ra()-d>=b&&(c=0);c++;d=Ra()}}}(2,1E3),Zi=1E3,hj=function(a,b,c,d){if(gj&&!Xi[a]&&b){a!==Ti&&(Pi(),Ti=a);var e,f=String(b[Xb.Za]||"").replace(/_/g,"");0===f.indexOf("cvt")&&(f="cvt");e=f;var h=c+e;Vi=Vi?Vi+
"."+h:"&tr="+h;var k=b["function"];if(!k)throw Error("Error: No function name given for function call.");var l=(Bc[k]?"1":"2")+e;$i=$i?$i+"."+l:"&ti="+l;Si();Qi()}};var jj=function(a,b,c){if(gj&&!Xi[a]){a!==
Ti&&(Pi(),Ti=a);var d=c+b;Wi=Wi?Wi+"."+d:"&epr="+d;Si();Qi()}},kj=function(a,b,c){};function lj(a,b,c,d){var e=zc[a],f=mj(a,b,c,d);if(!f)return null;var h=Gc(e[Xb.jf],c,[]);if(h&&h.length){var k=h[0];f=lj(k.index,{onSuccess:f,onFailure:1===k.Bf?b.terminate:f,terminate:b.terminate},c,d)}return f}
function mj(a,b,c,d){function e(){if(f[Xb.Og])k();else{var x=Hc(f,c,[]);var z=x[Xb.ag];if(null!=z)for(var w=0;w<z.length;w++)if(!J(z[w])){k();return}var y=hi(c.$a,String(f[Xb.Za]),Number(f[Xb.lf]),x[Xb.Pg]),A=!1;x.vtp_gtmOnSuccess=function(){if(!A){A=!0;var E=Ra()-F;hj(c.id,zc[a],"5",E);ii(c.$a,y,"success",
E);h()}};x.vtp_gtmOnFailure=function(){if(!A){A=!0;var E=Ra()-F;hj(c.id,zc[a],"6",E);ii(c.$a,y,"failure",E);k()}};x.vtp_gtmTagId=f.tag_id;x.vtp_gtmEventId=c.id;hj(c.id,f,"1");var C=function(){var E=Ra()-F;hj(c.id,f,"7",E);ii(c.$a,y,"exception",E);A||(A=!0,k())};var F=Ra();try{Fc(x,c)}catch(E){C(E)}}}var f=zc[a],h=b.onSuccess,k=b.onFailure,l=b.terminate;if(c.Xd(f))return null;var n=Gc(f[Xb.nf],c,[]);if(n&&n.length){var q=n[0],p=lj(q.index,{onSuccess:h,onFailure:k,terminate:l},c,d);if(!p)return null;h=p;k=2===q.Bf?l:p}if(f[Xb.af]||f[Xb.Rg]){var r=f[Xb.af]?Ac:
c.bi,t=h,u=k;if(!r[a]){e=Ta(e);var v=nj(a,r,e);h=v.onSuccess;k=v.onFailure}return function(){r[a](t,u)}}return e}function nj(a,b,c){var d=[],e=[];b[a]=oj(d,e,c);return{onSuccess:function(){b[a]=pj;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=qj;for(var f=0;f<e.length;f++)e[f]()}}}function oj(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function pj(a){a()}function qj(a,b){b()};var tj=function(a,b){for(var c=[],d=0;d<zc.length;d++)if(a[d]){var e=zc[d];var f=li(b.$a);try{var h=lj(d,{onSuccess:f,onFailure:f,terminate:f},b,d);if(h){var k=c,l=k.push,n=d,q=e["function"];if(!q)throw"Error: No function name given for function call.";var p=Bc[q];l.call(k,{Uf:n,Kf:p?p.priorityOverride||0:0,qh:h})}else rj(d,b),f()}catch(u){f()}}var r=b.$a;r.Y=!0;r.s>=r.C&&ji(r);c.sort(sj);for(var t=0;t<c.length;t++)c[t].qh();
return 0<c.length};function sj(a,b){var c,d=b.Kf,e=a.Kf;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Uf,k=b.Uf;f=h>k?1:h<k?-1:0}return f}function rj(a,b){if(!gj)return;var c=function(d){var e=b.Xd(zc[d])?"3":"4",f=Gc(zc[d][Xb.jf],b,[]);f&&f.length&&c(f[0].index);hj(b.id,zc[d],e);var h=Gc(zc[d][Xb.nf],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var uj=!1,Aj=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(uj)return!1;uj=!0;}var f=Wh(b),h=!1;if(!f.active){if("gtm.js"!==c)return!1;h=!0;f=Wh(Number.MAX_SAFE_INTEGER)}gj&&
!Xi[b]&&Ti!==b&&(Pi(),Ti=b,$i=Vi="",dj[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,Si());var k=a.eventCallback,l=a.eventTimeout,n={id:b,name:c,Xd:Uh(f.isAllowed),bi:[],Gf:function(){ld(6)},uf:vj(b),$a:new gi(k,l)};n.tf=wj();xj(b,n.$a);var q=Lc(n);
h&&(q=yj(q));var p=tj(q,n);"gtm.js"!==c&&"gtm.sync"!==c||Di(Te.M);switch(c){case "gtm.init":p&&ld(20)}return zj(q,p)};function vj(a){return function(b){gj&&(Wb(b)||kj(a,"input",b))}}function xj(a,b){sf(a,"event",1);sf(a,"ecommerce",1);sf(a,"gtm");sf(a,"eventModel");}
function wj(){var a={};a.event=rf("event",1);a.ecommerce=rf("ecommerce",1);a.gtm=rf("gtm");a.eventModel=rf("eventModel");return a}function yj(a){for(var b=[],c=0;c<a.length;c++)a[c]&&We[String(zc[c][Xb.Za])]&&(b[c]=!0);return b}function zj(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&zc[c]&&!Xe[String(zc[c][Xb.Za])])return!0;return!1}function Bj(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return me(""+c+b).href}}function Cj(a,b){return Dj()?Bj(a,b):void 0}function Dj(){var a=!1;return a};var Ej=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.remoteConfig={};this.globalConfig={};this.onSuccess=function(){};this.onFailure=function(){};this.setContainerTypeLoaded=function(){};this.getContainerTypeLoaded=function(){};this.eventId=void 0;this.isGtmEvent=!1},Fj=function(a){var b=new Ej;b.eventModel=a;return b},Gj=function(a,b){a.targetConfig=b;return a},Hj=function(a,b){a.containerConfig=b;return a},Ij=function(a,b){a.remoteConfig=b;return a},Jj=function(a,
b){a.globalConfig=b;return a},Kj=function(a,b){a.onSuccess=b;return a},Lj=function(a,b){a.setContainerTypeLoaded=b;return a},Mj=function(a,b){a.getContainerTypeLoaded=b;return a},Nj=function(a,b){a.onFailure=b;return a};
Ej.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.remoteConfig[a])return this.remoteConfig[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Oj=function(a){function b(e){Fa(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Fa(c,function(e){d.push(e)});return d};var Pj;if(3===Te.Gc.length)Pj="g";else{var Qj="G";Pj=Qj}
var Rj={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Pj,OPT:"o"},Sj=function(a){var b=Te.M.split("-"),c=b[0].toUpperCase(),d=Rj[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Te.Gc.length){var h="w";f="2"+h}else f="";return f+d+Te.Gc+e};var Tj=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var Uj=function(){return nb("iPhone")&&!nb("iPod")&&!nb("iPad")};nb("Opera");nb("Trident")||nb("MSIE");nb("Edge");!nb("Gecko")||-1!=hb.toLowerCase().indexOf("webkit")&&!nb("Edge")||nb("Trident")||nb("MSIE")||nb("Edge");-1!=hb.toLowerCase().indexOf("webkit")&&!nb("Edge")&&nb("Mobile");nb("Macintosh");nb("Windows");nb("Linux")||nb("CrOS");var Vj=pa.navigator||null;Vj&&(Vj.appVersion||"").indexOf("X11");nb("Android");Uj();nb("iPad");nb("iPod");Uj()||nb("iPad")||nb("iPod");hb.toLowerCase().indexOf("kaios");var Wj=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(k){e=!1}if(e)return c;var f;a:{try{var h=c.parent;if(h&&h!=c){f=h;break a}}catch(k){}f=null}if(!(c=f))break}return null},Xj=function(a){var b=B;b=void 0===b?window.document:b;if(!a||!b.head)return null;var c=document.createElement("meta");b.head.appendChild(c);c.httpEquiv="origin-trial";c.content=a;return c};var Yj=function(){};var Zj=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},ak=function(a,b){this.s=a;this.o=null;this.H={};this.Y=0;this.W=void 0===b?500:b;this.C=null};ma(ak,Yj);
var ck=function(a){return"function"===typeof a.s.__tcfapi||null!=bk(a)};
ak.prototype.addEventListener=function(a){var b={},c=ub(function(){return a(b)}),d=0;-1!==this.W&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.W));var e=function(f,h){clearTimeout(d);f?(b=f,b.internalErrorState=Zj(b),h&&0===b.internalErrorState||(b.tcString="tcunavailable",h||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{dk(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};ak.prototype.removeEventListener=function(a){a&&a.listenerId&&dk(this,"removeEventListener",null,a.listenerId)};
var fk=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var h=e;if(0===h)return!1;var k=c;2===c?(k=0,2===h&&(k=1)):3===c&&(k=1,1===h&&(k=0));var l;if(0===k)if(a.purpose&&a.vendor){var n=ek(a.vendor.consents,void 0===d?"755":d);l=n&&"1"===b&&a.purposeOneTreatment&&("DE"===a.publisherCC||wd(nd)&&"CH"===a.publisherCC)?!0:n&&ek(a.purpose.consents,b)}else l=!0;else l=
1===k?a.purpose&&a.vendor?ek(a.purpose.legitimateInterests,b)&&ek(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},ek=function(a,b){return!(!a||!a[b])},dk=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.s.__tcfapi){var e=a.s.__tcfapi;e(b,2,c,d)}else if(bk(a)){gk(a);var f=++a.Y;a.H[f]=c;if(a.o){var h={};a.o.postMessage((h.__tcfapiCall={command:b,version:2,callId:f,parameter:d},h),"*")}}else c({},!1)},bk=function(a){if(a.o)return a.o;a.o=Wj(a.s,"__tcfapiLocator");return a.o},
gk=function(a){a.C||(a.C=function(b){try{var c;c=("string"===typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.H[c.callId](c.returnValue,c.success)}catch(d){}},Tj(a.s,a.C))};var hk=!0;hk=!1;var ik={1:0,3:0,4:0,7:3,9:3,10:3};function jk(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var kk=jk("",550),lk=jk("",500);function mk(){var a=Ue.tcf||{};return Ue.tcf=a}
var nk=function(a,b){this.C=a;this.o=b;this.s=Ra();},ok=function(a){},pk=function(a){},vk=function(){var a=mk(),b=new ak(m,hk?3E3:-1),c=new nk(b,a);if((qk()?!0===m.gtag_enable_tcf_support:!1!==m.gtag_enable_tcf_support)&&!a.active&&("function"===typeof m.__tcfapi||ck(b))){a.active=!0;a.Yb={};rk();var d=null;hk?d=m.setTimeout(function(){sk(a);tk(a);d=null},lk):a.tcString="tcunavailable";try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)sk(a),tk(a),ok(c);
else{var f;a.gdprApplies=e.gdprApplies;if(!1===e.gdprApplies)f=uk(),b.removeEventListener(e);else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var h={},k;for(k in ik)if(ik.hasOwnProperty(k))if("1"===k){var l,n=e,q=!0;q=void 0===q?!1:q;var p;var r=n;!1===r.gdprApplies?p=!0:(void 0===r.internalErrorState&&(r.internalErrorState=Zj(r)),p="error"===r.cmpStatus||0!==r.internalErrorState||"loaded"===r.cmpStatus&&("tcloaded"===r.eventStatus||"useractioncomplete"===
r.eventStatus)?!0:!1);l=p?!1===n.gdprApplies||"tcunavailable"===n.tcString||void 0===n.gdprApplies&&!q||"string"!==typeof n.tcString||!n.tcString.length?!0:fk(n,"1",0):!1;h["1"]=l}else h[k]=fk(e,k,ik[k]);f=h}f&&(a.tcString=e.tcString||"tcempty",a.Yb=f,tk(a),ok(c))}}),pk(c)}catch(e){d&&(clearTimeout(d),d=null),sk(a),tk(a)}}};function sk(a){a.type="e";a.tcString="tcunavailable";hk&&(a.Yb=uk())}function rk(){var a={},b=(a.ad_storage="denied",a.wait_for_update=kk,a);Od(b)}
var qk=function(){var a=!1;a=!0;return a};function uk(){var a={},b;for(b in ik)ik.hasOwnProperty(b)&&(a[b]=!0);return a}function tk(a){var b={},c=(b.ad_storage=a.Yb["1"]?"granted":"denied",b);wk();Pd(c,0)}
var xk=function(){var a=mk();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},wk=function(){var a=mk();return a.active?a.tcString||"":""},yk=function(){var a=mk();return a.active&&void 0!==a.gdprApplies?a.gdprApplies?"1":"0":""},zk=function(a){if(!ik.hasOwnProperty(String(a)))return!0;var b=mk();return b.active&&b.Yb?!!b.Yb[String(a)]:!0};var Ak=!1;Ak=!0;function Bk(a){var b=String(m.location).split(/[?#]/)[0],c=Te.dg||m._CONSENT_MODE_SALT,d;if(a){var e;if(c){var f=b+a+c,h=1,k,l,n;if(f)for(h=0,l=f.length-1;0<=l;l--)n=f.charCodeAt(l),h=(h<<6&268435455)+n+(n<<14),k=h&266338304,h=0!=k?h^k>>21:h;e=String(h)}else e="0";d=e}else d="";return d}
function Ck(a){function b(u){var v;Ue.reported_gclid||(Ue.reported_gclid={});v=Ue.reported_gclid;var x;x=Ak&&h&&(!Hd()||J(I.D))?l+"."+(f.prefix||"_gcl")+(u?"gcu":"gcs"):l+(u?"gcu":"gcs");if(!v[x]){v[x]=!0;var z=[],w={},y=function(N,O){O&&(z.push(N+"="+encodeURIComponent(O)),w[N]=!0)},A="https://www.google.com";if(Hd()){var C=J(I.D);y("gcs",Qd());u&&y("gcu","1");Id()&&y("gcd","G1"+Md(Fd));Ue.dedupe_gclid||
(Ue.dedupe_gclid=""+Pf());y("rnd",Ue.dedupe_gclid);if((!l||n&&"aw.ds"!==n)&&J(I.D)){var F=Pg("_gcl_aw");y("gclaw",F.join("."))}y("url",String(m.location).split(/[?#]/)[0]);y("dclid",Dk(d,q));var E=!1;E=!0;C||!d&&!E||(A="https://pagead2.googlesyndication.com")}
y("gdpr_consent",wk()),y("gdpr",yk());"1"===zg(!1)._up&&y("gtm_up","1");y("gclid",Dk(d,l));y("gclsrc",n);if(!(w.gclid||w.dclid||w.gclaw)&&(y("gbraid",Dk(d,p)),!w.gbraid&&Hd()&&J(I.D))){var H=Pg("_gcl_gb");y("gclgb",H.join("."))}y("gtm",Sj(!e));Ak&&h&&J(I.D)&&(bg(f||{}),y("auid",Yf[Zf(f.prefix)]||""));
a.xf&&y("did",a.xf);var P=A+"/pagead/landing?"+z.join("&");Qb(P)}}var c=!!a.Md,d=!!a.oa,e=a.P,f=void 0===a.Lc?{}:a.Lc,h=void 0===a.Rc?!0:a.Rc,k=Vg(),l=k.gclid||"",n=k.gclsrc,q=k.dclid||"",p=k.gbraid||"",r=!c&&((!l||n&&"aw.ds"!==n?!1:!0)||p),t=Hd();if(r||t)t?Sd(function(){b();J(I.D)||Rd(function(u){return b(!0,u.fh)},I.D)},[I.D]):b()}function Dk(a,b){var c=a&&!J(I.D);return b&&c?"0":b}var El=function(){var a=!0;zk(7)&&zk(9)&&zk(10)||(a=!1);var b=!0;b=!1;b&&!Dl()&&(a=!1);return a},Dl=function(){var a=!0;zk(3)&&zk(4)||(a=!1);return a};var bm=!1;function cm(){var a=Ue;return a.gcq=a.gcq||new dm}
var em=function(a,b,c){cm().register(a,b,c)},fm=function(a,b,c,d){cm().push("event",[b,a],c,d)},gm=function(a,b){cm().push("config",[a],b)},hm=function(a,b,c,d){cm().push("get",[a,b],c,d)},im={},jm=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.remoteConfig={};this.s={};this.C=null;this.o=!1},km=function(a,b,c,d,e){this.type=a;this.C=b;this.P=c||"";this.o=d;this.s=e},dm=function(){this.s={};this.C={};this.o=[];this.H={AW:!1,UA:!1};this.enableDeferrableCommandAfterConfig=
bm},lm=function(a,b){var c=th(b);return a.s[c.containerId]=a.s[c.containerId]||new jm},mm=function(a,b,c){if(b){var d=th(b);if(d&&1===lm(a,b).status){lm(a,b).status=2;var e={};gj&&(e.timeoutId=m.setTimeout(function(){ld(38);Si()},3E3));a.push("require",[e],d.containerId);im[d.containerId]=Ra();if(wh()){}else{var h="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",k=("http:"!=m.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+h),l=Cj(c,h)||k;Bb(l)}}}},nm=function(a,b,c,d){if(d.P){var e=lm(a,d.P),f=e.C;if(f){var h=G(c),k=G(e.targetConfig[d.P]),l=G(e.containerConfig),n=G(e.remoteConfig),q=G(a.C),p=nf("gtm.uniqueEventId"),r=th(d.P).prefix,t=Mj(Lj(Nj(Kj(Jj(Ij(Hj(Gj(Fj(h),k),l),n),q),function(){
jj(p,r,"2");}),function(){jj(p,r,"3");}),function(u,v){a.H[u]=v}),function(u){return a.H[u]});try{jj(p,r,"1");f(d.P,b,d.C,t)}catch(u){jj(p,r,"4");}}}};
dm.prototype.register=function(a,b,c){var d=lm(this,a);if(3!==d.status){d.C=b;d.status=3;if(c){G(d.remoteConfig,c);d.remoteConfig=c}var e=th(a),f=im[e.containerId];if(void 0!==f){var h=Ue[e.containerId].bootstrap,k=e.prefix.toUpperCase();Ue[e.containerId]._spx&&(k=k.toLowerCase());var l=nf("gtm.uniqueEventId"),n=k,q=Ra()-h;if(gj&&!Xi[l]){l!==Ti&&(Pi(),Ti=l);var p=n+"."+Math.floor(h-
f)+"."+Math.floor(q);aj=aj?aj+","+p:"&cl="+p}delete im[e.containerId]}this.flush()}};dm.prototype.push=function(a,b,c,d){var e=Math.floor(Ra()/1E3);mm(this,c,b[0][I.da]||this.C[I.da]);bm&&c&&lm(this,c).o&&(d=!1);this.o.push(new km(a,e,c,b,d));d||this.flush()};dm.prototype.insert=function(a,b,c){var d=Math.floor(Ra()/1E3);0<this.o.length?this.o.splice(1,0,new km(a,d,c,b,!1)):this.o.push(new km(a,d,c,b,!1))};
dm.prototype.flush=function(a){for(var b=this,c=[],d=!1,e={};this.o.length;){var f=this.o[0];if(f.s)bm?!f.P||lm(this,f.P).o?(f.s=!1,this.o.push(f)):c.push(f):(f.s=!1,this.o.push(f)),this.o.shift();else{switch(f.type){case "require":if(3!==lm(this,f.P).status&&!a){bm&&this.o.push.apply(this.o,c);return}gj&&m.clearTimeout(f.o[0].timeoutId);break;case "set":Fa(f.o[0],function(r,t){G(Ya(r,t),b.C)});break;case "config":e.Da={};Fa(f.o[0],function(r){return function(t,u){G(Ya(t,u),r.Da)}}(e));var h=!!e.Da[I.yc];
delete e.Da[I.yc];var k=lm(this,f.P),l=th(f.P),n=l.containerId===l.id;h||(n?k.containerConfig={}:k.targetConfig[f.P]={});k.o&&h||nm(this,I.sa,e.Da,f);k.o=!0;delete e.Da[I.Lb];n?G(e.Da,k.containerConfig):G(e.Da,k.targetConfig[f.P]);bm&&(d=!0);break;case "event":e.bc={};Fa(f.o[0],function(r){return function(t,u){G(Ya(t,u),r.bc)}}(e));nm(this,f.o[1],e.bc,f);break;case "get":var q={},p=(q[I.Pa]=f.o[0],q[I.Oa]=f.o[1],q);nm(this,I.Fa,p,f)}this.o.shift();om(this,f)}e={Da:e.Da,bc:e.bc}}bm&&(this.o.push.apply(this.o,
c),d&&this.flush())};var om=function(a,b){if("require"!==b.type)if(b.P)for(var c=a.getCommandListeners(b.P)[b.type]||[],d=0;d<c.length;d++)c[d]();else for(var e in a.s)if(a.s.hasOwnProperty(e)){var f=a.s[e];if(f&&f.s)for(var h=f.s[b.type]||[],k=0;k<h.length;k++)h[k]()}};dm.prototype.getRemoteConfig=function(a){return lm(this,a).remoteConfig};dm.prototype.getCommandListeners=function(a){return lm(this,a).s};var pm=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":Rb(a,"className"),"gtm.elementId":a["for"]||Jb(a,"id")||"","gtm.elementTarget":a.formTarget||Rb(a,"target")||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||Rb(a,"href")||a.src||a.code||a.codebase||"";return d},qm=function(a){Ue.hasOwnProperty("autoEventsSettings")||(Ue.autoEventsSettings={});var b=Ue.autoEventsSettings;b.hasOwnProperty(a)||(b[a]=
{});return b[a]},rm=function(a,b,c){qm(a)[b]=c},sm=function(a,b,c,d){var e=qm(a),f=Sa(e,b,d);e[b]=c(f)},tm=function(a,b,c){var d=qm(a);return Sa(d,b,c)};var um=!!m.MutationObserver,vm=void 0,wm=function(a){if(!vm){var b=function(){var c=B.body;if(c)if(um)(new MutationObserver(function(){for(var e=0;e<vm.length;e++)D(vm[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;Hb(c,"DOMNodeInserted",function(){d||(d=!0,D(function(){d=!1;for(var e=0;e<vm.length;e++)D(vm[e])}))})}};vm=[];B.body?b():D(b)}vm.push(a)};var ym=!1,zm=[];function Am(){if(!ym){ym=!0;for(var a=0;a<zm.length;a++)D(zm[a])}}var Bm=function(a){ym?D(a):zm.push(a)};Object.freeze({dl:1,id:1});var Cm="HA GF G UA AW DC".split(" "),Dm=!1,Em={},Fm=!1;function Gm(a,b){var c={event:a};b&&(c.eventModel=G(b),b[I.qd]&&(c.eventCallback=b[I.qd]),b[I.oc]&&(c.eventTimeout=b[I.oc]));return c}function Hm(a){a.hasOwnProperty("gtm.uniqueEventId")||Object.defineProperty(a,"gtm.uniqueEventId",{value:gf()});return a["gtm.uniqueEventId"]}
function Im(){return Dm}
var Lm={config:function(a){var b,c;void 0===c&&(c=gf());return b},consent:function(a){function b(){Im()&&G(a[2],{subcommand:a[1]})}if(3===a.length){ld(39);var c=gf(),d=a[1];"default"===d?(b(),Od(a[2])):"update"===d&&(b(),Pd(a[2],c))}},event:function(a){var b=a[1];if(!(2>a.length)&&g(b)){var c;if(2<a.length){if(!Vb(a[2])&&
void 0!=a[2]||3<a.length)return;c=a[2]}var d=Gm(b,c),e=void 0;void 0===e&&gf();return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime){Fm=!0;Im();var b={event:"gtm.js","gtm.start":a[1].getTime()};return b}},policy:function(){},set:function(a){var b;2==a.length&&Vb(a[1])?b=G(a[1]):3==a.length&&
g(a[1])&&(b={},Vb(a[2])||xa(a[2])?b[a[1]]=G(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},Mm={policy:!0};var Nm=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Pm=function(a){var b=Om(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var hn=function(a){if(gn(a))return a;this.o=a};hn.prototype.wh=function(){return this.o};var gn=function(a){return!a||"object"!==Tb(a)||Vb(a)?!1:"getUntrustedUpdateValue"in a};hn.prototype.getUntrustedUpdateValue=hn.prototype.wh;var jn=[],kn=!1,ln=!1,mn=!1,nn=function(a){return m["dataLayer"].push(a)},on=function(a){var b=Ue["dataLayer"],c=b?b.subscribers:1,d=0,e=a;return function(){++d===c&&(e(),e=null)}};
function pn(a){var b=a._clear;Fa(a,function(d,e){"_clear"!==d&&(b&&qf(d,void 0),qf(d,e))});bf||(bf=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=gf(),a["gtm.uniqueEventId"]=c,qf("gtm.uniqueEventId",c));return Aj(a)}function qn(){var a=jn[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(Ia(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function rn(){for(var a=!1;!mn&&0<jn.length;){var b=!1;b=!0;if(b&&!ln&&qn()){var c={};jn.unshift((c.event=
"gtm.init",c));ln=!0}var d=!1;d=!0;if(d&&!kn&&qn()){var e={};jn.unshift((e.event="gtm.init_consent",e));kn=!0}mn=!0;delete kf.eventModel;mf();var f=jn.shift();if(null!=f){var h=gn(f);
if(h){var k=f;f=gn(k)?k.getUntrustedUpdateValue():void 0;for(var l=["gtm.allowlist","gtm.blocklist","gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],n=0;n<l.length;n++){var q=l[n],p=nf(q,1);if(xa(p)||Vb(p))p=G(p);lf[q]=p}}try{if(va(f))try{f.call(of)}catch(y){}else if(xa(f)){var r=f;if(g(r[0])){var t=r[0].split("."),u=t.pop(),v=r.slice(1),x=nf(t.join("."),2);if(void 0!==x&&null!==x)try{x[u].apply(x,v)}catch(y){}}}else{if(Ia(f)){a:{var z=f;if(z.length&&g(z[0])){var w=Lm[z[0]];if(w&&(!h||!Mm[z[0]])){f=
w(z);break a}}f=void 0}if(!f){mn=!1;continue}}a=pn(f)||a}}finally{h&&mf(!0)}}mn=!1}return!a}
function sn(){var b=rn();try{Nm(m["dataLayer"],Te.M)}catch(c){}return b}
var un=function(){var a=zb("dataLayer",[]),b=zb("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};ei(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});Bm(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<Ue.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new hn(arguments[f])}else e=[].slice.call(arguments,0);var h=c.apply(a,e);jn.push.apply(jn,e);if(300<
this.length)for(ld(4);300<this.length;)this.shift();var k="boolean"!==typeof h||h;return rn()&&k};var d=a.slice(0);jn.push.apply(jn,d);if(tn()){D(sn)}},tn=function(){var a=!0;return a};var vn={};vn.Cc=new String("undefined");
var wn=function(a){this.o=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===vn.Cc?b:a[d]);return c.join("")}};wn.prototype.toString=function(){return this.o("undefined")};wn.prototype.valueOf=wn.prototype.toString;vn.Tg=wn;vn.Id={};vn.jh=function(a){return new wn(a)};var xn={};vn.Vh=function(a,b){var c=gf();xn[c]=[a,b];return c};vn.wf=function(a){var b=a?0:1;return function(c){var d=xn[c];if(d&&"function"===typeof d[b])d[b]();xn[c]=void 0}};vn.Bh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};vn.Ph=function(a){if(a===vn.Cc)return a;var b=gf();vn.Id[b]=a;return'google_tag_manager["'+Te.M+'"].macro('+b+")"};vn.Lh=function(a,b,c){a instanceof vn.Tg&&(a=a.o(vn.Vh(b,c)),b=ua);return{xh:a,onSuccess:b}};var yn=["input","select","textarea"],zn=["button","hidden","image","reset","submit"],An=function(a){var b=a.tagName.toLowerCase();return!Ba(yn,function(c){return c===b})||"input"===b&&Ba(zn,function(c){return c===a.type.toLowerCase()})?!1:!0},Bn=function(a){return a.form?a.form.tagName?a.form:B.getElementById(a.form):Mb(a,["form"],100)},Cn=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(An(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var Nn=m.clearTimeout,On=m.setTimeout,L=function(a,b,c){if(wh()){b&&D(b)}else return Bb(a,b,c)},Pn=function(){return new Date},Qn=function(){return m.location.href},Rn=function(a){return ke(me(a),"fragment")},Sn=function(a){return le(me(a))},Tn=function(a,b){return nf(a,b||2)},Un=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=nn(a)):d=nn(a);return d},Vn=function(a,b){m[a]=b},S=function(a,b,c){b&&
(void 0===m[a]||c&&!m[a])&&(m[a]=b);return m[a]},Wn=function(a,b,c){return Df(a,b,void 0===c?!0:!!c)},Xn=function(a,b,c){return 0===Mf(a,b,c)},Yn=function(a,b){if(wh()){b&&D(b)}else Fb(a,b)},Zn=function(a){return!!tm(a,"init",!1)},$n=function(a){rm(a,"init",!0)},ao=function(a){var b=$e+"?id="+encodeURIComponent(a)+"&l=dataLayer";L(yh("https://","http://",b))},bo=function(a,b,c){gj&&(Wb(a)||kj(c,b,a))};var co=vn.Lh;function Ao(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var Bo=new Da;function Co(a,b,c){var d=c?"i":void 0;try{var e=String(b)+d,f=Bo.get(e);f||(f=new RegExp(b,d),Bo.set(e,f));return f.test(a)}catch(h){return!1}}
function Do(a,b){function c(h){var k=me(h),l=ke(k,"protocol"),n=ke(k,"host",!0),q=ke(k,"port"),p=ke(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==q||"https"==l&&"443"==q)l="web",q="default";return[l,n,q,p]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Eo(a){return Fo(a)?1:0}
function Fo(a){var b=a.arg0,c=a.arg1;if(a.any_of&&xa(c)){for(var d=0;d<c.length;d++){var e=G(a,{});G({arg1:c[d],any_of:void 0},e);if(Eo(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var h=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var k=0;k<h.length;k++)if(b[h[k]]){f=b[h[k]](c);break a}}catch(n){}}f=!1}return f;case "_ew":return Ao(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=ya(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":return Co(b,c,a.ignore_case);case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Do(b,c)}return!1};var Go=encodeURI,V=encodeURIComponent,Ho=Gb;var Io=function(a,b){if(!a)return!1;var c=ke(me(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Jo=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};function sq(){return m.gaGlobal=m.gaGlobal||{}}var tq=function(){var a=sq();a.hid=a.hid||Ca();return a.hid},uq=function(a,b){var c=sq();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var Rq=function(){if(va(m.__uspapi)){var a="";try{m.__uspapi("getUSPData",1,function(b,c){if(c&&b){var d=b.uspString;d&&/^[\da-zA-Z-]{1,20}$/.test(d)&&(a=d)}})}catch(b){}return a}};var kr=window,lr=document,mr=function(a){var b=kr._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===kr["ga-disable-"+a])return!0;try{var c=kr.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=zf("AMP_TOKEN",String(lr.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return lr.getElementById("__gaOptOutExtension")?!0:!1};var nr={};
function qr(a){delete a.eventModel[I.Lb];sr(a.eventModel)}var sr=function(a){Fa(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[I.Ia]||{};Fa(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var vr=function(a,b,c){fm(b,c,a)},wr=function(a,b,c){fm(b,c,a,!0)},yr=function(a,b){};
function xr(a,b){}var Z={g:{}};

Z.g.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.h="jsm";Z.__jsm.m=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=S("google_tag_manager");var d=c&&c.e&&c.e(b);bo(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();Z.g.c=["google"],function(){(function(a){Z.__c=a;Z.__c.h="c";Z.__c.m=!0;Z.__c.priorityOverride=0})(function(a){bo(a.vtp_value,"c",a.vtp_gtmEventId);return a.vtp_value})}();
Z.g.e=["google"],function(){(function(a){Z.__e=a;Z.__e.h="e";Z.__e.m=!0;Z.__e.priorityOverride=0})(function(a){var b=String(tf(a.vtp_gtmEventId,"event"));a.vtp_gtmCachedValues&&(b=String(a.vtp_gtmCachedValues.event));return b})}();
Z.g.f=["google"],function(){(function(a){Z.__f=a;Z.__f.h="f";Z.__f.m=!0;Z.__f.priorityOverride=0})(function(a){var b=Tn("gtm.referrer",1)||B.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?ke(me(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Sn(String(b)):String(b)})}();Z.g.k=["google"],function(){(function(a){Z.__k=a;Z.__k.h="k";Z.__k.m=!0;Z.__k.priorityOverride=0})(function(a){return Wn(a.vtp_name,Tn("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();
Z.g.r=["google"],function(){(function(a){Z.__r=a;Z.__r.h="r";Z.__r.m=!0;Z.__r.priorityOverride=0})(function(a){return Ca(a.vtp_min,a.vtp_max)})}();
Z.g.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.h="u";Z.__u.m=!0;Z.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Tn("gtm.url",1))||Qn();var d=b[a("vtp_component")];if(!d||"URL"==d)return Sn(String(c));var e=me(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],n;h?xa(k)?n=k:n=String(k).replace(/\s+/g,
"").split(","):n=[String(k)];for(var q=0;q<n.length;q++){var p=ke(e,"QUERY",void 0,void 0,n[q]);if(void 0!=p&&(!l||""!==p)){f=p;break a}}f=void 0}else f=ke(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.g.v=["google"],function(){(function(a){Z.__v=a;Z.__v.h="v";Z.__v.m=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Tn(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;bo(d,"v",a.vtp_gtmEventId);return d})}();








Z.g.remm=["google"],function(){(function(a){Z.__remm=a;Z.__remm.h="remm";Z.__remm.m=!0;Z.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=a.vtp_defaultValue,h=0;h<c.length;h++){var k=c[h].key||"";d&&(k="^"+k+"$");var l=new RegExp(k,e);if(l.test(b)){var n=c[h].value;a.vtp_replaceAfterMatch&&(n=String(b).replace(l,n));f=n;break}}bo(f,"remm",a.vtp_gtmEventId);return f})}();Z.g.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.h="smm";Z.__smm.m=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Jo(a.vtp_map,"key","value")||{},d=c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue;bo(d,"smm",a.vtp_gtmEventId);return d})}();




Z.g.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.h="paused";Z.__paused.m=!0;Z.__paused.priorityOverride=0})(function(a){D(a.vtp_gtmOnFailure)})}();

Z.g.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var n=B.createElement("script");n.async=!1;n.type="text/javascript";n.id=k.id;n.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(n.charset=k.charset);var q=k.getAttribute("data-gtmsrc");q&&(n.src=q,Ab(n,l));d.insertBefore(n,null);q||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];k.firstChild;)p.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,p,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(r){D(h)}}}var c=function(d){if(B.body){var e=
d.vtp_gtmOnFailure,f=co(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.xh,k=f.onSuccess;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(B.body,Lb(h),k,e)()}else On(function(){c(d)},
200)};Z.__html=c;Z.__html.h="html";Z.__html.m=!0;Z.__html.priorityOverride=0}();








var Gr={};Gr.macro=function(a){if(vn.Id.hasOwnProperty(a))return vn.Id[a]},Gr.onHtmlSuccess=vn.wf(!0),Gr.onHtmlFailure=vn.wf(!1);Gr.dataLayer=of;Gr.callback=function(a){ef.hasOwnProperty(a)&&va(ef[a])&&ef[a]();delete ef[a]};Gr.bootstrap=0;Gr._spx=!1;function Hr(){Ue[Te.M]=Gr;Va(ff,Z.g);Dc=Dc||vn;Ec=Mc}
function Ir(){var a=!1;a&&ni("INIT");vd.s().s();Ue=m.google_tag_manager=m.google_tag_manager||{};vk();
Ig.enable_gbraid_cookie_write=!0;if(Ue[Te.M]){var b=Ue.zones;b&&b.unregisterChild(Te.M);}else{for(var c=data.resource||{},d=c.macros||[],e=0;e<d.length;e++)wc.push(d[e]);for(var f=c.tags||[],h=0;h<f.length;h++)zc.push(f[h]);for(var k=c.predicates||[],l=0;l<k.length;l++)yc.push(k[l]);for(var n=c.rules||[],q=0;q<n.length;q++){for(var p=n[q],r={},t=
0;t<p.length;t++)r[p[t][0]]=Array.prototype.slice.call(p[t],1);xc.push(r)}Bc=Z;Cc=Eo;Hr();un();$h=!1;ai=0;if("interactive"==B.readyState&&!B.createEventObject||"complete"==B.readyState)ci();else{Hb(B,"DOMContentLoaded",ci);Hb(B,"readystatechange",ci);if(B.createEventObject&&B.documentElement.doScroll){var u=!0;try{u=!m.frameElement}catch(y){}u&&di()}Hb(m,"load",ci)}ym=!1;"complete"===B.readyState?Am():Hb(m,"load",Am);gj&&m.setInterval(fj,864E5);cf=(new Date).getTime();if(a){var w=oi("INIT");}}}
(function(a){if(!m["__TAGGY_INSTALLED"]){var b=!1;if(B.referrer){var c=me(B.referrer);b="cct.google"===je(c,"host")}if(!b){var d=Df("googTaggyReferrer");b=d.length&&d[0].length}b&&(m["__TAGGY_INSTALLED"]=!0,Bb("https://cct.google/taggy/agent.js"))}var f=function(){var n=m["google.tagmanager.debugui2.queue"];n||(n=[],m["google.tagmanager.debugui2.queue"]=n,Bb("https://www.googletagmanager.com/debug/bootstrap"));var q={messageType:"CONTAINER_STARTING",data:{scriptSource:yb,containerProduct:"GTM",debug:!1}};q.data.resume=function(){a()};Te.cg&&(q.data.initialPublish=!0);n.push(q)},h="x"===ke(m.location,"query",!1,void 0,"gtm_debug");if(!h&&B.referrer){var k=me(B.referrer);h="tagassistant.google.com"===je(k,"host")}if(!h){var l=Df("__TAG_ASSISTANT");h=l.length&&l[0].length}m.__TAG_ASSISTANT_API&&(h=!0);h&&yb?f():a()})(Ir);

})()
