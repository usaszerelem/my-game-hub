import { Heading } from "@chakra-ui/react";
import { Text, Box } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../components/NavBar";

const ErrorPage = () => {
    const error = useRouteError();

    return (
        <>
            <NavBar />
            <Box padding={5}>
                <Heading>Sacre Bleu</Heading>
                <Text>
                    {isRouteErrorResponse(error)
                        ? "C'est quoi cette merde ?"
                        : "Un morceau de merde inattendu est tombé du ciel"}
                </Text>
            </Box>
        </>
    );
};

export default ErrorPage;
