-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 15, 2021 at 11:00 AM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Cube_Forum`
--

-- --------------------------------------------------------

--
-- Table structure for table `AUTH_TOKEN`
--

CREATE TABLE `AUTH_TOKEN` (
  `sl` int(11) NOT NULL,
  `uid` int(11) DEFAULT NULL,
  `token` varchar(512) DEFAULT NULL,
  `period` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `AUTH_TOKEN`
--

INSERT INTO `AUTH_TOKEN` (`sl`, `uid`, `token`, `period`) VALUES
(1, 2, 'e8546c0a77cf2c52b349866203077568803618a009aabe36b84354378634ed2b', '2021-01-08 07:56:11'),
(2, 2, 'e8546c0a77cf2c52b349866203077568803618a009aabe36b84354378634ed2b', '2021-01-08 07:56:42'),
(3, 2, 'd09fdad2bdd6438cc41b5fccbf383cd3bd05a53625a30e56882707bb5fbb9544', '2021-01-08 08:22:24'),
(4, 2, 'dc1df85e292e0f2d5a2157ab401646a957d49bb8cb8d35cf894f77cfd210f03c', '2021-01-08 08:35:25'),
(5, 2, 'a20af816cec5971442a7baf2a0ab773bf949577d30a4df0cfc079c36fdc1bfab', '2021-01-08 08:40:10'),
(6, 2, '3efb6f2af1640bfd72b7d1e2986abc5820fd0d6ed1391dd5850b73cdaba1d2bb', '2021-01-08 08:42:39'),
(7, 2, '2c279008dbaabc6c33699205ecedb651bf0688151b1752cf18bfc36840f1485b', '2021-01-08 08:43:12'),
(8, 2, 'be032fd22f0855c2b36afe9d1dbaf516794fe4b7b36147ee15a2928ae7413bd6', '2021-01-08 10:29:09'),
(9, 2, 'a8354a86585619817a11c76e5891343089d8b0feb959048c850826891f82fe3e', '2021-01-08 10:33:58'),
(10, 2, '5450c1807705dc0f19b1bc465bf7515a459bf2d3777a8b90dfb41eef7e1e96ff', '2021-01-08 10:34:48'),
(11, 2, '4e47b8bcdda3ff6ecebb8baafe2a65257c3bac9b899b890729627cf00df5ea68', '2021-01-08 10:36:17'),
(12, 2, '6dd2727283e4279a20bfb3126267f5ef7b27aeb364be610c881632904f2d32a4', '2021-01-08 10:45:22'),
(13, 2, '7aa82a1a3bdcda0e254ba93156d8e6e1cdc22101cd3da72ed662f4e4c10a6eaf', '2021-01-08 10:48:17'),
(14, 2, '05166ac9bf8df06755e3870b1d07d071d47062a622759e15f81cdc1338f5aae5', '2021-01-08 10:53:31'),
(15, 2, '6a19230c9a01a5a65bda9537af47b74a380ddcf591b7d2e4509dab130254a67e', '2021-01-08 10:55:36'),
(16, 2, '7f7fd89c595e6940cc0d1c54ae2c84847318e4753e0777e46e7e478593a564ed', '2021-01-08 10:58:00'),
(17, 2, 'fa93de9c68cfb83a0d9bf8e6c1fb52c1e6fb864c33923bb138d4b73a7edf3ea7', '2021-01-08 11:10:53'),
(18, 2, '9d428cd581553d0911f53f27b29005ce22fe387a5e694ab06267eb317616a361', '2021-01-08 11:13:17'),
(19, 2, 'a3d32263b1bf49c7e9473decac1eafedbf11e33c26c586f38941c694f8057367', '2021-01-08 11:17:46'),
(20, 2, '4541d083c7a9c9c7c60bf2ff3bf3bbf197f4375da38c417c85cd02f2f816535c', '2021-01-08 11:18:45'),
(21, 2, '25e2e7ac3f41cd9dce4871a71ac639f3461574a01edabf59ac42058405c99997', '2021-01-08 11:23:29'),
(22, 2, '8d3b64743ee093646a477b1e8121ad639b946a583496c3b6036fb8fdf3c28f2f', '2021-01-08 11:29:41'),
(23, 2, '534aa68fb4b8099ae91ee274cbd312c7a11c7e332ef4ce3af0212c01347ce140', '2021-01-08 11:31:12'),
(24, 2, 'fa6ca8076cf7b2521cebf2f66ef5262116aaa4b654e043d89c683964aadc9642', '2021-01-08 11:38:44'),
(25, 2, '67bb5d68b21ad25c4f00d1a5bd2f257bdbf5c44179c1c0f46e301c1dfab3e26d', '2021-01-08 11:39:16'),
(26, 2, '8ba558e4645b7a2410f33cc5a7a8adfb0e3f7b3d8be3a916f8264c5640dfddfb', '2021-01-08 11:43:06'),
(27, 2, 'd51bceda9fcf1b44f470f821922a9cc78fb762fa2405ba8a5ce00875a80bd615', '2021-01-08 11:49:48'),
(28, 2, 'be8f686b62a7602c24056b12cafb3611ee682fd5028852774d8a3363ac4764be', '2021-01-08 12:02:35'),
(29, 2, '6d2c057099141da05d72a68618dadde6a5904d4b107bcf0a68d739a930070ae4', '2021-01-08 12:09:33'),
(30, 2, '73074961aee6c0d778a3f4ee3cc498386f56f7373226f1c1329ed4c9369f4009', '2021-01-08 12:13:06'),
(31, 2, '9333f222ad50555d4245d8b22a226797aa4ba29b6de6c1aa0b3b1117ad9f959d', '2021-01-08 12:15:27'),
(32, 2, '2243174272332c5a6eed077c86c299003ea4a6982888bfc2b6b107f8eef8eb7f', '2021-01-08 12:25:50'),
(33, 2, '4c72dde180942e5b08b847e448fa3ca368b1a85b04a020f6e2662a5869cf4442', '2021-01-08 12:26:26'),
(34, 2, 'dfa54b7b8d71d281a59fc79818c4a20cac4291ab6682946a92024ae27b16e9b6', '2021-01-08 12:26:59'),
(35, 2, '57bb16675b2bb07408498db4e39d30272777cacbcf6e065c9e9b4df81ee2c66f', '2021-01-08 12:29:14'),
(36, 2, '4779d83ac0b0a59bcf5297e2ba948c97f8f32880d2e068dc923f3ce639ac199a', '2021-01-08 12:30:22'),
(37, 2, '3ec0e39987b0bd458817c69074a27839c34591d82c7095a1ba9656382b6069d6', '2021-01-08 12:34:42'),
(38, 2, '4cf69a46fd95b00d0ad1873d38671d765ba4e423fdab192f084bb9ab18dc209c', '2021-01-08 12:43:02'),
(39, 2, 'ee029f985debf36201ff574227e761d9eb52b289adeada4a256ea60d43fdabe0', '2021-01-08 12:43:59'),
(40, 2, '0b61996a0423164dde5267ad004b26c26ac45fe5e53b4026d3d726b258bf7ebf', '2021-01-08 12:44:43'),
(41, 2, '9244653cf85d2f7da6a5d2709a894c92283c9e7cce1b1c66bdd52e69a1070f4d', '2021-01-08 12:45:26'),
(42, 2, 'ab9d9d5cf272cc9a05a5f1597a3a4b6b1746f8125af12770dcfe0e8f86869918', '2021-01-08 17:17:41'),
(43, 2, '791cba0cf330b7742d9cf8e0afdbcead449f1b373d0288650a91c21b9d05f87b', '2021-01-08 17:21:54'),
(44, 2, 'aa575fe91c4e9f5e11fccba9bf55d16ef594d45b3ddaf67b874c1947b9256a4d', '2021-01-08 17:22:39'),
(45, 2, 'aefaba9683368808b0e4bd59d43d7f8a781169e9438fa723f84fdc9336547e39', '2021-01-08 17:40:37'),
(46, 2, '0da9ebdea1a9ed6d5bbd6dcd6f191fad0f9c0f9a126dcf4253fd8ccb8699c301', '2021-01-08 17:48:10'),
(47, 2, '05dceb8e14443fb7ce27a27bd31fa4d5df478c8e6e5f239d20b3be552254ad42', '2021-01-08 17:49:07'),
(48, 2, '7a9d9647dd9a39630450228ec042e1e0e1ee7a8a0dadc06556a615b94816544a', '2021-01-08 17:49:29'),
(49, 2, '11e53df96f77f9c8b077029217ebbae76ce5657e59d4e02d3500095878dd048d', '2021-01-09 13:51:29'),
(50, 2, '565845fd4dd9b5576722b29a2d2facbfcfed7adb506f68815dfc8e9392aa63b3', '2021-01-12 06:07:18'),
(51, 2, 'bac0b22e875683953d52fa0e8fdcc368a0808093b21006c2f3792a938338e296', '2021-01-12 09:37:57'),
(52, 2, '08e59077e39e6662c1ed143dd3bd9b9d9054cb45f65ecc18015b0752264de988', '2021-01-12 11:50:29'),
(53, 2, 'cdda747f273b40641f99a15be0655f54e57670bcdc340a2eb2efaded85dea556', '2021-01-13 07:32:18'),
(54, 2, '808dd5b2c9312f1e96d28e7a81b18d21f96b537ad3e90f9159144fe00cfae7ea', '2021-01-13 07:36:32'),
(55, 2, 'ecbe2453880223b997eaf975cc50302c51a3b5f9a817f279da88a88c47e6e950', '2021-01-13 07:37:17'),
(56, 2, '9692d532e32ac1f4740f540b0943c56bbe724e1ea8f18495fcf8baf8a232b0e6', '2021-01-13 07:38:11'),
(57, 2, 'ebf9cb064159273dd4eb4abf710628832eff27ab411b665524b163b1836bcd81', '2021-01-13 08:39:09'),
(58, 2, '45cd5d17f277826e1c2d2d1b0a3b4d8fd1d82ca9e8112627ee45a83021533a02', '2021-01-13 08:46:16'),
(59, 2, '210e7f4eeac80433351404c523416e57afeaba3456375ca9b4629c52998e0df5', '2021-01-13 08:48:48'),
(60, 26, '764e0bdf0f3e2202e8110d3188a6b6a9f6c593e1340a7b2b8c56f72300d55347', '2021-01-13 09:06:55'),
(61, 2, 'c3aac43e778ea65f37e32595884a124cc0d4e5f9e31d1bebc87db54de4cac0d6', '2021-01-13 09:07:27'),
(62, 26, '9a23d53065128e84d9397fb0f3f763149a0c3aa8155650cbf4503481d0838f33', '2021-01-13 09:09:07'),
(63, 2, '29d09b0a106e3b68c165afb2b59bc9dc301690dc7dfeb9d76e3d4842d975bbf9', '2021-01-13 09:16:34');

-- --------------------------------------------------------

--
-- Table structure for table `POSTS`
--

CREATE TABLE `POSTS` (
  `uid` int(11) DEFAULT NULL,
  `pid` int(11) NOT NULL,
  `ptitle` varchar(1024) NOT NULL,
  `ptag` varchar(10) NOT NULL,
  `pcontent` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `POSTS`
--

INSERT INTO `POSTS` (`uid`, `pid`, `ptitle`, `ptag`, `pcontent`) VALUES
(2, 1, 'Post 1', 'c', '<p><strong>This is the content of post 1</strong></p>\n'),
(2, 2, 'Post 2', 'css', '<p>This is the content of Post 2</p>\n'),
(2, 3, 'Post 3', 'json', '<pre>This is the content of post 3</pre>\n'),
(2, 4, 'This is post 4', 'Swift', '<p>Hi</p>\n'),
(2, 5, '', '', '<p><ins>Hi, this is forum 1</ins></p>\n'),
(2, 6, 'Post 2', 'JSON', '<p>This is the content of post 2</p>\n'),
(2, 7, 'Post 5', 'PHP', '<p>This is post 5</p>\n');

-- --------------------------------------------------------

--
-- Table structure for table `USER`
--

CREATE TABLE `USER` (
  `fName` varchar(256) NOT NULL,
  `lName` varchar(256) NOT NULL,
  `DOB` date NOT NULL,
  `email` varchar(512) NOT NULL,
  `password` varchar(512) NOT NULL,
  `phno` varchar(10) NOT NULL,
  `uid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `USER`
--

INSERT INTO `USER` (`fName`, `lName`, `DOB`, `email`, `password`, `phno`, `uid`) VALUES
('Chaaru', 'Manjuraj', '1998-10-27', 'mkchaaru@yahoo.com', 'd9c60d58d08b3e364a09575e243951d3', '9964581353', 2),
('Sharath ', 'Kumar', '1998-10-17', 'sharathkumarcg@gmail.com', '22d7fe8c185003c98f97e5d6ced420c7', '0987654321', 3),
('abcd', 'dafda', '2021-01-07', 'daf@dsfa.com', '25d55ad283aa400af464c76d713c07ad', '1234567890', 4),
('abcd', 'abcd', '2012-08-31', 'daf@dad.com', '25d55ad283aa400af464c76d713c07ad', '0987654321', 5),
('dfa', 'afd', '2021-01-07', 'da@dfa.com', '25d55ad283aa400af464c76d713c07ad', '0987654321', 6),
('dfa', 'afd', '2021-01-07', 'da@dfa.com', '25d55ad283aa400af464c76d713c07ad', '0987654321', 7),
('dfa', 'afd', '2021-01-07', 'da@dfa.com', '25d55ad283aa400af464c76d713c07ad', '0987654321', 8),
('dfa', 'afd', '2021-01-07', 'da@dfa.com', '25d55ad283aa400af464c76d713c07ad', '0987654321', 9),
('dfa', 'daf', '2021-01-14', 'daf@dfa.com', '22d7fe8c185003c98f97e5d6ced420c7', '0987654321', 10),
('dfa', 'daf', '2021-01-14', 'daf@dfa.com', '22d7fe8c185003c98f97e5d6ced420c7', '0987654321', 11),
('dfa', 'daf', '2021-01-14', 'daf@dfa.com', '22d7fe8c185003c98f97e5d6ced420c7', '0987654321', 12),
('dfa', 'daf', '2021-01-14', 'daf@dfa.com', '22d7fe8c185003c98f97e5d6ced420c7', '0987654321', 13),
('dfa', 'daf', '2021-01-14', 'daf@dfa.com', '22d7fe8c185003c98f97e5d6ced420c7', '0987654321', 14),
('dfa', 'daf', '2021-01-14', 'daf@dfa.com', '22d7fe8c185003c98f97e5d6ced420c7', '0987654321', 15),
('fa', 'dfa', '2021-01-20', 'df@fda.com', '22d7fe8c185003c98f97e5d6ced420c7', '0987654321', 16),
('dfa', 'daf', '2021-01-13', 'daf@dfa.com', '6eea9b7ef19179a06954edd0f6c05ceb', '0987654321', 17),
('dfa', 'da', '2021-01-06', 'daf@dfa.com', '6eea9b7ef19179a06954edd0f6c05ceb', '1234567890', 18),
('dfad', 'daf', '2021-01-15', 'da@dfa.com', 'e807f1fcf82d132f9bb018ca6738a19f', '0987654321', 19),
('adfa', 'daf', '2021-01-21', 'daf@dfa.com', '6eea9b7ef19179a06954edd0f6c05ceb', '0987654321', 20),
('dfa', 'daf', '2021-01-07', 'dasfd@dfadfa.com', 'e807f1fcf82d132f9bb018ca6738a19f', '0987654321', 21),
('affd', 'fadsfas', '2021-01-08', 'dad@dfa.com', '6eea9b7ef19179a06954edd0f6c05ceb', '1234567890', 22),
('dfaf', 'afd', '2021-01-19', 'afd@fa.com', 'e807f1fcf82d132f9bb018ca6738a19f', '1234567890', 23),
('daf', 'adf', '2021-01-14', 'asf@dfa.com', '9d780fff2f5e4d3909303b703bed7c42', '1234567890', 24),
('adfd', 'af', '1998-02-22', 'dfa@dfa.com', '25d55ad283aa400af464c76d713c07ad', '0987654321', 25),
('Captain', 'America', '1998-10-27', 'ca@g.com', '22d7fe8c185003c98f97e5d6ced420c7', '0987654321', 26);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `AUTH_TOKEN`
--
ALTER TABLE `AUTH_TOKEN`
  ADD PRIMARY KEY (`sl`);

--
-- Indexes for table `POSTS`
--
ALTER TABLE `POSTS`
  ADD PRIMARY KEY (`pid`),
  ADD KEY `uid` (`uid`);

--
-- Indexes for table `USER`
--
ALTER TABLE `USER`
  ADD PRIMARY KEY (`uid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `AUTH_TOKEN`
--
ALTER TABLE `AUTH_TOKEN`
  MODIFY `sl` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT for table `POSTS`
--
ALTER TABLE `POSTS`
  MODIFY `pid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `USER`
--
ALTER TABLE `USER`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `POSTS`
--
ALTER TABLE `POSTS`
  ADD CONSTRAINT `posts_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `USER` (`uid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
