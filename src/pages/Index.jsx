// Complete the Index page component here
// Use chakra-ui
import { Box, Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { FaArrowRight, FaGamepad } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" align="center" justify="center" h="100vh" p={4}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">
          Juego de la Serpiente de Nokia
        </Heading>
        <Text fontSize="xl">Revive el clásico juego de la serpiente en tu dispositivo moderno.</Text>
        <Box p={4} borderWidth="2px" borderRadius="lg">
          <Heading as="h2" size="lg">
            Objetivo del Proyecto
          </Heading>
          <Text mt={2}>Desarrollar una versión del clásico juego de la serpiente, inspirado en el icónico juego de Nokia, para su implementación en plataformas modernas.</Text>
        </Box>
        <Box p={4} borderWidth="2px" borderRadius="lg">
          <Heading as="h2" size="lg">
            Funcionalidades Principales
          </Heading>
          <VStack align="start" spacing={2}>
            <Text>• La serpiente se mueve en respuesta a entradas del usuario.</Text>
            <Text>• Crece al comer objetos y aumenta el puntaje del jugador.</Text>
            <Text>• El juego termina al chocar con sí misma o los bordes.</Text>
            <Text>• Aumento de velocidad y niveles para más dificultad.</Text>
          </VStack>
        </Box>
        <Box p={4} borderWidth="2px" borderRadius="lg">
          <Heading as="h2" size="lg">
            Requisitos Técnicos
          </Heading>
          <VStack align="start" spacing={2}>
            <Text>• Uso de JavaScript para juegos web.</Text>
            <Text>• Estructura de datos para la serpiente y objetos.</Text>
            <Text>• Gestión de lógica de juego y detección de colisiones.</Text>
            <Text>• Diseño de interfaz de usuario retro e intuitiva.</Text>
          </VStack>
        </Box>
        <Button rightIcon={<FaArrowRight />} colorScheme="teal" size="lg">
          Comenzar Juego <FaGamepad />
        </Button>
      </VStack>
    </Flex>
  );
};

export default Index;
