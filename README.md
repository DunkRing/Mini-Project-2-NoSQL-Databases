# Mini-Project-2-NoSQL-Databases
  
**Introduction**: In this project we want to examien multiple NoSQL databse and we the tow different database we have chosen is: Neo4j and MongoDB

**Problem statement**: What are some of the key difference of MongoDB and Neo4J regarding storage, populate data, fetching data?

***A short description of the two dabase:***

-  **MongoDB** - MongoDB are an database that are based on storing a collection of documents, with each of these documents consisting of an key/value attribute. three keywords that the internet seems to use to describe MongoDB is: good performance, high availability and scalability.

-  **Neo4J** - Neo4j is a grapth database, designed to treat the relationshipts between data as equally important to the data itself. It is intended to hold data without constricting it to a pre defined model.

## Preparing a large data source and loading it into both databases

As we said eariler, we want to see how fast each of the databases could be populated, which is import if you a to populate a lot of data frequently.

To have some data to work with, we decided to download a CVS file containing 19782 data samples. [Datasheet Download, click here...](https://www.stats.govt.nz/assets/Uploads/New-Zealand-cohort-life-tables/New-Zealand-cohort-life-tables-March-2020-update/Download-data/complete-cohort-life-tables-1876-2018.csv)

### MongoDB
[Code for MongoDB populate](https://github.com/DunkRing/Mini-Project-2-NoSQL-Databases/blob/master/MongoDB/populateMongoDB.js)
```
Data.collection.insert(allDataElement, function (err, docs) {
	if (err){
		return  console.error(err);
	} else {
		console.log("Multiple documents of data inserted to data Collection");
	}
});
```

### Neo4j populations code
[Code for Neo4j populate](https://github.com/DunkRing/Mini-Project-2-NoSQL-Databases/blob/master/Neo4j/populateNeo4j.js)

```
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
```

## Selecting relevant database operations, which can be used to compare the databases

**Population time**

|MongoDB|Neo4j  |
|--|--|
| 327 ms | 227 sec |

> Pictures of population time can be found [here...](https://github.com/DunkRing/Mini-Project-2-NoSQL-Databases/tree/master/img)
  
**Insert single elements**
A average result of 500 tries. 
| MongoDB|Neo4j   |
|--|--|
| less than 1ms | 18.3 ms |

> Pictures of experiment be found [here...](https://github.com/DunkRing/Mini-Project-2-NoSQL-Databases/tree/master/img)
  
**How much space does the two database consume**

| MongoDB|Neo4j   |
|--|--|
| 8.3 MB | 246 MB |

**Selecet all elements from db**
| MongoDB|Neo4j   |
|--|--|
| 4766 ms | ~~234 ms~~ |

> **We are not happy with the result of this experiment, we surely know that something went wrong, Neo4j should be way slowlier.** 

**Neo4j**
**MongoDB**
**How easy is it to setup**
**Neo4j**
very intuitive and easy to use GUI with alot of help, with error syntax and error handling.
**MongoDB**
## 3. reporting the results and conclusions

Scaling? how can they work together? more in depth with pros and cons?
