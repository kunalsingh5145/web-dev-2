const container = document.querryselector('.container')
const outer = document.querryselector('.outer')
const button = document.querryselector('.button')

container.addEventlistner('click',()=>{console.log('div')},true)
container.addEventlistner('click',()=>{console.log('outer')},true)
container.addEventlistner('click',()=>{console.log('button')},true)