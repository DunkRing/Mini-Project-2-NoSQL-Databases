const neo4j = require('neo4j-driver'); // Require Neo4j
const driver = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "p455word")); // Create Driver
const session = driver.session(); // Create Driver session
// Run Cypher query
const cypher = `
CREATE (Data:Data)
SET 
Data.id = 999999999,
Data.yearofbirth = 1,
Data.sex = 'male',
Data.age = 241234.123,
Data.percentile = 5412.1, 
Data.dx = 0.452, 
Data.ex = 1, 
Data.llx = 4, 
Data.lx = 5212, 
Data.mx = 0, 
Data.px = 0.51231, 
Data.qx = 0.051231, 
Data.sx = 412
`;

var t0 = Date.now()
session.run(cypher)
    .then(result => {
        // log the time it took to populate neo4j database
        var t1 = Date.now()
        console.log("Populate data to MongoDB took " + (t1 - t0) + " milliseconds.")

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