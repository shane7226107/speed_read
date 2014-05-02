/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {	
    // Application Constructor
    initialize: function() {
        this.bindEvents();        
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {    	
    	var running_sentences,
    		running_words,
    		//sentence = "228事件始末關於戰後臺灣歸屬的問題最早見諸於二次大戰期間民國32年（1943）中美英共同發表的「開羅宣言」聲明「日本竊取於中國之領土例如滿州臺灣澎湖群島等應歸還給中華民國」雖然這項宣言屬於新聞公報並不具有國際法的效力但為日本戰敗後臺灣的主權歸屬作出了明確的主張民國34年（1945）美英中蘇發表「波茨坦宣言」要求日本無條件投降並重申「開羅宣言」的主張同年8月6日9日美軍在日本廣島長崎各投下一顆原子彈造成慘烈的傷亡震驚日本8月15日日本天皇向全國廣播發佈投降詔文本宣佈投降之後盟軍最高統帥麥克亞瑟將軍隨即發佈聯合國第一號命令命令中國（東三省除外）臺灣與越南（北緯16度以上的地區）的日軍應向中國戰區最高統帥蔣介石將軍投降國民政府隨即在重慶成立了「臺灣省行政長官公署」任命陳儀擔任臺灣的行政長官兼警備總司令日本投降的消息傳來臺灣民眾欣喜若狂整個社會掀起一股歡迎祖國及學習國語的熱潮社會士紳組織「歡迎國民政府籌備會」並組成「光復致敬團」前往南京向中央政府致意從8月15日至10月15日首批國民政府接收人員抵台之前這兩個月的政治空窗期知識青年亦熱心組織青年服務隊或加入「三民主義青年團」地方領袖亦組織各種自治團體使臺灣在這政權移交的過渡階段並未發生社會失序的問題10月16日首批來台的國軍部隊在美軍護航下分乘三十餘艘美軍軍艦抵達基隆港國軍上岸部隊所經之處民眾夾道歡迎旗海飄揚10月25日受降典禮在臺北市的中山堂（公會堂）舉行由陳儀代表盟軍接受臺灣總督府最後一任總督安藤利吉代表日本政府簽署的降書後來這一天被國民政府命名為「臺灣光復節」受降典禮之後臺灣省行政長官公署正式行使統治權立即成立「臺灣省接收委員會」分為11個小組除了軍事由警備司令部接收外其餘皆由行政長官公署各單位首長兼任各接收小組的負責人不料接收過程中部份接收人員卻趁機從中掠奪中飽私囊劫收日本政府遺留下來的財產臺灣光復後不久出現了米荒及物價飛漲的問題而行政長官署無力因應施政失當而政府部門的中高階層多任用外省人引起本省籍知識菁英的失望於是漸失民心社會逐漸彌漫著不安的氣氛與不滿的情緒戰後滯留於臺灣的日本人約48萬人其中約有16萬人具有軍人身分一律被稱為「日僑」戰敗的日本國內經濟蕭條且面臨糧荒日僑返回本國未必能夠順利生活而光復初期臺灣人未對日本僑民採取報復行動因此有不少日僑希望能夠留在臺灣生活然而臺灣行政長官公署禁止日僑定居於臺灣除了一部份日僑被暫時留置以協助長官公署完成接收事宜從民國34年（1945）底起開始分批將日僑遣返回日本日僑離台時每人只被允許攜帶現金一千圓及簡單行囊離台日僑在臺灣的私人產業只好賤賣給臺灣人或者被不肖民眾侵佔最後則大多被行政長官以日產的名義接收收歸公有臺灣光復之後逐漸隨著經濟日益惡化及臺灣行政長官公署的貪污腐敗與行政失措臺灣民眾對政府的態度已由原先的歡迎轉而為抱怨民怨逐漸升高終於因一件查緝販賣私煙的警民衝突引爆了「二二八事件」民國36年（1947）2月27日傍晚專賣局臺北分局的六名緝私員在現在延平北路南京西路口附近的「天馬茶房」查緝私煙查獲一名寡婦林江邁販賣私煙於是將林婦販賣的私煙與身上的金錢全數沒收林婦苦苦哀求卻遭緝私員以手槍敲打頭部因失血而昏倒附近圍觀的民眾群情激憤包圍查緝員論理查緝員從現場脫逃時開槍示警卻誤擊斃一名旁觀的民眾於是場面失控群眾集結包圍警察局及憲兵隊要交交出肇事的人員交涉卻無結果翌日2月28日群眾舉行遊行示威人潮愈聚愈多憤怒的群眾沖入專賣局臺北分局打死兩名職員並將專賣局存貨及設備搬至馬路放火焚燒接著又遊行至行政長官公署（今行政院）前示威請願結果遭到憲兵從陽臺以機槍掃射造成數十人傷亡事件遂擴大消息傳出臺北商店紛紛關閉工廠停工學生罷課以示抗議更有民眾沖入臺北公園的廣播電臺（今二二八紀念館）透過廣播向民眾廣播並呼籲全島群眾起來抗爭於是不滿的情緒迅速蔓延至全島外省人成為民眾出氣的對象被毆打的事件時有所聞這時警備司令部立即宣佈全島戒嚴出動武裝憲警巡邏市區甚至開槍射殺民眾而一些曾擔任過日本軍夫及志願兵的民眾為防止外省人警官以武力鎮壓於是進佔各地警察局接管員警的武器以尋求自保當時臺北市參議會緊急召開會議並向長官公署提出解決方案行政長官陳儀表示接受於次日（3月１日）中午起解除戒嚴3月2日以民意代表為主體各界擴大組成「二二八事件處理委員會」提出政治革新的各項要求並要求軍隊須於3月3日下午六點前撤回營區各地治安由憲警與學生組成的治安服務隊共同來維持一場因取締私煙失當的警民衝突事件至此已演變成全島廣泛的族群衝突及要求改革的政治行動陳儀對於「二二八事件處理委員會」提出的改革方案一方面表示會接納另一方面暗中向南京請求派兵鎮壓指稱這次事件為「有計畫的叛亂行為」３月6日陳儀接獲蔣介石密電21師全師及駐閩的憲兵團2營將派往臺灣支持即不再理會事件委員會的各項建議案3月7日委員會向陳儀提出42條改革意見遭陳儀拒絕3月８日憲兵團2營抵達基隆港3月9日國軍21師抵達基隆港同日宣佈戒嚴軍警展開搜捕及鎮壓行動包括不少社會菁英民意代表學生民眾遭到槍決逮捕下獄或失蹤全台充滿肅殺氣氛人心自危3月10日陳儀下令解散「二二八事件處理委員會」3月14日臺灣警備司令部宣佈事變平定接著國防部長白崇禧代表蔣介石來台宣撫二二八事件主要的動亂歷經十四天在台的外省人與本省人都付出慘重的傷亡代價依臺灣省行政長官公署發表的《臺灣省二二八暴動事件紀要》的記錄臺北市的各機關公教人員死亡33人失蹤7人受傷者866人；至於民眾的死傷統計由於當時沒有進行全面調查但估計人數遠遠超過公務人員的死傷人數根據學者估計二二八事件死亡的民眾人數約在一至三萬人之間但各方見解不同有人認為這個數字過於高估有人則認為死亡人數不只如此二二八事件後來影響深遠其原因並不在於事件本身死亡人數的多寡而是事後政府的處理態度事件之後陳儀遭到撤職政府展現開明態度撤銷臺灣省行政府長官公署改組為省政府並任用前駐美大使魏道明為臺灣省省主席省府委員及各首長設21人其中本省人占12人...",
    		content = SAMPLE_CONTENTS.taiwan_history.split(" "),
    		sentence = "",
    		index_sentence,
    		words = "",
    		index_words = 0,    		
    		speed = null,
    		mode = "speed";
    	
    	$(function(){
    		
    		function reset(deleteinput){
    			index_sentence = 0;
    			$('#go').text('Read it').removeClass('btn-danger').addClass('btn-success');
    			window.clearInterval(running);
    			running_sentence = null;
    			$('#display').text('Finished');
    		}
    		
    		function pause(){
    			if (running_sentence == null) {   				
    				
    				speed = parseInt($('#speed').val());    				
    				
    				running_sentence = window.setInterval(function(){    				   
    					if(running_words == null){
    						sentence = content[index_sentence];
    						index_sentence = index_sentence + 1;
    						
    						running_words = window.setInterval(function(){
    							
    						},1000 / speed);
    					}    				   	
    				}, 1000 / speed);
    				
    				
//    				for(index_sentence = 0; index_sentence < content.length ; index_sentence = index_sentence + 1){
//    					
//    				}
    				
//    				running = window.setInterval(function(){    					
//    					sentence = content[index_sentence];
//    					words = ((sentence.length > index_words)? sentence[index_words] : "") + ((sentence.length > index_words + 1)? sentence[index_words+1] : "") + ((sentence.length > index_words+2)? sentence[index_words+2] : "");
//    					index_words = index_words + 1;
//    					
//    					$('#display').text(words);
//    					
//    					if(index_words >= sentence.length){
//    						index_words = 0;
//    						index_sentence = index_sentence + 1;
//        					if (index_sentence >= content.length) {
//        						reset(false);
//        					}
//    					}    					
//    				}, 1000 / speed);
    				$('#go').text('pause').removeClass('btn-success').addClass('btn-danger');
    			} else {
    				window.clearInterval(running_sentence);
    				running_sentence = null;
    				$('#go').text('Read it').removeClass('btn-danger').addClass('btn-success');
    			}
    		}
    
    		
    		$('#go').click(pause);
    		
    		$('#reset').click(reset);
    		
    		$('#speed_mode').click(function(){    			
    			$('#display').text("Speed Read");
    		});
    		
    		$('#tradition_mode').click(function(){
    			$('#display').text(SAMPLE_CONTENTS.taiwan_history);
    		});
    	});
    	
        console.log('Received Event: ' + id);
    }
};
