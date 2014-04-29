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
    	var running,
    		i = 0,
    		sentence = "",
    		speed = 12;
    	
    	$(function(){
    		
    		function reset(deleteinput){
    			i = 0;
    			if (deleteinput) {
    				sentence = "";
    				$('#input').val("");
    			}
    			$('#go').text('Read it').removeClass('btn-danger').addClass('btn-success');
    			window.clearInterval(running);
    			running = null;
    			$('#display').text('Finished');
    		}
    		
    		function holdPosition(){
    			$('body').css('padding-top', ($(window).height() - $('#main').height()) / 2 + "px");
    		}
    		
    		function pause(){
    			if (running == null) {
    				running = window.setInterval(function(){
    					$('#display').text(((sentence.length > i)? sentence[i] : "") + ((sentence.length > i + 1)? sentence[i + 1] : "") + ((sentence.length > i + 2)? sentence[i + 2] : ""));
    					i = i + 1;
    					if (i >= sentence.length) {
    						reset(false);
    					}
    				}, 1000 / parseInt($('#speed').val()));
    				$('#go').text('pause').removeClass('btn-success').addClass('btn-danger');
    			} else {
    				window.clearInterval(running);
    				running = null;
    				$('#go').text('Read it').removeClass('btn-danger').addClass('btn-success');
    			}
    		}
    		
    		holdPosition();
    		window.onresize = holdPosition;
    		$('#input').change(function(){
    			sentence = $('#input').val();
    		});	
    		$('#go').click(pause);
    		$('#speed').change(function(){
    			localStorage['speed'] = parseInt($('#speed').val());
    			pause();
    			pause();
    		});
    		
    		$('#reset').click(reset);
    	});
    	
        console.log('Received Event: ' + id);
    }
};
