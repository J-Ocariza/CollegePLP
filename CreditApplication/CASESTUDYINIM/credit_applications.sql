-- MariaDB dump 10.19  Distrib 10.4.28-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: credit_applications
-- ------------------------------------------------------
-- Server version	10.4.28-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `applicant`
--

DROP TABLE IF EXISTS `applicant`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `applicant` (
  `APP_ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(40) NOT NULL,
  `Address` varchar(150) NOT NULL,
  `Phone_NO` varchar(11) NOT NULL,
  `Email_ADD` varchar(60) NOT NULL,
  `DOB` date NOT NULL,
  `SSN` varchar(12) NOT NULL,
  `HasFiledBankruptcy` enum('Yes','No') NOT NULL,
  `HasDefaultedOnCredit` enum('Yes','No') NOT NULL,
  `Date` date NOT NULL,
  PRIMARY KEY (`APP_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `applicant`
--

LOCK TABLES `applicant` WRITE;
/*!40000 ALTER TABLE `applicant` DISABLE KEYS */;
INSERT INTO `applicant` VALUES (1,'James Andrew','Ocariza','1880 Mesota st. villa Aurora  Makati  Palatiw  1600','09964654698','ocariza@gmail.com','1991-07-25','20-02361156-','No','Yes','2022-05-26'),(3,'Mark Andrie','Atienza','Blk 8 Lt 80 Cornelia st. villa Pasig  Pinagbuhatan 1602','09964654700','atienza@gmail.com','1999-03-21','20-12398556-','Yes','No','2023-01-28'),(4,'Christian Jull','Azarcon','21 Arizona st. Makati  Dinagpayong 1609','09964654701','azarcon@gmail.com','1999-12-28','20-02361897-','No','No','2013-04-29'),(5,'Pauline','Serapion','New york St. blk 9 lot 21 Pampanga Maybunagang araw 1605','09964654702','serapion@gmail.com','1990-02-18','20-0236896-1','Yes','No','2016-08-30');
/*!40000 ALTER TABLE `applicant` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `bank_info`
--

DROP TABLE IF EXISTS `bank_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `bank_info` (
  `APP_ID` int(10) unsigned DEFAULT NULL,
  `NAME_BANK` varchar(75) NOT NULL,
  `BNK_CNCT_PRSN` varchar(75) NOT NULL,
  `TEL_NO` varchar(15) NOT NULL,
  `crdt_amnt` decimal(38,2) NOT NULL,
  `ACNT_TYPE` enum('Checking','Savings') NOT NULL,
  KEY `APP_ID` (`APP_ID`),
  CONSTRAINT `bank_info_ibfk_1` FOREIGN KEY (`APP_ID`) REFERENCES `applicant` (`APP_ID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bank_info`
--

LOCK TABLES `bank_info` WRITE;
/*!40000 ALTER TABLE `bank_info` DISABLE KEYS */;
INSERT INTO `bank_info` VALUES (1,'Asia United Bank Corporation (AUB)','Andy Jassy','63 (2) 123-4567',77400.00,'Savings'),(3,'Bangkok Bank Public Company Limited','David Williams','63 (49) 345-678',35360.00,'Savings'),(4,'Bank of America','Mary Brown','63 (82) 456-789',111820.00,'Checking'),(5,'Bank of China','John Smith','63 (74) 567-890',22930.00,'Savings');
/*!40000 ALTER TABLE `bank_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employment_info`
--

DROP TABLE IF EXISTS `employment_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `employment_info` (
  `APP_ID` int(10) unsigned DEFAULT NULL,
  `PREV_COMP_NAME` varchar(75) DEFAULT NULL,
  `PREV_Position` varchar(75) DEFAULT NULL,
  `prev_monthly_slry` decimal(38,2) NOT NULL,
  `PREV_BSNS_ADD` varchar(100) DEFAULT NULL,
  `CUR_COMP_NAME` varchar(75) NOT NULL,
  `CUR_Position` varchar(75) NOT NULL,
  `cur_monthly_slry` decimal(38,2) NOT NULL,
  `CUR_BSNS_ADD` varchar(100) NOT NULL,
  KEY `APP_ID` (`APP_ID`),
  CONSTRAINT `employment_info_ibfk_1` FOREIGN KEY (`APP_ID`) REFERENCES `applicant` (`APP_ID`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employment_info`
--

LOCK TABLES `employment_info` WRITE;
/*!40000 ALTER TABLE `employment_info` DISABLE KEYS */;
INSERT INTO `employment_info` VALUES (1,'Apple Inc','Ortigas & Company Limited Partnership , Ortigas Ave., Pasig, ',75400.00,'Ortigas & Company Limited Partnership , Ortigas Ave., Pasig, ','ZALORA','Human Resources Manager',30400.00,'\"TI, Incorporated PEZA, Loakan Road	Baguio\"'),(3,'Microsoft Corporation','Human Resources Manager (HR Manager)',25360.00,'People Power Cooperative, 5 1st St, Pasig, ','Wipro','Marketing Manager',25360.00,'\"Globe Telecom, Incorporated	The Globe Tower, BGC 	Taguig City\"'),(4,'Meta Platforms','Marketing Manager',25820.00,'StraightArrow Corporation, Level 5 Silver City 1 Annex Ort.East, Pasig','StraightArrow Corporation','Marketing Manager',30820.00,'San Miguel Brewery, Incorporated	40 San Miguel Ave., Ort. CTR Mandaluyong'),(5,'Tesla','Marketing Manager',27930.00,'Aliw Broadcasting Corporation, F CityState CTR, 709 Shaw Blvd., Pasig','Aliw Broadcasting Corporation','Human Resources Manager',30930.00,'JT International, Incorporated Penthouse, BGC, Taguig City');
/*!40000 ALTER TABLE `employment_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reference_info`
--

DROP TABLE IF EXISTS `reference_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reference_info` (
  `REF_ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `APP_ID` int(10) unsigned DEFAULT NULL,
  `REF_NAME` varchar(75) NOT NULL,
  `REF_POS` varchar(75) NOT NULL,
  `REF_COM` varchar(75) NOT NULL,
  `REF_PHONE` varchar(11) NOT NULL,
  `REF_EMAIL` varchar(75) NOT NULL,
  PRIMARY KEY (`REF_ID`),
  KEY `APP_ID` (`APP_ID`),
  CONSTRAINT `reference_info_ibfk_1` FOREIGN KEY (`APP_ID`) REFERENCES `applicant` (`APP_ID`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reference_info`
--

LOCK TABLES `reference_info` WRITE;
/*!40000 ALTER TABLE `reference_info` DISABLE KEYS */;
INSERT INTO `reference_info` VALUES (2,1,'Maxin Medina','Wipro','Manager','09415001264','mabini@galil.com'),(4,3,'Kieth Samonte','Agent','Concentrix','09562934281','samonte@gmail.com'),(5,4,'Layla Binilad','Agent','Zalora','09921562145','binilad@glail.com'),(6,5,'Catriona white','Agent','Genpact','09815462325','white@gcail.com');
/*!40000 ALTER TABLE `reference_info` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-07 22:14:25
