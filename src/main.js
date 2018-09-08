import { Terminal, Line, inputInterval, ASCIIArt, Choice, Wait } from './terminal'

import scriptRaw from './script'
let script = scriptRaw

const term = new Terminal('#terminal')

window.addEventListener("load", () => {
  const  next = (i) => {
    const now = script[i]
    if (now.type === 'inputInterval') {
      term.insert(new inputInterval("<color1> QSC </color1>", now.content, () => {
        next(i+1)
      }))
    } else if (now.type === 'ASCIIArt') {
      term.insert(new ASCIIArt(now.content))
      next(i+1)
    } else if (now.type === 'choice') {
      const choice = new Choice(" QSC ", now.content)
      choice.onChoose = (num) => {
        choice.onChoose = () => {}
        if (now.event[num]) {
          script = now.event[num]
        } else {
          now.event.forEach(item => {
            script = item
          })
        }
        next(0)
      }
      term.insert(choice)
    } else if (now.type === 'interval') {
      term.insert(new inputInterval("", now.content, () => {
        next(i+1)
      }))
    } else if (now.type === 'wait') {
      term.insert(new Wait(now.content, () => {
        next(i+1)
      }))
    } else if (now.type === 'Final') {
      term.insert(new ASCIIArt(`QSys version 4.19-rc2 (wcc version 7.3.0)`))
      term.insert(new ASCIIArt(`
e820: BIOS-provided physical RAM map: <br>
<i class="color3">BIOS-e820</i>: [mem 0x0000000000000000-0x0000000000000fff] reserved<br>
<i class="color3">BIOS-e820</i>: [mem 0x0000000000001000-0x0000000000057fff] usable<br>
<i class="color3">BIOS-e820</i>: [mem 0x0000000000058000-0x0000000000058fff] reserved<br>
<i class="color3">BIOS-e820</i>: [mem 0x0000000000059000-0x000000000009cfff] usable<br>
<i class="color3">BIOS-e820</i>: [mem 0x000000000009d000-0x000000000009ffff] reserved<br>
<i class="color3">BIOS-e820</i>: [mem 0x0000000000100000-0x000000006659dfff] usable<br>
<i class="color3">BIOS-e820</i>: [mem 0x000000006659e000-0x000000006659efff] ACPI NVS<br>
<i class="color3">BIOS-e820</i>: [mem 0x000000006659f000-0x00000000665c8fff] reserved<br>
<i class="color3">BIOS-e820</i>: [mem 0x00000000665c9000-0x0000000066624fff] usable<br>
<i class="color3">BIOS-e820</i>: [mem 0x0000000066625000-0x0000000066e15fff] reserved<br>
<i class="color3">BIOS-e820</i>: [mem 0x0000000066e16000-0x0000000077c82fff] usable<br>
`))
      setTimeout(() => {
        term.insert(new ASCIIArt(`Security Framework initialized`))
        setTimeout(() => {
          term.insert(new ASCIIArt(`Trying to unpack rootfs image as initramfs...`))
          setTimeout(() => {
            term.insert(new ASCIIArt(`Calculator loaded`))
            setTimeout(() => {
              term.insert(new ASCIIArt(`ACPI: Power (Electronic) on`))
              setTimeout(() => {
                term.insert(new ASCIIArt(`ACPI: Switch to nuclear power`))
                setTimeout(() => {
                  term.insert(new ASCIIArt(`Initialise system trusted keyrings`))
                  setTimeout(() => {
                    term.insert(new ASCIIArt(`WELCOME TO PLAN 10 DEMO`))
                    setTimeout(() => {
                      term.insert(new ASCIIArt(`
                        LANG=zh_CN.utf8 <br>
                        LC_CTYPE=zh_CN.utf8 <br>
                        LC_NUMERIC="zh_CN.utf8" <br>
                        LC_TIME="zh_CN.utf8" <br>
                        LC_COLLATE="zh_CN.utf8" <br>
                        LC_MONETARY="zh_CN.utf8" <br>
                        LC_MESSAGES="zh_CN.utf8" <br>
                        LC_PAPER="zh_CN.utf8" <br>
                        LC_NAME="zh_CN.utf8" <br>
                        LC_ADDRESS="zh_CN.utf8" <br>
                        LC_TELEPHONE="zh_CN.utf8" <br>
                        LC_MEASUREMENT="zh_CN.utf8" <br>
                        LC_IDENTIFICATION="zh_CN.utf8" <br>
                        欢迎使用 PLAN 10 测试系统 <br>
                      `))
                      setTimeout(() => {
                        term.insert(new ASCIIArt(`
                          正在演算
                        `))
                        setTimeout(() => {
                          term.insert(new ASCIIArt(`
                            <i class="color2">[WW]</i> QPU0: 温度过高，限制频率 <br>
                            <i class="color2">[WW]</i> QPU1: 温度过高，限制频率 <br>
                            <i class="color2">[WW]</i> QPU2: 温度过高，限制频率 <br>
                            <i class="color2">[WW]</i> QPU3: 温度过高，限制频率 <br>
                          `))
                          setTimeout(() => {
                            term.insert(new ASCIIArt(`
                              [II] QPU0: 温度/频率恢复正常 <br>
                              [II] QPU1: 温度/频率恢复正常 <br>
                              [II] QPU2: 温度/频率恢复正常 <br>
                              [II] QPU3: 温度/频率恢复正常 <br>
                            `))
                            setTimeout(() => {
                              term.insert(new ASCIIArt(`
                                <i class="color2">[WW]</i> QPU0: 温度过高，限制频率 <br>
                                <i class="color2">[WW]</i> QPU1: 温度过高，限制频率 <br>
                                <i class="color2">[WW]</i> QPU2: 温度过高，限制频率 <br>
                                <i class="color2">[WW]</i> QPU3: 温度过高，限制频率 <br>
                              `))
                              setTimeout(() => {
                                term.insert(new ASCIIArt(`
                                  [II] QPU0: 温度/频率恢复正常 <br>
                                  [II] QPU1: 温度/频率恢复正常 <br>
                                  [II] QPU2: 温度/频率恢复正常 <br>
                                  [II] QPU3: 温度/频率恢复正常 <br>
                                `))
                                setTimeout(() => {
                                  console.log(now)
                                  term.insert(new ASCIIArt(`
                                    已得出运算结果：和我最相像的编程语言是: ${now.lang} !
                                  `))
                                  const termEle = document.getElementById('terminal')
                                  if (now.lang === 'C++') {
                                    termEle.innerHTML += `
                                    <div class="final">
                                      <div class="logoDiv">
                                        <pre class="logo" >
 ######
##    ##   ##     ##
##         ##     ##
##       ###### ######
##         ##     ##
##    ##   ##     ##
 ######</pre>
 </div>
   <div class="info">
   <div class="view-lines" role="presentation" aria-hidden="true" data-mprt="7" style="font-family: &quot;Droid Sans Mono&quot;, monospace, monospace, &quot;Droid Sans Fallback&quot;; font-weight: normal;line-height: 19px; letter-spacing: 0px;"><div style="top:0px;height:19px;" class="view-line"><span><span class="mtk8">#include</span><span class="mtk1">&nbsp;</span><span class="mtk8">&lt;</span><span class="mtk5">iostream</span><span class="mtk8">&gt;</span></span></div><div style="top: 19px; height: 19px;" class="view-line"><span><span class="mtk8">int</span><span class="mtk1">&nbsp;main</span><span class="mtk9">(){</span></span></div><div style="top: 38px; height: 19px;" class="view-line"><span><span class="mtk1">&nbsp;&nbsp;&nbsp;&nbsp;std::cout</span><span class="mtk9">&lt;&lt;</span><span class="mtk5">"Hello&nbsp;World!"</span><span class="mtk9">;</span></span></div><div style="top:57px;height:19px;" class="view-line"><span><span class="mtk1">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="mtk8">return</span><span class="mtk1">&nbsp;</span><span class="mtk6">0</span><span class="mtk9">;</span></span></div><div style="top:76px;height:19px;" class="view-line"><span><span class="mtk9">}</span></span></div></div>
    <br>
    <div class="intro">
      <span class="introHead">Famous projects written in C++: </span>
      <br>
      <div class="itemContainer">
        <span class="introItem">* MySQL</span>
        <br>
        <span class="introItem">* V8</span>
        <br>
        <span class="introItem">* OpenCV</span>
      </div>
    </div>
    <div class="imageGallery">
      <a class="image" href="https://joinus.zjuqsc.com" target="_blank"><img class="image" src="./qsc.png" /></a>
      <div style="width: 5vw"></div>
      <img class="image" src="./QRcode.png" />
    </div>
  </div>
</div>`
                                  } else if (now.lang === 'C') {
                                    termEle.innerHTML += `
                                    <div class="final">
                                      <div class="logoDiv">
                                        <pre class="logo" >
 ######
##    ##
##
##
##
##    ##
 ######</pre>
</div>
  <div class="info">
  <div class="view-lines" role="presentation" aria-hidden="true" data-mprt="7" style="font-family: &quot;Droid Sans Mono&quot;, monospace, monospace, &quot;Droid Sans Fallback&quot;; font-weight: normal; line-height: 19px; letter-spacing: 0px;"><div style="top:0px;height:19px;" class="view-line"><span><span class="mtk8">#include</span><span class="mtk1">&nbsp;</span><span class="mtk8">&lt;</span><span class="mtk5">stdio.h</span><span class="mtk8">&gt;</span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk8">int</span><span class="mtk1">&nbsp;main</span><span class="mtk9">(){</span></span></div><div style="top:38px;height:19px;" class="view-line"><span><span class="mtk1">&nbsp;&nbsp;printf</span><span class="mtk9">(</span><span class="mtk5">"Hello&nbsp;World!"</span><span class="mtk9">);</span></span></div><div style="top:57px;height:19px;" class="view-line"><span><span class="mtk1">&nbsp;&nbsp;</span><span class="mtk8">return</span><span class="mtk1">&nbsp;</span><span class="mtk6">0</span><span class="mtk9">;</span></span></div><div style="top:76px;height:19px;" class="view-line"><span><span class="mtk9">}</span></span></div></div>
    <br>
    <div class="intro">
      <span class="introHead">Famous projects written in C: </span>
      <br>
      <div class="itemContainer">
        <span class="introItem">* Linux</span>
        <br>
        <span class="introItem">* Nginx</span>
        <br>
        <span class="introItem">* Git</span>
        <br>
        <span class="introItem">* GTK</span>
      </div>
    </div>
    <div class="imageGallery">
      <a class="image" href="https://joinus.zjuqsc.com"><img class="image" src="./qsc.png" /></a>
      <div style="width: 5vw"></div>
      <img class="image" src="./QRcode.png" />
    </div>
  </div>
</div>
`
                                  } else if (now.lang === 'Rust') {
                                    termEle.innerHTML += `
                                    <div class="final">
                                      <div class="logoDiv">
                                        <pre class="logo" >
########  ##     ##  ######  ########
##     ## ##     ## ##    ##    ##
##     ## ##     ## ##          ##
########  ##     ##  ######     ##
##   ##   ##     ##       ##    ##
##    ##  ##     ## ##    ##    ##
##     ##  #######   ######     ##</pre>
</div>
  <div class="info">
  <div class="view-lines" role="presentation" aria-hidden="true" data-mprt="7" style="font-size: 16px;font-family: &quot;Droid Sans Mono&quot;, monospace, monospace, &quot;Droid Sans Fallback&quot;; font-weight: normal;line-height: 19px; letter-spacing: 0px;"><div style="top:0px;height:19px;" class="view-line"><span><span class="mtk8">fn</span><span class="mtk1">&nbsp;main</span><span class="mtk9">(){</span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">&nbsp;&nbsp;</span><span class="mtk8">println!</span><span class="mtk9">(</span><span class="mtk5">"Hello&nbsp;World!"</span><span class="mtk9">)</span><span class="mtk1">;</span></span></div><div style="top:38px;height:19px;" class="view-line"><span><span class="mtk9">}</span></span></div></div>
    <br>
    <div class="intro">
      <span class="introHead">Famous projects written in Rust: </span>
      <br>
      <div class="itemContainer">
        <span class="introItem">* Servo</span>
        <br>
        <span class="introItem">* Redox</span>
      </div>
    </div>
    <div class="imageGallery">
      <a class="image" href="https://joinus.zjuqsc.com"><img class="image" src="./qsc.png" /></a>
      <div style="width: 5vw"></div>
      <img class="image" src="./QRcode.png" />
    </div>
  </div>
</div>
`
                                  } else if (now.lang === 'Java') {
                                    termEle.innerHTML += `
                                    <div class="final">
                                      <div class="logoDiv">
                                        <pre class="logo" >
      ##    ###    ##     ##    ###
      ##   ## ##   ##     ##   ## ##
      ##  ##   ##  ##     ##  ##   ##
      ## ##     ## ##     ## ##     ##
##    ## #########  ##   ##  #########
##    ## ##     ##   ## ##   ##     ##
 ######  ##     ##    ###    ##     ##</pre>
 </div>
   <div class="info">
   <div class="view-lines" role="presentation" aria-hidden="true" data-mprt="7" style="font-size: 14px;font-family: &quot;Droid Sans Mono&quot;, monospace, monospace, &quot;Droid Sans Fallback&quot;; font-weight: normal;line-height: 19px; letter-spacing: 0px;"><div style="top:0px;height:19px;" class="view-line"><span><span class="mtk8">public</span><span class="mtk1">&nbsp;</span><span class="mtk8">class</span><span class="mtk1">&nbsp;QSCTech&nbsp;</span><span class="mtk9">{</span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">&nbsp;&nbsp;</span><span class="mtk8">public</span><span class="mtk1">&nbsp;</span><span class="mtk8">static</span><span class="mtk1">&nbsp;</span><span class="mtk8">void</span><span class="mtk1">&nbsp;main</span><span class="mtk9">(</span><span class="mtk1">String</span><span class="mtk9">[]</span><span class="mtk1">&nbsp;args</span><span class="mtk9">)&nbsp{</span></span></div><div style="top:38px;height:19px;" class="view-line"><span><span class="mtk1">&nbsp;&nbsp;&nbsp;&nbsp;System</span><span class="mtk9">.</span><span class="mtk1">out</span><span class="mtk9">.</span><span class="mtk1">println</span><span class="mtk9">(</span><span class="mtk5">"Hello&nbsp;World!"</span><span class="mtk9">);</span></span></div><div style="top:57px;height:19px;" class="view-line"><span><span class="mtk1">&nbsp;&nbsp;</span><span class="mtk9">}</span></span></div><div style="top:76px;height:19px;" class="view-line"><span><span class="mtk9">}</span></span></div></div>
     <br>
     <div class="intro">
       <span class="introHead">Famous projects written in Java: </span>
       <br>
       <div class="itemContainer">
         <span class="introItem">* Minecraft</span>
         <br>
         <span class="introItem">* JetBrains</span>
         <br>
         <span class="introItem">* Android Applications</span>
       </div>
     </div>
     <div class="imageGallery">
       <a class="image" href="https://joinus.zjuqsc.com"><img class="image" src="./qsc.png" /></a>
       <div style="width: 5vw"></div>
       <img class="image" src="./QRcode.png" />
     </div>
   </div>
 </div>
`
                                  } else if (now.lang === 'Python') {
                                    termEle.innerHTML += `
                                    <div class="final">
                                      <div class="logoDiv">
                                        <pre class="logo" style="font-size: 9px">
########  ##    ## ######## ##     ##  #######  ##    ##
##     ##  ##  ##     ##    ##     ## ##     ## ###   ##
##     ##   ####      ##    ##     ## ##     ## ####  ##
########     ##       ##    ######### ##     ## ## ## ##
##           ##       ##    ##     ## ##     ## ##  ####
##           ##       ##    ##     ## ##     ## ##   ###
##           ##       ##    ##     ##  #######  ##    ##</pre>
</div>
  <div class="info">
  <div class="view-lines" role="presentation" aria-hidden="true" data-mprt="7" style="font-family: &quot;Droid Sans Mono&quot;, monospace, monospace, &quot;Droid Sans Fallback&quot;; font-weight: normal;line-height: 19px; letter-spacing: 0px;"><div style="top:0px;height:19px;" class="view-line"><span><span class="mtk8">print</span><span class="mtk9">(</span><span class="mtk5">"Hello&nbsp;World!"</span><span class="mtk9">)</span></span></div></div>
    <br>
    <div class="intro">
      <span class="introHead">Famous projects written in Python: </span>
      <br>
      <div class="itemContainer">
        <span class="introItem">* YouTube</span>
        <br>
        <span class="introItem">* Instagram</span>
        <br>
        <span class="introItem">* BitTorrent</span>
        <br>
        <span class="introItem">* Reddit</span>
      </div>
    </div>
    <div class="imageGallery">
      <a class="image" href="https://joinus.zjuqsc.com"><img class="image" src="./qsc.png" /></a>
      <div style="width: 5vw"></div>
      <img class="image" src="./QRcode.png" />
    </div>
  </div>
</div>
`
                                  } else if (now.lang === 'JavaScript') {
                                    termEle.innerHTML += `
                                    <div class="final">
                                      <div class="logoDiv">
                                      <pre class="logo" style="color: #FFF; font-size: 5.5px">
      ##    ###    ##     ##    ###     ######   ######  ########  #### ########  ########
      ##   ## ##   ##     ##   ## ##   ##    ## ##    ## ##     ##  ##  ##     ##    ##
      ##  ##   ##  ##     ##  ##   ##  ##       ##       ##     ##  ##  ##     ##    ##
      ## ##     ## ##     ## ##     ##  ######  ##       ########   ##  ########     ##
##    ## #########  ##   ##  #########       ## ##       ##   ##    ##  ##           ##
##    ## ##     ##   ## ##   ##     ## ##    ## ##    ## ##    ##   ##  ##           ##
 ######  ##     ##    ###    ##     ##  ######   ######  ##     ## #### ##           ##</pre>
 </div>
   <div class="info">
   <div class="view-lines" role="presentation" aria-hidden="true" data-mprt="7" style=" font-family: &quot;Droid Sans Mono&quot;, monospace, monospace, &quot;Droid Sans Fallback&quot;; font-weight: normal; line-height: 19px; letter-spacing: 0px;"><div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">console</span><span class="mtk9">.</span><span class="mtk1">log</span><span class="mtk9">(</span><span class="mtk5">"Hello&nbsp;World!"</span><span class="mtk9">)</span></span></div></div>
     <br>
     <div class="intro">
       <span class="introHead">Famous projects written in Javascript: </span>
       <br>
       <div class="itemContainer">
         <span class="introItem">* All Websites!</span>
         <br>
         <span class="introItem">* Electron</span>
       </div>
       <br>
       <span class="introHead"># Any application that can be written in JavaScript, will enventually be written in JavaScript.   --Atwood's Law</span>
     </div>
     <div class="imageGallery">
       <a class="image" href="https://joinus.zjuqsc.com"><img class="image" src="./qsc.png" /></a>
       <div style="width: 5vw"></div>
       <img class="image" src="./QRcode.png" />
     </div>
   </div>
 </div>
`
                                  } else if (now.lang === 'Go') {
                                    termEle.innerHTML += `
                                    <div class="final">
                                      <div class="logoDiv">
                                        <pre class="logo" style="color: #FFF">
 ######    #######
##    ##  ##     ##
##        ##     ##
##   #### ##     ##
##    ##  ##     ##
##    ##  ##     ##
 ######    #######</pre>
 </div>
   <div class="info">
   <div class="view-lines" role="presentation" aria-hidden="true" data-mprt="7" style="font-size: 17px;font-family: &quot;Droid Sans Mono&quot;, monospace, monospace, &quot;Droid Sans Fallback&quot;; font-weight: normal;line-height: 19px; letter-spacing: 0px;"><div style="top:0px;height:19px;" class="view-line"><span><span class="mtk8">package</span><span class="mtk1">&nbsp;main&nbsp;</span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk8">import</span><span class="mtk1">&nbsp;</span><span class="mtk5">"fmt"</span></span></div><div style="top:38px;height:19px;" class="view-line"><span><span class="mtk8">func</span><span class="mtk1">&nbsp;main</span><span class="mtk9">(){</span></span></div><div style="top:57px;height:19px;" class="view-line"><span><span class="mtk1">&nbsp;&nbsp;fmt</span><span class="mtk9">.</span><span class="mtk1">Println</span><span class="mtk9">(</span><span class="mtk5">"Hello&nbsp;World!"</span><span class="mtk9">)</span></span></div><div style="top:76px;height:19px;" class="view-line"><span><span class="mtk9">}</span></span></div></div>
     <br>
     <div class="intro">
       <span class="introHead">Famous projects written in Go: </span>
       <br>
       <div class="itemContainer">
         <span class="introItem">* Tidb</span>
         <br>
         <span class="introItem">* Docker</span>
       </div>
     </div>
     <div class="imageGallery">
       <a class="image" href="https://joinus.zjuqsc.com"><img class="image" src="./qsc.png" /></a>
       <div style="width: 5vw"></div>
       <img class="image" src="./QRcode.png" />
     </div>
   </div>
 </div>
`
                                  } else if (now.lang === 'Swift') {
                                    termEle.innerHTML += `
                                    <div class="final">
                                      <div class="logoDiv">
                                        <pre class="logo" style="color: #FFF">
 ######  ##      ## #### ######## ########
##    ## ##  ##  ##  ##  ##          ##
##       ##  ##  ##  ##  ##          ##
 ######  ##  ##  ##  ##  ######      ##
      ## ##  ##  ##  ##  ##          ##
##    ## ##  ##  ##  ##  ##          ##
 ######   ###  ###  #### ##          ##</pre>
 </div>
   <div class="info">
   <div class="view-lines" role="presentation" aria-hidden="true" data-mprt="7" style="font-size:12px;font-family: &quot;Droid Sans Mono&quot;, monospace, monospace, &quot;Droid Sans Fallback&quot;; font-weight: normal;line-height: 19px; letter-spacing: 0px;"><div style="top:0px;height:19px;" class="view-line"><span><span class="mtk8">import</span><span class="mtk1">&nbsp;</span><span class="mtk22">Foundation</span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span>&nbsp;</span></span></div><div style="top:38px;height:19px;" class="view-line"><span><span class="mtk1">print</span><span class="mtk9">(</span><span class="mtk5">"Hello&nbsp;World!"</span><span class="mtk9">)</span></span></div></div>
     <br>
     <div class="intro">
       <span class="introHead">Famous projects written in Swift: </span>
       <br>
       <div class="itemContainer">
         <span class="introItem">* iOS Applications</span>
         <br>
         <span class="introItem">* QSC Mobile</span>
       </div>
     </div>
     <div class="imageGallery">
       <a class="image" href="https://joinus.zjuqsc.com"><img class="image" src="./qsc.png" /></a>
       <div style="width: 5vw"></div>
       <img class="image" src="./QRcode.png" />
     </div>
   </div>
 </div>
`
                                  } else if (now.lang === 'Dart') {
                                    termEle.innerHTML += `
                                    <div class="final">
                                      <div class="logoDiv">
                                        <pre class="logo" style="color: #FFF">
########     ###    ########  ########
##     ##   ## ##   ##     ##    ##
##     ##  ##   ##  ##     ##    ##
##     ## ##     ## ########     ##
##     ## ######### ##   ##      ##
##     ## ##     ## ##    ##     ##
########  ##     ## ##     ##    ##</pre>
</div>
  <div class="info">
  <div class="view-lines" role="presentation" aria-hidden="true" data-mprt="7" style="font-family: &quot;Droid Sans Mono&quot;, monospace, monospace, &quot;Droid Sans Fallback&quot;; font-weight: normal; line-height: 19px; letter-spacing: 0px;"><div style="top:0px;height:19px;" class="view-line"><span><span class="mtk8">void</span><span class="mtk1">&nbsp;main</span><span class="mtk9">(){</span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">&nbsp;&nbsp;print</span><span class="mtk9">(</span><span class="mtk5">'</span><span class="mtk1">Hello&nbsp;World</span><span class="mtk9">!</span><span class="mtk5">'</span><span class="mtk9">);</span></span></div><div style="top:38px;height:19px;" class="view-line"><span><span class="mtk9">}</span></span></div></div>
    <br>
    <div class="intro">
      <span class="introHead">Famous projects written in Dart: </span>
      <br>
      <div class="itemContainer">
        <span class="introItem">* Flutter</span>
        <br>
        <span class="introItem">* AngularDart </span>
      </div>
    </div>
    <div class="imageGallery">
      <a class="image" href="https://joinus.zjuqsc.com"><img class="image" src="./qsc.png" /></a>
      <div style="width: 5vw"></div>
      <img class="image" src="./QRcode.png" />
    </div>
  </div>
</div>
`
                                  } else if (now.lang === 'PHP') {
                                    termEle.innerHTML += `
                                    <div class="final">
                                      <div class="logoDiv">
                                        <pre class="logo" >
  ########  ##     ## ########
  ##     ## ##     ## ##     ##
  ##     ## ##     ## ##     ##
  ########  ######### ########
  ##        ##     ## ##
  ##        ##     ## ##
  ##        ##     ## ##</pre>
                                      </div>
                                        <div class="info">
                                          <div class="view-lines" role="presentation" aria-hidden="true" data-mprt="7" style="font-family: &quot;Droid Sans Mono&quot;, monospace, monospace, &quot;Droid Sans Fallback&quot;; font-weight: normal; line-height: 19px; letter-spacing: 0px;"><div style="top:0px;height:19px;" class="view-line"><span><span class="mtk14 mtkb">&lt;?php</span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="mtk8">echo</span><span class="mtk1">&nbsp;</span><span class="mtk5">"Hello&nbsp;World!"<span class="mtk1">;</span></span></span></div><div style="top:38px;height:19px;" class="view-line"><span><span class="mtk14 mtkb">?&gt;</span></span></div></div>
                                          <br>
                                          <div class="intro">
                                            <span class="introHead">Famous projects written in PHP: </span>
                                            <br>
                                            <div class="itemContainer">
                                              <span class="introItem">* FaceBook</span>
                                              <br>
                                              <span class="introItem">* Discuz!</span>
                                              <br>
                                              <span class="introItem">* WordPress</span>
                                              <br>
                                              <span class="introItem">* phpMyAdmin</span>
                                            </div>
                                          </div>
                                          <div class="imageGallery">
                                            <a class="image" href="https://joinus.zjuqsc.com"><img class="image" src="./qsc.png" /></a>
                                            <div style="width: 5vw"></div>
                                            <img class="image" src="./QRcode.png" />
                                          </div>
                                        </div>
                                      </div>
                                    `
                                  } else if (now.lang === 'Perl 6') {
                                    termEle.innerHTML += `
                                    <div class="final">
                                      <div class="logoDiv">
                                        <pre class="logo" style="color: #FFF; font-size:10px" >
########  ######## ########  ##           #######
##     ## ##       ##     ## ##          ##     ##
##     ## ##       ##     ## ##          ##
########  ######   ########  ##          ########
##        ##       ##   ##   ##          ##     ##
##        ##       ##    ##  ##          ##     ##
##        ######## ##     ## ########     #######</pre>
</div>
  <div class="info">
  <pre class="highlight" style="color: white;font-size: 10px"><span class="Statement">grammar</span> Parser {
    <span class="Statement">rule</span>  TOP  {<span class="Constant"> I </span><span class="Special">&lt;</span>love<span class="Special">&gt;</span><span class="Constant"> </span><span class="Special">&lt;</span>lang<span class="Special">&gt;</span><span class="Constant"> </span>}
    <span class="Statement">token</span> love {<span class="Constant"> </span><span class="Special">'</span><span class="Constant">♥</span><span class="Special">'</span><span class="Constant"> </span><span class="Special">|</span><span class="Constant"> love </span>}
    <span class="Statement">token</span> lang {<span class="Constant"> </span><span class="Special">&lt; </span><span class="Constant">Perl Rust Go Python Ruby </span><span class="Special">&gt;</span><span class="Constant"> </span>}
}

<span class="Identifier">say</span> Parser<span class="Statement">.</span>parse<span class="Statement">:</span> <span class="Special">'</span><span class="Constant">I ♥ Perl</span><span class="Special">'</span><span class="Statement">;</span>
<span class="Comment"># OUTPUT: ｢I ♥ Perl｣ love =&gt; ｢♥｣ lang =&gt; ｢Perl｣</span>

<span class="Identifier">say</span> Parser<span class="Statement">.</span>parse<span class="Statement">:</span> <span class="Special">'</span><span class="Constant">I love Rust</span><span class="Special">'</span><span class="Statement">;</span>
<span class="Comment"># OUTPUT: ｢I love Rust｣ love =&gt; ｢love｣ lang =&gt; ｢Rust｣</span></pre>
    <br>
    <div class="intro">
      <br>
    </div>
    <div class="imageGallery">
      <a class="image" href="https://joinus.zjuqsc.com"><img class="image" src="./qsc.png" /></a>
      <div style="width: 5vw"></div>
      <img class="image" src="./QRcode.png" />
    </div>
  </div>
</div>
`
                                  } else if (now.lang === 'Erlang') {
                                    termEle.innerHTML += `
                                    <div class="final">
                                      <div class="logoDiv">
                                        <pre class="logo" style="color: #FFF; font-size: 9px">
######## ########  ##          ###    ##    ##  ######
##       ##     ## ##         ## ##   ###   ## ##    ##
##       ##     ## ##        ##   ##  ####  ## ##
######   ########  ##       ##     ## ## ## ## ##   ####
##       ##   ##   ##       ######### ##  #### ##    ##
##       ##    ##  ##       ##     ## ##   ### ##    ##
######## ##     ## ######## ##     ## ##    ##  ######</pre>
</div>
  <div class="info">
  <div class="view-lines" role="presentation" aria-hidden="true" data-mprt="7" style="font-size: 15px;font-family: &quot;Droid Sans Mono&quot;, monospace, monospace, &quot;Droid Sans Fallback&quot;; font-weight: normal;line-height: 19px; letter-spacing: 0px;"><div style="top:0px;height:19px;" class="view-line"><span><span class="mtk1">main</span><span class="mtk9">()</span><span class="mtk1">&nbsp;-&gt;</span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">&nbsp;&nbsp;&nbsp;&nbsp;io:</span><span class="mtk22">format</span><span class="mtk9">(</span><span class="mtk5">"Hello&nbsp;World!\n"</span><span class="mtk9">)</span><span class="mtk1">.</span></span></div></div>
    <br>
    <div class="intro">
      <span class="introHead">Famous projects written in Erlang: </span>
      <br>
      <div class="itemContainer">
        <span class="introItem">* RabbitMQ</span>
        <br>
        <span class="introItem">* SimpleDB</span>
      </div>
    </div>
    <div class="imageGallery">
      <a class="image" href="https://joinus.zjuqsc.com"><img class="image" src="./qsc.png" /></a>
      <div style="width: 5vw"></div>
      <img class="image" src="./QRcode.png" />
    </div>
  </div>
</div>
`
                                  } else if (now.lang === 'Ruby') {
                                    termEle.innerHTML += `
                                    <div class="final">
                                      <div class="logoDiv">
                                        <pre class="logo" style="color: #FFF">
########  ##     ## ########  ##    ##
##     ## ##     ## ##     ##  ##  ##
##     ## ##     ## ##     ##   ####
########  ##     ## ########     ##
##   ##   ##     ## ##     ##    ##
##    ##  ##     ## ##     ##    ##
##     ##  #######  ########     ##</pre>
</div>
  <div class="info">
  <div class="view-line" style="font-family: monospace; font-size: 22px"><span><span class="mtk1">p&nbsp;</span><span class="mtk5">"Hello&nbsp;World"</span></span></div>
    <br>
    <div class="intro">
      <span class="introHead">Famous projects written in Ruby: </span>
      <br>
      <div class="itemContainer">
        <span class="introItem">* Rails</span>
        <br>
        <span class="introItem">* Gitlab</span>
        <br>
        <span class="introItem">* Sinatra</span>
      </div>
    </div>
    <div class="imageGallery">
      <a class="image" href="https://joinus.zjuqsc.com"><img class="image" src="./qsc.png" /></a>
      <div style="width: 5vw"></div>
      <img class="image" src="./QRcode.png" />
    </div>
  </div>
</div>
`
                                  }
                                  window.scrollTo(0, document.body.scrollHeight)
                                })
                              }, 1000)
                            }, 500)
                          }, 1000)
                        }, 500)
                      }, 500)
                    }, 500)
                  }, 500)
                })
              })
            })
          })
        })
      })
    }
  }
  next(0)
})