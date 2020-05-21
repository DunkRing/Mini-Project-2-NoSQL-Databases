// Require Neo4j
const neo4j = require('neo4j-driver');


// Create Driver
const driver = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "p455word"));

// Create Driver session
const session = driver.session();

// Run Cypher query
const cypher = 
`
LOAD CSV WITH HEADERS FROM \"file:///data.csv\" 
AS row MERGE (Data:Data {id:toInteger(row.id)}) 
SET 
Data.yearofbirth = toInteger(row.yearofbirth),
Data.sex = row.sex,
Data.age = toFloat(row.age),
Data.percentile = toFloat(row.percentile), 
Data.dx = toFloat(row.dx), 
Data.ex = toFloat(row.ex), 
Data.llx = toFloat(row.llx), 
Data.lx = toFloat(row.lx), 
Data.mx = toFloat(row.mx), 
Data.px = toFloat(row.px), 
Data.qx = toFloat(row.qx), 
Data.sx = toFloat(row.sx)    
`;

session.run(cypher)
    .then(result => {
        // On result, get count from first record
        const count = result.records[0].get('count');
        // Log response
        console.log( count.toNumber() );
    })
    .catch(e => {
        // Output the error
        console.log(e);
    })
    .then(() => {
        // Close the Session
        return session.close();
    })
    .then(() => {
        // Close the Driver
        return driver.close();
    });