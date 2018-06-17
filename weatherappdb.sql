-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 07, 2018 at 06:42 AM
-- Server version: 10.1.30-MariaDB
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `weatherappdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `employee_info`
--

CREATE TABLE `employee_info` (
  `name` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `city` varchar(50) NOT NULL,
  `country` varchar(25) NOT NULL,
  `telephoneNo` varchar(10) NOT NULL,
  `role` varchar(25) NOT NULL,
  `email` varchar(30) NOT NULL,
  `location` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employee_info`
--

INSERT INTO `employee_info` (`name`, `address`, `city`, `country`, `telephoneNo`, `role`, `email`, `location`) VALUES
('', '', '', '', '', '', '', '0'),
('Michael Asphall', '20 Norman Terrace', 'Kingston', 'Jamaica', '1234567', 'Road Worker', 'miketech66@outlook.com', 'Kingston'),
('John Brown', 'Lot 752 Random Street', 'Montego bay', 'Jamaica', '7654321', 'Office Worker', 'johnbrown@outlook.com', 'Montego bay'),
('Jane Doe', 'Parchment Avenue', 'Kingston', 'Jamaica', '3217654', 'Office Worker', 'janedow@outlook.com', 'Kingston'),
('John Doe', 'Mobay Road', 'Montego bay', 'Jamaica', '7651234', 'Road Worker', 'johndoe@outlook.com', 'Montego bay');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
