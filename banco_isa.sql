-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 21/11/2023 às 01:47
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `banco_isa`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `contato`
--

CREATE TABLE `contato` (
  `Nome` varchar(40) NOT NULL,
  `Sobrenome` varchar(40) NOT NULL,
  `Email` varchar(40) NOT NULL,
  `Mensagem` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `contato`
--

INSERT INTO `contato` (`Nome`, `Sobrenome`, `Email`, `Mensagem`) VALUES
('', '', '', 'eu amei o atendimento, obrigada');

-- --------------------------------------------------------

--
-- Estrutura para tabela `depoimento`
--

CREATE TABLE `depoimento` (
  `Escreva sua experiencia` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `depoimento`
--

INSERT INTO `depoimento` (`Escreva sua experiencia`) VALUES
('Foi otimo, amei o atendimento');

-- --------------------------------------------------------

--
-- Estrutura para tabela `orçamento`
--

CREATE TABLE `orçamento` (
  `Nome` varchar(40) NOT NULL,
  `Sobrenome` varchar(40) NOT NULL,
  `Email` varchar(40) NOT NULL,
  `Telefone` varchar(40) NOT NULL,
  `Cidade` varchar(40) NOT NULL,
  `Estado` varchar(40) NOT NULL,
  `Data_agendamento` date NOT NULL,
  `Observações` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Despejando dados para a tabela `orçamento`
--

INSERT INTO `orçamento` (`Nome`, `Sobrenome`, `Email`, `Telefone`, `Cidade`, `Estado`, `Data_agendamento`, `Observações`) VALUES
('isadora', 'Siqueira', 'Siqueiraisadora@icloud.com', '49999028258', 'Chapecó', 'Santa catarina', '2023-11-25', 'Preciso de um ensaio fotografico');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
