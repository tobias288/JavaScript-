// The hard coded user raw files

const sampleData = [
    {id: 1, name: 'item 1', description: 'Description for item 1'},
    {id: 2, name: 'item 2', description: 'Description for item 2'},
    {id: 3, name: 'item 3', description: 'Description for item 3'}
];

async function fecthData() {
    console.log(`fectch Data .................loading`)

    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(sampleData)
            console.log(`Data successfully fecthed`, sampleData);
        },4000);
    });
};

fecthData()

async function displayData() {
    let dataList = document.getElementById('data-listed');

    try {
        let data = await fecthData();
        let listItems = data.map(item => `<li>${item.name}:${item.description}</li>`).join('');
        dataList.innerHTML = listItems;
    } catch (error) {
        console.log(error);
    };
};

displayData()