/* 

MongoDb basic commands:
=====================================

to display present databases:
=> show dbs

------------------------------------------------

create new database:
use newDatabaseName
=> switched to db newDatabaseName //output will look like this on cmd

------------------------------------------------

create a new collection: (in new created db):
db.createCollection('collectionName')
< { ok : 1 }

------------------------------------------------

delete collection (drop)
db.collectionName.drop()

------------------------------------------------

delete database:
db.dropDatabase()

------------------------------------------------

use admin
>switched to db admin
admin>

==================================================================

//Interview Questions:

Q. what is MongoDB ?
=> MongoDB is a noSQL database
=> The data stored in a collection
=> Collection don't have row & columns
=> Data is sorted in the form of object.

Q. what is difference between SQL & MongoDB ?


*/