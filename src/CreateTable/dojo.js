require([
    "dojo/store/Memory",
    "dojo/data/ObjectStore",
    "dojox/grid/DataGrid",
    "dojo/domReady!"
], function(Memory, ObjectStore, DataGrid){
    let data = [
        { abbr:'ec', name:'Ecuador', capital:'Quito' },
        /* array of data */
    ];
    let objectStore = new Memory({
        data: data
    });
    let grid = new DataGrid({
        store: ObjectStore({objectStore: objectStore}),
        structure: [
            {name:"Country", field:"name", width: "33%"},
            {name:"Abbreviation", field:"abbr", width: "33%"},
            {name:"Capital", field:"capital", width: "33%"}
        ]
    }, "grid");
    grid.startup();
});