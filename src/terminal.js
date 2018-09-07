String.prototype.replaceAll = function(search, replacement) {
  var target = this
  return target.split(search).join(replacement)
}

const colorList = ['bg1', 'bg2', 'color1', 'color2']

export class Terminal {
  constructor(selector) {
    this.buffer = []
    this.insertHook = []
    this.insertHook.push(this.render.bind(this))

    
    window.addEventListener('load', () => {
      document.body.classList.add('bg1')
      this.container = document.querySelector(selector)
      this.render.apply(this)
    })
  }
  insert(line) {
    this.buffer.push(line)
    this.insertHook.forEach(item => item())
  }
  render() {
    const shadowEle = document.createElement('ul')
    shadowEle.classList.add('bg1')
    shadowEle.classList.add('terminalElement')

    this.buffer.forEach(item => {
      shadowEle.appendChild(item.render())
    })

    if (this.ele) {
      this.ele.remove()
    }
    this.container.appendChild(shadowEle)
    window.scrollTo(0, document.body.scrollHeight)
    this.ele = shadowEle
  }
}

export class Line {
  constructor(str) {
    this.str = str
    this.ele = document.createElement('li')
  }
  render() {
    let replacedStr = this.str

    for(let i = 0;i<colorList.length;i++) {
      const color = colorList[i]
      replacedStr = replacedStr.replaceAll(`<${color}>`, `<i class="${color}">`)
      replacedStr = replacedStr.replaceAll(`</${color}>`, `</i>`)
    }

    this.ele.innerHTML = replacedStr
    return this.ele
  }
}

export class inputInterval extends Line {
  constructor(PS1, text, fun) {
    super("")
    this.str = PS1 + " <color2>></color2> "
    this.ele = document.createElement('li')

    this.clicked = false

    this.ele.onclick = () => {
      this.clicked = true
    }

    let counter = 0
    const updateStr = () => {
      setTimeout(() => {
        if (this.clicked) {
          this.str = text
          this.render()
          if (fun) {
            fun()
          }
        } else {
          if (counter >= text.length - 1) {
            this.str += text[counter++]
            this.render()
            if (fun) {
              fun()
            }
          } else {
            this.str += text[counter++]
            this.render()
            updateStr()
          }
        }
      }, 10)
    }
    updateStr()
  }
  render() {
    window.scrollTo(0, document.body.scrollHeight)
    let replacedStr = this.str
    for(let i = 0;i<colorList.length;i++) {
      const color = colorList[i]
      replacedStr = replacedStr.replaceAll(`<${color}>`, `<i class="${color}">`)
      replacedStr = replacedStr.replaceAll(`</${color}>`, `</i>`)
    }

    this.ele.innerHTML = replacedStr
    return this.ele
  }
}



export class ASCIIArt extends Line {
  constructor(str) {
    super("", {})
    this.str = str
  }
  render() {
    window.scrollTo(0, document.body.scrollHeight)
    const ele = document.createElement('li')
    ele.innerHTML = this.str
    return ele;
  }
}

export class Choice extends Line {
  constructor(PS1, content) {
    super("", {})
    this.PS1 = PS1
    this.content = content

    this.ele = document.createElement('li')
    this.ele.style.display = "flex"

    const PS = document.createElement('i')
    PS.innerText = this.PS1
    PS.classList.add('color1')

    const Arrow = document.createElement('i')
    Arrow.innerHTML = '&nbsp>&nbsp'
    Arrow.classList.add('color2')

    const choiceContainer = document.createElement('div')
    for(let i = 0;i<this.content.length;i++) {
      const item = this.content[i]

      const choice = document.createElement('div')
      choice.innerHTML = item
      choice.classList.add('color2')
      choice.classList.add('choice')
      choice.onmouseover = () => {
        choice.classList.add('bg2')
      }
      choice.onmouseleave = () => {
        choice.classList.remove('bg2')
      }
      choice.onclick = () => {
        choice.style.backgroundColor = "#4F5B66"
        this.onChoose(i)
      }
      choiceContainer.appendChild(choice)
    }

    this.ele.appendChild(PS)
    this.ele.appendChild(Arrow)
    this.ele.appendChild(choiceContainer)
  }
  
  render() {
    window.scrollTo(0, document.body.scrollHeight)
    
    return this.ele
  }
}

export class Wait extends Line {
  constructor(time, fun) {
    super()
    this.duration = time
    const setPercent = (i) => {
      if (i === 100) {
        this.str = ""
        if (fun) {
          fun()
        }
      } else {
        this.str = `${i}%`
        window.scrollTo(0, document.body.scrollHeight)
        setTimeout(setPercent.bind(this, i+1), this.duration / 100)
      }
      this.render()
    }
    setPercent(0)
    this.ele = document.createElement('li')
  }
  render() {
    this.ele.innerHTML = this.str
    return this.ele
  }
}