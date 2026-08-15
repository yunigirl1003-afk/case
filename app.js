const name= document.querySelector("#name");
const first=document.querySelector("#first")
const video=document.querySelector("#owo");
const picture=document.querySelector("#picture")
const intro=document.querySelector("#intro")
const second=document.querySelector("#second")

function skip(){
    video.currentTime=7
}

function onClick() {
    name.innerHTML=" "
    intro.innerHTML=""
    picture.innerHTML=""
    video.style.display="block"
    second.style.display="block"
    video.play()
}

function show(){
    video.style.display="none"
    second.style.display="none"
    const genius=document.createElement("h3");
    const pic=document.createElement("img");
    const itr=document.createElement("p");
    let member=Math.floor(Math.random() * 5) +1
    if (member==1){
        genius.textContent="海獅";
        pic.src="1000044821.png"
        itr.innerHTML="本名：邱楷詩<br>暱稱：海獅<br>生理性別：女<br>心理性別：義大利麵拌42號混凝土<br>生日：99/6/14(小了玉米整整一年)<br>喜歡：建北電資、看動漫、辦活動<br>討厭：詞窮、拖延、吵架<br>我的三個關鍵字：外向、活網、爆肝<br>唉居：fgisc40_sealion但等於沒加，我跟本不會打開建議你加我discord<br>備註： https://sealion.page/ (最喜歡到哪都宣傳一下個網了 謝謝dong幫我弄的網域"
    }
    else if (member==2){
        genius.textContent="Dong"
        pic.src="1000044819.png"
        itr.innerHTML="本名：陳柏東<br>暱稱：Dong<br>性別：男<br>生日：2009/10/31<br>喜歡：建北電資、寫程式<br>討厭：討厭、討厭討厭討厭、討厭討厭討厭討厭討厭<br>我的三個關鍵字：東、Dong、！<br>唉居：ckeisc46_dong<br>網站：https://doong.me/<br>備註：我其實不太常用 IG，如有聯絡需求推薦使用 Discord 或是 Telegram！"
    }
    else if (member==3){
        genius.textContent="Lucas"
        pic.src="1000044818.png"
        itr.innerHTML="本名：林律衡<br>暱稱：Lucas<br>性別：男<br>生日：2010/2/11<br>喜歡：我喜歡的東西<br>討厭：我討厭的東西<br>我的三個關鍵字：弱、小丑、不會鋼琴<br>唉居：ckeisc31_ckimc26_lucas<br>備註：希望你們能抽到我的新大富翁卡<br>備備註：ㄟ你們是不是不知道那是什麼<br>備備備註：沒關係到時候就知道了<br>(我們已經體會到了)"
    }
    else if (member==4){
        genius.textContent="趙雲"
        pic.src="1000044837.png"
        itr.innerHTML="本名：趙宸妘<br>暱稱：趙雲<br>生理性別：女<br>心理性別：無<br>生日：2010.2.2<br>喜歡：畫圖、寫文、搞oc、貓、動漫、小說<br>討厭：讀書、被罵<br>我的三個關鍵字：破畫畫的、宅宅、oc媽<br>唉居：<br>常駐 chao_yun22<br>本帳 cherrychao22<br>備註：有個人經營企劃然後文本寫不完了"
    }
    else if (member==5){
        genius.textContent="燒雞"
        pic.src="1000044838.png"
        itr.innerHTML="本名：唐博威<br>暱稱：燒雞<br>生理＆心理性別：<br>生日：2010/06/11<br>超級喜歡：出去玩<br>討厭：工作<br>我的三個關鍵字：我不會打競程、我不會彈吉他、我不會社交<br>唉居：bowei.611<br>備註：備註"
    }
    name.appendChild(genius);
    picture.appendChild(pic);
    intro.appendChild(itr);
}

first.addEventListener("click",onClick);
video.addEventListener("ended",show);
second.addEventListener("click",skip)

