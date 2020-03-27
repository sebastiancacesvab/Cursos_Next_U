-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-03-2020 a las 15:26:26
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `test_next_u`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evento`
--

CREATE TABLE `evento` (
  `Id` int(10) NOT NULL,
  `Titulo` text NOT NULL,
  `FechaInicio` date NOT NULL,
  `HoraInicio` time DEFAULT NULL,
  `DiaCompleto` tinyint(1) NOT NULL,
  `FechaFinalizacion` date DEFAULT NULL,
  `HoraFinalizacion` time DEFAULT NULL,
  `IdUsuario` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `evento`
--

--INSERT INTO `evento` (`Id`, `Titulo`, `FechaInicio`, `HoraInicio`, `DiaCompleto`, `FechaFinalizacion`, `HoraFinalizacion`, `IdUsuario`) VALUES
--(7, 'nueo', '2020-03-20', '00:00:00', 0, '0000-00-00', '00:00:00', 100),
--(9, 'Prueba TT', '2020-03-12', '00:00:00', 0, '2020-03-13', '00:00:00', 100);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `Id` int(5) NOT NULL,
  `Username` varchar(50) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `Nombre` varchar(50) NOT NULL,
  `FechaNacimiento` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

--INSERT INTO `usuario` (`Id`, `Username`, `Password`, `Nombre`, `FechaNacimiento`) VALUES
--(100, 'prueba@prueba.com', '$2y$10$O5fOaw.obdeXzySOeX02p.IbWpoCxSmHR38iGpzr05dH0nHaF2fQa', 'Juan Pablo Gonzalez', '1990-01-01'),
--(200, 'prueba1@prueba.com', '$2y$10$2DKWD8j0kHerDSSdSbnBTuvHlulf9VrLmUpiNiTrWo5sTn0dFzRK.', 'Eiron Mendoza Puebla', '1990-01-01'),
--(300, 'prueba2@prueba.com', '$2y$10$RRt0wdR.GPcoXUxn5LdgReNdbGTJNTP3kxok8VmY3rmgFO.9EIPCO', 'Luciano Pino Pino', '1990-01-01');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `evento`
--
ALTER TABLE `evento`
  ADD PRIMARY KEY (`Id`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `evento`
--
ALTER TABLE `evento`
  MODIFY `Id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `Id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=301;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
