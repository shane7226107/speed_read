speed_read
==========

環境準備:

安裝JDK (http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)

系統變數新增JAVA_HOME,指向jdk安裝位置(EX : C:\Program Files (x86)\Java\jdk1.8.0_05)

eclipse 安裝 android ADT (http://developer.android.com/sdk/installing/installing-adt.html)

到系統參數->新增"ANDROID_HOME" 內容指向用eclipse下載的ADT位置 (EX : C:\Users\500\android-sdks\platform-tools;C:\Users\500\android-sdks\tools)
    
系統變數->path->編輯->在尾端加入 %JAVA_HOME%\bin;%ANDROID_HOME%

cordova需用到Ant -> 去官網下載binary, 解壓縮, 加入系統變數 (http://ant.apache.org/bindownload.cgi)


==========
1.安裝cordova
  => npm install -g cordova

2.switch to project root ( cd speed_read)

3.=>cordova prepare android

4.Eclipse -> import -> existing android code into workspace -> speed_read\platforms\android -> import both project

5.Eclipse -> project -> 取消build automatically

6.=>cordova prepare android

7.Eclipse -> project -> build all

8.Eclipse -> run


修改過project內容後,要重複6~8步驟才會正確rebuild apk
