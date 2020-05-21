
# Mini-Project-2-NoSQL-Databases



**Introduction**: In this project we want to examien multiple NoSQL databse and we the tow different database we have chosen is: Neo4j and MongoDB 

**Problem statement**: What are some of the key difference of MongoDB and Neo4J regarding storage, populate data, fetching data? 

***A short description of the two dabase:***
 - **MongoDB** - MongoDB are an database that are based on storing a collection of documents, with each of these documents consisting of an key/value attribute. three keywords that the internet seems to use to describe MongoDB is: good performance, high availability and scalability.

- **Neo4J** - Neo4j is a grapth database, designed to treat the relationshipts between data as equally important to the data itself. It is intended to hold data without constricting it to a pre defined model.

## 1.preparing a large data source and loading it into both databases
As we said eariler, we want to see how fast each of the databases  could be populated, which is import if you a to populate a lot of data frequently.

To have some data to play around with, we decided to download a CVS file containing 36.634 insurence samples of growth. [Datasheet Download, click here...]([https://www.stats.govt.nz/assets/Uploads/New-Zealand-cohort-life-tables/New-Zealand-cohort-life-tables-March-2020-update/Download-data/complete-cohort-life-tables-1876-2018.csv](https://www.stats.govt.nz/assets/Uploads/New-Zealand-cohort-life-tables/New-Zealand-cohort-life-tables-March-2020-update/Download-data/complete-cohort-life-tables-1876-2018.csv))

### MongoDB 
![MongoDB populate](https://github.com/DunkRing/Mini-Project-2-NoSQL-Databases/blob/master/Images%20used%20in%20readme/Mongo%20populate%20code.JPG)

### Neo4j populations code 
![Neo4j populate code](https://github.com/DunkRing/Mini-Project-2-NoSQL-Databases/blob/master/Images%20used%20in%20readme/Neo4j%20populate%20code.JPG)


## 2. selecting relevant database operations, which can be used to compare the databases


**1.Population time**
- MongoDB population time
![mongoDB populate time](https://github.com/DunkRing/Mini-Project-2-NoSQL-Databases/blob/master/Images%20used%20in%20readme/MongoDb%20populate%20time.JPG)

- Neo4j population time 
![populate time neo4j](https://github.com/DunkRing/Mini-Project-2-NoSQL-Databases/blob/master/Images%20used%20in%20readme/Neo4j%20populate%20time.JPG)
    


**2. Insert single elements**
The code below show how we can insert one element of data i both database 

**Neo4j**

**MongoDB**


**3. How much space does the two database consume**

**Neo4j**

**MongoDB**



**4. Selecet all elements from db**

**Neo4j** 

**MongoDB** 


**5. How easy is it to setup**

**Neo4j**
very intuitive and easy to use GUI with alot of help, with error syntax and error handling.

**MongoDB**



## 3. reporting the results and conclusions
Based on our experiments with Neo4j and MongoDB can we conclude that if you have a very large data collection you will have to have alot space available since Neo4j takes up approximately 83 times as much space (because its stores nodes, properties, relationsship and relationsship property)
But on the other hand its more intuitive to use Neo4j since you get alot of help with errors and syntax.
personally we found it easier to import data into Neo4j contra MongoDB.

 - ![List item](https://github.com/DunkRing/Mini-Project-2-NoSQL-Databases/blob/master/img/ashjdsfhasdfhds.JPG)
 - ![List item](https://github.com/DunkRing/Mini-Project-2-NoSQL-Databases/blob/master/img/khdgjsdfa.JPG)
 
 
 
 
 
 
 
 Futher work
 Scaling? how can they work together? more in depth with pros and cons?
