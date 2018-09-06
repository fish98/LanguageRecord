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
                                    已得出运算结果：${now.lang}
                                  `))
                                  const termEle = document.getElementById('terminal')
                                  if (now.lang === 'C++') {
                                    termEle.innerHTML += `
                                    <div style="width: 100vw;height: 100vh">
                                      <pre class="logo" style="color: #FFF">
 ######
##    ##   ##     ##
##         ##     ##
##       ###### ######
##         ##     ##
##    ##   ##     ##
 ######
                                      </pre>
                                    </div>
                                    `
                                  } else if (now.lang === 'C') {
                                    termEle.innerHTML += `
                                    <div style="width: 100vw;height: 100vh">
                                      <pre class="logo" style="color: #FFF">
 ######
##    ##
##
##
##
##    ##
 ######
                                      </pre>
                                    </div>
                                    `
                                  } else if (now.lang === 'Rust') {
                                    termEle.innerHTML += `
                                    <div style="width: 100vw;height: 100vh">
                                      <pre class="logo" style="color: #FFF">
########  ##     ##  ######  ########
##     ## ##     ## ##    ##    ##
##     ## ##     ## ##          ##
########  ##     ##  ######     ##
##   ##   ##     ##       ##    ##
##    ##  ##     ## ##    ##    ##
##     ##  #######   ######     ##
                                      </pre>
                                    </div>
                                    `
                                  } else if (now.lang === 'Java') {
                                    termEle.innerHTML += `
                                    <div style="width: 100vw;height: 100vh">
                                      <pre class="logo" style="color: #FFF">
      ##    ###    ##     ##    ###
      ##   ## ##   ##     ##   ## ##
      ##  ##   ##  ##     ##  ##   ##
      ## ##     ## ##     ## ##     ##
##    ## #########  ##   ##  #########
##    ## ##     ##   ## ##   ##     ##
 ######  ##     ##    ###    ##     ##
                                      </pre>
                                    </div>
                                    `
                                  } else if (now.lang === 'Python') {
                                    termEle.innerHTML += `
                                    <div style="width: 100vw;height: 100vh">
                                      <pre class="logo" style="color: #FFF">
########  ##    ## ######## ##     ##  #######  ##    ##
##     ##  ##  ##     ##    ##     ## ##     ## ###   ##
##     ##   ####      ##    ##     ## ##     ## ####  ##
########     ##       ##    ######### ##     ## ## ## ##
##           ##       ##    ##     ## ##     ## ##  ####
##           ##       ##    ##     ## ##     ## ##   ###
##           ##       ##    ##     ##  #######  ##    ##                                      
                                      </pre>
                                    </div>
                                    `
                                  } else if (now.lang === 'JavaScript') {
                                    termEle.innerHTML += `
                                    <div style="width: 100vw;height: 100vh">
                                      <pre class="logo" style="color: #FFF; font-size: 6.8px">
      ##    ###    ##     ##    ###     ######   ######  ########  #### ########  ########
      ##   ## ##   ##     ##   ## ##   ##    ## ##    ## ##     ##  ##  ##     ##    ##
      ##  ##   ##  ##     ##  ##   ##  ##       ##       ##     ##  ##  ##     ##    ##
      ## ##     ## ##     ## ##     ##  ######  ##       ########   ##  ########     ##
##    ## #########  ##   ##  #########       ## ##       ##   ##    ##  ##           ##
##    ## ##     ##   ## ##   ##     ## ##    ## ##    ## ##    ##   ##  ##           ##
 ######  ##     ##    ###    ##     ##  ######   ######  ##     ## #### ##           ##                        
                                      </pre>
                                    </div>
                                    `
                                  } else if (now.lang === 'Go') {
                                    termEle.innerHTML += `
                                    <div style="width: 100vw;height: 100vh">
                                      <pre class="logo" style="color: #FFF">
 ######    #######
##    ##  ##     ##
##        ##     ##
##   #### ##     ##
##    ##  ##     ##
##    ##  ##     ##
 ######    #######                                      
                                      </pre>
                                    </div>
                                    `
                                  } else if (now.lang === 'Swift') {
                                    termEle.innerHTML += `
                                    <div style="width: 100vw;height: 100vh">
                                      <pre class="logo" style="color: #FFF">
 ######  ##      ## #### ######## ########
##    ## ##  ##  ##  ##  ##          ##
##       ##  ##  ##  ##  ##          ##
 ######  ##  ##  ##  ##  ######      ##
      ## ##  ##  ##  ##  ##          ##
##    ## ##  ##  ##  ##  ##          ##
 ######   ###  ###  #### ##          ##                                      
                                      </pre>
                                    </div>
                                    `
                                  } else if (now.lang === 'Dart') {
                                    termEle.innerHTML += `
                                    <div style="width: 100vw;height: 100vh">
                                      <pre class="logo" style="color: #FFF">
########     ###    ########  ########
##     ##   ## ##   ##     ##    ##
##     ##  ##   ##  ##     ##    ##
##     ## ##     ## ########     ##
##     ## ######### ##   ##      ##
##     ## ##     ## ##    ##     ##
########  ##     ## ##     ##    ##                                      
                                      </pre>
                                    </div>
                                    `
                                  } else if (now.lang === 'Ceylon') {
                                    termEle.innerHTML += `
                                    <div style="width: 100vw;height: 100vh">
                                      <pre class="logo" style="color: #FFF">
 ######  ######## ##    ## ##        #######  ##    ##
##    ## ##        ##  ##  ##       ##     ## ###   ##
##       ##         ####   ##       ##     ## ####  ##
##       ######      ##    ##       ##     ## ## ## ##
##       ##          ##    ##       ##     ## ##  ####
##    ## ##          ##    ##       ##     ## ##   ###
 ######  ########    ##    ########  #######  ##    ##                                      
                                      </pre>
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
                                      <div class="view-lines" role="presentation" aria-hidden="true" data-mprt="7" style="position: absolute; font-family: &quot;Droid Sans Mono&quot;, monospace, monospace, &quot;Droid Sans Fallback&quot;; font-weight: normal; font-size: 14px; line-height: 19px; letter-spacing: 0px;"><div style="top:0px;height:19px;" class="view-line"><span><span class="mtk14 mtkb">&lt;?php</span></span></div><div style="top:19px;height:19px;" class="view-line"><span><span class="mtk1">&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="mtk8">echo</span><span class="mtk1">&nbsp;</span><span class="mtk5">"Hello&nbsp;World!"</span></span></div><div style="top:38px;height:19px;" class="view-line"><span><span class="mtk14 mtkb">?&gt;</span></span></div><div style="top:57px;height:19px;" class="view-line"><span><span>&nbsp;</span></span></div></div>
                                      </div>
                                    </div>
                                    `
                                  } else if (now.lang === 'Perl 6') {
                                    termEle.innerHTML += `
                                    <div style="width: 100vw;height: 100vh">
                                      <pre class="logo" style="color: #FFF">
########  ######## ########  ##           #######
##     ## ##       ##     ## ##          ##     ##
##     ## ##       ##     ## ##          ##
########  ######   ########  ##          ########
##        ##       ##   ##   ##          ##     ##
##        ##       ##    ##  ##          ##     ##
##        ######## ##     ## ########     #######                                      
                                      </pre>
                                    </div>
                                    `
                                  } else if (now.lang === 'Erlang') {
                                    termEle.innerHTML += `
                                    <div style="width: 100vw;height: 100vh">
                                      <pre class="logo" style="color: #FFF">
######## ########  ##          ###    ##    ##  ######
##       ##     ## ##         ## ##   ###   ## ##    ##
##       ##     ## ##        ##   ##  ####  ## ##
######   ########  ##       ##     ## ## ## ## ##   ####
##       ##   ##   ##       ######### ##  #### ##    ##
##       ##    ##  ##       ##     ## ##   ### ##    ##
######## ##     ## ######## ##     ## ##    ##  ######
                                      </pre>
                                    </div>
                                    `
                                  } else if (now.lang === 'Ruby') {
                                    termEle.innerHTML += `
                                    <div style="width: 100vw;height: 100vh">
                                      <pre class="logo" style="color: #FFF">
########  ##     ## ########  ##    ##
##     ## ##     ## ##     ##  ##  ##
##     ## ##     ## ##     ##   ####
########  ##     ## ########     ##
##   ##   ##     ## ##     ##    ##
##    ##  ##     ## ##     ##    ##
##     ##  #######  ########     ##                                      
                                      </pre>
                                    </div>
                                    `
                                  } else if (now.lang === 'Bash') {
                                    termEle.innerHTML += `
                                    <div style="width: 100vw;height: 100vh">
                                      <pre class="logo" style="color: #FFF">
########     ###     ######  ##     ##
##     ##   ## ##   ##    ## ##     ##
##     ##  ##   ##  ##       ##     ##
########  ##     ##  ######  #########
##     ## #########       ## ##     ##
##     ## ##     ## ##    ## ##     ##
########  ##     ##  ######  ##     ##                                      
                                      </pre>
                                    </div>
                                    `
                                  }
                                  document.documentElement.scrollTop = document.documentElement.scrollHeight
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