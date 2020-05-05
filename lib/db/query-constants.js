module.exports = {

  // Product
  PRODUCT_CREATE_TABLE:'CREATE TABLE "DB2INST1"."PRODUCT" (' +
        'PRODUCT_ID VARCHAR(10) NOT NULL PRIMARY KEY,' +
        'PRODUCT_NAME VARCHAR(20) NOT NULL,'+
        'PRICE DECIMAL(12,6) NOT NULL,' +
        'RESTOCK_AMT INTEGER NOT NULL,'+
        'RESTOCK_INT VARCHAR(10))',
  PRODUCT_INSERT_TO_TABLE:'INSERT INTO "DB2INST1"."PRODUCT" (PRODUCT_ID,PRODUCT_NAME,PRICE, RESTOCK_AMT,RESTOCK_INT) VALUES (?,?,?,?,?)',

  // STORE
  STORE_CREATE_TABLE:'CREATE TABLE  "DB2INST1"."STORE" ('+
        'STORE_ID VARCHAR(10) NOT NULL PRIMARY KEY,'+
        'STORE_NAME VARCHAR(40) NOT NULL,'+
        'ADDRESS VARCHAR(40) NOT NULL,'+
        'CITY VARCHAR(20) NOT NULL,'+
        'STATE VARCHAR(2) NOT NULL,'+
        'ZIP INTEGER NOT NULL,'+
        'LAT DECIMAL(12,6) NOT NULL,'+
        'LONG DECIMAL(12,6) NOT NULL)'
  ,
    
  STORE_INSERT_TO_TABLE:'INSERT INTO "DB2INST1"."STORE" (STORE_ID,STORE_NAME,ADDRESS,CITY,STATE,ZIP,LAT,LONG) VALUES (?,?,?,?,?,?,?,?)',
    
  //STORE ORDER
  STORE_ORDER_CREATE_TABLE:'CREATE TABLE "DB2INST1"."STORE_ORDER" ('+
        'ORDER_ID VARCHAR(10) NOT NULL, '+
        'ORDER_DATE DATE NOT NULL, '+
        'STORE_ID VARCHAR(10) NOT NULL, '+
        'PRODUCT_ID VARCHAR(10) NOT NULL, '+
        'ITEM_PRICE DECIMAL(12,6) NOT NULL, '+
        'ORDER_SIZE INTEGER NOT NULL, '+
        'CONSTRAINT STRORDSTR FOREIGN KEY (STORE_ID) '+
                   'REFERENCES DB2INST1.STORE ON DELETE RESTRICT, '+
        'CONSTRAINT STRORDPRDID FOREIGN KEY (PRODUCT_ID) '+
                   'REFERENCES DB2INST1.PRODUCT ON DELETE RESTRICT)',
  STORE_ORDER_INSERT_TO_TABLE:'INSERT INTO "DB2INST1"."STORE_ORDER" (ORDER_ID,ORDER_DATE,STORE_ID,PRODUCT_ID,ITEM_PRICE,ORDER_SIZE) VALUES (?,?,?,?,?,?)',


  //Warehouse
  WAREHOUSE_CREATE_TABLE:'CREATE TABLE "DB2INST1"."PRODUCT_WAREHOUSE" ('+
        'WAREHOUSE_ID VARCHAR(10) NOT NULL, '+
        'PRODUCT_ID VARCHAR(10) NOT NULL, '+
        'ITEM_STOCK_DATE DATE NOT NULL, '+
        'QUANTITY INTEGER NOT NULL, '+
        'PRIMARY KEY(WAREHOUSE_ID,PRODUCT_ID), '+
        'CONSTRAINT WHSPRODPROD FOREIGN KEY (PRODUCT_ID) '+
                   'REFERENCES DB2INST1.PRODUCT ON DELETE RESTRICT)',
  WAREHOUSE_INSERT_TO_TABLE: 'INSERT INTO "DB2INST1"."PRODUCT_WAREHOUSE" (WAREHOUSE_ID,PRODUCT_ID,ITEM_STOCK_DATE,QUANTITY) VALUES (?,?,?,?)',


  SALES_CREATE_TABLE:'CREATE TABLE "DB2INST1"."SALES" ( '+
        'STORE_ID VARCHAR(10) NOT NULL, '+
        'PRODUCT_ID VARCHAR(10) NOT NULL, '+
        'SALE_DATE DATE NOT NULL, '+
        'AMOUNT DECIMAL(12,6) NOT NULL, '+
        'CONSTRAINT SLSSTOREIDSTORE FOREIGN KEY (STORE_ID) '+
                   'REFERENCES DB2INST1.STORE ON DELETE RESTRICT, '+
        'CONSTRAINT SLSPRODUCTIDPRODUCT FOREIGN KEY (PRODUCT_ID) '+
                   'REFERENCES DB2INST1.PRODUCT ON DELETE RESTRICT)',
  SALES_INSERT_TO_TABLE: 'INSERT INTO "DB2INST1"."SALES" (STORE_ID, PRODUCT_ID,SALE_DATE, AMOUNT) VALUES (?,?,?,?)',


  PRODUCT_REVIEWS_CREATE_TABLE : 'CREATE TABLE "DB2INST1"."PRODUCT_REVIEWS" ( '+
        'PRODUCT_ID VARCHAR(10) NOT NULL, '+
        'TIME DATE NOT NULL, '+
        'RATING SMALLINT NOT NULL, '+
        'SENTIMENT_SCORE DECIMAL(12,6) NOT NULL, '+
        'SENTIMENT_LABEL VARCHAR(8) NOT NULL, '+
        'SUMMARY VARCHAR(120), '+
        'CONSTRAINT RVWSPRODUCTIDPRODUCT FOREIGN KEY (PRODUCT_ID) '+
                   'REFERENCES DB2INST1.PRODUCT ON DELETE RESTRICT )',
  PRODUCT_REVIEWS_INSERT_TO_TABLE : 'INSERT INTO  "DB2INST1"."PRODUCT_REVIEWS" ("PRODUCT_ID","TIME","RATING","SENTIMENT_SCORE","SENTIMENT_LABEL","SUMMARY") VALUES(?, ?, ?, ?, ?, ?);',

  PRODUCT_KEYWORDS_CREATE_TABLE : 'CREATE TABLE "DB2INST1"."PRODUCT_KEYWORDS" ( '+
        'PRODUCT_ID VARCHAR(10) NOT NULL, '+
        'KEYWORD VARCHAR(40) NOT NULL, '+   
        'COUNT SMALLINT NOT NULL, '+     
        'CONSTRAINT RVWSPRODUCTIDPRODUCTKWD FOREIGN KEY (PRODUCT_ID) '+
                   'REFERENCES DB2INST1.PRODUCT ON DELETE RESTRICT )',
  PRODUCT_KEYWORDS_INSERT_TO_TABLE : 'INSERT INTO  "DB2INST1"."PRODUCT_KEYWORDS" ("PRODUCT_ID","KEYWORD","COUNT") VALUES(?, ?, ?);'
    
};