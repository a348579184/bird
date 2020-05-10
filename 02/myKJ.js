class Mykj{
    constructor(options){
        this.$options=options
        this.$data=options.data
        observe(this.$data)
        Proxy(this)
        new Bianyi(options.dom,this)
    }
}
// 数据响应式：
// Object.defineProperty()


function defineReactive(obj, key, val) {

    // val可能还是对象，此时我们需要递归
    observe(val)
  
    // 参数3是描述对象
    Object.defineProperty(obj, key, {
      get() {
        console.log('get', key,val);
        return val
      },
      set(newVal) {
        if (newVal !== val) {
          console.log('set', key);
          // 防止newVal是对象，提前做一次observe
          observe(newVal)
          val = newVal
        }
      }
    })
  }
  function Proxy(vm){
      Object.keys(vm.$data).forEach(key=>{
        Object.defineProperty(vm, key, {
            get() {
              
              return vm.$data[key]
            },
            set(newVal) {
                vm.$data[key]=newVal
            }
          })
      })
  }
  
  function observe(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return
    }
  
    new Observe(obj)
  }

  class Observe{
      constructor(value){
          this.value=value
          if(Array.isArray(value)){

          }else{
              this.walk(value)
          }
      }
      walk(obj){
          Object.keys(obj).forEach(key=>defineReactive(obj, key, obj[key]))
      }
  }
  class Bianyi{
      constructor(dom,vm){
          this.$dom=document.querySelector(dom)
          this.$vm=vm
          this.bianyi(this.$dom)
      }
      bianyi(dom){
          
          dom.childNodes.forEach(node=>{
              //1.元素节点  2属性  3文本内容  8注释
            //   console.log(node.node)
            // console.log(node)
              if(node.nodeType==1){
                  console.log(node.nodeName)
                  this.bianElement(node)
              }else if(this.isInter(node)){
                  console.log('文本节点',node.textContent)
                  this.bianyiText(node)
                  // node.textContent=this.$vm[RegExp.$1]
              }
              //遍历孩子节点
              if(node.childNodes){
                this.bianyi(node)
              }
          })
      }
      bianElement(node){
        const attrs = node.attributes
        console.log(Array.from(attrs))
        Array.from(attrs).forEach(attr=>{
          let {name,value}=attr
          if(name.indexOf('cy-')==0){
            let dir=name.slice(3,)
            this.update(node,value,dir)
            // this[dir] && this[dir](node,value)
          }
        })
      }
      textUpdate=(node,value)=>{
        console.log(this)
        node.textContent=value
        console.log(value)
      }
      htmlUpdate=(node,value)=>{
       
        node.innerHTML=value
      }
      update(node,value,dir){
        const fn=this[dir+'Update']
        console.log(fn)
        fn && fn(node,this.$vm[value])
        // new Watcher(this.$vm,value,)
      }
      bianyiText(node){
        // console.log()
        node.textContent=this.$vm[node.textContent.slice(2,-2)]
      }
      isInter(node){
          return node.nodeType==3 && /\{\{.*\}\}/.test(node.textContent)
      }
  }
  class Watcher{
    // vm是KVue实例
    // key是data中对应的key名称
    // fn是更新函数，他知道怎么更新dom
    constructor(vm,key,fn){
      this.vm = vm
      this.key = key
      this.fn = fn
    }
    update(){
      this.fn.call(this.vm,this.vm[this.key])
    }
  }