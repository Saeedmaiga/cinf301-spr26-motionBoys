function add(){
    console.log("the motion boys");
    setTimeout(()=>{
        console.log("last to execute")
    }, 0);
    Promise.resolve().then(()=>{
        console.log("the microtask with in the Web API ");
    });
    console.log("all the motion boys");
}

add();
