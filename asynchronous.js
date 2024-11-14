// setTimeout(() => {
//     console.log(`This will log in 2 seconds`)
// }, 2000); //2000 means 2 seconds, 3000 means 3 seconds,


// function greet() {
//     console.log(`Hello from greet function`)
// }
// setTimeout(greet, 2000)

// //Another example
// setTimeout(() => {
//     console.log(`data fetched`)
// }, 2000)

// console.log(`data fetching`)

// setTimeout(() => {
//     console.log(`datas`)
// }, 4000)



// Another example
//Display this async in a web browser and not in console(use DOM to display it)
const sampleData = [
    {id: 1, name: 'item 1', description: 'Description for item 1'},
    {id: 2, name: 'item 2', description: 'Description for item 2'},
    {id: 3, name: 'item 3', description: 'Description for item 3'}
];

//Display this async in a web browser and not in console

async function fecthData() {
    console.log(`Fetching data ........`);

    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(sampleData)
            console.log(`data successfully fecthed`, sampleData)
        }, 4000);
    });
};

fecthData();

async function displayData() {
    const dataList = document.getElementById('data-list')
    try {
        const data = await fecthData()
        const listItems = data.map(item => `<li>${item.name}:${item.description}</li>`).join('');
        dataList.innerHTML = listItems;
    } catch (error) {
        console.log(error)
    }
};

displayData()