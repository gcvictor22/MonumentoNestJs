-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 24-11-2022 a las 13:51:41
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `monumentos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `monumento`
--

CREATE TABLE `monumento` (
  `id` int(11) NOT NULL,
  `cod` text NOT NULL,
  `pais` text NOT NULL,
  `ciudad` text NOT NULL,
  `localizacion` text NOT NULL,
  `nombre` text NOT NULL,
  `descripcion` text NOT NULL,
  `imgUrl` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `monumento`
--

INSERT INTO `monumento` (`id`, `cod`, `pais`, `ciudad`, `localizacion`, `nombre`, `descripcion`, `imgUrl`) VALUES
(1, 'ESP', 'España', 'Sevilla', '37.3761301621,-5.99120936848', 'Torre del Oro', 'La Torre del Oro de Sevilla es una torre albarrana situada en el margen izquierdo del río Guadalquivir, en la ciudad de Sevilla, Andalucía, España de 1221.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjHHzZISQEgy3CsMnGABq1UhCLeMHUSP57hg&usqp=CAU'),
(2, 'BRA', 'Brasil', 'Rio de Janeiro', '-22.949888,-43.215119', 'Cristo Redentor', 'El Cristo Redentor o Cristo del Corcovado es una estatua art déco que representa a Jesús de Nazaret, con los brazos abiertos, mostrando a la ciudad de Río de Janeiro, Brasil.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ1DlGC0zEDhGIj3WZ7E7cD-5-M1dQk-SADQ&usqp=CAU'),
(3, 'USA', 'Estados Unidos de América', 'Nueva York', '19.314512,-99.112203', 'Estatua de la libertad', 'La Libertad iluminando el mundo, más conocida como la Estatua de la Libertad, es uno de los monumentos más famosos de Nueva York, de los Estados Unidos y de todo el mundo.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJFLZYMFigvW8Yo3c_Igq1WAVtH08Yf6kSg&usqp=CAU');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `monumento`
--
ALTER TABLE `monumento`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `monumento`
--
ALTER TABLE `monumento`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
