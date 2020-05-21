// Require Neo4j
const neo4j = require('neo4j-driver');


// Create Driver
const driver = neo4j.driver("bolt://localhost:7687", neo4j.auth.basic("neo4j", "p455word"));

// Create Driver session
const session = driver.session();

const cypher = `
Match(n) RETURN n
`;

var t0 = Date.now()
session.run(cypher)
    .then(result => {
        // On result, get count from first record
        var t1 = Date.now()
        console.log("Select all elements time: " + (t1-t0) + " milliseconds.")
   
        // Log response
    
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