//steps to generate json server
//1.import json server
const jsonServer=require('json-server')
//2.create our own server to run json file
const empServer=jsonServer.create()
//3.Generate a middleware to use in json server
const middleware=jsonServer.defaults()
//4.set up path for db.json
const router=jsonServer.router("db.json")
//5.set up port for server
const Port=3000
//use middleware and router in server 
empServer.use(middleware)
empServer.use(router)
//6.Server listen or run to request
empServer.listen(Port,()=>{
    console.log('Server started at port no:'+Port)
})
