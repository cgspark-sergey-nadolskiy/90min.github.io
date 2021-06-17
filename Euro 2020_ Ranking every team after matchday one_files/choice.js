'use strict';(function(){(function(){var cmpScriptElement=document.createElement('script');var firstScript=document.getElementsByTagName('script')[0];cmpScriptElement.async=true;cmpScriptElement.type='text/javascript';var cmpVersion='https://quantcast.mgr.consensu.org/tcfv2/cmp2.js?referer=www.90min.com/';cmpScriptElement.src=cmpVersion;firstScript.parentNode.insertBefore(cmpScriptElement,firstScript);})();(function(){var css=""
+" .qc-cmp-button { "
+"   background-color: #FFC107 !important; "
+"   border-color: #FFC107 !important; "
+" } "
+" .qc-cmp-button:hover { "
+"   border-color: #FFC107 !important; "
+" } "
+" .qc-cmp-alt-action, "
+" .qc-cmp-link { "
+"   color: #FFC107 !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button:hover { "
+"   background-color: #FFC107 !important; "
+"   border-color: #FFC107 !important; "
+" } "
+" .qc-cmp-button { "
+"   color: #000000 !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button:hover { "
+"   color: #000000 !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button { "
+"   color: #000000 !important; "
+" } "
+" .qc-cmp-button.qc-cmp-secondary-button { "
+"   background-color: #CCCCCC !important; "
+"   border-color: transparent !important; "
+" } "
+" .qc-cmp-ui, "
+" .qc-cmp-ui .qc-cmp-title, "
+" .qc-cmp-ui .qc-cmp-table, "
+" .qc-cmp-ui .qc-cmp-messaging, "
+" .qc-cmp-ui .qc-cmp-sub-title, "
+" .qc-cmp-ui .qc-cmp-vendor-list, "
+" .qc-cmp-ui .qc-cmp-purpose-info, "
+" .qc-cmp-ui .qc-cmp-table-header, "
+" .qc-cmp-ui .qc-cmp-beta-messaging, "
+" .qc-cmp-ui .qc-cmp-main-messaging, "
+" .qc-cmp-ui .qc-cmp-vendor-list-title{ "
+"   color: #000000 !important; "
+" } "
+" .qc-cmp-ui { "
+"   background-color: #FFFFFF !important; "
+" } "
+" .qc-cmp-small-toggle.qc-cmp-toggle-on, "
+" .qc-cmp-toggle.qc-cmp-toggle-on { "
+"   background-color: #000000!important; "
+"   border-color: #000000!important; "
+" } "
+"qc-cmp-button { background-color: #ffc107 !important; border-color: #ffc107 !important; color: white !important;}.qc-cmp-button:hover { border-color: #75CEDC !important; color: black !important;}.qc-cmp-toggle-off { background-color: #CCCCCC !important; border-color: #CCCCCC !important;}.qc-cmp-small-toggle.qc-cmp-toggle-on, .qc-cmp-toggle.qc-cmp-toggle-on { border-color: #ffc107 !important; background-color: #ffc107 !important; }.qc-cmp-button.qc-cmp-button-small { line-height: 27px !important;}.qc-cmp-link-text { display: none !important;}.qc-cmp-qc-link { display: none !important;}.qc-cmp-ui-container .qc-cmp-ui{min-height:unset!important;}body .qc-cmp-ui{position:fixed;bottom:0;max-width:100%;width:100%}body .qc-cmp-alt-buttons{padding-bottom:10px!important}body .qc-cmp-button{border: none;font-size:16px;height:48px!important;letter-spacing:.2px;text-transform:none}.qc-cmp-ui-content{padding:15px}@media only screen and (max-width:500px){ .qc-cmp-title{font-size:23px;line-height:21px} .qc-cmp-main-messaging{padding:10px 0;font-size:11px;line-height:13px} .qc-cmp-qc-link-container{height:0px;width:0px;padding:0px;margin:0px}}.qc-cmp-alt-action { text-align: left !important;}@media screen and (max-width:850px){ .qc-cmp-buttons{ padding-top:10px }}"
+""
+"";var stylesElement=document.createElement('style');var re=new RegExp('&quote;','g');css=css.replace(re,'"');stylesElement.type='text/css';if(stylesElement.styleSheet){stylesElement.styleSheet.cssText=css;}else{stylesElement.appendChild(document.createTextNode(css));}
var head=document.head||document.getElementsByTagName('head')[0];head.appendChild(stylesElement);})();var autoDetectedLanguage='en';function splitLang(lang){return lang.length>2?lang.split('-')[0]:lang;};function isSupported(lang){var langs=['en','fr','de','it','es','da','nl','el','hu','pt','ro','fi','pl','sk','sv','no','ru','bg','ca','cs','et','hr','lt','lv','mt','sl','tr','zh'];return langs.indexOf(lang)===-1?false:true;};if(isSupported(splitLang(document.documentElement.lang))){autoDetectedLanguage=splitLang(document.documentElement.lang);}else if(isSupported(splitLang(navigator.language))){autoDetectedLanguage=splitLang(navigator.language);};var choiceMilliSeconds=(new Date).getTime();window.__tcfapi('init',2,function(){},{'premiumProperties':{'nonIabVendorListUrl':'https://quantcast.mgr.consensu.org/choice/2wFeGW5ExM-u7/www.90min.com/.well-known/noniab-vendorlist.json','vendorBlacklist':[92,217,740,240,628,174,272,720,318,231,147,649,57,738,766,299,377,539,310,553,556,15,14,93,447,47,149,664,9,22,511,565,224,613,615,6,66,205,507,779,410,211,199,195,41,746,723,359,722,501,23,780,155,733,728,495,215,409,223,394,742,167,561,598,748,63,678,610,771,549,273,721,12,618,128,185,30,218,625,439,739,94,620,684,374,163,256,741,422,235,676,2,729,315,734,319,243,277,285,416,143,138,591,630,248,683,85,91,412,713,440,209,707,735,761,665,133,343,778,754,498,708,674,168,402,688,8,24,413,312,1,120,408,100,78,350,119,262,316,455,731,328,758,768,536,690,749,657,765,467,550,626,206,178,699,131,606,479,333,535,712,265,428,596,675,436,438,129,252,527,294,568,745,747,528,314,751,325,544,424,702,691,97,587,65,95,764,486,153,317,614,770,776,599,228,79,769,184,358,216,703,101,279,687,289,302,663,743,681,72,263,709,530,450,34,160,521,37,577,502,130,645,646,31,304,716,777,241,617,719,602,255,488,303,227,559,164,543,139,516,727,127,177,609,593,418,725,226,512,250,682,60,290,574,545,631,192,659,759,194,554,4,16,351,753,86,371,157,415,775,84,33,505,59,429,73,53,711,652,82,161,546,115,531,653,134,639,694,381,662,249,280,484,517,714,42,466,89,200,475,336,650,90,44,345,686,750,524,382,656,49,423,88,387,491,648,242,757,607,212,368,760,190,571,83,774,601,284,282,668,431,18,281,51,70,251,154,234,210,301,773,331,788,790,809,799,798,697,264,259,375,785,782,685,797,509,783,122,801,666,736,658,792,493,672,803,767,570,323,434,584,110,796,347,795,781,644,274,789,811,569,794,805,67,804,254,508,270,791,311,807,20,468,624,802,784,388,638,732,361,360,384,140,297,808,800,787,158,71,621,337,435,246,145,590,238,275,448,786,124,244,482,26,7,380,706,141,458,813,724,462,815,520,378,541,756,820,810,817,519,816,427,547,819,261,814,159,459,579,821,365,876,824,830,870,151,889,612,855,859,834,827,841,27,822,900,891,461,647,335,597,715,869,836,848,890,840,179,868,847,298,334,875,763,899,833,852,826,854,183,849,877,897,471,823,888,845,892,87,170,654,865,881,856,873,871,896,838,843,667,884,148,846,895,578,193,858,867,878,48,882,832,349,839,236,874,850,860,842,835,880,266,886,863,506,295,857,844,293,851,137,136,198,894,670,893,861,862,828,829,831,744,879,276,718,866,469,321,825,883,906,925,922,496,907,920,905,397,885,929,923,61,921,930,919,909,902,915,928,914,903,911,308,927,916,918,917,912,901,473,102,202,931,837,932,924,926,908,948,806,40,196,39,941,999,959,956,960,981,978,944,717,983,946,934,986,954,963,958,973,996,938,936,853,29,957,997,1002,970,967,971,988,995,933,864,935,991,942,945,972,1007,955,994,998,75,943,987,671,979,581,1003,1000,982,965,1006,976,975,961,947,990,993,992,969,949,966,937,964,1005,977,989,974,951,208,230,950,962,940,237,1004,980,968,1001,726,818],},'coreUiLabels':{},'premiumUiLabels':{'uspDnsTitle':'Do Not Sell My Personal Information','uspDnsText':["<p>We, and our partners, use technologies to process personal information, including IP addresses, pseudonymous identifiers associated with cookies, and in some cases mobile ad IDs. This information is processed to personalize content based on your interests, run and optimize marketing campaigns, measure the performance of ads and content, and derive insights based on audiences who engage with ads and content. This data is an integral part of how we operate our site, make revenue to support our staff, and generate relevant content for our audience. You can learn more about our data collection and use practices in our Privacy Policy.&nbsp;If you wish to request that your personal information is not shared with third parties, please click on the below checkbox and confirm your selection. Please note that after your opt out request is processed, we may still collect your information in order to operate our site.</p><br/><p>If you are a California resident, this use of your personal information by us might be considered a 'sale' (as defined in the California Consumer Privacy Act of 2018 (CCPA)) under certain circumstances.</p>"],'uspPrivacyPolicyLinkText':'Privacy Policy','uspDeleteDataLinkText':'Data Deletion','uspAccessDataLinkText':'Cookie Policy',},'theme':{'uxBackgroundColor':'#FFFFFF','uxPrimaryButtonColor':'#FFC107','uxSecondaryButtonColor':'#CCCCCC','uxPrimaryButtonTextColor':'#000000','uxSecondaryButtonTextColor':'#000000','uxToogleActiveColor':'#000000','uxFontColor':'#000000',},'coreConfig':{'consentScope':'service','thirdPartyStorageType':'iframe','consentOnSafari':false,'lang_':'en','displayUi':'inEU','initScreenBodyTextOption':1,'defaultToggleValue':'off','initScreenRejectButtonShowing':false,'publisherConsentRestrictionIds':[],'publisherLIRestrictionIds':[],'softOptInEnabled':false,'showSummaryView':true,'persistentConsentLinkLocation':3,'displayPersistentConsentLink':false,'uiLayout':'banner','publisherPurposeIds':[],'publisherPurposeLegitimateInterestIds':[],'publisherSpecialPurposesIds':[],'publisherFeaturesIds':[],'publisherSpecialFeaturesIds':[],'stacks':[1,42],'vendorListUpdateFreq':30,'quantcastAccountId':'2wFeGW5ExM-u7','privacyMode':["GDPR","USP"],'hashCode':'HM/CcqfrlzgbeZX3WgXjKA','publisherCountryCode':'US','publisherName':'MinuteMedia','vendorPurposeIds':[1,2,4,7,10,3,5,6,8,9],'vendorFeaturesIds':[2,3,1],'vendorPurposeLegitimateInterestIds':[7,6,8,9,10,2,3,4,5],'vendorSpecialFeaturesIds':[2,1],'vendorSpecialPurposesIds':[1,2],'googleEnabled':true,'uspVersion':1,'uspJurisdiction':["CA"],'uspLspact':'N','uspPrivacyPolicyLink':'https://www.90min.com/privacy','uspDeleteDataLink':'https://www.90min.com/privacy','uspAccessDataLink':'https://www.90min.com/cookie_policy','suppressCcpaLinks':false,},'nonIabVendorsInfo':{"nonIabVendorList":[{"vendorId":6,"pCode":"2wFeGW5ExM-u7","name":"Facebook, Inc.","description":"Social networking service company","privacyPolicyUrl":"https://www.facebook.com/full_data_use_policy","nonIabPurposeConsentIds":[],"nonIabPurposeLegitimateInterestIds":[]},{"vendorId":15,"pCode":"2wFeGW5ExM-u7","name":"Soundcloud","privacyPolicyUrl":"https://soundcloud.com/pages/privacy","nonIabPurposeConsentIds":[],"nonIabPurposeLegitimateInterestIds":[]},{"vendorId":16,"pCode":"2wFeGW5ExM-u7","name":"LogoBar Enterprises, LLC","privacyPolicyUrl":"http://logobar.tv/terms/","nonIabPurposeConsentIds":[7,1,10],"nonIabPurposeLegitimateInterestIds":[]}],"updateAt":"2021-06-03T16:51:49.243477Z","nonIabVendorsHash":"2E5C0C6589E880D325C358473CB05064"}});})();